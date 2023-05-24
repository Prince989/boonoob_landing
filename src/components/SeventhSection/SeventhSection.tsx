import React from 'react'

export default function SeventhSection() {
    return (
        <div className="flex justify-between items-center pb-12">
            <div className="w-5/12 pl-32 relative">
                <h1 className="text-4xl font-intersemibold">
                    Earn while you socialize
                </h1>
                <p className="pt-10">
                    Organize paid events for others to join and earn money while having fun together with our app
                </p>
                <img src="coin.png" className="absolute bottom-4 right-0 going-up-down" width="150px" />
                <button className="bg-primary mt-36 text-white text-center py-3 px-10 rounded-full shadow-xl">
                    Download Now
                </button>
            </div>
            <div className="w-7/12 overflow-hidden">
                <video muted loop autoPlay className="-mb-4">
                    <source src="section3.mp4" type='video/mp4' />
                </video>
            </div>
        </div>
    )
}
