
export default function CreateActivity() {
    return (
        <div className="relative fade-in h-full">
            <div className="rounded-xl absolute shadow-xl xl:right-20 lg:right-2" style={{minWidth: "200px",maxWidth: "250px", height : "98%", transform: "rotate(-9.01deg)", backgroundColor : "#D6D6D6"}}>

            </div>
            <div className="rounded-xl absolute shadow-xl xl:right-16 lg:right-1" style={{minWidth: "200px",maxWidth: "250px", height : "98%", transform: "rotate(-9.01deg)",backgroundColor : "#EEEEEE"}}>

            </div> 
            <div className="rounded-xl p-3 shadow-[-30px_35px_30px_-15px_rgba(0,0,0,0.2)] h-81" style={{ minWidth: "200px",maxWidth: "250px", transform: "rotate(-9.01deg)", backgroundColor: "#4955D2" }}>
                <img src="magichand.gif" className="absolute w-8/12 top-0 right-0 rounded-t-xl" style={{ zIndex: "-100" }} />
                <div className="flex pt-20">
                    <img src="ellipse300.png" className="mr-0.5" />
                    <img src="ellipse301.png" className="mr-0.5" />
                    <img src="ellipse302.png" className="mr-0.5" />
                    <img src="ellipse305.png" className="mr-0.5" />
                    <img src="ellipse307.png" className="mr-0.5" />
                </div>
                <div className="text-white pt-2 text-left text-sm">
                    Create Activity
                </div>
                <div className="text-left text-white font-semibold pt-4">
                    Tell us about
                    <br />
                    your activity &
                    <br />
                    see the magic
                </div>
                <div className="bg-white rounded-xl text-sm text-left font-intermedium p-2 my-4" style={{ height: "200px", wordBreak: "break-word" }}>
                    I want to have a dinner party in my house this Tuesday at 8pm with my friends, everyone’s share is $25
                </div>
                <div className="flex py-4 px-2 justify-around flex-row-reverse">
                    <button className="bg-white font-intersemibold rounded-xl hover:bg-green-400 w-10/12 text-primary">
                        Go
                    </button>
                    <button className="hover:bg-green-400 rounded-xl mx-2">
                        <img src="back.png" />
                    </button>
                </div>
            </div>
        </div>
    )
}
