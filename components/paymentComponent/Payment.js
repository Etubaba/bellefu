import React from "react";

import UnstyledSelectSimpleCard from "../../components/postAdsComponent/Card";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { apiData } from "../../constant";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import axios from "axios";
import { useState, useEffect } from "react"
import { payment, profileDetails, userDId } from "../../features/bellefuSlice";
import { toast } from "react-toastify";



export default function Payment() {
    const adsprice = useSelector((state) => state.bellefu.postAddata);
    const adsdescription = useSelector((state) => state.bellefu.postAddata);
    const dataTopost = useSelector((state) => state.bellefu.postAddata);



    const user = useSelector(profileDetails);
    const [wallet, setWallet] = useState(0)
    const [newwallet, setNewWallet] = useState()
    const [showSuccess, setShowSuccess] = useState(false);
    const [btnsumit, setBtnsumit] = useState(false);
    const [card, setCard] = useState(true);
    const [method, setMethod] = useState('card');
    const [voucher, setVoucher] = useState("");
    const [openCard, setOpenCard] = useState(false);
    const [dept, setDept] = useState('Select')
    const [hasPaid, setHasPaid] = useState(false)












    useEffect(() => {
        const getWallet = async () => {
            axios.get(`${apiData}get/wallet/balance/${user?.id}`).then((res) => {
                setWallet(res.data.data);
            });
        }
        getWallet()
    }, [])



    const handleBack = (e) => {
        e.preventDefault();

    };



    const handlepay = () => {
        setBtnsumit(false);
        setCard(true);
        const payWithwallet = adsprice.adsplanprice * 100;
        //  setNewWallet(wallet-payWithwallet);
        if (payWithwallet > wallet) {
            toast.error("Insufficient Wallet balance", {
                position: "top-center",
            });
        }

        else {
            axios.post(`${apiData}update/wallet/balance`, {
                deduction: payWithwallet,
                userId: user?.id,
                description: `${adsdescription?.plans} Ads Payment`
            }).then((res) => {
                if (res.data.status === true) {

                    const formData = new FormData();
                    //  things i dey post from redux store
                    formData.append("title", dataTopost.title);
                    formData.append("location", dataTopost.location);
                    // see the image dey show for payload wen i post but wen e reach backend e no dey show
                    formData.append("images1", dataTopost.images[0]);
                    formData.append("images2", dataTopost.images[1]);
                    formData.append("images3", dataTopost.images[2]);
                    formData.append("images4", dataTopost.images[3]);
                    formData.append("images5", dataTopost.images[4]);
                    formData.append("images6", dataTopost.images[5]);
                    formData.append("images7", dataTopost.images[6]);
                    formData.append("images8", dataTopost.images[7]);
                    formData.append("images9", dataTopost.images[8]);
                    formData.append("images10", dataTopost.images[9]);
                    formData.append("video", dataTopost.videofile);
                    formData.append("categoryid", dataTopost.categoryid);
                    formData.append("subcategoryid", dataTopost.subcategoryid);
                    formData.append("shop", false);
                    formData.append("device", "web");
                    formData.append("price", dataTopost.price);
                    formData.append("description", dataTopost.description);
                    formData.append(
                        "tag1",
                        dataTopost.tag[0] === undefined ? "" : dataTopost.tag[0]
                    );
                    formData.append(
                        "tag2",
                        dataTopost.tag[1] === undefined ? "" : dataTopost.tag[1]
                    );
                    formData.append(
                        "tag3",
                        dataTopost.tag[2] === undefined ? "" : dataTopost.tag[2]
                    );
                    formData.append(
                        "tag4",
                        dataTopost.tag[3] === undefined ? "" : dataTopost.tag[3]
                    );
                    formData.append(
                        "tag5",
                        dataTopost.tag[4] === undefined ? "" : dataTopost.tag[4]
                    );
                    formData.append("phone", user?.phone);
                    formData.append("userid", user?.id);
                    formData.append("citycode", dataTopost.cityCode);
                    formData.append("countrycode", dataTopost.countrycode);
                    formData.append("states", dataTopost.states);
                    formData.append("currencyCode", dataTopost.currencyCode);
                    formData.append("plans", dataTopost.plans);

                    console.log(formData);
                    axios({
                        method: "POST",
                        url: `${apiData}create/product`,
                        data: formData,
                        headers: {
                            "Content-Type": "multipart/form-data",
                        },
                    }).then((res) => {
                        if (res.data.status === true) {
                            setShowSuccess(true);
                            // window.location.reload();

                        }
                    })
                }
            }).catch((err) => {
                console.log(err);
            })
        }

    }




    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get(`${apiData}validate/voucher/${voucher}`).then((res) => {
            console.log(res.data.data);
        });
    }



    const handlePayment = () => {
        if (method === 'wallet') {
            //pay by wallet

            // convert $25 to bellicoin $1 = 100bellicoin 
            const createAmount = 25 * 100;
            if (wallet >= createAmount) {
                axios.post(`${apiData}update/wallet/balance`, {
                    deduction: createAmount,
                    userId: user?.id,
                    description: 'Create shop payment'
                }).then(res => {
                    if (res.data.status) {
                        //    setHasPaid(true);
                        dispatch(payment(true))
                    }
                })
            } else { toast.error('Insufficient wallet balance') }

        } else if (method === 'voucher') {
            //pay by voucher


        } else {
            //pay by card
        }

    }

















    return (
        <>
            <div className=" w-full  lg:w-[93%] pb-7  rounded-lg bg-[#ffffff]  h-auto">
                <div className="bg-bellefuGreen p-4 ">
                    <h3 className="font-semibold ml-4 text-white">CHOOSE PAYMENT METHOD</h3>
                </div>
                <div>
                    <div
                        onChange={(e) => setMethod(e.target.value)}
                        className="m-7 sm:flex lg:flex justify-between">
                        <div className="flex my-4 lg:my-0">
                            <input
                                //  onClick={handlepay}
                                checked={method === "wallet"}
                                value="wallet"
                                id="ads_plan"
                                name="plans"
                                type="radio"
                                className="focus:ring-bellefuGreen mr-4 h-4 w-4 mt-[5px] text-bellefuGreen border-gray-300"
                            />
                            <h2 className="font-semibold ">WALLET:&nbsp;&nbsp;₿ {wallet}</h2>
                        </div>
                        <div className="col-span-6 sm:col-span-3 my-4 lg:my-0">
                            <div className="flex">
                                <input
                                    checked={method === "voucher"}
                                    value='voucher'
                                    //   onClick={()=>{setBtnsumit(true);setCard(true)}}
                                    id="ads_plan"
                                    name="plans"
                                    type="radio"
                                    className="focus:ring-bellefuGreen mr-4 h-4 w-4 mt-[5px] text-bellefuGreen border-gray-300"
                                />
                                <h2 className="font-semibold ">VOUCHER</h2>
                            </div>
                            <input
                                type="text"
                                onClick={() => setMethod('voucher')}
                                onChange={(e) => {
                                    if (method === 'voucher') setVoucher(e.target.value)
                                }}
                                className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full lg:w-[18vw] shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                            />
                        </div>
                        <div className="col-span-6 sm:col-span-3 my-4 lg:my-0">
                            <div className="flex">
                                <input
                                    checked={method === "card"}
                                    //   onClick={()=>{setBtnsumit(false) ;setCard(false)}}
                                    id="ads_plan"
                                    name="plans"
                                    value='card'
                                    type="radio"
                                    className="focus:ring-bellefuGreen mr-4 h-4 w-4 mt-[5px] text-bellefuGreen border-gray-300"
                                />
                                <h2 className="font-semibold ">CARD/ONLINE </h2>
                            </div>

                            <div className="w-full">
                                <div className="flex items-center mb-2 hover:bg-bellefuBackground p-3 rounded-md border mt-4 relative">
                                    <div className="flex items-center flex-1 space-x-3 cursor-pointer select-none">
                                        <h5 className="text-bellefuBlack1 font-medium whitespace-nowrap">
                                            {dept}
                                        </h5>
                                    </div>
                                    {!openCard ? (
                                        <div onClick={() => method === 'card' ? setOpenCard(!openCard) : null}>
                                            <AiOutlineCaretRight className="text-gray-300 cursor-pointer" />
                                        </div>
                                    ) : (
                                        <div onClick={() => setOpenCard(!openCard)}>
                                            <AiOutlineCaretDown className="text-gray-300 cursor-pointer" />
                                        </div>
                                    )}
                                </div>
                                {openCard ? (
                                    <div className="w-full bg-bellefuWhite rounded border transition duration-300 ease-in">
                                        <ul className="rounded  py-4">

                                            <li
                                                onClick={() => setDept('Card')}
                                                className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded"
                                            >
                                                <img src='/card.png' className='w-24' alt="visa card" />
                                            </li>
                                            <li
                                                onClick={() => setDept('Paypal')}
                                                className="px-4 py-3 hover:bg-bellefuBackground flex space-x-5 items-center cursor-pointe rounded"
                                            >
                                                <img src='/Paypal.png' className='w-24' alt="visa card" />
                                            </li>

                                        </ul>
                                    </div>
                                ) : null}
                            </div>



                        </div>
                    </div>
                    <div className="p-5 flex justify-end">


                        <button
                            // disabled={address===""?true:false}
                            type="submit"
                            onClick={handlePayment}
                            class="flex justify-center items-center lg:w-[10vw] py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange ml-7 hover:bg-[#ffc253] focus:outline-none focus:ring-2 focus:ring-offset-2 "
                        >
                            Proceed
                        </button>
                    </div>
                </div>
            </div>









        </>

    );
}