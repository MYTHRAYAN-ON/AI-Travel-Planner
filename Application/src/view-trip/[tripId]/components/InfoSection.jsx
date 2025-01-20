import Footer from '@/components/custom/Footer';
import { Button } from '@/components/ui/button';
import React, { useState, useEffect } from 'react';
import { IoIosSend } from "react-icons/io";

function InfoSection({ trip }) {
  const [coverPhoto, setCoverPhoto] = useState('/placeholder.jpg'); // Default placeholder image

  // Function to fetch photo for the location
  useEffect(() => {
    const fetchLocationPhoto = async () => {
      if (trip?.userSelection?.location) {
        try {
          // Call the Text Search API with the location
          const textSearchResponse = await fetch(
            `https://maps.gomaps.pro/maps/api/place/textsearch/json?query=${encodeURIComponent(
              trip.userSelection.location
            )}&key=AlzaSyJtry_56mqgmBOERW22Nn-omfuLQdeiezJ`
          );

          const textSearchData = await textSearchResponse.json();
          console.log('Text Search API Response:', textSearchData); // Debug response

          const photoReference =
            textSearchData.results?.[0]?.photos?.[0]?.photo_reference;

          if (photoReference) {
            // Construct the Photo API URL
            const photoUrl = `https://maps.gomaps.pro/maps/api/place/photo?photo_reference=${photoReference}&maxwidth=800&key=AlzaSyJtry_56mqgmBOERW22Nn-omfuLQdeiezJ`;
            setCoverPhoto(photoUrl); // Update the cover photo
          }
        } catch (error) {
          console.error('Error fetching location photo:', error);
        }
      }
    };

    fetchLocationPhoto();
  }, [trip?.userSelection?.location]);

  return (
    <div className="bg-white rounded-xl overflow-hidden">
      {/* Cover Image */}
      <div className="w-full h-64 md:h-80 lg:h-96">
        <img
          src={coverPhoto}
          alt="cover"
          className="w-full h-full object-cover"
          onError={(e) => (e.target.src = '/placeholder.jpg')} // Fallback to placeholder on error
        />
      </div>

      {/* Location Details */}
      <div className="p-5 md:p-8">
        <div className="flex justify-between items-center flex-wrap gap-5">
          <div className="flex flex-col gap-2">
            <h2 className="font-bold text-2xl text-gray-800">
              {trip?.userSelection?.location}
            </h2>

            {/* Trip Details */}
            <div className="flex gap-3 flex-wrap">
              <span className="p-2 px-4 bg-gray-100 rounded-md text-gray-600 text-sm md:text-base">
                📅 {trip?.userSelection?.noOfDays} Day
              </span>
              <span className="p-2 px-4 bg-gray-100 rounded-md text-gray-600 text-sm md:text-base">
                💰 {trip?.userSelection?.budget} Budget
              </span>
              <span className="p-2 px-4 bg-gray-100 rounded-md text-gray-600 text-sm md:text-base">
                🥂 No.of Traveler: {trip?.userSelection?.traveler}
              </span>
            </div>
          </div>

          {/* Action Button */}
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700">
            <IoIosSend size={20} />
            <span>Send</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
