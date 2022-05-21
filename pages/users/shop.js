import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FaRegEdit } from "react-icons/fa";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { profileDetails } from "../../features/bellefuSlice";
import { useSelector } from "react-redux";
import axios from "axios";
import { BsShopWindow } from "react-icons/bs";

import { useRouter } from "next/router";
import { IconButton } from "@mui/material";
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
];

function shop({ thin }) {
  const user = useSelector(profileDetails);
  const router = useRouter();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://bellefu.inmotionhub.xyz/api/shop/view/single/${user?.shopId}`
      )
      .then((res) => {
        setProducts(res.data.data);
      })
      .then((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="rounded-lg md:mt-5 mt-2 bg-bellefuWhite   h-auto w-full md:w-auto">
      <div className="flex justify-between  px-10 md:py-6 py-2 border-b">
        <h1 className="font-semibold">My Shop Details</h1>
      </div>
      {user?.shopId === null ? (
        <div className="h-full px-2 lg:px-0 ">
          <div className="border mx-auto mt-2 lg:my-5 rounded-xl w-full lg:w-7/12 h-11/12 ">
            <div className="flex flex-col justify-center mt-24 mb-24 items-center">
              <BsShopWindow className="text-7xl lg:text-9xl mb-5 text-gray-600" />
              <p className="text-sm capitalize lg:text-lg text-gray-600 px-2 text-center">
                You do not have a shop please create one
              </p>
              <div onClick={() => router.push("/createShop")}>
                {" "}
                <button className="py-1 lg:py-3 hover:bg-orange-400 mt-16 px-8 lg:px-12 rounded-full bg-bellefuOrange text-white text-sm lg:text-lg">
                  Create shop
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
          <>
           <div className="px-2 md:px-5 lg:px-10 py-6 ">
          {products?.length===0? 
           <div className="h-full px-2 lg:px-0 ">
          <div className="border mx-auto mt-2 lg:my-5 rounded-xl w-full lg:w-7/12 h-11/12 ">
            <div className="flex flex-col justify-center mt-24 mb-24 items-center">
              <BsShopWindow className="text-7xl lg:text-9xl mb-5 text-gray-600" />
              <p className="text-sm capitalize lg:text-lg text-gray-600 px-2 text-center">
                You do not have any products in your shop
              </p>
              <div onClick={() => router.push(`/${user.id}`)}>
                {" "}
                <button className="py-1 lg:py-3 hover:bg-orange-400 mt-16 px-8 lg:px-12 rounded-full bg-bellefuOrange text-white text-sm lg:text-lg">
                  Add products
                </button>
              </div>
            </div>
          </div>
        </div>:<TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell className="font-semibold">Product-Name</TableCell>
                  <TableCell className="font-semibold" align="center">
                    Price
                  </TableCell>
                  <TableCell className="font-semibold" align="center">
                    Promo-Price
                  </TableCell>
                  <TableCell className="font-semibold" align="center">
                    Status
                  </TableCell>
                  <TableCell className="font-semibold" align="center">
                    Action
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {products?.map((product, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {product.title?.substring(0, 20) + "...."}
                    </TableCell>
                    <TableCell align="center">{product.price}</TableCell>
                    <TableCell align="center">{product.price}</TableCell>
                    <TableCell align="center">
                      {product.inStock === 1 ? "instock" : "out Of stock"}
                    </TableCell>
                    <TableCell className=" " align="center">
                      <IconButton>
                        <FaRegEdit />
                      </IconButton>
                      <IconButton>
                        <MdOutlineDeleteOutline />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>}
        </div>
          </>
       
      )}
    </div>
  );
}
shop.Layout = Layout;
export default shop;
