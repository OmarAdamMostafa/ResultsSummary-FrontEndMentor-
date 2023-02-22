import { RxLightningBolt } from "react-icons/rx"
import { BiBrain } from "react-icons/bi"
import { BsChatDots } from 'react-icons/bs'
import { AiOutlineEye } from 'react-icons/ai'

function App() {
  const summary = [
    { id: 1, icon: <RxLightningBolt/>, text: 'Reaction', value: '80', bgColor: 'bg-pink-50', textColor: 'text-pink-400' },
    { id: 2, icon: <BiBrain/>, text: 'Memory', value: '92', bgColor: 'bg-yellow-50', textColor: 'text-yellow-500' },
    { id: 3, icon: <BsChatDots/>, text: 'Verbal', value: '61', bgColor: 'bg-cyan-50', textColor: 'text-cyan-500' },
    { id: 4, icon: <AiOutlineEye/>, text: 'Visual', value: '72', bgColor: 'bg-gray-100', textColor: 'text-blue-800' },
  ]

  return (
    <main className="w-full h-full">
      <div className="my-40 md:flex justify-center items-center">
        
        {/* LEFT SIDE */}
        <div className="flex justify-center rounded-3xl border w-[400px] h-[520px] bg-gradient-to-b from-purpleStart to-purpleEnd text-white">
          <div className="flex flex-col justify-center items-center">
            <div className="flex justify-center mx-auto mb-10">
              <h1 className="text-2xl font-bold text-gray-300">
                Your Results
              </h1>
            </div>
            <div className="flex justify-center border rounded-full border-none bg-purpleCircle w-[200px] h-[200px]">
                <div className="flex flex-col justify-center items-center">
                  <div className="text-7xl font-lato font-extrabold">
                    76
                  </div>
                  <div className="mt-2 font-semibold text-gray-400">
                    of 100
                  </div>
                </div>
            </div>
            <div className="mt-8 flex justify-center text-3xl font-semibold">
              Great
            </div>
            <div className="mt-4 flex justify-center text-center text-gray-300 w-3/5">
              You scored higher than 65% of the people who have taken these tests.
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="rounded-3xl border shadow-xl w-[400px] h-[520px] bg-white text-black">
          <div className="flex flex-col justify-start items-start mt-12 ml-12">
            <h1 className="text-2xl font-bold">
              Summary
            </h1>
            <div className="flex flex-col justify-between items-start w-full mt-2">
              {
                summary.map((item)=>(
                  <div key={item.id} className={`flex justify-between items-center border border-none rounded-xl ${item.bgColor} w-4/5 my-3 px-5 py-3`}>
                    <div className={`flex items-center gap-2 font-semibold text-lg ${item.textColor}`}>
                      {item.icon} {item.text}
                    </div>
                    <div className="font-bold text-lg">
                      {item.value}  <span className="text-gray-400">/ 100</span>
                    </div>
                  </div>
                ))
              }
            </div>
            <div className="w-full">
              <button className="border rounded-3xl bg-blueButton hover:bg-hoverBlueButton font-semibold text-lg text-white px-5 py-3 my-7 w-4/5">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
