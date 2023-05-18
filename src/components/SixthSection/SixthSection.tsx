export default function SixthSection() {
  return (
    <div className="p-20 flex justify-between">
      <div className="w-1/2 relative">
        <img src="thsd2.png" />
        <div className="absolute font-intersemibold text-xl text-center going-up-down bg-white top-20 left-1/4 rounded-t-2xl rounded-l-2xl p-3" style={{ color: "#9747FF", width: "150px", boxShadow: "-20px 4px 20px rgba(0, 0, 0, 0.25)" }}>
          When we can play?
        </div>
        <div className="absolute font-intersemibold text-xl text-start going-up-down text-white top-24 right-2 rounded-t-2xl rounded-r-2xl p-3" style={{ backgroundColor: "#9747FF", width: "180px", boxShadow: "-20px 4px 20px rgba(0, 0, 0, 0.25)" }}>
          How about next weekend?
        </div>
      </div>

      <div className="w-1/2 ml-10 pt-4">
        <div className="w-full bg-white rounded-2xl p-10" style={{ boxShadow: "-20px 4px 20px rgba(0, 0, 0, 0.25)" }}>
          <h1 className="text-3xl font-intersemibold">
            Get involved in your community
          </h1>
          <p className="pt-4 text-lg">
            Find and sign up for local volunteering opportunities or support green initiatives in your community
          </p>
          <div className="relative h-52">
            <img src="shmpn.png" width="150px" className="absolute left-20 top-10" />
            <img src="glass.png" width="150px" className="absolute left-1/3 -bottom-20" />
          </div>
        </div>
      </div>
    </div>
  )
}
