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
                <p className="font font-bold text-[24px]">Hallo! saya Muhammad Farraos Abdillah</p>
                <p className="text-center ">
                    Merupakan lulusan Desain Komunikasi Visual dengan spesialisasi di bidang 3D Motion, 3D Animation, dan 3D VFX. Selama beberapa tahun, saya fokus pada berbagai aspek visual 3D, termasuk modeling, texturing, animasi, dan efek visual. Namun, dalam beberapa bulan terakhir, saya memutuskan untuk memperluas kemampuan saya dengan mendalami ilmu pengembangan website, baik dari sisi frontend maupun backend. Saat ini, saya tetap tekun dan fokus dalam mengembangkan pengetahuan serta keterampilan saya di bidang web development, dengan tujuan untuk mengintegrasikan keahlian visual yang saya miliki dengan teknologi web yang terus berkembang. Serta terus belajar dan mengembangkan diri tentang update terkini di dunia web development.
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