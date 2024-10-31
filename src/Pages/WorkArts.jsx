

import img1 from '../assets/3DArt.png'
import { FaCopy } from "react-icons/fa";
import Notification from '../components/handlenotification.jsx';
import { useState } from 'react';


export default function WorkArt({specsimg1,specsimg2, specsimg3, specsimg4, specsimg5}) {
    const repository = "https://www.instagram.com/forkaa_"
    const website = "https://www.instagram.com/forkaa_"

    const [showNotificationRepo, setShowNotificationRepo] = useState(false);
    const [showNotificationWeb, setShowNotificationWeb] = useState(false);

    const copyToClipboardRepository = () => {
        navigator.clipboard.writeText(repository).then(() => {
            setShowNotificationRepo(!showNotificationRepo);
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    };
    const copyToClipboardWebsite = () => {
        try {
            navigator.clipboard.writeText(website).then(() => {
                setShowNotificationWeb(!showNotificationWeb);
            });
        } catch (err) {
            console.error('Failed to copy: ', err);
        }
    };

    return (
        <div className="flex flex-col items-center justify-center" id="workart">
            <div className="sm:p-5 m-5 sm:w-[1150px] flex flex-col justify-center items-center gap-5">
                <Notification message="WEBSITE UNDER DEVELOPMENT !" />
                <div className='flex flex-col gap-5'>
                    <p className=" font-bold text-[24px] text-left sm:mx-8 mt-52">Forkaa</p>
                    <p className="sm:mx-8 border-t-2 pt-2 ">Forkaa adalah sebuah galeri digital yang menampilkan hasil karya 3D yang saya buat selama mendalami berbagai aspek dari dunia 3D, mulai dari modeling, texturing, hingga animasi. Melalui situs ini, saya ingin memperlihatkan perkembangan dan eksplorasi saya dalam seni visual tiga dimensi, yang mencakup penciptaan bentuk, pewarnaan dan tekstur detail, serta pengaturan gerakan yang memperkaya pengalaman visual.</p>
                </div>
                <img src={img1} alt="3D" className="rounded-[10px] lg:w-[1050px] h-auto   overflow-hidden " />
            </div>
            <div className="sm:px-5 mx-5 sm:w-[1150px] flex flex-col gap-2">
                {/* <div className=" mt-10 flex flex-wrap justify-center rounded-[10px] sm:gap-5 gap-2 ">
                    <img src={img1} alt="" className="sm:w-[30%] rounded-[10px]" />
                    <img src={img1} alt="" className="sm:w-[30%] rounded-[10px]" />
                    <img src={img1} alt="" className="sm:w-[30%] rounded-[10px]" />
                </div> */}
                <div className=" sm:mx-8 fl font-bold flex items-center gap-5">
                    <p>Specs:</p>
                    <img src={specsimg1} alt="" className='h-8'/>
                    <img src={specsimg2} alt="" className='h-8'/>
                    <img src={specsimg3} alt="" className='h-8'/>
                    <img src={specsimg4} alt="" className='h-8'/>
                    <img src={specsimg5} alt="" className='h-8'/>
                </div>
                <p className="mt-10 sm:mx-8 fl font-bold">Repository Link : </p>
                <div className=' sm:mx-8 bg-gray-600/10 shadow-md backdrop-blur-sm p-3 rounded-[10px] text-gray-500 flex justify-between items-center'>
                    <a href={repository} target='_blank' className='hover:underline duration-300 ml-2'>{repository}</a>
                    <button onClick={copyToClipboardRepository} className='active:bg-gray-400 p-2 duration-200 rounded-full'>
                        <FaCopy size={15} />
                    </button>
                    <Notification message="Link copied to clipboard!" notificationstatus={showNotificationRepo} />
                </div>
                <p className="text-[12px] sm:mx-14 ">Notes : <span className='font-bold'>"npm run dev"</span> run localhost</p>
                <p className="mt-10 sm:mx-8 fl font-bold">Website : </p>
                <div className=' sm:mx-8 bg-gray-600/10 shadow-md backdrop-blur-sm p-3 rounded-[10px] text-gray-500 flex justify-between items-center'>
                    <a href={website} target='_blank' className='hover:underline duration-300 ml-2'>{website}</a>
                    <button onClick={copyToClipboardWebsite} className='active:bg-gray-400 p-2 duration-200 rounded-full'>
                        <FaCopy size={15} />
                    </button>
                    <Notification message="Link copied to clipboard!" notificationstatus={showNotificationWeb} />
                </div>

            </div>
        </div>
    );
}