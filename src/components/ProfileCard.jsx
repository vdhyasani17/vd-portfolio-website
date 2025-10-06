import React from 'react'

const ProfileCard = () => {
    return (
        <div className='relative'>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(234,179,8,0.08),rgba(15,23,42,0.7))] animate-pulse opacity-50"></div>
            <div className="card bg-gray-500 rounded-lg 
                flex flex-col items-center justify-center">
                <img className="rounded-full w-36 mb-3" src="/linkedin-profile-photo.jpeg" alt="Profile photo" />
                <div className='z-10 cursor-pointer'>
                    <h2 className="text-white text-4xl font-semibold transition hover:text-amber-300">Vasista Dhyasani</h2>
                </div>
                <div className='mt-3'>
                    <p className='relative text-gray-300'>Backend Software Engineer</p>
                </div>
                <div className='flex flex-row z-10'>
                    <p className="text-gray-300 flex">
                        CS at&nbsp;
                        <a
                            href="https://www.sdsu.edu/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className='text-yellow-500 transition hover:text-yellow-700'>San Diego State University</div>
                        </a>
                    </p>
                </div>
            </div>

        </div >
    )
}

export default ProfileCard