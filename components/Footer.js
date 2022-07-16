import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


function Footer() {
	return (
		<>
        <div className="footer">
			<div className=" h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-10 ">
				<div className="p-5">
					<ul>
						<div className="flex gap-6 pb-5 justify-center items-center text-center">
                            <a href="https://www.linkedin.com/in/dieuveille-suthi-mpounkouo/">
                                 <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
                            </a> 
							<a href="mailto: mdieuveillesuthi@gmail.com">
                                 <FaEnvelope className="text-2xl cursor-pointer hover:text-yellow-600" />
                            </a>
                            <a href="https://github.com/DieuveilleSuthi">
                                 <FaGithub className="text-2xl cursor-pointer hover:text-red-600" />
                            </a>
						</div>
					</ul>
                    <h1 className=" text-gray-800 font-semibold justify-center items-center text-center">
					    Dieuveille MPOUNKOUO ©2022
				  </h1>
				</div>
			</div>
        </div>
		</>
	);
}

export default Footer;