import React from 'react'

function Mobilefooter() {
    return (
        <div className='bg-[#3F3F3F] lg:hidden  px-4 w-full h-auto relative bottom-0 pb-3 pt-6'>
            <div className='flex space-x-2'>
                <div>
                    <img
                        alt='logo'
                        src='https://www.linkpicture.com/q/bellefulogo_1_-removebg-preview.png'
                        className='w-24 h-10'

                    />
                </div>

                <div className=" flex flex-col space-y-2 items-center justify-center">
                    <p className="text-[#D4D7D1] text-xs">
                        Subscribe to our newsletter to get updates and amazing tips
                    </p>
                    <div className="flex">
                        <input
                            className="w-44 md:w-80 bg-[#2C2C2C] mr-1 rounded-sm p-1 outline-none "
                            type="email"
                            placeholder="Enter email here"
                        />
                        <button className="bg-bellefuOrange rounded-sm py-2  px-3 text-white">
                            Send
                        </button>
                    </div>
                </div>
            </div>








        </div>
    )
}

export default Mobilefooter