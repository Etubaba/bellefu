import React, { useState, useEffect } from 'react'
import { FcShop } from 'react-icons/fc'
import Layout from "../../components/Layout";
import PublishedAds from "../../components/layoutComponents/publishAds/PublishedAds";
import { useSelector } from 'react-redux'
import axios from 'axios';
import { apiData } from '../../constant';






const Published = () => {
    const [pend, setPend] = useState(true)
    const [approvedProduct, setApprovedProduct] = useState([])




    const userId = useSelector((state) => state.bellefu?.profileDetails?.id);

    const test = 1285

    useEffect(() => {
        const getProduct = async () => {

            const res = await axios.get(`${apiData}list/user/product/${test}/approved`)
            setApprovedProduct(res.data.data.data)
        }

        getProduct()
    }, [])




    return (
        <div className="ml-6 rounded-lg mt-5 bg-bellefuWhite h-auto w-auto pb-2">

            <div className='text-xl ml-4 self p-2'>
                Published Ads
            </div>
            <hr />

            {approvedProduct.length === 0 ?
                <div className="h-full ">
                    <div className="border mx-auto my-5  rounded-xl    w-7/12 h-11/12 ">
                        <div className="flex flex-col justify-center mt-24 mb-24 items-center">
                            <FcShop className="text-9xl mb-5 text-gray-600" />
                            <p className="text-lg text-gray-600">
                                You do not have any published product yet
                            </p>

                            <button className='py-3 hover:bg-orange-200 mt-16 px-12 rounded-lg bg-bellefuOrange text-white'>Make your first post</button>
                        </div>
                    </div>
                </div> : (
                    <div className='bg-bellefuWhite mt-5 rounded-b-md overflow-y-scroll h-screen'>

                        <PublishedAds product={approvedProduct} />


                    </div>
                )}


        </div>
    )
}

Published.Layout = Layout;

export default Published;

