import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import {FaRegEdit} from "react-icons/fa";
import {MdOutlineDeleteOutline} from "react-icons/md";
import { profileDetails } from "../../features/bellefuSlice";
import { useSelector } from "react-redux";
import axios from "axios";


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

function shop({thin}) {
    const user = useSelector(profileDetails);
  const router = useRouter();

  const [products, setProducts] = useState([]);
  
   
  useEffect(() => {
   axios.get(`https://bellefu.inmotionhub.xyz/api/shop/view/single/${user.shopId}`).then((res)=>{
       setProducts(res.data.data);
   }).then((err)=>{
       console.log(err);
   })
  }, [])
  
  return (
    <div className="rounded-lg md:mt-5 mt-2 bg-bellefuWhite   h-auto w-full md:w-auto">
      <div className="flex justify-between  px-10 md:py-6 py-2 border-b">
        <h1 className="font-semibold">My Profile Details</h1>
      </div>
      <div className="px-10 py-6 ">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="font-semibold">Product-Name</TableCell>
                <TableCell className="font-semibold" align="center">Price</TableCell>
                <TableCell className="font-semibold" align="center">Promo-Price</TableCell>
                <TableCell className="font-semibold" align="center">Status</TableCell>
                <TableCell className="font-semibold" align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {products?.map((product,index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {product.title?.substring(0,20)+  "...."}
                  </TableCell>
                  <TableCell align="center">{product.price}</TableCell>
                  <TableCell align="center">{product.price}</TableCell>
                  <TableCell align="center">{product.inStock===1?"instock":"out Of stock"}</TableCell>
                  <TableCell className=" " align="center"><IconButton><FaRegEdit/></IconButton><IconButton><MdOutlineDeleteOutline/></IconButton></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
shop.Layout = Layout;
export default shop;

