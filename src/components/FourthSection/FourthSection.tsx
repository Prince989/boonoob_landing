
export default function FourthSection() {
    return (
        <div className="flex p-10 overflow-hidden">
            <div className="w-1/2 flex justify-center items-center">
                <img src="thsd.png" className="w-10/12" />
            </div>
            <div className="w-1/2 relative">
                <div className="relative">
                    <img src="line1.png" className="absolute" />
                    <img src="line2.png" className="absolute left-24" />
                </div>
                <div className="absolute rounded-xl top-12 pt-12 pb-36 px-20 left-10 shadow-2xl bg-white w-full">
                    <h1 className="font-intersemibold text-4xl">
                        Experience peace of mind
                    </h1>
                    <p className="py-10">
                        Rest assured that our app uses cutting-edge data protection technology to prioritize your privacy
                    </p>
                </div>
                <div className="relative">
                    <img src="lock.png" className="absolute top-0 right-0" />
                </div>
            </div>
        </div>
    )
}
