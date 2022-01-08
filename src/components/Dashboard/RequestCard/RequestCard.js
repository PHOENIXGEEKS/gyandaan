import React from "react";

export default function RequestCard(props) {
    return (
      <div className="w-80 bg-white drop-shadow-md rounded-xl flex flex-col p-4 mr-8 mb-8">
        <div className="flex items-center space-x-4">
          <div
            id="reviewAvatar"
            className="flex justify-center items-center bg-gray-100 p-3 rounded-full text-sm text-black font-bold"
          >
            {props.avatar}
          </div>
          <div className="flex flex-col">
            <div className="text-md font-medium text-sm">{props.name}</div>
            <div className="text-gray-500 text-xs">{props.currentClass}</div>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div id="reviewCardContent" className="text-sm mt-4 mb-2">
            {props.query}
          </div>
        </div>
      </div>
    );
}