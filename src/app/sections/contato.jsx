"use client";

import { useEffect } from "react";
import { FaGithubSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Contato() {
    const copyText = () => {
        const text = "e.rodriguescontact@gmail.com";
        navigator.clipboard.writeText(text)
            .then(() => {
                toast.success("E-mail copiado!", {
                    position: "bottom-right",
                    autoClose: 1500,
                    hideProgressBar: true,
                    style: {
                        width: "300px"
                    },
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
            })
            .catch((err) => {
                toast.error("Erro ao copiar o texto: " + err, {
                    position: "bottom-right",
                    autoClose: 1500,
                    hideProgressBar: true,
                });
            });
    };

    useEffect(() => {
        console.log('Componente carregado no cliente');
    }, []);

    return (
        <div className=" bg-slate-800">
            <footer className=" text-white">
                <section>
                    <ul className="flex h-[191px] justify-evenly items-center">
                        <li className="flex items-center">
                            <button
                                className="copy-button pr-2"
                                onClick={copyText}
                            >
                                <MdEmail fontSize={35} className="transform transition-transform duration-300 hover:scale-110"/>
                            </button>
                            <span className="font-inter text-base text-white/70">e.rodriguescontact@gmail.com</span>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/erick-rodrigues-/" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin fontSize={35} className="cursor-pointer transform transition-transform duration-300 hover:scale-110"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/Erick-BR1" target="_blank" rel="noopener noreferrer">
                                <FaGithubSquare fontSize={35} className="cursor-pointer transform transition-transform duration-300 hover:scale-110"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/erickctc/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram fontSize={35} className="cursor-pointer transform transition-transform duration-300 hover:scale-110"/>
                            </a>
                        </li>
                    </ul>
                </section>
            </footer>
            <ToastContainer />
        </div>
    );
}
