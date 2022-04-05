import React, { useState } from "react";
import { MdLocationOn, MdOutlineWarningAmber } from "react-icons/md";
import { GiHearts } from "react-icons/gi";
import { IoWarningOutline } from "react-icons/io";
import { MdOutlineMessage, MdCall } from "react-icons/md";
import { useSelector } from 'react-redux'
import { Modal, Typography, Divider, Box, Button } from '@mui/material'
import { apiData } from '../../../constant'
import axios from 'axios'
import { toast } from 'react-toastify'


const FavouriteProduct = ({ product }) => {
  const [open, setOpen] = useState(false)
  const [favId, setFavId] = useState(null)


  const details = useSelector(state => state.bellefu.indexData)

  const remove = () => {
    axios.post(`${apiData}delete/favorite`, {
      favoriteId: favId,
    })
      .then(res => {
        if (res.data.status) {
          toast.info('Product removed from favourite')
          setOpen(false)
        }
      })



  }

  const edit = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 280,
    bgcolor: 'background.paper',
    boxShadow: 24,
    borderRadius: 3,
    paddingTop: 2
  }

  return (
    <div className="bg-bellefuWhite mb-5 p-3 rounded-b-md">
      <img src={`https://bellefu.inmotionhub.xyz/get/product/image/${product.images[0]}`} className="rounded-md w-full h-44 object-cover" />
      <p className="capitalize text-medium">{product.title.substring(0, 20)}</p>
      <div className="flex items-center space-x-2">
        <MdLocationOn className="w-4 h-4 text-bellefuBlack1" />
        <div className="flex items-center space-x-1">
          {/* <p className="text-bellefuBlack1 text-sm capitalize">
            {product.state},
          </p> */}
          <p className="text-bellefuBlack1 text-sm capitalize">
            {product.country_name}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-bellefuGreen flex font-poppins font-semibold">
          <p
            className="mr-1"
            dangerouslySetInnerHTML={{ __html: details?.defaultCurrency }}
          />   {product.price}
        </p>
        <GiHearts onClick={() => {
          setOpen(true)
          setFavId(product.FavId)
        }} className="w-5 h-5 text-bellefuOrange" />

        <Modal
          open={open}
          onClose={() => setOpen(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        // sx={{ opacity: 0.5 }}
        >
          <Box sx={edit}>
            <Box sx={{ margin: 'auto 42%' }}>
              {/* <WarningAmberIcon sx={{ fontSize: 50 }} /> */}
              <MdOutlineWarningAmber className='text-6xl' />
            </Box>
            <Divider sx={{ mb: 5 }} />

            <Typography sx={{ p: 1, ml: 1, mb: 6 }} variant="p"> Do you want to remove this Product from favorite ? </Typography>



            <Divider sx={{ mt: 2, mb: 2 }} />
            <Box sx={{ mt: 5, display: "flex", bgColor: 'grey', justifyContent: 'space-between', m: 4, mb: 5 }}>
              <Button onClick={() => setOpen(false)}>cancel</Button>
              <Button color='error' onClick={remove} >Remove</Button>
            </Box>
          </Box>
        </Modal>



      </div>
      <div className="flex items-center space-x-3 mt-2">
        <button className="bg-bellefuOrange rounded-md w-full flex items-center justify-center py-4">
          <MdOutlineMessage className="text-white" />
        </button>
        <button className="bg-bellefuGreen w-full flex items-center justify-center py-4 rounded-md">
          <MdCall className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default FavouriteProduct;
