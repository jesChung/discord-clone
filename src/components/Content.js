import React from 'react'
import { DownloadIcon } from "@heroicons/react/outline"
import { ReactComponent as Right } from '../img/right.svg'
import { ReactComponent as Left } from '../img/left.svg'

const Content = () => {
  return (
    <div className='bg-discord_blue md:mb-[8px] '>
      <div className='px-6 py-14 h-screen md:px-10 md:py-20 md:flex relative 	'>
        <div className='text-white flex flex-col w-full lg:justify-center lg:items-center '>
          <h1 className='text-2xl md:text-[56px] md:leading-none font-[900] '>IMAGINE A PLACE...</h1>
          <h2 className='mt-10 text-base w-full lg:max-w-3xl '>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</h2>
          <div className='flex flex-col sm:flex-row md:flex-col lg:flex-row md:items-start sm:items-center gap-6 mt-6'>
            <button className='text-black bg-white w-60 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:text-discord_purple focus:outline-none transition duration-200 ease-in-out '>
              <DownloadIcon className="w-6 mr-2" />
              Download for Mac
            </button>
            <button className='bg-[#23272a] text-white w-72 font-medium flex items-center justify-center rounded-full p-4 text-lg hover:shadow-2xl hover:bg-gray-800 focus:outline-none transition duration-200 ease-in-out'>
              Open Discord in your browser
            </button>
          </div>
        </div>
      </div>

      <div>
        <Right className='hidden md:inline absolute bottom-0 -right-36 '/>
        <Left className='absolute -bottom-3 -ml-20 md:hidden lg:inline lg:-left-80 '/>
      </div>
    </div>
  )
}

export default Content
