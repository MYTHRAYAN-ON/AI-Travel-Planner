import React from 'react';
import PlaceCardItem from './PlaceCardItem';

function PlacesToVisit(trip) {
  const itinerary = trip?.trip?.tripData?.itinerary;

  return (
    <div className="px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mt-5 mb-8 text-center text-gray-800">Places To Visit</h2>
      <div>
        {itinerary &&
          Object.keys(itinerary)
            .sort((a, b) => {
              const numA = parseInt(a.replace("day", ""), 10);
              const numB = parseInt(b.replace("day", ""), 10);
              return numA - numB;
            })
            .map((day, index) => (
              <div key={index} className="mt-10">
                {/* Render the day heading */}
                <h2 className="text-2xl font-semibold mb-5 text-gray-700">
                  {day.charAt(0).toUpperCase() + day.slice(1)}
                </h2>

                {/* Render the places and travel details for each day */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {itinerary[day]?.map((place, placeIndex) => (
                    <div key={placeIndex}>
                      <PlaceCardItem place={place} />
                    </div>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}

export default PlacesToVisit;
