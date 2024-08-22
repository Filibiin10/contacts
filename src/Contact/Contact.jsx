
// import React, { useState } from 'react';
import axios from 'axios';
// import tailwind from 'tailwind';
// const Contact = () => {
//     const [formData, setFormData] = useState({
//         firstname: '',
//         lastname: '',
//         address: '',
//         country: '',
//         city: '',
//         gender: '',
//         date: '',
//         bloodGroup: '',
//         email: ''
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post("http://localhost:5000/api/contact", formData);
//             console.log(formData);
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     };

//     return (
//         <>
//             <div className="container mx-auto py-5">
//                 <div className="text-center">
//                     <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
//                 </div>
//                 <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <input type="text" className="form-control my-2 p-2 border rounded" name="firstname" placeholder="Firstname" onChange={handleChange} />
//                         <input type="text" className="form-control my-2 p-2 border rounded" name="lastname" placeholder="Lastname" onChange={handleChange} />
//                     </div>
//                     <input type="text" className="form-control my-2 p-2 border rounded w-full" name="address" placeholder="Address" onChange={handleChange} />
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <input type="text" className="form-control my-2 p-2 border rounded" name="country" placeholder="Country" onChange={handleChange} />
//                         <input type="text" className="form-control my-2 p-2 border rounded" name="city" placeholder="City" onChange={handleChange} />
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <input type="text" className="form-control my-2 p-2 border rounded" name="gender" placeholder="Gender" onChange={handleChange} />
//                         <input type="date" className="form-control my-2 p-2 border rounded" name="date" onChange={handleChange} />
//                     </div>
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <select name="bloodGroup" className="form-control my-2 p-2 border rounded" onChange={handleChange}>
//                             <option value="">Select Blood Group</option>
//                             <option value="A">A</option>
//                             <option value="B">B</option>
//                             <option value="AB">AB</option>
//                             <option value="O">O</option>
//                         </select>
//                         <input type="email" className="form-control my-2 p-2 border rounded" name="email" placeholder="Email" onChange={handleChange} />
//                     </div>
//                     <button type="submit" className="bg-blue-500 text-white p-2 rounded mt-4 hover:bg-blue-600 w-full">Submit</button>
//                 </form>
//             </div>
//             <div className="container mx-auto py-5">
//                 <div className="text-center">
//                     <h2 className="text-3xl font-bold mb-4">Notice</h2>
//                 </div>
//                 <div className="bg-white shadow-md rounded-lg p-4 border border-gray-200">
//                     <ul className="list-disc list-inside">
//                         <li>Rh-positive blood can be given to Rh-positive or Rh-negative recipients.</li>
//                         <li>Rh-negative blood should only be given to Rh-negative recipients.</li>
//                         <li>Ensuring proper blood type compatibility is essential to minimize complications and ensure the safety of blood transfusions.</li>
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Contact;

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        address: '',
        country: '',
        city: '',
        bloodGroup: '',
        date: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Handle form submission here
        try {
            const response = await axios.post("http://localhost:5000/api/contact", formData);
                        console.log(formData);
                    } catch (error) {
                        console.error('Error submitting form:', error);
                    }
        console.log(formData);
    };

    return (
        <div className="container mt-5">
            <div className="text-center mb-4">
                <h2 className="font-weight-bold">Register</h2>
                <p>Create your account. It's free and only takes a minute.</p>
            </div>
            <form onSubmit={handleSubmit} className="shadow-lg p-4 rounded bg-white">
                <div className="row mb-3">
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="firstname"
                            className="form-control"
                            placeholder="First Name"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="lastname"
                            className="form-control"
                            placeholder="Last Name"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        onChange={handleChange}
                    />
                </div>
                <div className="row mb-3">
                <div className="col-md-6">
                    <input
                        type="text"
                        name="address"
                        className="form-control"
                        placeholder="Address"
                        onChange={handleChange}
                    />
                </div>
                <div className="col-md-6">
                    <input
                        type="text"
                        name="gender"
                        className="form-control"
                        placeholder="Gender"
                        onChange={handleChange}
                    />
                </div>
                </div>
               
                <div className="row mb-3">
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="country"
                            className="form-control"
                            placeholder="Country"
                            onChange={handleChange}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="city"
                            className="form-control"
                            placeholder="City"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <div className="col-md-6">
                        <select
                            name="bloodGroup"
                            className="form-control"
                            onChange={handleChange}
                        >
                            <option value="">Select Blood Group</option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                            <option value="AB">AB</option>
                            <option value="O">O</option>
                        </select>
                    </div>
                    <div className="col-md-6">
                        <input
                            type="date"
                            name="date"
                            className="form-control"
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <button 
    type="submit" 
    className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700 transition duration-200"
>
    Register Now
</button>
            </form>
        </div>
    );
};

export default Contact;