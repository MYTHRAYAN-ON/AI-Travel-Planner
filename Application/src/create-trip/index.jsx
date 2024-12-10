import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { AI_PROMPT, selectBudgetOptions, SelectTravelesList } from '@/constants/options';
import { chatSession } from '@/service/AIModal';
import { db } from '@/service/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { toast, Toaster } from 'sonner';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/custom/Header';

function CreateTrip() {
  const [place, setPlace] = useState();
  const [formData, setFormData] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const apiKey = 'AlzaSyFqW51wbQCGT9rEj0Ycees_2TcA1niLQDs';
  const navigate = useNavigate();

  const handlePlaceChange = async (e) => {
    const value = e.target.value;
    setPlace(value);

    if (value.length > 2) {
      try {
        const response = await fetch(
          `https://maps.gomaps.pro/maps/api/place/queryautocomplete/json?input=${value}&key=${apiKey}`
        );
        const data = await response.json();

        if (data && data.predictions) {
          setSuggestions(data.predictions);
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error('Error fetching autocomplete suggestions:', error);
        setSuggestions([]);
      }
    } else {
      setSuggestions([]);
    }
  };

  const handleFormChange = (name, value) => {
    setFormData({ ...formData, [name]: value });
  };

  const onGenerateTrip = async () => {
    if (
      formData?.noOfDays > 10 &&
      (!formData?.location || !formData?.budget || !formData?.traveler)
    ) {
      toast('Check your trip days are less than 10 days and check you filled all the fields');
      return;
    }
    setLoading(true);
    const FINAL_PROMPT = AI_PROMPT.replace('{location}', formData?.location)
      .replace('{totalDays}', formData?.noOfDays)
      .replace('{traveler}', formData?.traveler)
      .replace('{budget}', formData?.budget)
      .replace('{totalDays}', formData?.noOfDays);

    const result = await chatSession.sendMessage(FINAL_PROMPT);

    console.log(result?.response?.text());
    setLoading(false);
    SaveAITrip(result?.response?.text());
  };

  const SaveAITrip = async (TripData) => {
    setLoading(true);
    const docId = Date.now().toString();

    await setDoc(doc(db, 'AITrips', docId), {
      userSelection: formData,
      tripData: JSON.parse(TripData),
      id: docId,
    });
    setLoading(false);
    navigate('/view-trip/' + docId);
  };

  useEffect(() => {}, [formData]);

  return (
    <div className="px-5 sm:px-10 md:px-20 lg:px-20 xl:px-20 mt-10 mb-10">
      <Header />

      <h2 className="font-bold text-2xl md:text-3xl text-center">
        Tell us your travel preferences 🏕️🏝️
      </h2>
      <p className="mt-3 text-gray-600 text-base md:text-lg text-center max-w-4xl mx-auto">
        Just provide some basic information and our trip planner will generate a customized
        itinerary based on your preferences.
      </p>

      <div className="mt-10 flex flex-col gap-10">
        <div>
          <h2 className="text-lg md:text-xl my-3">What is your destination of choice?</h2>
          <div>
            <Input
              type="text"
              value={place}
              onChange={handlePlaceChange}
              placeholder="Enter a location"
              className="w-full md:w-1/2"
            />
            <div className="mt-1 rounded bg-white w-full md:w-1/2 shadow-md">
              {suggestions.map((suggestion, index) => (
                <div
                  key={index}
                  onClick={() => {
                    setPlace(suggestion.description);
                    handleFormChange('location', suggestion.description);
                    setSuggestions([]);
                  }}
                  className="p-2 cursor-pointer hover:bg-gray-200"
                >
                  {suggestion.description}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-lg md:text-xl my-3">
            How many days are you planning your trip? (Less than 10 days)
          </h2>
          <Input
            placeholder="Ex. 3"
            type="number"
            className="w-full md:w-1/2"
            onChange={(e) => handleFormChange('noOfDays', e.target.value)}
          />
        </div>

        <div>
          <h2 className="text-lg md:text-xl my-3">What is your Budget?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {selectBudgetOptions.map((item, index) => (
              <div
                key={index}
                onClick={() => handleFormChange('budget', item.title)}
                className={`p-4 border rounded-lg cursor-pointer hover:shadow-lg ${
                  formData?.budget == item.title && 'shadow-lg border-black'
                }`}
              >
                <h2 className="text-4xl">{item.icon}</h2>
                <h2 className="font-bold text-lg text-gray-800">{item.title}</h2>
                <h2 className="text-md text-gray-600">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg md:text-xl my-3">Who will you travel with?</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {SelectTravelesList.map((item, index) => (
              <div
                key={index}
                onClick={() => handleFormChange('traveler', item.people)}
                className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer hover:shadow-lg ${
                  formData?.traveler == item.people && 'shadow-lg border-black'
                }`}
              >
                <img src={item.icon} alt={item.title} className=" w-28 h-28 sm:w-32 sm:h-32 lg:w-36 lg:h-36 bg-gray-100 rounded-full" />
                <h2 className="font-bold text-lg text-gray-800 mt-3">{item.title}</h2>
                <h2 className="text-md text-gray-600">{item.desc}</h2>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="my-10 flex justify-center">
        <button
          type="submit"
          disabled={loading} onClick={onGenerateTrip}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="h-7 w-7 animate-spin" />
          ) : (
            'Generate Trip'
          )}
        </button>
      </div>
    </div>
  );
}

export default CreateTrip;
