import {useState} from 'react'
export default function dashboard(props){

    return (
      <div className="w-full min-h-screen flex">
        <div className="w-1/4 bg-gray-50">
          {/* dashboard header */}
          <div id="dashboard_header" className="font-bold text-3xl ml-28 mb-24">
            <h1 className="my-6">gyandaan.</h1>
            <hr className="-ml-14 mr-14" />
          </div>
          {/* dashboard side menu */}
          <div id="dashboard_menu" className="flex flex-col ml-24 space-y-10">
            <button className="flex items-center bg-white p-4 rounded-l-xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-700 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <p className="text-gray-600 ml-4 text-md">Dashboard</p>
            </button>
            <button className="flex items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-700 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-gray-600 ml-4 text-md">Profile</p>
            </button>
            <button className="flex items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-700 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                />
              </svg>
              <p className="text-gray-600 ml-4 text-md">Preferences</p>
            </button>
            <button className="flex items-center p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-700 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p className="text-gray-600 ml-4 text-md">Settings</p>
            </button>
          </div>
        </div>

        {/* dashboard screen */}

        <div className="relative w-3/4 bg-white px-14">
          <div
            id="notification_icon"
            className=" bg-gray-50 rounded-full p-3 absolute right-14 top-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          </div>
          <hr className="mt-20" />
          <div id="dashboard_Sbody">
            <h1 className="my-6 text-2xl font-semibold">Dashboard</h1>
            <div className="flex flex-wrap space-x-10">
              <div className="h-48 w-80 bg-emerald-100 rounded-xl"> </div>
              <div className="h-48 w-80 bg-indigo-50 rounded-xl"> </div>
              <div className="h-48 w-80 bg-red-50 rounded-xl"> </div>
            </div>
          </div>
        </div>
      </div>
    );
}