import React, { useState } from 'react';
import './../App.css'

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        address: '',
        terms: false,
        newsletter: false,
    });
    
    const [errors, setErrors] = useState({});
    const [showModal, setShowModal] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        if (formData.password !== formData.confirmPassword) 
            newErrors.confirmPassword = 'Passwords must match';
        if (!formData.phone) newErrors.phone = 'Phone number is required';
        if (!formData.address) newErrors.address = 'Address is required';
        if (!formData.terms) newErrors.terms = 'You must agree to the terms';
        
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateForm();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        } else {
            console.log('Form submitted', formData);
            setErrors({});
            // Handle form submission
        }
    };

    const toggleModal = () => {
        setShowModal(!showModal);
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
            phone: '',
            address: '',
            terms: false,
            newsletter: false,
        });
        setErrors({});
    };

    return (
        <div>
            <button onClick={toggleModal}>Open Registration Form</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={toggleModal}>&times;</span>
                        <form onSubmit={handleSubmit}>
                            <h2>Registration Form</h2>
                            <label>Name:</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} />
                            {errors.name && <span className="error">{errors.name}</span>}
                            
                            <label>Email:</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                            {errors.email && <span className="error">{errors.email}</span>}
                            
                            <label>Password:</label>
                            <input type="password" name="password" value={formData.password} onChange={handleChange} />
                            {errors.password && <span className="error">{errors.password}</span>}
                            
                            <label>Confirm Password:</label>
                            <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
                            {errors.confirmPassword && <span className="error">{errors.confirmPassword}</span>}
                            
                            <label>Phone Number:</label>
                            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
                            {errors.phone && <span className="error">{errors.phone}</span>}
                            
                            <label>Address:</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} />
                            {errors.address && <span className="error">{errors.address}</span>}
                            
                            <label>
                                <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} />
                                I agree to the terms and conditions
                            </label>
 {errors.terms && <span className="error">{errors.terms}</span>}
                            
                            <label>
                                <input type="checkbox" name="newsletter" checked={formData.newsletter} onChange={handleChange} />
                                Subscribe to the newsletter
                            </label>
                            
                            <button type="submit">Register</button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RegistrationForm;
