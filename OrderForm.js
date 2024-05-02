import React, { useState } from 'react';
import axios from 'axios';
const OrderForm = () => {
 const [formData, setFormData] = useState({
 products: [],
 name: '',
 address: '',
 city: '',
 country: ''
 }); 
 const handleProductChange = (e) => {
 const { value } = e.target;
 setFormData({ ...formData, products: value });
 };
 const handleShippingChange = (e) => {
 const { name, value } = e.target;
 setFormData({ ...formData, [name]: value });
 };
 const handleSubmit = async (e) => {
 e.preventDefault();
 try {
 const res = await axios.post('http://localhost:5000/orders', formData);
 console.log(res.data);
 } catch (error) {
 console.error(error);
 }
};
 return (
 <div>
 <h2>Customer Order Form</h2>
 <form onSubmit={handleSubmit}>
 <label>Select Products:</label><br />
 <select multiple onChange={handleProductChange} required>
 <option value="Product 1">Product 1</option>
 <option value="Product 1">Product 2</option>
 <option value="Product 2">Product 3</option>
 </select><br />
 <input type="text" name="name" placeholder="Name" value={formData.name} 
onChange={handleShippingChange} required /><br />
 <input type="text" name="address" placeholder="Address" 
value={formData.address} onChange={handleShippingChange} required /><br />
 <input type="text" name="city" placeholder="City" value={formData.city} 
onChange={handleShippingChange} required /><br />
 <input type="text" name="country" placeholder="Country" 
value={formData.country} onChange={handleShippingChange} required /><br />
 <button type="submit">Submit Order</button>
 </form>
 </div>
 );
};
export default OrderForm;