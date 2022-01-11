import React, { useState, useEffect } from 'react'
import ReviewCard from './ReviewCard/ReviewCard'
import RequestCard from './RequestCard/RequestCard'
import axios from 'axios';

export default function Dashboard() {
  const [reviews, setReviews] = useState([]);
  const [userRequests, setuserRequests] = useState([]);
  useEffect(() => {
    axios
      .get("https://60b90ac780400f00177b60f9.mockapi.io/reviews")
      .then((response) => setReviews(response.data))
      .catch(err => console.error(err))
  });

  useEffect(() => {
    axios
      .get("https://60b90ac780400f00177b60f9.mockapi.io/class-request")
      .then((response) => setuserRequests(response.data.slice(0, 4)))
      .catch((err) => console.error(err));
  });

  return (
    <div className="flex justify-between">
      <div className="flex flex-col">
        <div className="flex flex-wrap">
          {/* Left card */}

          <div className="h-48 w-80 bg-white drop-shadow-md rounded-xl mr-8 flex flex-col py-4 pl-8">
            <div className="bg-gray-100 flex justify-center items-center rounded-full w-8 h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <h1 className="my-4 text-sm">Total Number of Sessions Taken:</h1>
            <h1 className="text-7xl font-extrabold">69</h1>
          </div>

          {/* Right card */}

          <div className="h-48 w-80 bg-white drop-shadow-md rounded-xl flex flex-col py-4 pl-8">
            <div className="bg-gray-100 flex justify-center items-center rounded-full w-8 h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                />
              </svg>
            </div>
            <div className="my-4 text-sm">Total Number of Sessions Taken:</div>
            <h1 className="text-7xl font-extrabold">69</h1>
          </div>
        </div>
        <div>
          <h1 className="my-8 text-lg font-semibold">Recent Requests:</h1>
          <div className="flex flex-wrap">
            {userRequests.slice(0, 5).map((data) => {
              return (
                <RequestCard
                  avatar={data.avatar}
                  name={data.name}
                  currentClass={data.currentClass}
                  query={data.query}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Review Cards */}

      <div className="flex flex-col items-center space-y-4 ml-6 mb-10">
        {reviews.slice(0, 5).map((data) => {
          return (
            <ReviewCard
              avatar={data.avatar}
              name={data.name}
              currentClass={data.currentClass}
              review={data.review}
            />
          );
        })}
      </div>
    </div>
  );
}

