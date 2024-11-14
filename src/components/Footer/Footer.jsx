import React from 'react'

function Footer() {
  return (

    <section className="bg-[#6a618d] py-4 text-gray-400 text-center">
            <div className="relative z-10 mx-auto max-w-7xl px-4">
                <div className="-m-6 flex flex-wrap">
                    
                    <div className="w-full p-6 md:w-1/2 lg:w-1/2">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-300">
                                Support
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <a
                                        className=" text-base font-medium text-white hover:text-blue-400"
                                        
                                    >
                                        Account
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        className=" text-base font-medium text-white hover:text-blue-400"
                                        
                                    >
                                        Help
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        className=" text-base font-medium text-white hover:text-blue-400"
                                        
                                    >
                                        Contact Us
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-base font-medium text-white hover:text-blue-400"
                                        
                                    >
                                        Customer Support
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full p-6 md:w-1/2 lg:w-1/2">
                        <div className="h-full">
                            <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-300">
                                Legals
                            </h3>
                            <ul>
                                <li className="mb-4">
                                    <a
                                        className=" text-base font-medium text-white hover:text-blue-400"
                                        
                                    >
                                        Terms &amp; Conditions
                                    </a>
                                </li>
                                <li className="mb-4">
                                    <a
                                        className=" text-base font-medium text-white hover:text-blue-400"
                                        
                                    >
                                        Privacy Policy
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" text-base font-medium text-white hover:text-blue-400"
                                        
                                    >
                                        Licensing
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    
  )
}

export default Footer