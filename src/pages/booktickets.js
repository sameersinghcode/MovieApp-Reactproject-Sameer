import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';

const BookTickets = () => {
 const location = useLocation();
 const singleShow = location.state?.singleShow;

 const [customerName, setCustomerName] = useState("");
 const [phoneNumber, setPhoneNumber] = useState("");
 const [email, setEmail] = useState("");
 const [isScriptLoaded, setIsScriptLoaded] = useState(false);
 const [orderId, setOrderId] = useState(null);

 useEffect(() => {
   const script = document.createElement('script');
   script.src = 'https://checkout.razorpay.com/v1/checkout.js';
   script.async = true;
   script.onload = () => {
     setIsScriptLoaded(true);
   };
   document.body.appendChild(script);
 }, []);

 const handleCreateOrder = async () => {
   try {
     const response = await axios.post('https://api.razorpay.com/v1/orders', {
       amount: 50000, // Amount in paise
       currency: 'INR',
       receipt: 'order_rcptid_11'
     }, {
       auth: {
         username: 'rzp_test_q5uD8SSpXDHR5f',
         password: 'XQyxA0Y88pFIsosvTaW2KSGT'
       }
     });

     setOrderId(response.data.id);
   } catch (error) {
     console.error("Error creating order:", error);
   }
 };

 const handleSubmit = async (e) => {
   e.preventDefault();

   if (!orderId) {
     await handleCreateOrder();
   }

   const options = {
     key: 'rzp_test_q5uD8SSpXDHR5f',
     name: "Sameer Movie Company",
     currency: 'INR',
     amount: 50000,
     order_id: orderId,
     handler: function (response) {
       console.log(response);
       // TODO: Handle payment success here
     },
     prefill: {
       name: customerName,
       email: email,
       contact: phoneNumber,
     },
   };

   const rzp1 = new window.Razorpay(options);
   rzp1.open();
 };

 if (!singleShow) {
   return <div>Loading...</div>; // Or any other loading indicator
 }

 return (
   <div className="booking-page">
     <img src={singleShow.image.medium} alt={singleShow.name} />
     <h1>{singleShow.name}</h1>
     <form>
       <input
         type="text"
         placeholder="Customer Name"
         value={customerName}
         onChange={(e) => setCustomerName(e.target.value)}
       />
       <input
         type="tel"
         placeholder="Phone Number"
         value={phoneNumber}
         onChange={(e) => setPhoneNumber(e.target.value)}
       />
       <input
         type="email"
         placeholder="Email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
       />
       <button type="button" onClick={handleSubmit}>Book Ticket</button>
     </form>
   </div>
 );
};

export default BookTickets;
