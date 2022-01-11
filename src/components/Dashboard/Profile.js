import React from 'react'
import DefaultAvatar from '../../images/dashboard_icons/avatar.png'

function Profile() {
    return (
        <div className="flex w-full">
            <img className='h-36 border-solid border-2 rounded-full' src={DefaultAvatar} alt="Default Avatar" />
            <div className="flex flex-col ml-10">
                <label className='m-2' htmlFor="name" >
                    <span className='text-base p-2'>
                        Name:
                    </span>
                    <input className='w-56 p-1 border-solid border-2 border-slate-500 bg-slate-200 rounded-lg disabled:opacity-75 border-0' type="text" name="name" id="name" placeholder='Name' disabled />
                </label>
                <label className='m-2' htmlFor="email">
                    <span className='text-base p-2'>
                        Email:
                    </span>
                    <input className='w-56 p-1 border-solid border-2 border-slate-500 bg-slate-200 rounded-lg disabled:opacity-75 border-0' type="email" name="email" id="email" placeholder='example@domain.com' disabled />
                </label>
                <label htmlFor="male" className='flex items-center p-2'>
                    <input type="radio" name="gender" id="male" value='Male' />
                    Male
                </label>
                <label htmlFor="female" className='flex items-center p-2'>
                    <input type="radio" name="gender" id="female" value='Female' />
                    Female
                </label>
            </div>
        </div>
    )
}

export default Profile
