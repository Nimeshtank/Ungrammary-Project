
import React, { useState } from 'react';
import './Form.css';
import formImage from "./Images/formImage.png";
import pathImage from "./Images/Path 19588.svg";
import gridImage from "./Images/Repeat Grid 82.svg";


export default function Form() {

    const initialValues = { phone: "", country: "", username: "", email: "", massage: "" };

    const [formValue, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmmited, setIsSubmitted] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValue, [name]: value });
        // console.log(formValue);
    };


    const handleSubmit = (values) => {
        values.preventDefault();
        setFormErrors(Validate(formValue));
        setIsSubmitted(true);
        console.log(formErrors);
    };

    const Validate = (values) => {
        const error = {};
        const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const nameRegex = /^[^ !"`'#%&,:;<>=@{}~\$\(\)\*\+\/\\\?\[\]\^\|]+$/;
        const phoneRegex = /^[0-9]+$/;
        // const phoneRegex = /^[ A-Za-z_@./#&+-]*$/;


        if (!values.username) {
            error.username = "username is required";

        }
        else if (!nameRegex.test(values.username)) {
            error.username = "Special Characters not allowed";
        }
        if (!values.email) {
            error.email = "email is required";
        } else if (!emailRegex.test(values.email)) {
            error.email = "Not a valid email";
        }
        if (!values.phone) {
            error.phone = "Phone number is required";
        } else if (!phoneRegex.test(values.phone)) {
            error.phone = "Alphabets not allowed"
        }

        return error;
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col-sm abc">

                    <div>
                        <img src={formImage} alt='formimg' className='formimg'></img>
                        <div> <img src={pathImage} alt='pathimg' className='pathimg'></img>
                            <div> <img src={gridImage} alt='gridimg' className='gridimg'></img></div>
                        </div>
                    </div>

                </div>
                <div className="col-sm frm">
                    <form onSubmit={handleSubmit} >
                        <div className='container2'>
                            {/* <div className="col-md-4 mt-5"> */}
                            <div className="textOnInput mt-2 mb-5">
                                <label for="inputText"><p className='para'>Hi, let's get in touch.</p></label>

                            </div>
                            <div className="textOnInput ">
                                <label for="inputText" className="upText">Phone no.</label>
                                <input className={formErrors.hasOwnProperty('phone') ? 'form-control invalid' : 'form-control'} type="text" placeholder='999999 9999' onChange={handleChange} value={formValue.phone} name='phone' />
                                <p className='errorMsg'>{formErrors.phone}</p>
                            </div>

                            <div className="textOnInput ">
                                <label for="inputText" className="upText">Select Country</label>
                                <input className="form-control" type="text" onChange={handleChange} value={formValue.country} name='country' />

                            </div>

                            <div className="textOnInput ">
                                <label for="inputText" className="upText">Enter name</label>
                                <input className={formErrors.hasOwnProperty('username') ? 'form-control invalid' : 'form-control'} type="text" onChange={handleChange} value={formValue.username} name='username' />
                                <p className='errorMsg'>{formErrors.username}</p>
                            </div>

                            <div className="textOnInput ">
                                <label for="inputText" className="upText">Email Address</label>
                                <input className={formErrors.hasOwnProperty('email') ? 'form-control invalid' : 'form-control'} type="text" onChange={handleChange} value={formValue.email} name='email' />
                                <p className='errorMsg'>{formErrors.email}</p>
                            </div>
                            <textarea placeholder='massage' className='m-3 textAr' onChange={handleChange} value={formValue.massage} name='massage' />
                            <button type="submit" className="submit">Submit</button>

                        </div>
                    </form>
                </div>


            </div >
        </div >
    );
}
