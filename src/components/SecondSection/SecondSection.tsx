
export default function SecondSection() {
    return (
        <div className="flex mt-20 mb-36 justify-around py-2 px-10">
            {/* Left */}
            <div className="w-5/12 flex relative justify-center items-center">
                <img src="gallery1.png" className="rounded-xl shadow-2xl absolute slide-in" />
                <img src="gallery2.png" className="rounded-xl shadow-2xl absolute slide-in2" />
                <img src="gallery3.png" className="rounded-xl shadow-2xl absolute slide-in3" />
                <img src="gallery4.png" className="rounded-xl shadow-2xl absolute slide-in4" />
            </div>

            {/* Right */}
            <div className="w-4/12 relative rounded-xl bg-white pb-20 shadow-[-5px_1px_30px_1px_rgba(0,0,0,0.2)]">
                <div className="absolute" style={{ top: "-50px", right: "-40px" }}>
                    <img src="pizza.png" className="w-10/12 z-10" />
                </div>
                <div >
                    <h1 className="font-semibold text-4xl p-10">
                        Make genuine friends
                    </h1>
                    <p className="px-10 py-3">
                        Download the app to invite friends or make new <b> friendships and socialize </b> with people who share your interests and passions
                    </p>
                </div>
                <div className="absolute going-up-down" style={{ bottom: "-50px", left: "-40px" }}>
                    <img src="drink.png" className="w-10/12" />
                </div>
            </div>

        </div>
    )
}
