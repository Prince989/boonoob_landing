import React from 'react'
import DayCounter from './DayCounter/DayCounter'

export default function DinnerPartyScreenShot() {
    return (
        <div className="rounded-xl p-3 bg-white shadow-xl" style={{ transform: "rotate(9.13deg)" }}>
            <h1 className="font-intersemibold pt-2 text-xl text-left mb-3 flex items-center">
                Dinner Party
                <img src="burger.png" width="20px" height="20px" className="mx-1" />
            </h1>
            <div className="w-full rounded-xl" style={{ backgroundImage: "url(dinner.gif)", backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "190px" }} >
            </div>

            <div className="flex p-2 text-xs">
                <div>
                    <div className="rounded-t-xl px-3 py-1 text-white text-xs" style={{ backgroundColor: "#FA5A32" }}>
                        Apr
                    </div>
                    <div className="font-intersemibold rounded-b-xl px-3 py-1 text-xs bg-white">
                        25
                    </div>
                </div>
                <div className="font-intersemibold text-left text-xs p-2">
                    <div>
                        Wednesday , 08:00PM
                    </div>
                    <div className="font-interregular" style={{ fontSize: "10px" }}>
                        Ends at 10:00PM
                    </div>
                </div>
            </div>

            <div className="rounded-xl w-full" style={{ background: "linear-gradient(92.41deg, #01C891 4.63%, #01BCC8 96.68%)" }}>
                <div className="bg-black/20 text-white text-xs rounded-t-xl">
                    You are going
                </div>
                <div className="flex justify-center p-2">
                    <DayCounter number={19} title={"Day"} />
                    <DayCounter number={21} title={"Hours"} />
                    <DayCounter number={38} title={"Minutes"} />
                    <DayCounter number={59} title={"Seconds"} />
                </div>
            </div>
            <div className="py-2 px-4 flex justify-around items-start">
                <div className="text-primary text-xs font-semibold px-1">
                    <div className="hover:bg-green-400" style={{ borderRadius: "14.17px" }}>
                        <img src="Post.png" />
                    </div>
                    <div>
                        Post
                    </div>
                </div>
                <div className="text-primary text-xs font-semibold px-1">
                    <div className="hover:bg-green-400" style={{ borderRadius: "14.17px" }}>
                        <img src="GroupChat.png" />
                    </div>
                    <div>
                        Post
                    </div>
                </div>
                <div className="text-primary text-xs font-semibold px-1">
                    <div className="hover:bg-green-400" style={{ borderRadius: "14.17px" }}>
                        <img src="Friends.png" />
                    </div>
                    <div>
                        Group
                        <div>
                            Chat
                        </div>
                    </div>
                </div>
                <div className="text-primary text-xs font-semibold px-1">
                    <div>
                        <div className="hover:bg-green-400" style={{ borderRadius: "14.17px" }}>
                            <img src="Message.png" />
                        </div>
                    </div>
                    <div>
                        Message
                        <div>
                            Host
                        </div>
                    </div>
                </div>
            </div>

            <div className="text-primary flex item-center flex-wrap">
                <div className="flex items-center">
                    <img src="location.png" />
                </div>
                <div className="p-1 text-left">
                    4321 Baltimore street Los 
                    <br />
                    Angeles, CA
                </div>
            </div>
        </div>
    )
}
