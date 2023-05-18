import React from 'react'
import CreateActivity from '../CreateActivity/CreateActivity'
import DinnerPartyScreenShot from '../DinnerPartyScreenShot/DinnerPartyScreenShot'
import HeaderBoxTitle from '../HeaderBoxTitle/HeaderBoxTitle'

export default function HeaderBox() {
  return (
    <div className="w-full px-16 overflow-x-hidden overflow-y-hidden" style={{}}>
      <div className="w-full h-full rounded-xl bg-blue-100" style={{ background: "linear-gradient(89.66deg, rgba(92, 101, 255, 0.25) 78.72%, rgba(0, 0, 0, 0) 102.43%)" }} >
        <div className="flex py-8 pr-20 flex-row-reverse justify-between">
          <div className="flex w-1/2 justify-center">
            <CreateActivity />
            <DinnerPartyScreenShot />
          </div>
          <div className="w-1/2">
            <HeaderBoxTitle />
          </div>
        </div>
      </div>
    </div>
  )
}