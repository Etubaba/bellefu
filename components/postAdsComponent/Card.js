import * as React from "react";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { useDispatch } from "react-redux";
import { styled } from "@mui/system";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { toast } from "react-toastify";
import { profileDetails, postadsData } from "../../features/bellefuSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import { apiData } from "../../constant";

const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "E8F0FE",
};

const grey = {
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 17px);
  min-width: 18vw;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#ffffff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
  border-radius: 0.50em;
  margin-top: 0.29em;
  padding: 5px;
  text-align: left;
  line-height: 1.5;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

  &:hover {
    background: ${theme.palette.mode === "dark" ? "" : grey[100]};
    border-color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[900] : blue[900]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
);

const StyledListbox = styled("ul")(
  ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 4px;
  margin: 10px 0;
  min-width: 18vw;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
  border-radius: 0.50em;
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  overflow: auto;
  outline: 0px;
  overflow-y:scroll;
  height:20vh
  `
);

const StyledOption = styled(OptionUnstyled)(
  ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 0.45em;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[900]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[900]};
    color: ${theme.palette.mode === "dark" ? blue[900] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const StyledPopper = styled(PopperUnstyled)`
  z-index: 1;
`;

const CustomSelect = React.forwardRef(function CustomSelect(props, ref) {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  return <SelectUnstyled {...props} ref={ref} components={components} />;
});

// ################## CONVERSION API

// axios
// .post(`${apiData}convert/currency`, {
//   amount: product.price,
//   to: currencyCode,
//   from: product.currency_code,
// })
// .then((res) => {
//   setNewPrice(res.data.data.result);
// });

export default function UnstyledSelectSimpleCard({ card }) {
  const userId = useSelector(profileDetails);
  const userAmount = useSelector(postadsData);
  const dataTopost = useSelector((state) => state.bellefu.postAddata);

  const userFullName = userId?.first_name + " " + userId?.last_name;
  const userEmail = userId?.email;
  const phone = userId?.phone;
  const pricing = userAmount?.adsplanprice;

  const paymentConfigExtension = {
    callback: (response) => {
      if (response.status === "successful") {
        toast.success("Payment successful", {
          position: "top-center",
        });
        const formData = new FormData();
        //  things i dey post from redux store
        formData.append("title", dataTopost.title);
        formData.append("card", true);
        formData.append("transactionId", response.transaction_id);
        formData.append("amountPaid", response.amount);
        formData.append("gateway", "Fluter-Wave");
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
        formData.append("phone", userId?.phone);
        formData.append("userid", userId?.id);
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
            toast.success("Congrats !!! Your Product is under Review", {
              position: "top-center",
            });

            router.push("/postAds");
            setTimeout(() => {
              window.location.reload();
              console.log("reloaded");
            }, 4000);
          }
        }).catch((err)=>{
          toast.error(`${err}`, {
            position: "top-center",
          });
        });
      }
      closePaymentModal(); // this will close the modal programmatically
    },
    onClose: () => {},
  };

  const config = {
    public_key: "FLWPUBK_TEST-d5182b3aba8527eb31fd5807e15bf23b-X",
    tx_ref: Date.now(),
    amount: pricing,
    currency: "USD",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: userEmail,
      phonenumber: phone,
      name: userFullName,
    },
    customizations: {
      title: "Payment for your Ads",
      description: "Payment for posting Ads",
      logo: "https://www.linkpicture.com/q/bellefuApplogo.jpg",
    },
  };
  const handleFlutterPayment = useFlutterwave(config);
  const payer = () => {
    if (
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
      handleFlutterPayment(paymentConfigExtension);
    }
  };
  return (
    <CustomSelect className="w-full" disabled={card}>
      <span onClick={payer}>
        <StyledOption
          //  key={index}
          className="w-full"
          value={"Fluter-Wave"}
        >
          <img src="/card.png" className="w-28" alt="visa card" />
        </StyledOption>
      </span>
    </CustomSelect>
  );
}
