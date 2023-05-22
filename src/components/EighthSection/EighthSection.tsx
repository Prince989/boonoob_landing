import React,{useRef} from 'react'

export default function EighthSection() {
    
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
        <div className="p-24 ">
            <div className="rounded-2xl justify-center overflow-hidden flex" style={{ backgroundColor: "#F6F6F2" }} ref={boxRef}>
                <div className={("w-3/12 h-min xs:text-xs p-8 my-52 opacity-0 rounded-2xl " + (isVisible ? "rotate-slide-in-2" : ""))} style={{ backgroundColor: "#5C65FF", boxShadow: " -20px 4px 20px rgba(0, 0, 0, 0.25)" }}>
                    <p className="text-white font-interlight">
                        This app is simply incredible, it makes planning with friends and family so much easier for everyone!
                    </p>
                    <div className="flex pt-4 items-end text-white">
                        <img src="avatar.png" width="40px" />
                        <span className="text-xs px-2">
                            Sarah
                        </span>
                    </div>
                </div>
                <div className={("bg-white h-min xs:text-xs p-8 my-16 ml-5 w-3/12 opacity-0 rounded-2xl" + (isVisible ? " rotate-slide-in" : ""))} style={{ boxShadow: " -20px 4px 20px rgba(0, 0, 0, 0.25)" }}>
                    <p className="text-black font-intermedium">
                        I normally never write reviews for apps but this is amazing!! As we get older our schedules all clash and finding times to meet is sooo hard. This made life sooo much easier. If I could I would give it 10 stars!
                    </p>
                    <div className="flex pt-4 items-end text-black">
                        <img src="avatar2.png" width="40px" />
                        <span className="text-xs px-2">
                            Michael
                        </span>
                    </div>
                </div>
                <div className={("w-3/12 h-min xs:text-xs p-8 mt-80 opacity-0 rounded-2xl" + (isVisible ? " rotate-slide-in-3" : ""))} style={{ backgroundColor: "#9747FF", boxShadow: " -20px 4px 20px rgba(0, 0, 0, 0.25)" }}>
                    <p className="text-white font-interlight">
                        Helpful to have my calendar, events and a chat function all in one, rather than the constant flip between apps!
                    </p>
                    <div className="flex pt-4 items-end text-white">
                        <img src="avatar3.png" width="40px" />
                        <span className="text-xs px-2">
                            David
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
