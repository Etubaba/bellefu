import {useState, useEffect} from "react";
import {BiCaretRight, BiCaretDown} from "react-icons/bi";
import {BsFillCreditCard2BackFill,  BsBank2} from "react-icons/Bs";
import {RiBankFill} from "react-icons/ri";
import Layout from "../../components/Layout";

const AddMoney = () => {
  const [rotateFirstCaret, setRotateFirstCaret] = useState(false);
  const [rotateSecondCaret, setRotateSecondCaret] = useState(false);
  const [anchorElMenu1, setAnchorElMenu1] = useState(null);
  const [anchorElMenu2, setAnchorElOpenMenu2] = useState(null);
  const openMenu1 = Boolean(anchorElMenu1);
  const openMenu2 = Boolean(anchorElMenu2);
  const rotateCaret1 = () => setRotateFirstCaret(prevState => !prevState);
  const rotateCaret2 = () => setRotateSecondCaret(prevState => !prevState);
  const styleCaret1 = {
    paddingTop: '5px',
    transform: rotateFirstCaret ? 'rotate(90deg)': 'rotate(0)',
    transition: 'transform 150ms ease',
  };
  const styleCaret2 = {
    paddingTop: '5px',
    transform: rotateSecondCaret ? 'rotate(90deg)': 'rotate(0)',
    transition: 'transform 150ms ease',
    color: rotateCaret2 ? "" : "",
  };

  return (
    <div className="bg-bellefuWhite rounded-md mt-5 ">
      <h1 className="px-8 py-4 font-bold">Fund My Wallet</h1>
      <hr />
      <div className="w-auto py-8 px-20">
          <h2 className="font-semibold mb-5">Select Methods</h2>
          <div className="flex flex-col flex-auto mb-8">
          <div className="hover:bg-[#F8FDF2] hover:cursor-pointer mb-2 mr-12 p-8 rounded-lg border-2" onClick={rotateCaret1}>
            <div className="flex">
              <p className="mr-5 pt-1"><BsFillCreditCard2BackFill /></p>
              <p className="mr-auto">Card Method</p>
              <p style={styleCaret1}><BiCaretRight /></p>
              {/* <div className="pt-1"><p style={styleCaret1}><BiCaretRight /></p></div> */}
            </div>
          </div>
          <div className="hover:bg-[#F8FDF2] hover:cursor-pointer mr-12 p-8 rounded-lg border-2" onClick={rotateCaret2}>
            <div className="flex">
              <p className="mr-5 pt-1"><RiBankFill /></p>
              <p className="mr-auto">Bank Transfer</p>
              <div><p style={styleCaret2}><BiCaretRight /></p></div>
            </div>
          </div>
          </div>
          {/* <div className="mx-auto bg-bellefuOrange text-bellefuWhite rounded-md hover:cursor-pointer font-semibold py-2" style={{width: "57%"}} onClick={addMoney}>
            <div className="flex justify-center"><p className="pt-1 pr-2"><GiWallet /></p> <p>Add Money</p></div>
          </div> */}
      </div>
    </div>
  )
};

AddMoney.Layout = Layout;
export default AddMoney;