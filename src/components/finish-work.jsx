export function FinishCart({ description, title, img, link }) {
    return (
        <a href={link} className="hover:scale-105 duration-300">
            <div className="w-[325px] border-[1px] rounded-[10px] overflow-hidden bg-white/80 drop-shadow-2xl">
                <div className="w-full h-full">
                    <img src={img} alt="" className="w-full h-full object-cover rounded-t-[10px]" />
                </div>
                <p className="font font-bold text-[20px] text-left p-4">{typeof title == "string" ? title : "No Title"}</p>
                <p className="text-left h-[100px] px-4 pb-2 text-[14px]">{typeof description == "string" ? description : "No Description"} </p>
            </div>
        </a>
    )
}