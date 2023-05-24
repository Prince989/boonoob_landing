export default function FifthSection() {
    return (
        <div className="flex justify-between items-center">
            <div className="w-1/2 pl-32 py-20">
                <div className="flex items-center">
                    <div className="flex w-9/12 flex-col items-center">
                        <div className="">
                            <div className="flex">
                                <h1 className="w-9/12 text-4xl font-intersemibold">
                                    Stay connected effortlessly
                                </h1>
                                <div className="w-2/12">
                                    <img src="love.png" />
                                </div>
                            </div>
                            <div className="py-6">
                                <p>
                                    Manage your calendar of events, coordinate with attendees and keep the conversation flowing with ease
                                </p>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img src="popcorn.png" className="w-3/12" />
                        </div>
                    </div>
                        <div className="w-3/12">
                            <img src="flash.png" />
                        </div>
                </div>
            </div>
            <div className="w-1/2 overflow-hidden">
                <video muted autoPlay className="-mb-3">
                    <source src="section2.mp4" type='video/mp4' />
                </video>
            </div>
        </div>
    )
}
