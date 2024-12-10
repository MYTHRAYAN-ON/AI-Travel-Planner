import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Hotels(trip) {
  const [hotelPhotos, setHotelPhotos] = useState({}); // Store photo URLs keyed by hotel name

  useEffect(() => {
    const fetchHotelPhotos = async () => {
      if (trip?.trip?.tripData?.hotelOptions) {
        const updatedPhotos = {};

        await Promise.all(
          trip.trip.tripData.hotelOptions.map(async (hotel) => {
            try {
              // Call the Text Search API for each hotel
              const textSearchResponse = await fetch(
                `https://maps.gomaps.pro/maps/api/place/textsearch/json?query=${encodeURIComponent(
                  hotel.name
                )}&key=AlzaSyFqW51wbQCGT9rEj0Ycees_2TcA1niLQDs`
              );

              const textSearchData = await textSearchResponse.json();
              const photoReference =
                textSearchData.results?.[0]?.photos?.[0]?.photo_reference;

              if (photoReference) {
                // Construct the Photo API URL
                updatedPhotos[hotel.name] = `https://maps.gomaps.pro/maps/api/place/photo?photo_reference=${photoReference}&maxwidth=400&key=AlzaSyFqW51wbQCGT9rEj0Ycees_2TcA1niLQDs`;
              } else {
                updatedPhotos[hotel.name] = '/placeholder.jpg'; // Fallback to placeholder
              }
            } catch (error) {
              console.error('Error fetching hotel photo:', error);
              updatedPhotos[hotel.name] = '/placeholder.jpg'; // Handle errors gracefully
            }
          })
        );

        setHotelPhotos(updatedPhotos); // Update state with fetched photos
      }
    };

    fetchHotelPhotos();
  }, [trip?.trip?.tripData?.hotelOptions]);

  return (
    <div>
      <h2 className="text-3xl font-bold mt-5 mb-8 text-center text-gray-800">Hotel Recommendation</h2>

      <div className="mt-5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 h-full">
        {trip?.trip?.tripData?.hotelOptions?.map((hotel, index) => (
          <Link
            key={index}
            to={
              'https://www.google.com/maps/search/?api=1&query=' +
              encodeURIComponent(hotel?.name + ' ' + hotel?.address)
            }
            target="_blank"
          >
            <div className="border rounded-lg overflow-hidden hover:scale-105 transition-all cursor-pointer h-full max-h-full">
              {/* Dynamically fetched image */}
              <img
                src={hotelPhotos[hotel.name] || '/placeholder.jpg'}
                alt={hotel?.name || 'Hotel'}
                className="rounded-lg w-full h-40 object-cover"
              />
              <div className="p-2">
                <h3 className="text-lg font-semibold">{hotel?.name}</h3>
                <h4 className="text-md text-gray-600">{hotel?.description}</h4>
                <h4 className="text-md text-gray-600">📍 {hotel?.address}</h4>
                <h4 className="text-md text-gray-500">💵 {hotel?.price}</h4>
                <h4 className="text-sm text-gray-500">⭐ {hotel?.rating}</h4>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Hotels;
