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
import { profileDetails,postadsData } from "../../features/bellefuSlice";
import { useSelector } from "react-redux";

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

export default function UnstyledSelectSimpleCard({card}) {
  const userId = useSelector(profileDetails);
  const userAmount = useSelector(postadsData);

  const userFullName = userId?.first_name + " " + userId?.last_name;
  const userEmail = userId?.email;
  const phone = userId?.phone;
  const pricing=userAmount?.plans==="featured"?1.00:userAmount?.plans==="urgent"?2.00:userAmount?.plans==="highlighted"?2.00:null

  const config = {
    public_key: "FLWPUBK_TEST-d5182b3aba8527eb31fd5807e15bf23b-X",
    tx_ref: Date.now(),
    amount: pricing,
    currency: userId?.currency_code,
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

  return (
    <CustomSelect className="w-full" disabled={card}>
      <span
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
              console.log(response);
              closePaymentModal(); // this will close the modal programmatically
            },
            onClose: () => {},
          });
        }}
      >
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
