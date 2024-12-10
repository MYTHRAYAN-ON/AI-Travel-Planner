import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import InfoSection from './components/InfoSection';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '@/service/firebaseConfig';
import Hotels from './components/Hotels';
import PlacesToVisit from './components/PlacesToVisit';
import Footer from '@/components/custom/Footer';
import Header from '@/components/custom/Header';


function ViewTrip() {
    
  const {tripId}=useParams();
  const [trip, setTrip] = useState([]);
  
  useEffect(()=>{
    tripId && GetTripData();

  },[tripId])
  
  const GetTripData=async()=>{
    const docRef=doc(db,'AITrips',tripId);
    const docSnap=await getDoc(docRef);

    if(docSnap.exists()){
        console.log("Document:",docSnap.data());
        setTrip(docSnap.data());
    }
    else{
        console.log("No such document!");
        toast('No Trip Found!!!');
    }

  }  
    
  return (
    <div className="p-5 md:p-10 lg:px-10 xl:px-10 space-y-10 bg-gray-50 min-h-screen">
      <Header/>
      {/* Information Section */}
      <div className="shadow-lg rounded-lg bg-white p-5">
        <InfoSection trip={trip} />
      </div>

      {/* Recommended Hotels */}
      {trip?.tripData?.hotelOptions?.length > 0 && (
        <div className="shadow-lg rounded-lg bg-white p-5">
          <Hotels trip={trip} />
        </div>
      )}

      {/* Daily Plan */}
      {trip?.tripData?.itinerary && (
        <div className="shadow-lg rounded-lg bg-white p-5">
          <PlacesToVisit trip={trip} />
        </div>
      )}
      <Footer/>

    </div>
  )
}

export default ViewTrip