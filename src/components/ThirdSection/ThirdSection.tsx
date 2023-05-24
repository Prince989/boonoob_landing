export default function ThirdSection() {
    return (
        <div className="flex p-5">
            <div className="w-1/2 pt-24">
                <div className="p-24">
                    <h1 className="text-4xl font-intersemibold">
                        Find or organize your next adventure
                    </h1>
                    <div className="flex">
                        <p className="pr-2 pl-1 pt-7 xl:w-10/12 w-8/12">
                            Discover or organize exciting activities and events in your area, and plan get-togethers that are sure to be a blast.
                        </p>
                        <div className="xl:w-2/12 w-4/12">
                            <img src="volcano.png" className="w-full" />
                        </div>
                    </div>
                    <div className="flex justify-end relative">
                        <img src="map.png" className="absolute w-1/2" />
                        <img src="tail.png" className="absolute top-20" />
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex justify-center p-10">
                {/* <img src="fi2.png" className="w-10/12" /> */}
                <video autoPlay muted>
                    <source src="section1.mp4" type='video/mp4' />
                </video>
            </div>
        </div>
    )
}
