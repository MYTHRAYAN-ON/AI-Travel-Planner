import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PlaceCardItem({ place }) {
  const [photoUrl, setPhotoUrl] = useState('/placeholder.jpg'); // Default placeholder

  useEffect(() => {
    const fetchPhotoReference = async () => {
      try {
        // Call the Text Search API to get the 'photo_reference'
        const textSearchResponse = await fetch(
          `https://maps.gomaps.pro/maps/api/place/textsearch/json?query=${encodeURIComponent(
            place.name
          )}&key=AlzaSy8-8qoDtDuBJLb891NTWMf2lsfSI9n701W`
        );

        const textSearchData = await textSearchResponse.json();

        const photoReference =
          textSearchData.results?.[0]?.photos?.[0]?.photo_reference;

        if (photoReference) {
          // Construct the Photo API URL
          const photoApiUrl = `https://maps.gomaps.pro/maps/api/place/photo?photo_reference=${photoReference}&maxwidth=400&key=AlzaSy8-8qoDtDuBJLb891NTWMf2lsfSI9n701W`;
          setPhotoUrl(photoApiUrl);
        }
      } catch (error) {
        console.error('Error fetching photo:', error);
      }
    };

    fetchPhotoReference();
  }, [place.name]); // Dependency on place name

  return (
    <Link
      to={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        place.name
      )}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="border rounded-xl shadow-md p-4 flex flex-col items-start bg-white transition-transform transform hover:scale-105 hover:shadow-lg">
        {/* Dynamically fetched image */}
        <img
          src={photoUrl}
          alt={place.name}
          className="w-full h-48 object-cover rounded-t-xl mb-4"
        />
        <div className="flex flex-col gap-2 w-full">
          <h2 className="text-lg font-bold text-gray-800 truncate">{place.name}</h2>
          <p className="text-sm text-gray-600 line-clamp-2">{place.description}</p>
          <p className="text-sm font-semibold text-gray-600">
            Best Time to Visit: {place.bestTimeToVisit}
          </p>
          <p className="text-sm font-semibold text-orange-600">Timings: {place.timings}</p>
          <p className="text-sm font-semibold text-gray-600">
            Time Required: {place.timeRequired}
          </p>
          <div className="mt-4 w-full">
            <h1 className="text-xl font-bold mb-2 text-gray-700">Travel Details:</h1>
            <p className="text-sm font-semibold text-gray-600">
              Mode of Transportation: {place.transportation}
            </p>
            <p className="text-sm font-semibold text-gray-600">
              Travel Time to Next Place: {place.travelTime}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default PlaceCardItem;
