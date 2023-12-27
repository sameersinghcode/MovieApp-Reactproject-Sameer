import { useLocation } from "react-router-dom";
import { useState } from "react";


const BookTickets = () => {
    const location = useLocation();
    const singleShow = location.state?.singleShow;
   
    const [customerName, setCustomerName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
   
    const handleSubmit = (e) => {
      e.preventDefault();
      // Here you can handle the form submission, e.g. save the data locally
    };
   
    if (!singleShow) {
      return <div>Loading...</div>; // Or any other loading indicator
    }
   
    return (
      <div className="booking-page">
        <img src={singleShow.image.medium} alt={singleShow.name} />
        <h1>{singleShow.name}</h1>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Book Ticket</button>
        </form>
      </div>
    );
   };
   
   export default BookTickets;