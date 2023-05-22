import React from 'react'

export default function Header() {
  return (
    <div className="font-intersemibold px-10">
      <div className="flex justify-between items-center">
        <div className="py-5 px-10 flex items-center">
          <img src="Logo.png" width="45px" />
          <h1 className="mx-3 text-4xl" style={{color : '#212529'}}>
            boonoob
          </h1>
        </div>

        <div className="flex font-intermedium items-center text-sm px-5">
          {/* <div className="flex mx-10">
            <button className="mx-3 hover:underline">
              Home
            </button>
            <button className="mx-3 hover:underline">
              Read the blog
            </button>
          </div> */}

          <div className="text-center">
            <button className="bg-primary py-4 px-10 text-center transition-all ease-in-out hover:scale-105 scale-100 w-full text-white rounded-full shadow-md">
              Download App
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
