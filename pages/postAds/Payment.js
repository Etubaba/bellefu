import React from "react";
import Layout from "../../components/postAdsComponent/Layout";
import UnstyledSelectSimpleCard from "../../components/postAdsComponent/Card";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { apiData } from "../../constant";
import { MdVerified } from "react-icons/md";
import axios from "axios";
import { useState, useEffect } from "react";
import { profileDetails, userDId } from "../../features/bellefuSlice";
import { toast } from "react-toastify";

export default function Payment() {
  const adsprice = useSelector((state) => state.bellefu.postAddata);
  const adsdescription = useSelector((state) => state.bellefu.postAddata);
  const dataTopost = useSelector((state) => state.bellefu.postAddata);

  const user = useSelector(profileDetails);
  const [wallet, setWallet] = useState(0);
  const [newwallet, setNewWallet] = useState();
  const [showSuccess, setShowSuccess] = useState(false);
  const [btnsumit, setBtnsumit] = useState(false);
  const [card, setCard] = useState(true);
  const [voucher, setVoucher] = useState("");

  const router = useRouter();

  console.log(wallet + "waleet balance");
  useEffect(() => {
    const getWallet = async () => {
      axios.get(`${apiData}get/wallet/balance/${user?.id}`).then((res) => {
        setWallet(res.data.data);
      });
    };

    getWallet();
  }, []);

  const handleBack = (e) => {
    e.preventDefault();
    router.back();
  };

  const poster = () => {
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
    });
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
    } else if (
      dataTopost.plans === "" ||
      dataTopost.categoryid === "" ||
      dataTopost.subcategoryid === "" ||
      dataTopost.title === "" ||
      dataTopost.location === "" ||
      dataTopost.countrycode === "" ||
      dataTopost.states === "" ||
      dataTopost.price === null ||
      dataTopost.tag.length === 0 ||
      dataTopost.cityCode === "" ||
      dataTopost.description === ""
    ) {
      toast.error("All fields are required", {
        position: "top-center",
      });
    } else {
      axios
        .post(`${apiData}update/wallet/balance`, {
          deduction: payWithwallet,
          userId: user?.id,
          description: `${adsdescription?.plans} Ads Payment`,
        })
        .then((res) => {
          if (res.data.status === true) {
            poster();
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const handleHome = (e) => {
    e.preventDefault();
    router.push("/postAds");
    setTimeout(()=>{
      window.location.reload();
      console.log("reloaded");
    },4000)

  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payWithwallet = adsprice.adsplanprice;

    axios
      .get(`${apiData}validate/voucher/${voucher}`)
      .then((res) => {
        const vouchdata = res.data.data;
        if (res.data.status === false) {
          toast.error("incorect voucher code please retry", {
            position: "top-center",
          });
        } else if (payWithwallet > vouchdata.amount) {
          toast.error("insufficient Voucher balance", {
            position: "top-center",
          });
        } else if (
          dataTopost.plans === "" ||
          dataTopost.categoryid === "" ||
          dataTopost.subcategoryid === "" ||
          dataTopost.title === "" ||
          dataTopost.location === "" ||
          dataTopost.countrycode === "" ||
          dataTopost.states === "" ||
          dataTopost.price === null ||
          dataTopost.tag.length === 0 ||
          dataTopost.cityCode === "" ||
          dataTopost.description === ""
        ) {
          toast.error("All fields are required", {
            position: "top-center",
          });
        } else {
          const remainderVoucherBalance = vouchdata.amount - payWithwallet;
          axios
            .post(`${apiData}use/voucher`, {
              voucherCode: voucher,
              userId: user?.id,
              voucherId: vouchdata.id,
              remainder: remainderVoucherBalance,
            })
            .then((res) => {
              if (res.data.status === true) {
                poster();
              } else {
                null;
              }
            })
            .catch((err) => {
              toast.error(`${err}`, {
                position: "top-center",
              });
            });
        }
      })
      .catch((err) => {
        toast.error(`${err}`, {
          position: "top-center",
        });
      });
  };

  return (
    <>
     
      {!showSuccess ? (
        <div className=" w-full  lg:w-[93%] pb-7  rounded-lg bg-[#ffffff]  h-auto">
          <div className="bg-bellefuGreen p-4 ">
            <h3 className="font-semibold ml-4 text-white">
              CHOOSE PAYMENT METHOD
            </h3>
          </div>
          <div>
            <div className="m-7 sm:flex lg:flex justify-between">
              <div className="flex my-4 lg:my-0">
                <input
                  onClick={handlepay}
                  id="ads_plan"
                  name="plans"
                  type="radio"
                  className="focus:ring-bellefuGreen mr-4 h-4 w-4 mt-[5px] text-bellefuGreen border-gray-300"
                />
                <h2 className="font-semibold ">WALLET:&nbsp;&nbsp;{wallet}</h2>
              </div>
              <div className="col-span-6 sm:col-span-3 my-4 lg:my-0">
                <div className="flex">
                  <input
                    onClick={() => {
                      setBtnsumit(true);
                      setCard(true);
                    }}
                    id="ads_plan"
                    name="plans"
                    type="radio"
                    className="focus:ring-bellefuGreen mr-4 h-4 w-4 mt-[5px] text-bellefuGreen border-gray-300"
                  />
                  <h2 className="font-semibold ">VOUCHER</h2>
                </div>
                <input
                  type="text"
                  onChange={(e) => {
                    setVoucher(e.target.value);
                  }}
                  className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full lg:w-[18vw] shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                />
              </div>
              <div className="col-span-6 sm:col-span-3 my-4 lg:my-0">
                <div className="flex">
                  <input
                    onClick={() => {
                      setBtnsumit(false);
                      setCard(false);
                    }}
                    id="ads_plan"
                    name="plans"
                    type="radio"
                    className="focus:ring-bellefuGreen mr-4 h-4 w-4 mt-[5px] text-bellefuGreen border-gray-300"
                  />
                  <h2 className="font-semibold ">CARD</h2>
                </div>
                <UnstyledSelectSimpleCard card={card} />
              </div>
            </div>
            <div className="p-5 flex justify-between">
              <button
                onClick={handleBack}
                type="submit"
                class="flex justify-center items-center lg:w-[10vw] py-2 px-4  shadow-sm text-sm font-medium rounded-md text-[black] bg-bellefuWhite  border hover:bg-[#e4e4e4] focus:outline-none focus:ring-2 focus:ring-offset-2 "
              >
                Back
              </button>
              {btnsumit ? (
                <button
                  // disabled={address===""?true:false}
                  type="submit"
                  onClick={handleSubmit}
                  class="flex justify-center items-center lg:w-[10vw] py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange ml-7 hover:bg-[#ffc253] focus:outline-none focus:ring-2 focus:ring-offset-2 "
                >
                  Proceed
                </button>
              ) : null}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col border rounded-lg justify-center py-10 mt-[5%]  mb-24 items-center">
          <MdVerified className="text-8xl text-bellefuGreen mb-5 " />
          <p className="mb-7 text-center">
            <strong> Congrats !!!</strong>
            <br /> Your Product is under Review
          </p>

          <button
            onClick={handleHome}
            type="submit"
            class="flex justify-center items-center lg:w-[15vw] py-2 px-4 mt-[30px]  border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange hover:bg-[#ffc253] focus:outline-none focus:ring-2 focus:ring-offset-2 "
          >
            post more ads
          </button>
        </div>
      )}
    </>
  );
}

Payment.Layout = Layout;
