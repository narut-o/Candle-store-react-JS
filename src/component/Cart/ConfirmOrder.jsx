// import React from 'react';
// import './ConfirmOrder.css';
// import CheckoutStep from './CheckoutStep';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import MetaData from '../layout/MetaData';
// import axios from 'axios';







// const ConfirmOrder = () => {

//     const {shippingInfo,cartItems} = useSelector(state=>state.cart);
//     const {user}  = useSelector(state=>state.user)
//     const navigate = useNavigate();
//     const editAddress = ()=>{
//         navigate('/shipping');
//     }

//     let subtotal = cartItems.reduce((acc,cartItems)=>acc+cartItems.price*cartItems.quantity,0);
//     const discount = Math.floor(subtotal*0.2);
//     const tax = Math.floor(subtotal*0.18);
//     const delivery = subtotal>2000?0:199;
//     const total = subtotal-discount+tax+delivery;

//     // async function reqPayment(){
//     //    const {data} = await createPayment(cartItems,shippingInfo,user);
       
//     //    window.location.replace(data.url);


//     // }
    
//     // async function reqRazorPayment(){
//     //       const {data} = await createRazorPayment(total,shippingInfo,user);
       
//     //       window.location.replace(data.url);
//     // }
   
//    const checkoutHandler = async (amount)=>{
//       const {data:{order}} = await axios.post('http://localhost:4000/api/v1/payment/checkout',{amount,shippingInfo,cartItems,user});
//       const {data:{key}} = await axios.get('http://localhost:4000/api/v1/getkey');
//       const options = {
//     key:key, // Enter the Key ID generated from the Dashboard
//     amount: order.amount, // Amount is in currency subunits. 
//     currency: "INR",
//     name: "Kiran wax studio", //your business name
//     description: "Test Transaction",
//     image: "https://res.cloudinary.com/dlozyi9yd/image/upload/v1764971605/WhatsApp_Image_2025-11-18_at_18.17.20_yjftfa.jpg",
//     order_id: order.id, // This is a sample Order ID. Pass the `id` obtained in the response of Step 1
//     callback_url: "http://localhost:4000/api/v1/payment/paymentverification",
//     prefill: { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
//         "name": "Gaurav Kumar", //your customer's name
//         "email": "gaurav.kumar@example.com",
//         "contact": "+919876543210" //Provide the customer's phone number for better conversion rates 
//     },
//     notes: {
//         "address": "Razorpay Corporate Office"
//     },
//     theme: {
//         "color": "#3399cc"
//     }
    
// };
// const razor = new window.Razorpay(options);
// razor.open();
     
//    }
//     // const proceedToPayment = ()=>{
//     //     const data = {
//     //         subtotal,
//     //         tax,
//     //         total
//     //     }
//     //     sessionStorage.setItem('orderInfo',JSON.stringify(data));

//     //     reqPayment();
//     // }

//   return (
//    <>
//     <MetaData title='Confirm Order' />
//     <CheckoutStep activeStep={1} />
//     <div className='confirm-order-page' >
//     <div className='cart-items' >
//     <div className='cart-summary'>
//     <h4>Summary Order</h4>
//      <p>Check you cart items</p>
//     </div>
//      <div className='order-items' >
//      {cartItems&&cartItems.map((item)=>(
//         <div className='item' >
//         <div className='item-image'>
//         <img src={item.image} alt='product'/>
//      </div>
//      <div className='item-name' >
//      <h4>{item.name}</h4>
//      <p>{item.quantity} x {item.price}</p>
//      </div>
//      <div className='item-price' >
//       <h4>₹ {item.quantity*item.price}</h4>
//      </div>
//     </div>
//     ))}
//      </div>
//     </div>
//     <div className='shipping-info'>
//       <div className='shipping-info-summary' >
//      <h4> Delivery Details</h4>
//      <p>Check your address and proceed to the next page to make payment </p>
//       </div>
//       <div className='address-box' >
//       <div className='address-breakup' >
//       <div className='address' >
//        <div className='address-name' >
//        <h4>Delivery</h4>
//       <p>{user.name},</p>
//       <p>{shippingInfo.phoneNo}</p>
//       <p>{shippingInfo.address}</p>
//       <p>{shippingInfo.city} ({shippingInfo.pinCode})</p>
//       <p>{shippingInfo.state}</p>
//        </div>
//       </div>
//       </div>

//       </div>
//       <div className='price-break' >
//       <div className='subtotal' >
//        <div className='subtotal-name' >
//        <h4>Subtotal</h4>
//       <p>Discount</p>
//       <p>Delivery</p>
//       <p>tax</p>
//        </div>
//        <div className='subtotal-value' >
//       <h4>₹ {subtotal}</h4>
//       <p>₹ {discount}</p>
//       <p>{subtotal>2000?'Free':'₹ 199'}</p>
//       <p>₹ {tax}</p>
//        </div>
//       </div>
//       <div className='total-price' >
//       <h4>Total</h4>
//        <h4>₹ {total}</h4>
//       </div>
//       <div className='pay' >
//           <button className='payment-btn' onClick={()=>checkoutHandler(total)} >Proceed to payment</button>
//       </div>
//       <div className='edit-address' >
//       <button onClick={editAddress} className='edit-btn' >Edit Address</button>
//       </div>

//       </div>
//     </div>
  
//     </div>
//    </>
//   )
// }

// export default ConfirmOrder
// ConfirmOrder.jsx
import React from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

import CheckoutStep from "./CheckoutStep";
import MetaData from "../layout/MetaData";

const fontFamily =
  '-apple-system, BlinkMacSystemFont, "SF Pro Text", system-ui, sans-serif';

const ConfirmOrder = () => {
  const { shippingInfo, cartItems } = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const editAddress = () => navigate("/shipping");

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const discount = Math.floor(subtotal * 0.2);
  const tax = Math.floor(subtotal * 0.18);
  const delivery = subtotal > 2000 ? 0 : 199;
  const total = subtotal - discount + tax + delivery;

  const checkoutHandler = async (amount) => {
    const {
      data: { order },
    } = await axios.post(
      "http://localhost:4000/api/v1/payment/checkout",
      { amount, shippingInfo, cartItems, user }
    );

    
    const options = {
      key:process.env.REACT_APP_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "Kiran Wax Studio",
      description: "Order Payment",
      image:
        "https://res.cloudinary.com/dlozyi9yd/image/upload/v1764971605/WhatsApp_Image_2025-11-18_at_18.17.20_yjftfa.jpg",
      order_id: order.id,
      callback_url:
        `${process.env.REACT_APP_BACKEND_URL}/payment/paymentverification`,
      prefill: {
        name: user?.name || "Guest User",
        email: user?.email || "customer@example.com",
        contact: shippingInfo?.phoneNo || "",
      },
      notes: {
        address: shippingInfo?.address || "Customer address",
      },
      theme: {
        color: "#0071e3", // Apple blue
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <>
      <MetaData title="Confirm Order" />
      <CheckoutStep activeStep={1} />

      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "#f5f5f7", // Apple-like background
          py: { xs: 4, md: 6 },
          px: 2,
          fontFamily,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={5} alignItems="flex-start">
            {/* LEFT – Summary Order */}
            <Grid item xs={12} md={8}>
              <Typography
                variant="h4"
                sx={{
                  mb: 0.5,
                  fontWeight: 500,
                  letterSpacing: 0.3,
                  fontFamily,
                }}
              >
                Summary Order
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 3, color: "text.secondary", fontFamily }}
              >
                Check your cart items
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  borderRadius: 3,
                  bgcolor: "#ffffff",
                  border: "1px solid #e5e5ea",
                  overflow: "hidden",
                }}
              >
                {cartItems.map((item, index) => (
                  <Box
                    key={item.product}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      px: { xs: 2, md: 3 },
                      py: 2.5,
                      borderBottom:
                        index === cartItems.length - 1
                          ? "none"
                          : "1px solid #f2f2f7",
                    }}
                  >
                    {/* Image */}
                    <Avatar
                      variant="rounded"
                      src={item.image}
                      alt={item.name}
                      sx={{
                        width: 72,
                        height: 72,
                        mr: 2.5,
                        borderRadius: 2,
                      }}
                    />

                    {/* Name + qty */}
                    <Box sx={{ flexGrow: 1 }}>
                      <Typography
                        variant="subtitle1"
                        sx={{
                          fontWeight: 500,
                          mb: 0.5,
                          fontFamily,
                          fontSize: 16,
                        }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ color: "text.secondary", fontFamily }}
                      >
                        {item.quantity} × ₹ {item.price}
                      </Typography>
                    </Box>

                    {/* Line total */}
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                        fontFamily,
                      }}
                    >
                      ₹ {item.quantity * item.price}
                    </Typography>
                  </Box>
                ))}
              </Paper>
            </Grid>

            {/* RIGHT – Delivery + totals */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="h4"
                sx={{
                  mb: 0.5,
                  fontWeight: 500,
                  letterSpacing: 0.3,
                  fontFamily,
                }}
              >
                Delivery Details
              </Typography>
              <Typography
                variant="body2"
                sx={{ mb: 3, color: "text.secondary", fontFamily }}
              >
                Check your address and proceed to the next page to make payment
              </Typography>

              <Paper
                elevation={0}
                sx={{
                  borderRadius: 3,
                  bgcolor: "#ffffff",
                  border: "1px solid #e5e5ea",
                  p: 3,
                }}
              >
                {/* Address box (Apple card style) */}
                <Paper
                  elevation={0}
                  sx={{
                    mb: 3,
                    p: 2.2,
                    borderRadius: 2,
                    bgcolor: "#ffffff",
                    border: "1px solid #e5e5ea",
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      mb: 1,
                      fontWeight: 500,
                      fontFamily,
                      fontSize: 15,
                    }}
                  >
                    Delivery
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily }}>
                    {user?.name},
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily }}>
                    {shippingInfo?.phoneNo}
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily }}>
                    {shippingInfo?.address}
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily }}>
                    {shippingInfo?.city} ({shippingInfo?.pinCode})
                  </Typography>
                  <Typography variant="body2" sx={{ fontFamily }}>
                    {shippingInfo?.state}
                  </Typography>
                </Paper>

                {/* Price breakdown */}
                <Box sx={{ mb: 1.5 }}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ mb: 1 }}
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ fontFamily, fontSize: 15 }}
                    >
                      Subtotal
                    </Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{ fontFamily, fontSize: 15 }}
                    >
                      ₹ {subtotal}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ mb: 0.5 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontFamily }}
                    >
                      Discount
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#34c759", fontFamily }}
                    >
                      - ₹ {discount}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ mb: 0.5 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontFamily }}
                    >
                      Delivery
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily }}>
                      {delivery === 0 ? "Free" : `₹ ${delivery}`}
                    </Typography>
                  </Stack>

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    sx={{ mb: 1.5 }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary", fontFamily }}
                    >
                      Tax
                    </Typography>
                    <Typography variant="body2" sx={{ fontFamily }}>
                      ₹ {tax}
                    </Typography>
                  </Stack>

                  <Divider sx={{ mb: 1.5 }} />

                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="baseline"
                  >
                    <Typography
                      variant="subtitle1"
                      sx={{ fontFamily, fontSize: 15 }}
                    >
                      Total
                    </Typography>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, fontFamily }}
                    >
                      ₹ {total}
                    </Typography>
                  </Stack>
                </Box>

                {/* Buttons */}
                <Box
                  sx={{
                    mt: 3,
                    display: "flex",
                    flexDirection: "column",
                    gap: 1.2,
                  }}
                >
                  <Button
                    fullWidth
                    variant="contained"
                    onClick={() => checkoutHandler(total)}
                    sx={{
                      textTransform: "none",
                      borderRadius: 999,
                      py: 1.1,
                      fontWeight: 500,
                      fontSize: 15,
                      fontFamily,
                      bgcolor: "#0071e3", // Apple blue
                      boxShadow: "none",
                      "&:hover": {
                        bgcolor: "#0077ed",
                        boxShadow: "0 0 0 1px rgba(0,0,0,0.04)",
                      },
                    }}
                  >
                    Proceed to payment
                  </Button>

                  <Button
                    fullWidth
                    variant="outlined"
                    onClick={editAddress}
                    sx={{
                      textTransform: "none",
                      borderRadius: 999,
                      py: 1,
                      fontFamily,
                      borderColor: "#d2d2d7",
                      color: "#1d1d1f",
                      "&:hover": {
                        bgcolor: "#f5f5f7",
                        borderColor: "#a1a1a6",
                      },
                    }}
                  >
                    Edit Address
                  </Button>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default ConfirmOrder;
