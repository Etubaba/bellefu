import React from "react";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { apiData } from "../../constant";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import axios from "axios";
import { useState, useEffect } from "react"
import { payment, profileDetails, userDId } from "../../features/bellefuSlice";
import { toast } from "react-toastify";

export default function Payment({ modal }) {
    const [wallet, setWallet] = useState(0);
    const [method, setMethod] = useState('card');
    const [voucher, setVoucher] = useState("");
    const [openCard, setOpenCard] = useState(false);
    const [dept, setDept] = useState('Select')
    const [reload, setReload] = useState(0)

    const user = useSelector(profileDetails);

    const dispatch = useDispatch();
    // convert $25 to bellicoin $1 = 100bellicoin 
    const createAmount = 25 * 100;


    const userFullName = user?.first_name + " " + user?.last_name;
    const userEmail = user?.email;
    const phone = user?.phone



    //flutterwave configuration
    const config = {
        public_key: 'FLWPUBK_TEST-d5182b3aba8527eb31fd5807e15bf23b-X',
        tx_ref: Date.now(),
        amount: 25,
        currency: 'USD',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: userEmail,
            phonenumber: phone,
            name: userFullName,
        },
        customizations: {
            title: 'Shop creation',
            description: 'Payment to create shop',
            logo: 'https://www.linkpicture.com/q/bellefuApplogo.jpg',
        },
    };



    const handleFlutterPayment = useFlutterwave(config);


    useEffect(() => {
        const getWallet = async () => {
            axios.get(`${apiData}get/wallet/balance/${user?.id}`).then((res) => {
                setWallet(res.data.data);
            });
        }
        getWallet()
    }, [reload])




    const handlePayment = () => {
        if (method === 'wallet') {
            //pay by wallet

            if (wallet >= createAmount) {
                axios.post(`${apiData}update/wallet/balance`, {
                    deduction: createAmount,
                    userId: user?.id,
                    description: 'Create shop payment'
                }).then(res => {
                    if (res.data.status) {
                        //    setHasPaid(true);
                        setReload(prev => prev + 1)
                        dispatch(payment(true))
                        toast.success('Payment successful')
                        modal(false)
                    }
                })
            } else { toast.error('Insufficient wallet balance') }

        } else if (method === 'voucher') {
            //pay by voucher
            if (voucher === '') toast.error('Please enter voucher code')
            axios.get(`${apiData}validate/voucher/${voucher}`)
                .then((res) => {
                    if (!res.data.status) toast.error('Invalid voucher, try again')

                    const voucherValue = res.data?.data.amount;
                    if (voucherValue >= createAmount) {
                        dispatch(payment(true))
                        toast.success('Payment successful')
                        modal(false)
                    }
                })
        } else if (method === 'card') {
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
                                                onClick={() => {
                                                    handleFlutterPayment({
                                                        callback: (response) => {
                                                            console.log(response);
                                                            closePaymentModal()
                                                            if (response.status === 'successful') {
                                                                dispatch(payment(true))
                                                                toast.success("Payment completed Successful")
                                                                modal(false)
                                                            }
                                                            // this will close the modal programmatically
                                                        },
                                                        onClose: () => { },
                                                    })



                                                    setDept('Card')
                                                }}
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