import React, { useState, useEffect } from "react";
import { FiSearch } from 'react-icons/fi'
import { ImLocation2 } from 'react-icons/im'
import { AiFillCaretDown } from 'react-icons/ai'
import axios from 'axios'
import { apiData } from '../constant'
import { useDispatch } from "react-redux";
import { chooseCountry } from "../features/bellefuSlice";


const HeaderSearch = ({ countries, location, languages, state, dialet }) => {
    const [open, setOpen] = useState(false)
    const [selectCountry, setSelectCountry] = useState(false)
    const [selectlang, setSelectlang] = useState(false)
    const [flag, setFlag] = useState(null)
    const [native, setNative] = useState(null)


    const dispatch = useDispatch()


    return (
        <div className={'w-full h-20 mt-3 flex space-x-96  bg-bellefuWhite mb-3  rounded-md items-center '}>
            <div className='flex'>
                <div className='flex space-x-4 items-center justify-center ml-8' >

                    <div>
                        <img
                            alt='error'
                            src={flag === null ? `https://flagcdn.com/32x24/${location?.toLowerCase()}.png` : `https://flagcdn.com/32x24/${flag?.toLowerCase()}.png`} />
                    </div>

                    <AiFillCaretDown onClick={() => setSelectCountry(!selectCountry)} className={selectCountry ? 'text-bellefuOrange' : 'text-gray-600'} />
                </div>
                {selectCountry && (
                    <div className="z-50 absolute top-32 right-[67rem] h-80 overflow-y-scroll mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" >
                        {countries?.map(list => (
                            <div onClick={() => {
                                setFlag(list.iso2)
                                setSelectCountry(false)
                                dispatch(chooseCountry(list.iso2))
                            }}
                                class="py-1 flex space-x-3 hover:bg-bellefuBackground" >

                                <p key={list.id} className="text-gray-700 space-x-3 px-4 flex py-2 text-sm">
                                    <div>
                                        <img
                                            alt='error'
                                            src={`https://flagcdn.com/20x15/${list.iso2.toLowerCase()}.png`} /></div>

                                    <span>{list.name}</span>


                                </p>




                            </div>))}
                    </div>
                )}
                {selectlang && (
                    <div className="z-50 absolute top-32 right-[60rem] mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" >
                        {languages.map(lang => (
                            <div onClick={() => {
                                setNative(lang.code)
                                setSelectlang(false)
                            }}
                                key={lang.id}
                                className="py-1 hover:bg-bellefuBackground" >

                                <span className="text-gray-700 block px-4  py-2 text-sm">{lang.name}</span>

                            </div>))}
                    </div>
                )}




                <div onClick={() => setSelectlang(!selectlang)} className=' bg-bellefuOrange space-x-2 rounded-sm items-center px-2 justify-center ml-6 flex'>


                    <p className='text-white'>{native === null ? dialet?.toUpperCase() : native?.toUpperCase()} </p>

                    <AiFillCaretDown className='text-white' />

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
                        <div className="z-10 absolute h-80 overflow-y-scroll top-32 right-64 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" >
                            {state.map(state => (
                                <div key={state.id} className="py-1  hover:bg-bellefuBackground " >

                                    <span className="text-gray-700 block px-4 hover:bg-bellefuBackground py-2 text-sm">{state.name}</span>


                                </div>))}
                        </div>

                    )
                }


                <button className=' w-4/12 h-8  m-2 rounded-sm text-center bg-bellefuOrange text-white'>Search</button>

            </div>





        </div>
    )
}
export default HeaderSearch;
