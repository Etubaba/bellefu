import React, { useState } from "react";
import Flags from 'country-flag-icons/react/3x2'
import { InputLabel, MenuItem, Select, FormControl } from "@mui/material";
import { FiSearch } from 'react-icons/fi'
import { ImLocation2 } from 'react-icons/im'
const swag = {
    width: "5vw",
    height: "4vh",
    position: "relative",
    top: "1vh",
    marginRight: "2.4vw",
};

const HeaderSearch = () => {
    const [open, setOpen] = useState(false)


    return (
        <div className={'w- h-20 mt-5 flex space-x-96  bg-bellefuWhite mb-3  rounded-md items-center '}>
            <div className='flex'>
                <div >
                    <select className=" h-full py-4 pl-2 pr-3 border-transparent bg-transparent  sm:text-sm rounded-md">
                        <option value=''></option>
                        <option >United</option>
                        <option>Spain</option>
                        <option>France</option>
                    </select>
                </div>
                <div >
                    <select className=" h-full py-4 pl-2 pr-3 border-transparent bg-transparent  sm:text-sm rounded-md">
                        <option value=''></option>
                        <option >EN</option>
                        <option>SP</option>
                        <option>FR</option>
                    </select>
                </div>


            </div>

            <div className='flex pl-2 justify-center items-center bg-bellefuBackground w-6/12 h-11'>
                <div className="mr-5">   <FiSearch className='text-bellefuOrange' /></div>

                <input type='text' list='brow' placeholder="What are you looking for?" className='bg-bellefuBackground focus:outline-none w-9/12' />
                <datalist id="brow">
                    <option value="Agro Produce" />
                    <option value="Livestock" />
                    <option value="Food item" />
                    <option value="Farm machine" />
                    <option value="Agro Jobs" />
                </datalist>
                <div className="px-3 text-black opacity-20 text-2xl -mt-2">|</div>




                <span onClick={() => setOpen(!open)} list='brow' className='relative w-9/12 flex cursor-pointer text-gray-500'><ImLocation2 className='text-bellefuOrange mt-1 mr-1' /> <span>Where? Nigeria</span> </span>

                {
                    open && (


                        <div class=" absolute top-32 right-52 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" >
                            <div class="py-1" >

                                <a href="#" class="text-gray-700 block px-4 hover:bg-bellefuBackground py-2 text-sm">Account settings</a>
                                <a href="#" class="text-gray-700 hover:bg-bellefuBackground block px-4 py-2 text-sm" >Support</a>
                                <a href="#" class="text-gray-700 hover:bg-bellefuBackground block px-4 py-2 text-sm" >License</a>
                                <a href="#" class="text-gray-700 hover:bg-bellefuBackground block px-4 py-2 text-sm">License</a>

                            </div>
                        </div>

                    )
                }


                <button className='w-4/12 h-8 hover:bg-orange-300 m-2 rounded-sm text-center bg-bellefuOrange text-white'>Search</button>

            </div>



            {/* <FormControl>

                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    className='border-transparent 
                >
                    <MenuItem value={<Flags.US style={swag} />}> <Flags.US style={swag} /></MenuItem>
                    <MenuItem value={20}> <Flags.US style={swag} /> Twenty</MenuItem>
                    <MenuItem value={30}><Flags.US style={swag} /> Thirty</MenuItem>
                </Select>
            </FormControl>
 */}



        </div>
    )
}
export default HeaderSearch;
