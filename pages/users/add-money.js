import {useState, useRef} from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {BiCaretRight} from "react-icons/bi";
import {BsFillCreditCard2BackFill} from "react-icons/Bs";
import {RiBankFill} from "react-icons/ri";
import {Menu, Fade} from "@mui/material";
import { GiWallet } from "react-icons/gi";
//import { MenuItem } from "@mui/material";
import Layout from "../../components/Layout";
import masterCard from "../../public/bellefu-images/mastercard.svg"

const AddMoney = () => {
  const [rotateFirstCaret, setRotateFirstCaret] = useState(false);
  const [rotateSecondCaret, setRotateSecondCaret] = useState(false);
  const [anchorElMenu1, setAnchorElMenu1] = useState(null);
  const [showCard, setShowCard] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [formFields, setFormFields] = useState({
    cardNo: "",
    accountNo: "",
    accountName: "",
    cvc: "",
  })
  // const [cardNo, setCardNo] = useState("");
  // const [accountNo, setAccountNo] = useState("");
  // const [accountName, setAccountName] = useState("");
  // const [cvc, setCvc] = useState("");
  const [proceed, setProceed] = useState(false);
  const [transactionSuccess, setTransactionSuccess] = useState(false);
  const openMenu1 = Boolean(anchorElMenu1);
  const firstCaret = useRef();
  const router = useRouter();
  const rotateCaret1 = () => {
    if (showBank) {
      setRotateSecondCaret(false); //rotate caret back when the first is opened
      setShowBank(false);  //close bank information when the first caret is opened
    }
    setRotateFirstCaret(prevState => !prevState);
    setProceed(false);
    setTransactionSuccess(false);

    if (!anchorElMenu1 && !showCard) {setAnchorElMenu1(firstCaret.current);}
    else {
      setAnchorElMenu1(null); 
      setShowCard(false); 
    }
  };
  const rotateCaret2 = () => {
    setRotateSecondCaret(prevState => !prevState);

    if (showBank) setShowBank(false);
    else setShowBank(true);

    setAnchorElMenu1(null);
    
    if (rotateFirstCaret && showCard) {
      setRotateFirstCaret(false);  //rotate first caret back when the second is opened
    }

    setShowCard(false); //close card form when the second caret is opened
    setProceed(false);
    setTransactionSuccess(false)
  };
  const addCard = (evt) => {
    setAnchorElMenu1(null);
    setShowCard(true);

    evt.stopPropagation();
  };
  const handleCardClick = (evt) => {
    //setEventOnCard(true);
    evt.stopPropagation()
  };
  const handleChange = (input) => (evt) => {
    if (input !== "accountName" && isNaN(evt.target.value)) return;

    setFormFields({...formFields, [input]: evt.target.value})
  }
  // const handleCardNo = (evt) => {
  //   setCardNo(evt.target.value);
  // };
  // const handleAccountNo = (evt) => {
  //   setAccountNo(evt.target.value);
  // };
  // const handleAccountName = (evt) => {
  //   setAccountName(evt.target.value);
  // };
  // const handleCvc = (evt) => {
  //   setCvc(evt.target.value);
  // };
  const handleContinue = () => {
    setProceed(true);
    //setTransactionSuccess(true);
  };
  const fundWallet = () => {
    setTransactionSuccess(true);
  };
  const showWallet = () => {
    router.push("/users/my-wallet");
  };
  const handleClose = () => {
    setShowCard(false);
    setProceed(false);
    setShowBank(false);
    setTransactionSuccess(false);
    setRotateFirstCaret(prevState => !prevState);
  }
  const styleCaret1 = {
    paddingTop: '5px',
    transform: rotateFirstCaret ? 'rotate(90deg)': 'rotate(0)',
    transition: 'transform 150ms ease',
    color: rotateFirstCaret ? "#FFA500" : "",
  };
  const styleCaret2 = {
    paddingTop: '5px',
    transform: rotateSecondCaret ? 'rotate(90deg)': 'rotate(0)',
    transition: 'transform 150ms ease',
    color: rotateSecondCaret ? "#FFA500" : "",
  };
  const cardMethodStyle = {
    class: !showCard?"hover:bg-[#F8FDF2] hover:cursor-pointer mb-2 mr-12 py-8 rounded-lg border-2":"hover:cursor-pointer mb-2 mr-12 rounded-lg border-2"
  };
  const bankMethodStyle = {
    class: !showBank?"hover:bg-[#F8FDF2] hover:cursor-pointer mb-2 mr-12 py-8 rounded-lg border-2":"hover:cursor-pointer mb-2 mr-12 rounded-lg border-2"
  }

  return (
    <div className="bg-bellefuWhite rounded-md mt-5 ">
      <h1 className="px-8 py-4 font-bold">Fund My Wallet</h1>
      <hr />
      <div className="w-auto py-8 px-20">
          <h2 className="font-semibold mb-5">Select Methods</h2>
          <div className="flex flex-col flex-auto mb-8">
            <div className={cardMethodStyle.class} onClick={rotateCaret1}>
              <div className="w-full">
                <div className={showCard?"bg-[#F8FDF2] pt-8":""}>
                <div className={!showCard?"flex px-8":"flex px-8 pb-6"}>
                  <p className="mr-5 pt-2">
                    {!proceed ? <BsFillCreditCard2BackFill />: <Image src={masterCard} alt="card" width="40px" height="30px" />}
                  </p>
                  <p className={!proceed?"mr-auto pt-1":"mr-auto pt-2.5"}>{!proceed ? "Card Method": "Master 9876 9..."}</p>
                  <p style={styleCaret1} className="" ref={firstCaret}><BiCaretRight /></p>
                  <Menu 
                    anchorEl={anchorElMenu1}
                    open={openMenu1}
                    transitionDuration={3}
                    TransitionComponent={Fade}
                  >
                    <p className="italic pl-1">No Card</p>
                    <div className="flex mt-1 px-4 py-1 hover:bg-bellefuOrange hover:text-bellefuWhite hover:cursor-pointer hover:rounded-md" onClick={addCard}><p className="pt-1 pr-3"><BsFillCreditCard2BackFill /></p> <p>Add Card</p></div>
                  </Menu>
                </div>
                </div>
                { showCard && <hr /> }
                <div 
                  className={showCard ? "bg-white px-8 pt-6 pb-8 hover:cursor-default":""} 
                  onClick={handleCardClick}
                >
                  { showCard && !proceed ?<h3 className="font font-medium mb-2">Card Details</h3>:proceed && !transactionSuccess?<h3 className="font font-medium mb-2">Add Money</h3>:<></>
                  }
                  { showCard && !proceed ? <>
                  <div className="flex flex-col md:flex-row md:justify-center">
                    <div className="flex flex-col flex-auto md:p-4 mb-4 md:mb-0">
                      <p className="mb-2"><label id="card-no">Card Number</label></p>
                      <p className=""><input type="text" value={formFields.cardNo} htmlFor="card-no" onChange={handleChange("cardNo")} className="py-2 px-2 w-full outline outline-[#F1F1F1] focus:outline-[#FFA500] rounded-lg" /></p>
                    </div>
                    <div className="flex flex-col flex-auto md:p-4 mb-4 md:mb-0">
                      <p className="mb-2"><label id="account-no">Account Number</label></p>
                      <p className=""><input type="text" value={formFields.accountNo} htmlFor="account-no" onChange={handleChange("accountNo")} className="py-2 px-2 outline outline-[#F1F1F1] focus:outline-[#FFA500] rounded-lg w-full" /></p>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-center">
                    <div className="flex flex-col  flex-auto md:p-4 mb-4 md:mb-0">
                      <p className="mb-2"><label id="account-name">Card Holder&apos;s Name</label></p>
                      <p><input type="text" value={formFields.accountName} htmlFor="account-name" onChange={handleChange("accountName")} className="py-2 px-2 w-full outline outline-[#F1F1F1] focus:outline-[#FFA500] rounded-lg"  /></p>
                    </div>
                    <div className="flex flex-col flex-auto md:p-4 mb-4 md:mb-0">
                      <p className="mb-2"><label id="cvc">CVC</label></p>
                      <p><input type="text" value={formFields.cvc} htmlFor="cvc" onChange={handleChange("cvc")} className="py-2 px-2 w-full outline outline-[#F1F1F1] focus:outline-[#FFA500] rounded-lg"  /></p>
                    </div>
                  </div></> : proceed && !transactionSuccess ? <>
                  <p className="text-center my-2"><label id="amount">Add Amount</label></p>
                  <p className="text-center mb-4"><input type="text" htmlFor="amount" className="py-2 px-3 outline outline-[#F1F1F1] focus:outline-[#FFA500] rounded-lg w-[100%] md:w-[40%]" /></p>
                  </>: transactionSuccess ? <>
                  <p className="text-center font-semibold pt-6 md:pt-9 text-bellefuGreen">successful!</p>
                  <p className="text-center mb-10 md:mb-20">Your wallet has been successfully funded</p>
                  </>:<></>}
                  { showCard && !proceed ? <div className="mx-auto mt-3 hover:bg-bellefuOrange bg-[#fabe50] text-bellefuWhite rounded-md hover:cursor-pointer font-semibold py-2 w-[100%] md:w-[57%]" onClick={handleContinue}>
                    <div className="flex justify-center"><p className="pt-1 pr-2"><GiWallet /></p> <p>Continue</p></div>
                  </div>: proceed && !transactionSuccess? <div className="mx-auto hover:bg-bellefuOrange bg-[#fabe50] text-bellefuWhite rounded-md hover:cursor-pointer font-semibold py-2 w-[100%] md:w-[45%]" onClick={fundWallet}>
                    <div className="flex justify-center"><p className="pt-1 pr-2"><GiWallet /></p> <p>Fund Wallet</p></div>
                  </div>: transactionSuccess ? <>
                  <div className="flex flex-col md:flex-row md:justify-center md:px-16"><p className="text-center rounded-lg py-3 mb-2 md:mb-0 md:mr-20 hover:cursor-pointer hover:bg-bellefuOrange bg-[#fabe50] flex-auto text-white" onClick={showWallet}>View Wallet</p> <p className="text-center rounded-lg py-3 hover:cursor-pointer hover:bg-bellefuBackground flex-auto border-2" onClick={handleClose}>Close</p></div>
                  </>:<></>
                  }
                </div>
              </div>
            </div>
            { !proceed && 
            <div className={bankMethodStyle.class} onClick={rotateCaret2}>
              <div className="w-full">
                <div className={showBank ? "bg-[#F8FDF2] pt-8":""}>
                <div className={!showBank?"flex px-8":"flex px-8 pb-6"}>
                  <p className="mr-5 pt-1"><RiBankFill /></p>
                  <p className="mr-auto">Bank Transfer</p>
                  <p style={styleCaret2}><BiCaretRight /></p>
                </div>
                </div>
                { showBank && <>
                  <hr />
                  <div className="bg-white pt-4 pb-4 hover:cursor-default" onClick={handleCardClick}>
                    <div className="pb-4 px-8">
                      <h3 className="font font-medium mb-2">Transfer Money To The Below Bank</h3>
                      <p>Account Number: 122200909</p>
                      <p>Account Name: Bellefu Limited</p>
                      <p>Bank NAme: GT Bank</p>
                    </div>
                    <hr />
                    <div className="py-4 px-8">
                      <h3 className="font font-medium mb-2">Information</h3>
                      <p>After a successful transfer, kindly send us the transfer slip for verification</p>
                      <p>Your account will be credited within 30minutes to 1hr</p>
                    </div>
                  </div>
                  </>
                }
              </div>
            </div>
            }
          </div>
      </div>
    </div>
  )
};

AddMoney.Layout = Layout;
export default AddMoney;