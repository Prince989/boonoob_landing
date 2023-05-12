import React from 'react'

export default function HeaderBoxTitle() {
    return (
        <div className="p-4">
            <div className="font-semibold pt-24 px-4 text-left">
                <h1 className="text-4xl">
                    Rediscover the Joy of Socializing
                </h1>
            </div>

            <div className="text-sm text-left pt-10 pb-4 px-4">
                Step out, connect with fun-loving people and create unforgettable
                <br />
                memories on our social app
            </div>
            <div className="flex px-4 py-10">
                <div className="w-4/12">
                    <img src="app_store.png" />
                </div>
                <div className="w-4/12 mx-3">
                    <img src="Google_Play.png" />
                </div>
            </div>
            <div className="text-xs text-left px-4">
                Whether you're looking to make new friends, explore new interests, or simply have a
                <br />
                good time, this app has everything you need to make it happen.
            </div>
        </div>
    )
}
