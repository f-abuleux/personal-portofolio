import { useState } from "react"

export function UnfinishCart({ description, title, img, img2, img3, img4, img5, img6,  }) {
    const [more, setMore] = useState(false)

    const handleMore = () => {
        setMore(!more)
    }

    return (
        <div>
            <div className="w-[325px] border-[1px] rounded-[10px] overflow-hidden bg-white/80 drop-shadow-2xl">
                <div className="w-full h-full">
                    <img src={img} alt="" className="w-full h-full object-cover rounded-t-[10px]" />
                </div>
                <p className="font font-bold text-[20px] text-left p-4">{typeof title == "string" ? title : "No Title"}</p>
                <p className="text-left h-[100px] px-4 pb-2 text-[14px]">{typeof description == "string" ? description : "No Description"} </p>
                <button onClick={handleMore} className="font-bold p-4 hover:scale-105 duration-200">More</button>
                {
                    more && (
                        <div className="w-[325px] h-full flex flex-col ">
                            <img src={img2} alt="" className="w-full h-full object-cover rounded-[10px] p-2" />
                            <img src={img3} alt="" className="w-full h-full object-cover rounded-[10px] p-2" />
                            <img src={img4} alt="" className="w-full h-full object-cover rounded-[10px] p-2" />
                            <img src={img5} alt="" className="w-full h-full object-cover rounded-[10px] p-2" />
                            <img src={img6} alt="" className="w-full h-full object-cover rounded-[10px] p-2" />
                            <button onClick={handleMore} className="p-2 hover:scale-105 duration-200">Close</button>
                        </div>
                    )
                }
            </div>
        </div>
    )
}