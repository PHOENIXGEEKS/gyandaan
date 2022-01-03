import React from 'react'

function Settings() {
    return (
      <div className="">
        <div className="flex flex-wrap space-x-10">
          <form className="flex flex-col">
            <div className="flex flex-col space-y-4">
              <label htmlFor="conPassword" value="">
                Old Password:
              </label>
              <input
                type="password"
                required
                name="conPassword"
                className="shadow-lg rounded-full px-4 py-2 w-80 border border-grey"
                placeholder="Confirm Password"
              />
              <label htmlFor="conPassword" value="">
                New Password:
              </label>
              <input
                type="password"
                required
                name="conPassword"
                className="shadow-lg rounded-full px-4 py-2 w-80 border border-grey"
                placeholder="Confirm Password"
              />
              <label htmlFor="conPassword" value="">
                Confirm New Password:
              </label>
              <input
                type="password"
                required
                name="conPassword"
                className="shadow-lg rounded-full px-4 py-2 w-80 border border-grey"
                placeholder="Confirm Password"
              />
              <i className="mt-10"></i>
              <button
                type="submit"
                className="flex flex-row bg-primary-red w-52 rounded-full px-8 py-2 text-white border-2 border-red-500 block mb-4"
              >
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default Settings
