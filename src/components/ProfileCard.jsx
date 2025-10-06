import React from 'react'

const ProfileCard = () => {
    return (
        <div className='relative rounded-lg border-1 border-yellow-500/20'>
            <div className="card bg-slate-700/40 rounded-lg 
                flex flex-col items-center justify-center">
                <img className="rounded-full w-36 mb-3 border-yellow-400/20" src="/profile-photo.jpeg" alt="Profile photo" />
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