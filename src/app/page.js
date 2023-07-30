'use client'

import DateDisplay from "@/components/DateDisplay";
import NumericInput from "@/components/NumericInput";
import ProgressBar from "@/components/ProgressBar";
import { useState } from "react";


export default function Home() {

  const [result, setResult] = useState([new Date(), new Date()])
  // console.log(result)

  return (
    <main>
      <div className='flex justify-center mt-6'>
        <h1 className="sm:text-xl content-evenly lg:text-5xl font-semibold text-white leading-tight shadow-xl bg-gradient-to-r from-cyan-800 to-blue-600 p-4 rounded-lg">
          Delivery Preference Selector
        </h1>
      </div>
      <div className="flex justify-center mt-6">
        <span className="text-white">
          Select Date and time of Pick up
        </span>
      </div>

      <div className='form-card flex justify-center space-y-10 flex-col m-10 p-10 rounded-lg'>
        <NumericInput setResult={setResult}/>

      <div className="fade-in-bottom flex flex-col items-center" id="animatedDiv">
        <span className="text-white pb-10 pt-10">----- Your Timeline -----</span>
        <div className="flex flex-row w-full align-middle justify-center items-center">
          <DateDisplay date={result[0]} type="Pick" />
          <ProgressBar />
          <DateDisplay date={result[1]} type="Drop"/>
        </div>
        </div>

      </div>


    </main>
  )
}
