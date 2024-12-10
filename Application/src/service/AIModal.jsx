import {GoogleGenerativeAI} from "@google/generative-ai"
  
const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
  
const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
});
  
const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
};
  

export const chatSession = model.startChat({
    generationConfig,
    history: [
    {
        role: "user",
        parts: [
        {text: "Generate a detailed travel plan for the location {location} over {totalDays} days for {traveler} with a {budget} budget. Include a list of hotel options with the hotel name, address, price range, image URL, geo-coordinates, rating, and a brief description. Additionally, create a day-wise itinerary for {totalDays} days, detailing multiple places to visit on each day in the order they should be explored. For each place, provide the name, a description of the location, an image URL, geo-coordinates, ticket pricing (if applicable), timings, the best time to visit, and the approximate time required to explore the location. Also, include the mode of transportation and the travel time required to reach each place from the previous location as part of the details for that place. Organize the information in a structured JSON format with clear distinctions for each day and each place within the day, ensuring all travel and transportation details are embedded within each places data (Atleast five places for each day)."},
        ],
    },
    {
        role: "model",
        parts: [
        {text: "```json\n{\n  \"hotelOptions\": [\n    {\n      \"name\": \"The D Las Vegas\",\n      \"address\": \"301 Fremont Street, Las Vegas, NV 89101\",\n      \"price\": \"$50-$80 per night\",\n      \"imageUrl\": \"https://images.trvl-media.com/hotels/2000000/1993000/1992500/1992488/1992488_121_b.jpg\",\n      \"geoCoordinates\": \"36.1694, -115.1424\",\n      \"rating\": \"3.5 stars\",\n      \"description\": \"A budget-friendly hotel located in the heart of Fremont Street, with a casino, restaurants, and a rooftop pool.\"\n    },\n    {\n      \"name\": \"Circus Circus Hotel & Casino\",\n      \"address\": \"2880 Las Vegas Blvd S, Las Vegas, NV 89109\",\n      \"price\": \"$40-$60 per night\",\n      \"imageUrl\": \"https://images.trvl-media.com/hotels/2000000/1995000/1994300/1994235/1994235_14_b.jpg\",\n      \"geoCoordinates\": \"36.1193, -115.1743\",\n      \"rating\": \"3 stars\",\n      \"description\": \"A family-friendly hotel known for its circus-themed attractions, including the Adventuredome.\"\n    },\n    {\n      \"name\": \"Golden Nugget Hotel & Casino\",\n      \"address\": \"129 E Fremont St, Las Vegas, NV 89101\",\n      \"price\": \"$60-$90 per night\",\n      \"imageUrl\": \"https://images.trvl-media.com/hotels/2000000/1980000/1979700/1979663/1979663_107_b.jpg\",\n      \"geoCoordinates\": \"36.1682, -115.1420\",\n      \"rating\": \"4 stars\",\n      \"description\": \"A historic hotel on Fremont Street, known for its luxurious amenities, including a shark tank aquarium.\"\n    },\n    {\n      \"name\": \"Main Street Station Casino, Brewery & Hotel\",\n      \"address\": \"200 N Main St, Las Vegas, NV 89101\",\n      \"price\": \"$45-$70 per night\",\n      \"imageUrl\": \"https://images.trvl-media.com/hotels/2000000/1997000/1996500/1996452/1996452_54_b.jpg\",\n      \"geoCoordinates\": \"36.1689, -115.1402\",\n      \"rating\": \"3.5 stars\",\n      \"description\": \"A unique hotel with a train station theme, offering a brewery, casino, and a variety of dining options.\"\n    }\n  ],\n  \"itinerary\": {\n    \"day1\": {\n      \"name\": \"Fremont Street Experience\",\n      \"details\": \"Explore the vibrant atmosphere of Fremont Street, with its iconic canopy of lights, street performers, and casinos. Take a ride on SlotZilla zipline for an exhilarating experience.\",\n      \"imageUrl\": \"https://www.vegasexperience.com/media/uploads/freemont_street_experience_canopy.jpg\",\n      \"geoCoordinates\": \"36.1699, -115.1433\",\n      \"ticketPricing\": \"SlotZilla Zipline: $25-$35\",\n      \"rating\": \"4.5 stars\",\n      \"timeToTravel\": \"4 hours\",\n      \"bestTimeToVisit\": \"Evening for the lights and performances\"\n    },\n    \"day2\": {\n      \"name\": \"Red Rock Canyon National Conservation Area\",\n      \"details\": \"Escape the city buzz and enjoy scenic hiking trails, stunning rock formations, and breathtaking views at this nearby national park.\",\n      \"imageUrl\": \"https://www.nps.gov/redr/planyourvisit/images/RedRock-Panorama.jpg\",\n      \"geoCoordinates\": \"36.1978, -115.2615\",\n      \"ticketPricing\": \"Entrance Fee: $15 per vehicle\",\n      \"rating\": \"4.8 stars\",\n      \"timeToTravel\": \"5 hours\",\n      \"bestTimeToVisit\": \"Morning or late afternoon for cooler temperatures\"\n    },\n    \"day3\": {\n      \"name\": \"Bellagio Conservatory & Botanical Garden\",\n      \"details\": \"Admire the stunning floral displays and themed exhibitions at this world-renowned conservatory, located within the Bellagio Hotel and Casino.\",\n      \"imageUrl\": \"https://www.bellagio.com/content/dam/bellagio/images/hotel-and-casino/conservatory-and-botanical-garden/conservatory-2018-spring-5.jpg\",\n      \"geoCoordinates\": \"36.1140, -115.1721\",\n      \"ticketPricing\": \"Free\",\n      \"rating\": \"4.5 stars\",\n      \"timeToTravel\": \"2 hours\",\n      \"bestTimeToVisit\": \"Anytime, but especially during the day for the best lighting\"\n    }\n  }\n}\n```\n\n**Notes:**\n\n* This itinerary focuses on free or low-cost attractions, aiming for a budget-friendly experience. \n* Hotel prices are approximate and can vary based on the season and availability.\n* Transportation costs are not included in the budget, but public transportation or walking is recommended to save money.\n* You can customize the itinerary based on your interests and preferences.\n* Consider visiting local casinos for free shows and entertainment.\n* Take advantage of free attractions like the Bellagio Fountains and the High Roller Observation Wheel (if you're willing to spend a little).\n* For food, consider trying the local buffets or opting for cheaper dining options like food trucks.\n\n**Remember to always check the latest information and ticket prices before your trip.** \n"},
        ],
    },
    ],
});
  


