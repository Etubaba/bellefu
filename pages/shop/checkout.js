import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { FiArrowLeft } from "react-icons/fi";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useRouter } from "next/router";
import { Modal } from '@mui/material'
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';

import { useSelector } from "react-redux";

import axios from "axios";
import { toast } from "react-toastify";
import { profileDetails } from "../../features/bellefuSlice";
// import { Testing } from "../components/personalize/SelectImage";

const Checkout = () => {
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [country, setCountry] = useState("");
    const [phone, setPhone] = useState("");
    const [hasPaid, setHasPaid] = useState(true);
    const [cartList, setCartList] = useState([]);
    const [modalopen, setModalOpen] = useState(false)



    const userId = useSelector(profileDetails)



    const cartUrl = 'https://bellefu.inmotionhub.xyz/api/shop/';

    const handleShowAddresses = () => setShowAddresses(true);
    const router = useRouter();



    // const handleChange = (e) => {
    //   setSelectedAddress(e.target.checked);

    // }


    useEffect(() => {
        const getCart = async () => {
            await axios.get(`${cartUrl}list/cart/item/${userId?.id}`)
                .then(res => setCartList(res.data.data))
        }
        getCart()

    }, [])

    const priceSum = cartList?.reduce((acc, curr) => { acc += curr.price * curr.quantity; return acc }, 0)
    const shippingFee = 200
    const totalPrice = priceSum + shippingFee


    const userFullName = userId?.first_name + " " + userId?.last_name;
    const userEmail = userId?.email;

    const config = {
        public_key: 'FLWPUBK_TEST-d5182b3aba8527eb31fd5807e15bf23b-X',
        tx_ref: Date.now(),
        amount: totalPrice,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
            email: userEmail,
            phonenumber: phone,
            name: userFullName,
        },
        customizations: {
            title: 'Payment for your order',
            description: 'Payment for items in your cart',
            logo: 'https://www.linkpicture.com/q/bellefuApplogo.jpg',
        },
    };






    const cartId = cartList?.map(item => item.cartId)




    const handleOrder = () => {
        if (cartList.length > 0 && hasPaid) {

            const formData = new FormData();

            formData.append("userId", userId?.id);
            formData.append("totalAmount", totalPrice);
            formData.append("zipCode", zip);
            formData.append("address", address);
            formData.append("cityCode", city);
            formData.append("stateCode", state);
            formData.append("countryCode", country);
            formData.append("phone", phone);
            formData.append("quantity", 3);
            formData.append("cartId", JSON.stringify(cartId));
            axios({
                method: "post",
                url: `${cartUrl}create/order`,
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
            })
                .then((res) => {
                    if (res.data.status) {
                        setModalOpen(true);
                    }
                })

        } else {
            toast.error("Please select payment method")
        }
    }




    const handleFlutterPayment = useFlutterwave(config);



    return (
        <div className='mt-28'>
            <Head>
                <title>Checkout</title>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="max-w-5xl mx-auto mt-8">

                <div className="mb-4 pl-3 md:pl-0 md:w-[70%] lg:w-full mx-auto"><button className="flex items-center space-x-1 hover:text-crystamolPink transition ease-in duration-100 hover:scale-125" onClick={() => router.back()}><span><FiArrowLeft /></span> <span>Back</span></button></div>
                <div className="bg-white rounded p-3">
                    <div className="flex flex-col lg:flex-row lg:space-x-6">
                        <div className="w-[100%] md:w-[70%] lg:w-[45%] mx-auto">
                            <div className="bg-bellefuBackground rounded-lg pt-3">
                                <section className="px-3 py-2">
                                    <h2 className="font-semibold text-sm md:text-lg font-poppins">Order Summary</h2>
                                </section>
                                <hr />
                                {cartList?.map((cart, index) => (
                                    <div key={index}>
                                        <section className="flex justify-between px-3 py-2">
                                            <div className="flex space-x-3">
                                                <div>
                                                    <img src={`https://bellefu.inmotionhub.xyz/get/product/image/${cart?.images[0]}`} alt="order image" width={70} height={70} className="rounded-md" />
                                                </div>
                                                <div className="w-auto">
                                                    <p className="font-semibold text-base md:text-xl">{cart.title}</p>

                                                    <div className="md:hidden  text-bellefuOrange">

                                                        <span className='flex'>


                                                            <p>${cart.price * cart.quantity}</p>


                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="hidden md:inline-block py-5 text-bellefuOrange">
                                                <span className='flex'>



                                                    <p>${cart.price * cart.quantity}</p>
                                                </span>
                                            </div>

                                        </section>
                                        <hr />
                                    </div>
                                ))}
                                <section className="flex px-3 py-4 border-b">
                                    <div className="font-semibold text-lg md:text-2xl mr-auto">Shippin Fee</div>
                                    <div className="font-semibold text-lg md:text-2xl text-bellefuOrange">

                                        <span className='flex'>

                                            <p>${shippingFee}</p></span>
                                    </div>
                                </section>

                                <section className="flex px-3 py-4">
                                    <div className="font-semibold text-lg md:text-2xl mr-auto">Total</div>
                                    <div className="font-semibold text-lg md:text-2xl text-bellefuOrange">

                                        <span className='flex'>

                                            <p>${totalPrice}</p></span>
                                    </div>
                                </section>

                            </div>

                        </div>
                        <div className="bg-bellefuBackground w-[100%] md:w-[70%] lg:w-[50%] mx-auto rounded-lg py-3 mt-3 lg:mt-0">
                            <section className="pl-10 py-2">
                                <h2 className="font-semibold text-sm md:text-base font-poppins">Payment Details</h2>
                            </section>
                            <hr />
                            <section className="px-3 py-2 mt-6">
                                <div className=" justify-center items-center flex flex-col space-y-5 md:space-y-0 md:flex-row">
                                    <div className="md:mr-auto">
                                        <button
                                            onClick={() => {
                                                handleFlutterPayment({
                                                    callback: (response) => {
                                                        console.log(response);
                                                        closePaymentModal() // this will close the modal programmatically
                                                    },
                                                    onClose: () => { },
                                                });
                                            }}

                                            className="flex items-center outline outline-bellefuOrange rounded-lg px-3 py-2">
                                            <img src='/card.png' className='w-40' alt="visa card" />
                                            {/* <span className="pl-4 md:text-base text-sm">Pay with Card</span> */}
                                        </button>
                                    </div>
                                    <div>
                                        <button className="flex items-center outline outline-gray-200 rounded-lg px-3 ">
                                            <img src="/Paypal.png" className='w-40' alt="paypl card" />
                                            {/* <span className="pl-4 md:text-base text-sm">Pay with Paypal</span> */}
                                        </button>
                                    </div>
                                </div>
                                <div className="mb-4 mt-12">
                                    <p className="mb-2"><label htmlFor="card-no" className="font-semibold md:text-base text-sm">Address</label></p>
                                    <p><input
                                        onChange={(e) => setAddress(e.target.value)}
                                        value={address}
                                        type="text" id="card-no"
                                        className="w-full rounded-xl py-3 pl-5 outline outline-gray-300 focus:outline-bellefuOrange" /></p>
                                </div>
                                <div className="mb-4">
                                    <p className="mb-2"><label htmlFor="card-no" className="font-semibold md:text-base text-sm">City</label></p>
                                    <p><input
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                        type="text" id="card-no" className="w-full rounded-xl py-3 pl-5 outline outline-gray-300 focus:outline-bellefuOrange" /></p>
                                </div>
                                <div className="mb-4">
                                    <p className="mb-2"><label htmlFor="card-no" className="font-semibold md:text-base text-sm">State</label></p>
                                    <p><input
                                        value={state}
                                        onChange={(e) => setState(e.target.value)}
                                        type="text" id="card-no" className="w-full rounded-xl py-3 pl-5 outline outline-gray-300 focus:outline-bellefuOrange" /></p>
                                </div>
                                <div className="mb-4">
                                    <p className="mb-2"><label htmlFor="card-no" className="font-semibold md:text-base text-sm">Zip Code</label></p>
                                    <p><input
                                        value={zip}
                                        onChange={(e) => setZip(e.target.value)}
                                        type="text" id="card-no" className="w-full rounded-xl py-3 pl-5 outline outline-gray-300 focus:outline-bellefuOrange" /></p>
                                </div>
                                <div className="mb-4">
                                    <p className="mb-2"><label htmlFor="card-no" className="font-semibold md:text-base text-sm">Country</label></p>
                                    <p><input
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                        type="text" id="card-no" className="w-full rounded-xl py-3 pl-5 outline outline-gray-300 focus:outline-bellefuOrange" /></p>
                                </div>
                                <div className="mb-4">
                                    <p className="mb-2"><label htmlFor="card-no" className="font-semibold md:text-base text-sm">Phone Number</label></p>
                                    <p><input
                                        placeholder="e.g +2348168776544"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        type="text" id="card-no" className="w-full  rounded-xl py-3 pl-5 outline outline-gray-300 focus:outline-bellefuOrange" /></p>
                                </div>





                                <Modal
                                    open={modalopen}
                                    onClose={() => setModalOpen(false)}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                // sx={{ marginLeft: 'auto', marginRight: 'auto', width: '100%', justifyContent: 'center', alignItems: 'center' }}
                                >
                                    <div
                                        className="flex flex-col items-center justify-center mx-auto mt-52 pt-2  rounded-lg shadow-md   bg-bellefuWhite w-[80%] md:w-[60%] lg:w-[40%]"
                                    // sx={edit}
                                    >
                                        <div className="flex justify-center items-center">
                                            {/* <WarningAmberIcon sx={{ fontSize: 50 }} /> */}
                                            <IoMdCheckmarkCircleOutline className="md:text-6xl text-bellefuGreen text-6xl mt-4 md:mb-3" />
                                        </div>
                                        {/* <hr className="mb-4" /> */}

                                        <p className="p-1 mx-3 mb-2 md:mb-6 text-center ">
                                            {" "}
                                            Congratulations... Your order has been placed  sucessful
                                        </p>
                                    </div>
                                </Modal>
                                <div

                                    className="mt-14 flex items-end justify-end">
                                    <button
                                        onClick={handleOrder}
                                        className='md:px-28 text-white rounded-xl bg-bellefuOrange hover:bg-orange-500 md:py-2 px-16 py-4'>

                                        checkout</button>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Checkout;

