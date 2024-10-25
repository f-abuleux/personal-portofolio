import { FaLinkedin, FaInstagramSquare, FaBehanceSquare } from "react-icons/fa";


export default function KnowsMeBetter() {
    return (
        <div className="flex items-center justify-center">
            <div className="p-5 mt-10 sm:w-[1150px] flex flex-col  gap-5">
                <p className="font font-bold text-[24px]">Knows Me Better</p>
                <p>Work as a team!!!</p>
                <div>
                    <p className="text-left "><span className="font-bold">Email</span> : zqr.farraosohaada@gmail.com </p>
                    <p className="text-left "><span className="font-bold">Phone</span> : +62 877 22707465 </p>
                </div>
                <div className="mb-40 flex flex-wrap gap-5">
                    <a href="https://www.linkedin.com/in/mfarraosabdillah" target="_blank">
                        <FaLinkedin size={28} color="grey" />
                    </a>
                    <a href="https://www.instagram.com/m.farraos/">
                        <FaInstagramSquare size={28} color="grey" />
                    </a>
                    <a href="https://www.behance.net/farosabdillah">
                        <FaBehanceSquare size={28} color="grey" />
                    </a>
                </div>
            </div>
        </div>
    )
}