import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


const Contact = () => {
    return(
        <>
           <div>
                <h1 className="cont">Let's keep in touch</h1>
                <hr /><br />
                <h2 className="cont2">Contact me on: </h2>

           </div><br /> 
           <div>
                    <ul>
						<div className="flex gap-6 pb-5 justify-center items-center text-center">
                            <a href="mailto: mdieuveillesuthi@gmail.com">
                                 <FaEnvelope className="text-5xl cursor-pointer hover:text-blue-600" />
                            </a>
                            <a href="https://www.linkedin.com/in/dieuveille-suthi-mpounkouo/">
                                 <FaLinkedin className="text-5xl cursor-pointer hover:text-blue-600" />
                            </a> 
							
						</div>
					</ul>
           </div><br /> 
        </>
    )
}

export default Contact;