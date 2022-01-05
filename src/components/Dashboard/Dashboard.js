import React from 'react'
import ReviewCard from './ReviewCard/ReviewCard'

function Dashboard() {
    return (
      <div>
        <div className="flex flex-wrap space-x-10">
          <div className="h-48 w-80 bg-emerald-100 rounded-xl"> </div>
          <div className="h-48 w-80 bg-indigo-50 rounded-xl"> </div>
          <div className="h-48 w-80 bg-red-50 rounded-xl"> </div>
          <ReviewCard
            avatar="MS"
            name="Mayur Samrutwar"
            currentClass="Class 10"
            review="MAAZ is one best teacher I have ever seen. He's huge fan of Himadri though."
          />
        </div>
      </div>
    );
}

export default Dashboard
