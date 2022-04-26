import React from "react";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Skeleton from "@mui/material/Skeleton";
import SelectUnstyled, {
  selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
//   import {handleCatUpdate} from "../../features/bellefuSlice";
//   import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/system";

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
    min-width: 100%;
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
      outline: 3px solid ${theme.palette.mode === "dark" ? blue[900] : blue[900]
    };
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
    min-width: 26vw;
    background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[300]};
    border-radius: 0.50em;
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    overflow: auto;
    outline: 0px;
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
      background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[900]
    };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted} {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]
    };
      color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
    }
  
    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[900]
    };
      color: ${theme.palette.mode === "dark" ? blue[900] : blue[900]};
    }
  
    &.${optionUnstyledClasses.disabled} {
      color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
    }
  
    &:hover:not(.${optionUnstyledClasses.disabled}) {
      background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]
    };
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

function UnstyledSelectSimple1() {
  //   const optionSelect = category;
  //   const dispatch = useDispatch();
  //   const handleThings = (counts) => {
  //     dispatch(handleCatUpdate(counts.id));
  //     subcatCatcher(counts.sub_category, counts.name);
  //     console.log(counts);
  //   };

  return (
    <CustomSelect>
      {/* {optionSelect.categories?.map((counts, index) => (
        <span onClick={() => handleThings(counts)}>
          <StyledOption key={index} value={counts.name}>
            {counts.name}
          </StyledOption>
        </span>
      ))} */}
      <StyledOption value={"Ads"} >
        Ads
      </StyledOption>
      <StyledOption value={"Customer service"}>
        Customer service
      </StyledOption>
      <StyledOption value={"Custom request"}>
        Custom request
      </StyledOption>
      <StyledOption value={" Feature request"} >
        Feature request
      </StyledOption>
      <StyledOption value={"others"}>
        others
      </StyledOption>

    </CustomSelect>
  );
}

export default function Feedback() {
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="justify-center align-middle flex">
      {loading ? (
        <div className=" shadow bg-bellefuWhite lg:w-[50%] m-5 rounded-md  p-5">
          <div className="justify-center align-middle text-center">
            <h2 className="text-2xl font-bold">FEEDBACK</h2>
            <p>
              Have a complaint or query about any of the products or ads on our
              website? Please use the form below to let us know about it.
            </p>
          </div>

          <div className="border  p-5 mt-7 ">
            <div>
              <form action="#" method="POST">
                <div className=" overflow-hidden sm:rounded-md">
                  <div className=" sm:p-6">
                    <div className="">
                      <div className="">
                        <label
                          for="first-name"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First-Name
                        </label>
                        <input
                          type="text"
                          id="location"
                          // onChange={handleLocation}
                          className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label
                          for="last-name"
                          className="block  text-sm font-medium text-gray-700"
                        >
                          Last-Name
                        </label>
                        <input
                          type="text"
                          id="location"
                          // onChange={handleLocation}
                          className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          for="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          // onChange={handleLocation}
                          className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          for="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Number
                        </label>
                        <input
                          type="number"
                          // onChange={handleLocation}
                          className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                        />
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          for="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Department
                        </label>
                        <UnstyledSelectSimple1
                        />{" "}
                      </div>
                      <div className="col-span-6 sm:col-span-3">
                        <label
                          for="email"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Comment
                        </label>
                        <textarea
                          type="text"
                          col="4"
                          // onChange={handleLocation}
                          className=" bg-[white] p-[8px] mt-1 focus:ring-bellefuGreen focus:outline-0 block w-full shadow-sm sm:text-sm border-gray-300 border-2 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex justify-between">
                  {/* <Link href="/postAds/Details"> */}
                  <button
                    // disabled={address===""?true:false}
                    type="submit"
                    // onClick={handleSubmit}
                    class="flex justify-center items-center  w-full py-2 px-5 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-bellefuOrange hover:bg-[#ffc253] focus:outline-none focus:ring-2 focus:ring-offset-2 "
                  >
                    Submit
                  </button>
                  {/* </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <Skeleton
          className="rounded "
          variant="rectangular"
          animation="wave"
          width={"100%"}
          height={1000}
        />
      )}
    </div>
  );
}
