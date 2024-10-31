import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import { MdOutlineCloseFullscreen } from 'react-icons/md';

export default function Notification({ message, notificationstatus }) {
    const [notification, setNotification] = useState(notificationstatus);

    useEffect(()=> {
        setNotification(notificationstatus);
    }, [notificationstatus]);

    const handlenotif = () => {
        setTimeout(() => {
            setNotification(false);
        }, 1000); 
    };

    setTimeout(() => {
        setNotification(false);
    }, 5000)

    const animationVariants = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -10 } 
    };

    return (
        <AnimatePresence>
            {notification && (
                <motion.div
                    className="absolute z-10 backdrop-blur-sm justify-center items-center  bg-white/80 border-[1px] p-2 right-10 rounded-[10px] text-[12px] flex gap-5 shadow-md"
                    variants={animationVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5, ease: "easeInOut", damping: 10, stiffness: 100 }}
                >
                    <p>{message}</p>
                    <button onClick={handlenotif}>
                        <MdOutlineCloseFullscreen />
                    </button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
