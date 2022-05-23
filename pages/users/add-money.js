import { useState, useRef } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";
import { useSelector } from "react-redux";
import { profileDetails } from "../../features/bellefuSlice";
import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { toast } from "react-toastify";


const AddMoney = () => {

  const [totalPrice, setTotalPrice] = useState('')
  const [hasPaid, setHasPaid] = useState({})

  const userId = useSelector(profileDetails)
  const userFullName = userId?.first_name + " " + userId?.last_name;
  const userEmail = userId?.email;
  const phone = userId?.phone

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
      title: 'Add money',
      description: 'Add money to your wallet',
      logo: 'https://www.linkpicture.com/q/bellefuApplogo.jpg',
    },
  };





  const handleFlutterPayment = useFlutterwave(config);


  if (hasPaid?.status === 'successful') {
    toast.success('Payment completed successfully')
    setTotalPrice('')
    setHasPaid({})
  }


  return (
    <>
      <Head>
        <title>Add Money</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="bg-bellefuWhite rounded-md mt-5 ">
        <h1 className="px-8 py-4 font-bold">Fund My Wallet</h1>
        <hr />
        <div className="w-full md:w-auto mx-auto p-2 md:py-8 md:px-20">
          <h2 className="font-semibold mb-5 text-sm md:text-lg">
            Select Methods
          </h2>
          <div className="flex flex-col flex-auto mb-8">
            <div className="bg-[#F8FDF2] hover:cursor-pointer mb-2 md:mr-12 py-8 rounded-lg border-2" >

              <div className='items-center mb-10 justify-center px-24 flex space-y-3 flex-col '>
                <label className='font-semibold'>Enter Amount</label>
                <input type='text' className="w-full rounded-xl py-3 pl-5 outline outline-gray-300 focus:outline-bellefuOrange" value={totalPrice} onChange={e => setTotalPrice(e.target.value)} />
              </div>
              <div className="w-full">
                <div >







                  <div className="flex px-8" >

                    <div className=" justify-center pl-16 items-center flex flex-col md:space-x-72 space-y-5 md:space-y-0 md:flex-row">
                      <div className="md:mr-auto hover:bg-white">
                        <button
                          onClick={() => {
                            handleFlutterPayment({
                              callback: (response) => {
                                console.log(response);
                                setHasPaid(response)
                                closePaymentModal() // this will close the modal programmatically
                              },
                              onClose: () => { },
                            });
                          }}
                          className="flex items-center  outline outline-bellefuOrange rounded-lg px-3 py-2">
                          <img src='/card.png' className='w-40' alt="visa card" />
                          {/* <span className="pl-4 md:text-base text-sm">Pay with Card</span> */}
                        </button>
                      </div>
                      <div className='hover:bg-white'>
                        <button className="flex items-center outline outline-[#0192D0] rounded-lg px-3 ">
                          <img src="/Paypal.png" className='w-40' alt="paypl card" />
                          {/* <span className="pl-4 md:text-base text-sm">Pay with Paypal</span> */}
                        </button>
                      </div>
                    </div>



                  </div>
                </div>


              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

AddMoney.Layout = Layout;
export default AddMoney;
