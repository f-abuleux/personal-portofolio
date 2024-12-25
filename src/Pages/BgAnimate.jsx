import { useScroll } from "framer-motion";
import { useEffect, useState } from "react";

export default function BgAnimate() {
    const totalImages = 150; // Total gambar
    const { scrollYProgress } = useScroll(); 
    const [number, setNumber] = useState(1); 
    const [gambar, setGambar] = useState(`/src/assets/solo_portofolio_pp/0001.jpg`);

    useEffect(() => {
        const unsubscribe = scrollYProgress.onChange((progress) => {

            const newNumber = Math.min(Math.max(Math.floor(progress * totalImages) + 1, 1), totalImages);

            console.log("Scroll progress:", progress, "New Image:", newNumber);

            if (newNumber !== number) {
                setNumber(newNumber);
                setGambar(`/src/assets/solo_portofolio_pp/${String(newNumber).padStart(4, "0")}.jpg`); 
            }
        });
        return () => unsubscribe(); 
    }, [scrollYProgress, number]);

    return (
        <div className="h-svh">
            <div
                style={{
                    backgroundImage: `url(${gambar})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "background-image 0.1s ease-in-out",
                }}
                className="h-[130vh]"
            >
            </div>
        </div>
    );
}
