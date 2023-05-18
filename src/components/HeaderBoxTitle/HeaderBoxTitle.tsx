export default function HeaderBoxTitle() {
    return (
        <div className="p-4">
            <div className="font-semibold pt-24 px-4 text-left">
                <h1 className="text-4xl title-anim">
                    Rediscover the Joy of Socializing
                </h1>
            </div>

            <div className="text-sm text-left pt-10 pb-4 px-4">
                Step out, connect with fun-loving people and create unforgettable
                <br />
                memories on our social app
            </div>
            <div className="flex px-4 py-10">
                <button className="cursor-pointer py-2 mx-3 rounded-lg hover:bg-slate-400 bg-black shadow-xl">
                    <div className="flex justify-around px-3 items-center">
                        <div className="ml-1 mr-7">
                            <img src="apple.png" width="40px"  />
                        </div>
                        <div className="text-start">
                            <p className="text-white font-interlight text-xs">
                                Download on the
                            </p>
                            <p className="text-white font-intersemibold text-xl">
                                App Store
                            </p>
                        </div>
                    </div>
                </button>
                <button className="cursor-pointer rounded-lg py-2 hover:bg-slate-400 bg-black shadow-xl">
                    <div className="flex justify-around items-center px-2">
                        <div className="ml-1 mr-5">
                            <img src="play.png" width="40px" />
                        </div>
                        <div className="text-start">
                            <p className="text-white font-interlight text-xs">
                                Get it on
                            </p>
                            <p className="text-white font-intersemibold text-xl">
                                Google Play
                            </p>
                        </div>
                    </div>
                </button>
            </div>
            <div className="text-xs text-left px-4">
                Whether you're looking to make new friends, explore new interests, or simply have a
                <br />
                good time, this app has everything you need to make it happen.
            </div>
        </div>
    )
}
