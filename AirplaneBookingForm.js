import React, { useState } from 'react';
export const AirplaneBookingForm = () => {
  const [formData, setFormData] = useState({
    departure: '',
    destination: '',
    departureDate: '',
    returnDate: '',
    passengers: 1,
    class: 'economy'
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Displaying an alert message
    alert('Your booking is on the way!');
    // You can add your logic for handling form submission here
  };
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '400px', margin: 'auto', padding: '20px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', borderRadius: '5px' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Airplane Ticket Booking</h2>
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Departure:
          <input type="text" name="departure" value={formData.departure} onChange={handleInputChange} required style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Destination:
          <input type="text" name="destination" value={formData.destination} onChange={handleInputChange} required style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Departure Date:
          <input type="date" name="departureDate" value={formData.departureDate} onChange={handleInputChange} required style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Return Date:
          <input type="date" name="returnDate" value={formData.returnDate} onChange={handleInputChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Passengers:
          <input type="number" name="passengers" value={formData.passengers} min="1" onChange={handleInputChange} required style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }} />
        </label>
        <label style={{ display: 'block', marginBottom: '10px' }}>
          Class:
          <select name="class" value={formData.class} onChange={handleInputChange} style={{ width: '100%', padding: '8px', borderRadius: '5px', border: '1px solid #ccc' }}>
            <option value="economy">Economy</option>
            <option value="business">Business</option>
            <option value="first">First Class</option>
          </select>
        </label>
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Book Now</button>
      </form>
    </div>
  );
};

export default AirplaneBookingForm;
