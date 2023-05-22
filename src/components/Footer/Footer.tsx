
export default function Footer() {
    return (
        <div className="px-20 pt-5 pb-16">
            <div className="flex items-center justify-between">
                <div className="py-5 px-10">
                    <div className="flex items-center">
                        <img src="Logo.png" width="45px" />
                        <h1 className="mx-3 font-intersemibold text-4xl" style={{ color: '#212529' }}>
                            boonoob
                        </h1>
                    </div>
                    <p className="text-gray-500 py-5 text-sm font-interlight">
                        Rediscover the joy of Socializing
                    </p>
                    <div className="flex pt-5">
                        <a target="_blank" href="https://instagram.com/joinboonoob" className="mx-1">
                            <img src="instagram.png" width="30px" />
                        </a>
                        <a className="mx-1" target="_blank">
                            <img src="facebook.png" width="30px" />
                        </a>
                        <a href="https://linkedin.com/company/joinboonoob" target="_blank" className="mx-1">
                            <img src="linkedin.png" width="30px" />
                        </a>
                    </div>
                </div>
                <div className="py-5 px-20">
                    <h1 className="font-intersemibold mb-5">
                        Contact
                    </h1>
                    <p>
                        boonoob@app.com
                    </p>
                    <p className="my-5">
                        1-888-888-8888
                    </p>
                </div>
            </div>
            <div className="flex items-end px-10 justify-between">
                <div className="text-gray-500 text-sm">
                    Boonoob app 2023. All rights reserved
                </div>
                <div className="flex px-4 py-10">
                    <button className="cursor-pointer py-2 mx-3 rounded-lg hover:bg-slate-400 bg-black shadow-xl">
                        <div className="flex justify-around px-3 items-center">
                            <div className="ml-1 mr-7">
                                <img src="apple.png" width="40px" />
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
            </div>
        </div>
    )
}
