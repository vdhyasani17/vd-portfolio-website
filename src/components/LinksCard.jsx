import React from 'react'
import { VscFile } from "react-icons/vsc";
import { FaRegFileLines, FaGithub, FaLinkedinIn, FaPaperPlane } from "react-icons/fa6";
import { IoPaperPlane } from "react-icons/io5";

const iconColors = "text-blue-950";
const iconLinkGap = "gap-x-7";

const elements = [
    {
        link: "/VD_Resume.pdf",
        icon: <FaRegFileLines className={`w-6 h-6 ${iconColors}`} />,
        title: "Resume",
        subtitle: "View my resume"
    },
    {
        link: "https://github.com/vdhyasani17",
        icon: <FaGithub className={`w-6 h-6 ${iconColors}`} />,
        title: "Github",
        subtitle: "View my projects"
    },
    {
        link: "https://www.linkedin.com/in/vasista-dhyasani/",
        icon: <FaLinkedinIn className={`w-6 h-6 ${iconColors}`} />,
        title: "LinkedIn",
        subtitle: "Connect with me on LinkedIn"
    },
    {
        link: "mailto:vdhyasani@gmail.com",
        icon: <IoPaperPlane className={`w-6 h-6 ${iconColors}`} />,
        title: "Email",
        subtitle: "Shoot me an email"
    },
];

const LinksCard = () => {
    return (
        <div>
            <div className='card bg-gray-500 transition rounded-lg flex flex-col'>
                {elements.map(e => <a
                    href={e.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className={`flex flex-row ${iconLinkGap} transition transform hover:scale-102 hover:underline decoration-amber-100 p-4 rounded-lg hover:bg-amber-400/25 pr-48`}>
                        <div className="w-12 h-12 rounded-full bg-amber-400 flex items-center justify-center">
                            {e.icon}
                        </div>
                        <div className="text-left">
                            <h2 className="text-xl font-semibold text-white">{e.title}</h2>
                            <p className="text-gray-300">{e.subtitle}</p>
                        </div>
                    </div>
                </a>)}
            </div>
        </div>
    )
}

export default LinksCard