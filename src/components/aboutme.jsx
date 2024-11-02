import { useState } from "react";
import img from "../assets/Farraos.jpg"
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { MdOutlineCloseFullscreen } from "react-icons/md";
import { motion } from "framer-motion";


export default function AboutMe() {
    const [notification, setNotification] = useState(true)

    const handlenotif = () => {
        setNotification(!notification)
    }

    return (
        <div className="flex items-center justify-center">
            <div className="p-5 mt-48 sm:w-[1150px] flex flex-col justify-center items-center gap-5">
                {
                    notification && (
                        <motion.div className="absolute bg-white/50 backdrop-blur-sm border-[1px] p-2 top-3 rounded-[10px] text-[16px] flex gap-5 shadow-md"
                            initial={{ opacity: 1, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: "easeInOut", damping: 10, stiffness: 100 }}
                        >
                            <p>WEBSITE UNDER DEVELOPMENT !</p>
                            <button onClick={handlenotif} ><MdOutlineCloseFullscreen /></button>
                        </motion.div>
                    )
                }
                <div className="w-[200px] h-[200px] rounded-full  overflow-hidden">
                    <img src={img} alt="" className="w-full h-full object-cover" />
                </div>
                <p className="font font-bold text-[24px]">Hallo! i'm Muhammad Farraos Abdillah</p>
                <p className="text-center ">
                    Graduate in Visual Communication Design Major with a strong foundation in 3D Motion, Animation, and VFX, where I've spent years crafting visually immersive experiences. Recently, I've channeled my passion for design into Fullstack Web Development, gaining expertise in both frontend and backend technologies. This unique blend of visual artistry and technical skill enables me to build modern web applications that are not only functional but also rich in engaging, interactive visual elements. Committed to continuous growth, I stay on top of the latest web development trends, aiming to deliver responsive, high-impact digital experiences that fuse visual storytelling with cutting-edge web technologies.
                </p>
                <div className="mb-40 flex flex-wrap gap-5">
                    <a href="https://www.linkedin.com/in/mfarraosabdillah" target="_blank">
                        <FaLinkedin size={28} color="grey" />
                    </a>
                    <a href="https://www.instagram.com/m.farraos/">
                        <FaInstagramSquare size={28} color="grey" />
                    </a>
                </div>
            </div>
        </div>
    )
}