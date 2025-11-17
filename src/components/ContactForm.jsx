import React, { useState } from "react";
import "./ContactForm.css";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(form);
    };

    return (
        <>
            <form className="contact-form" onSubmit={handleSubmit}>
                <h2 className="form-title">Contact Us</h2>

                <div className="field">
                    <label>Name</label>
                    <input name="name" value={form.name} onChange={handleChange} />
                </div>

                <div className="field">
                    <label>Email</label>
                    <input name="email" value={form.email} onChange={handleChange} />
                </div>

                <div className="field">
                    <label>Phone</label>
                    <input name="phone" value={form.phone} onChange={handleChange} />
                </div>

                <div className="field">
                    <label>Message</label>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                    />
                </div>

                <button className="submit-btn" type="submit">Send</button>
            </form>

         
        </>
    );

}
