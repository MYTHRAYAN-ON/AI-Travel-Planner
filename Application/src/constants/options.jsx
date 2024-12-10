export const SelectTravelesList=[
    {
        id:1,
        title:'Just Me',
        desc:'A sole traveles in exploration',
        icon:'/images/solo.png',
        people:'1 person'
    },
    {
        id:2,
        title:'A Couple',
        desc:'Two traveles in tandem',
        icon:'/images/couple.png',
        people:'2 People'
    },
    {
        id:3,
        title:'Family',
        desc:'A group of fun loving adv',
        icon:'/images/family.jpg',
        people:'3 to 5 People'
    },
    {
        id:4,
        title:'Friends',
        desc:'A bunch of thrill-seekers',
        icon:'/images/friends.jpg',
        people:'5 to 10 People'
    },

]


export const selectBudgetOptions=[
    {
        id:1,
        title:'Cheap',
        desc:'Stay conscious of costs',
        icon:'💵',
    },
    {
        id:2,
        title:'Mid-Range',
        desc:'Keep cost on the average side',
        icon:'💰',
    },
    {
        id:3,
        title:'Luxury',
        desc:'Go all out',
        icon:'💸',
    }
]

export const AI_PROMPT='Generate a detailed travel plan for the location {location} over {totalDays} days for {traveler} with a {budget} budget. Include a list of hotel options with the hotel name, address, price range, image URL, geo-coordinates, rating, and a brief description. Additionally, create a day-wise itinerary for {totalDays} days, detailing multiple places to visit on each day in the order they should be explored. For each place, provide the name, a description of the location, an image URL, geo-coordinates, ticket pricing (if applicable), timings, the best time to visit, and the approximate time required to explore the location. Also, include the mode of transportation and the travel time required to reach each place from the previous location as part of the details for that place. Organize the information in a structured JSON format with clear distinctions for each day and each place within the day, ensuring all travel and transportation details are embedded within each places data (Atleast five places for each day).';