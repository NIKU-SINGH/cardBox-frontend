import axios from 'axios'
import React from 'react'
const URL = 'http://localhost:8000'


const Card = (props: {
  data: {
    id: number,
    title: string,
    link: string,
    type: string,
  }

}) => {

  const handleDelete = async (id:number) => {
    try{
      const res = await axios.delete(`${URL}/cards/${id}`)
      console.log("deleted item is",res)
    } catch(err){
      console.log(err)
    }
  }
  return (
    <div className=''>
      <div className="w-full md:w-auto m-4">
        <div className="flex h-96 flex-col p-5 rounded-lg shadow bg-white">
          <div className="flex flex-col items-center text-center relative">

            <h2 className="mt-2 font-semibold text-gray-800">{props.data.title}</h2>

            <div className="relative p-1 w-full bg-white rounded-lg  shadow hover:shadow-md">
              <div>
                <div className="absolute top-0 right-0 mt-2 mr-2 p-4 z-10 flex justify-between">
                  <span className="absolute top-0 right-0 inline-flex mt-0 ml-3 px-3 py-2 rounded-lg bg-yellow-400 text-sm font-medium text-white select-none">
                    {props.data.type}
                  </span>

                </div>
                <div className="relative block ">
                  <div className="bg-gray-100 h-auto rounded-lg">
                    <iframe width="560" height="315"
                      src="https://www.youtube.com/embed/DKzBmRRdPXo"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen>
                    </iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center mt-3 ">
            <button 
            onClick={()=> handleDelete(props.data.id)}
            className="m-2 flex-1 inline-flex items-center px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>

              Delete
            </button>


            {/* <button className="flex-1 px-4 py-2 ml-2 bg-yellow-500 hover:bg-yellow-600 text-white text-sm font-medium rounded-md">
              Agree
            </button> */}
            <button className="flex-1 m-2 inline-flex items-center px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
              </svg>

              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card