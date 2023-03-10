import Image from "next/image";
import { useEffect, useState } from "react";
import BellefuLogo from "../../public/bellefulogo.png";
import { IoMdNotifications, IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import { MdShoppingCart } from "react-icons/md";
import { BsFillPersonFill } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import { AiFillHeart } from "react-icons/ai";
import { RiLogoutBoxFill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../features/bellefuSlice";
import { profileDetails } from "../../features/bellefuSlice";
import { isLoggedIn } from "../../features/bellefuSlice";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import Navbarsch from "./Navbarsch";
import MobileNavbar from "./MobileNavbar";
import axios from "axios";
import { AnnoucementsUrl, apiData, APIV3, shopApi, UserAvataUrl } from "../../constant";
import Loader from "../../constant";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [unseen, setUnseen] = useState(0);
  const [cartCount, setCartCount] = useState([]);
  const [unread, setUnread] = useState(0);
  const [announcement, setAnnouncement] = useState([]);
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const getIsLoggedIn = useSelector(login);
  const username = useSelector(profileDetails);
  const msgRead = useSelector((state) => state.bellefu?.messageRead);
  const verify = useSelector((state) => state.bellefu?.verificationStatus);
  // const userDetails = useSelector(state => state.bellefu?.userDetails.id)
  const cartCheck = useSelector(state => state.bellefu?.favLoad)



  const toPostAds = () => {
    if (getIsLoggedIn && verify.phone && username.avatar !== "useravatar.jpg") {
      router.push("/postAds");
      setLoading(!loading);
    } else if (!getIsLoggedIn) {
      toast.info("Login to post  Ads", {
        position: "top-right",
      });
      router.push("/login");

    } else if (!verify.phone) {
      toast.info("Verify your phone number to post Ads", {
        position: "top-right",
      });
      router.push("/users/verify-account");
      setLoading(!loading);
    } else if (username.avatar === "useravatar.jpg") {
      toast.info("Update your profile details to post  Ads", {
        position: "top-right",
      });
      router.push("/users/profile");
      setLoading(!loading);
    }
  };

  const handleNotify = () => {
    if (getIsLoggedIn) {
      router.push("/users/notification");
      setLoading(!loading);
      axios
        .post(`${apiData}change/notification/read`, { userId: username?.id })
        .then((res) => {
          if (res.data.status) {
            console.log("na lie ");
          }
        });
    } else {
      toast.info("Login to view notification", { position: "top-right" });
    }
  };

  // new message
  useEffect(() => {
    axios
      .get(`${apiData}unseen/messages/count/${username?.id}`)
      .then((res) => setUnseen(res.data.unseen));
  }, [msgRead]);

  //handle loading 

  if (loading) {
    setTimeout(() => {
      setLoading(false)
    }, 3000);
  }






  //new notification
  useEffect(() => {
    axios
      .get(`${apiData}notification/count/${username?.id}`)
      .then((res) => setUnread(res.data.unread));
  }, []);

  useEffect(() => {
    const addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: true,
        // includedLanguages: "en,ms,ta,zh-CN", // include this for selected languages
        layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL,
      },
      "google_translate_element"
    );
  };

  if (typeof window !== "undefined") {
    window.onclick = (e) => {
      e.target.className === "con";
      setOpen(false);
      setIsOpen(false);
    };
  }

  //getting the announcements
  // handling getting the addresses of a user
  useEffect(() => {
    const getAnnouncement = async () => {
      await axios.get(
        `${APIV3}list/announcement`
      ).then((res) => {
        setAnnouncement(res.data.data);
      }).catch((err) => console.log(err))

    }
    getAnnouncement();
  }, []);







  const handleCreateShop = () => {
    if (getIsLoggedIn && username.avatar !== "useravatar.jpg") {
      router.push("/createShop");
      setLoading(!loading);
    } else if (!getIsLoggedIn) {
      toast.info("Login to create shop", { position: "top-right" });
      router.push("/login");
    } else if (username.avatar === "useravatar.jpg") {
      toast.info("Update your profile details to create shop", { position: "top-right" });
      router.push("/users/profile");
      setLoading(!loading);
    }
  }


  const manageShop = () => {
    if (getIsLoggedIn) {
      router.push('/users/shop')
      setLoading(!loading)

    }
  }




  const currentPath = router.pathname;


  useEffect(() => {
    axios.get(`${shopApi}list/cart/item/${username?.id}`)
      .then(res => {
        setCartCount(res.data.data)
      })

  }, [cartCheck])

  const randomAnouncement = announcement[Math.floor(Math.random() * announcement?.length)]


  return (
    <div className="fixed top-0 z-50 w-full ">
      {loading && <Loader isLoading={loading} />}
      <div className=" bg-[#2C3422] h-8 flex items-center justify-center space-x-3">
        <img
          src={`${AnnoucementsUrl}${randomAnouncement?.image}`}
          alt="bellefu"
          className="w-10 h-6 rounded-md object-cover border"
        />
        <p className="text-white text-sm italic">{randomAnouncement?.announcement}</p>
      </div>

      <nav className="flex px-2 py-2 lg:px-12 bg-bellefuGreen items-center justify-between  ">
        {/* left side */}
        <div className="flex items-center">
          {" "}
          <img
            src="/bellefulogo.png"
            alt="bellefu-logo"
            className="md:rounded-md rounded object-contain w-24 md:w-32 cursor-pointer"
            onClick={() => { router.push("/"); setLoading(!loading); }}
          />
          {/* $$country select and language select for mobile */}
          <Navbarsch />
          <div
            id="google_translate_element"
            className="ml-4"
            translate="no"
          ></div>
        </div>

        {/* ################################## */}

        {/* right side */}

        {/* mobile right side */}

        <button onClick={(e) => {
          e.stopPropagation()
          setIsOpen(!isOpen)
        }} className="lg:hidden">
          {!isOpen && <FiMenu className="w-10 h-10 text-white" />}
        </button>

        {/* mobile sidebar */}

        {isOpen && (
          <MobileNavbar
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            setLoading={setLoading}
            username={username}
            msgRead={msgRead}
          />
        )}
        <div className="hidden lg:inline-flex">
          <div className="flex space-x-4 items-center">
            <div className="text-white flex space-x-4 capitalize text-md font-semibold">
              <p
                className="hover:text-gray-200 cursor-pointer"
                onClick={() => { router.push("/shops"), setLoading(!loading) }}
              // href="https://webinar.bellefu.com/"
              >
                Shops
              </p>
              {username?.shopId === null || username?.shopId === undefined ? <p
                className="hover:text-gray-200 cursor-pointer"
                onClick={handleCreateShop}
              // href="https://webinar.bellefu.com/"
              >
                Create Shop
              </p> :
                <p
                  className="hover:text-gray-200 cursor-pointer"
                  onClick={manageShop}
                // href="https://webinar.bellefu.com/"
                >
                  Manage Shop
                </p>}
              <a
                target="_blank"
                className="hover:text-gray-200"
                href="https://webinar.bellefu.com/"
              >
                Webinar
              </a>
              <a
                target="_blank"
                className="hover:text-gray-200"
                href="https://radio.bellefu.com/"
              >
                Online Radio
              </a>
              <a
                target="_blank"
                className="hover:text-gray-200"
                href="https://blog.bellefu.com/"
              >
                Blog
              </a>
            </div>

            <div className="px-3 text-white text-2xl -mt-2">|</div>
            {/* the user profile */}
            {getIsLoggedIn && (
              <div className="hidden md:inline-block">
                <div className="flex items-center space-x-2 relative">
                  <div
                    onClick={() => { router.push("/users/messages"); setLoading(!loading) }}
                    className="relative cursor-pointer "
                  >
                    <Image
                      // src={username?.avatar ? `https://bellefu.inmotionhub.xyz/get/user/images/${username?.avatar}` : "https://img.freepik.com/free-photo/organic-food-farm_342744-1362.jpg"}
                      src={`${UserAvataUrl}${username?.avatar}`}
                      width={30}
                      height={30}
                      className="rounded-full object-cover"
                    />
                    {unseen !== 0 ? (
                      <p className="bg-bellefuOrange -top-2 left-5 h-5 w-5 absolute flex items-center justify-center rounded-full">
                        <span className="text-white text-[10px] text-center ">
                          {unseen}
                        </span>
                      </p>
                    ) : null}
                  </div>
                  <p
                    onClick={() => { router.push("/users"); setLoading(!loading) }}
                    className="text-white hover:text-gray-200' font-semibold"
                  >
                    Hi <span>{username?.username}</span>
                  </p>
                  <div className="">
                    {open === false ? (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpen(!open);
                        }}
                      >
                        <AiOutlineCaretRight className="text-white cursor-pointer" />
                      </div>
                    ) : (
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setOpen(!open);
                        }}
                      >
                        <AiOutlineCaretDown className="text-white cursor-pointer" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
            {/* drop down beginning */}
            {open ? (
              <div
                onClick={(e) => e.stopPropagation()}
                className=" con absolute w-52 bg-bellefuWhite rounded border z-40 shadow-lg top-16 right-[10%] space-y-3"
              >
                <ul className="rounded px-2 py-3 space-y-2">
                  <div
                    onClick={() => {
                      setOpen(!open);
                      router.push("/users");
                      setLoading(!loading);
                    }}
                    className="flex items-center space-x-4 mb-2 hover:bg-bellefuBackground px-2 rounded-md py-3"
                  >
                    <BsFillPersonFill className="w-4 h-4 text-bellefuOrange" />
                    <p className="text-xs text-bellefuBlack1 font-normal whitespace-nowrap">
                      My Account
                    </p>
                  </div>
                  <li
                    onClick={() => {
                      setOpen(!open);
                      router.push("/users/messages");
                      setLoading(!loading);
                    }}
                    className="px-2 hover:bg-bellefuBackground py-1  flex space-x-3 items-center cursor-pointer rounded"
                  >
                    <RiMessage2Fill className="w-4 h-4 text-bellefuBlack1" />
                    <span className="text-xs text-gray-500">Messages</span>
                  </li>
                  <li
                    onClick={() => {
                      setOpen(!open);
                      router.push("/users/favourite-items");
                      setLoading(!loading);
                    }}
                    className="px-2 py-1 hover:bg-bellefuBackground  flex space-x-3 items-center cursor-pointer rounded"
                  >
                    <AiFillHeart className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-bellefuBlack1">
                      Favourite Products
                    </span>
                  </li>
                  <li className="border " />
                  <li
                    onClick={() => {
                      dispatch(isLoggedIn(false));
                      localStorage.clear();
                      router.push("/login");
                      setOpen(false);
                      toast.info("You have logged out successfully", {
                        position: "top-center",
                      });
                    }}
                    className="px-2 py-1 hover:bg-bellefuBackground flex space-x-3 items-center cursor-pointer rounded"
                  >
                    <RiLogoutBoxFill className="w-5 h-5 text-bellefuOrange" />
                    <span className="text-xs text-bellefuOrange">Logout</span>
                  </li>
                </ul>
              </div>
            ) : null}
            {/* dropdown end */}
            {/* end of user profile */}
            {/* login register place */}
            {!getIsLoggedIn && (
              <div className="text-white flex space-x-5 capitalize text-md font-semibold">
                <p
                  className="hover:text-gray-200"
                  onClick={() => { router.push("/register"); setLoading(!loading) }}
                >
                  Register
                </p>
                <p
                  className="hover:text-gray-200"
                  onClick={() => { router.push("/login"); setLoading(!loading) }}
                >
                  Login
                </p>
              </div>
            )}
            <div className="relative cursor-pointer" onClick={handleNotify}>
              <IoMdNotifications
                className={
                  unread !== 0
                    ? "text-white w-6 h-6 animate-shake"
                    : "text-white w-6 h-6"
                }
              />

              {unread !== 0 ? (
                <p className=" bg-bellefuOrange -top-1 left-3 h-4 w-4 absolute flex items-center justify-center rounded-full">
                  <span className="text-white text-[10px] text-center ">
                    {unread}
                  </span>
                </p>
              ) : null}
            </div>

            {currentPath === '/shops' || currentPath === '/shopproduct/product' || currentPath === '/shop/[slug]' || currentPath === '/shop/cart' || currentPath === '/shop/checkout' ?
              <div className="relative cursor-pointer ml-10" onClick={() => { router.push('/shop/cart'); setLoading(!loading); }}>
                <MdShoppingCart
                  className={
                    cartCount.length !== 0
                      ? "text-white w-6 h-6 animate-shake"
                      : "text-white w-6 h-6"
                  }
                />

                {cartCount.length !== 0 ? (
                  <p className=" bg-bellefuOrange -top-2 left-4 h-4 w-4 absolute flex items-center justify-center rounded-full">
                    <span className="text-white text-[10px] text-center ">
                      {cartCount.length}
                    </span>
                  </p>
                ) : null}
              </div>

              : <div
                onClick={toPostAds}
                className="flex hover:bg-orange-300 items-center bg-bellefuOrange px-2 py-2 rounded-md space-x-1 cursor-pointer"
              >
                <IoMdAddCircleOutline className="text-white w-4 h-4 text-md font-semibold" />
                <p className="text-white hover:text-gray-200 capitalize text-md font-semibold">
                  Post ads
                </p>
              </div>

            }
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
