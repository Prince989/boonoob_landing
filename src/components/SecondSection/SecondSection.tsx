import React, { useRef } from "react";

export default function SecondSection() {

    const [isVisible, setIsVisible] = React.useState(false);
    const boxRef = useRef(null);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting)
                    setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.8 }
        );

        if (boxRef.current) {
            observer.observe(boxRef.current);
        }

        // Cleanup the observer when the component unmounts
        return () => {
            if (boxRef.current) {
                observer.unobserve(boxRef.current);
            }
        };
    }, []);

    return (
        <div ref={boxRef} className="flex overflow-hidden justify-around pb-36 pt-20 px-10">
            {/* Left */}
            <div className="w-5/12 flex relative justify-center items-center">
                <img src="gallery1.png" className={("rounded-xl opacity-0 shadow-2xl absolute") + (isVisible ? " slide-in" : "")} />
                <img src="gallery2.png" className={("rounded-xl opacity-0 shadow-2xl absolute") + (isVisible ? " slide-in2" : "")} />
                <img src="gallery3.png" className={("rounded-xl opacity-0 shadow-2xl absolute") + (isVisible ? " slide-in3" : "")} />
                <img src="gallery4.png" className={("rounded-xl opacity-0 shadow-2xl absolute") + (isVisible ? " slide-in4" : "")} />
            </div>

            {/* Right */}
            <div className="w-4/12 relative rounded-xl bg-white pb-20 shadow-[-5px_1px_30px_1px_rgba(0,0,0,0.2)]">
                <div className="absolute" style={{ top: "-50px", right: "-40px" }}>
                    <img src="pizza.png" className="w-3/12 ml-auto z-10" />
                </div>
                <div>
                    <h1 className="font-semibold text-4xl p-10">
                        Make genuine friends
                    </h1>
                    <p className="px-10 py-3">
                        Download the app to invite friends or make new <b> friendships and socialize </b> with people who share your interests and passions
                    </p>
                </div>
                <div className="absolute going-up-down" style={{ bottom: "-50px", left: "-40px" }}>
                    <img src="drink.png" className="w-2/12" />
                </div>
            </div>

        </div>
    )
}
