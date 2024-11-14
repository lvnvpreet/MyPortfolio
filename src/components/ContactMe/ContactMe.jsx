import React from 'react'

const ContactMe = () => {
  return (
    <div className=" bg-[#74cc96] flex justify-between p-5">
      
      <div className="flex-1 mr-5 p-5 border border-gray-300 rounded-lg">
      <p className='text-sm text-black md:text-sm tracking-tight' id='contact'>
                        <b>Contact</b>
                    </p>
                    <h3 className=' text-white my-2 md:text-2xl font-bold flex leading-normal tracking-tighter'>
                    get in touch
                    </h3>
        <form>
          <div className="mb-4">
           
            <input
              type="text"
              name="name"
              placeholder='Name:'
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            
            <input
              type="email"
              name="email"
              placeholder='Email:'
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            
            <textarea
              name="message"
              placeholder='Write Massage'
              required
              className="w-full p-2 border border-gray-300 rounded"
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-xl">
          Contact Me
          </button>
        </form>
      </div>

      {/* Map Container */}
      <div className="flex-1 p-5 border border-gray-300 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Our Location</h2>
        <div className="h-72 bg-gray-200 flex items-center justify-center">
          <p>Map goes here (replace with actual map component)</p>
        </div>
      </div>
    </div>
  )
}

export default ContactMe