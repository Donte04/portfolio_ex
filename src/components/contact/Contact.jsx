import "./contact.css";
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Address from "../../img/address.png";
import { useRef, useState, useContext } from "react";
import emailjs from 'emailjs-com';
import { ThemeContext } from "../../context";


const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_cceod7d', 'template_8n3g225', formRef.current, 'user_KTLqiMt39slbtRCD8m4OO')
            .then((result) => {
                console.log(result.text);
                setDone(true);
            }, (error) => {
                console.log(error.text);
        });

    }
    return (
        <div className="c">
            <div className="c-bg"></div>
            <div className="c-wrapper">
                <div className="c-left">
                    <h1 className="c-title">Let's discuss your project</h1>
                    <div className="c-info">
                        <div className="c-info-item">
                            <img 
                                src={Phone} 
                                alt="" 
                                className="c-icon" 
                            />
                            +261 34 99 006 65
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Email} 
                                alt="" 
                                className="c-icon" 
                            />
                            ramamsess@gmail.com
                        </div>
                        <div className="c-info-item">
                            <img 
                                src={Address} 
                                alt="" 
                                className="c-icon" 
                            />
                            Analamanga
                        </div>
                    </div>
                </div>
                <div className="c-right">
                    <p className="c-desc">
                        <b>Description</b> Lorem ipsum dolor sit amet 
                        consectetur adipisicing elit. Praesentium, 
                        inventore. Vel voluptatum laboriosam.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            name="user_name"
                            style={{background: darkMode && "#333"}}  
                        />
                        <input 
                            type="text" 
                            placeholder="Subject" 
                            name="user_subject"
                            style={{background: darkMode && "#333"}} 
                        />
                        <input 
                            type="text" 
                            placeholder="Email" 
                            name="user_email"
                            style={{background: darkMode && "#333"}} 
                        />
                        <textarea rows="5" 
                            placeholder="Message" 
                            name="message"
                            style={{background: darkMode && "#333"}} 
                        />
                        <button>Submit</button>
                        {done && "Message sent, thank you."}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;