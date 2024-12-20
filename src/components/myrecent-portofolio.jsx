import { FinishCart } from "./finish-work";
import img1 from '../assets/3DArt.png'
import img2 from '../assets/Company Profile.png'
import img3 from '../assets/Grocery Store.png'
import { UnfinishCart } from "./unfinish-work";
import eventus1 from '../assets/unpublish/EventUs1.png'
import eventus2 from '../assets/unpublish/EventUs2.png'
import eventus3 from '../assets/unpublish/EventUs3.png'
import eventus4 from '../assets/unpublish/EventUs4.png'
import eventus5 from '../assets/unpublish/EventUs5.png'
import eventus6 from '../assets/unpublish/EventUs6.png'
import nextvent1 from '../assets/onprogress/NexVent1.png'
import nextvent2 from '../assets/onprogress/NexVent2.png'
import nextvent3 from '../assets/onprogress/NexVent3.png'
import nextvent4 from '../assets/onprogress/NexVent4.png'
import nextvent5 from '../assets/onprogress/NexVent5.png'
import nextvent6 from '../assets/onprogress/NexVent6.png'
import nextvent7 from '../assets/onprogress/NexVent7.png'
import nextvent8 from '../assets/onprogress/NexVent8.png'
import nextvent9 from '../assets/onprogress/NexVent9.png'
import nextvent10 from '../assets/onprogress/NexVent10.png'

export default function RecentPortofolio() {
    return (
        <div className="flex items-center justify-center">
            <div className="p-5 mt-20 sm:w-[1150px] flex flex-col gap-5">
                <p className="font font-bold text-[24px] text-center">My Recent Work</p>
                <p className="my-5">FINISH</p>
                <div className="flex justify-start flex-wrap gap-16">
                    <FinishCart description="Website dengan isi hasil karya karya 3D saya selama menjadi 3D Generalist" title="3D Work Arts" img={img1} link="/details/3dworkart" />
                    <FinishCart description="Website dengan tema memperkenalkan sebuah company detail dari company, service yang diberikan, organisasi yang ada didalamnya" title="Company Profile - Formici" img={img2} link="/details/formici" />
                    <FinishCart description="Website untuk berbelanja kebutuhan sehari hari menyediakan produk-produk yang digunakan dirumah sehari-hari" title="Grocery Store App - Bask-it" img={img3} link="/details/bask-it" />
                </div>
                <p className="my-5">COMING-SOON</p>
                <div className="flex justify-start flex-wrap gap-10">
                    <UnfinishCart description="Website untuk membuatan event serta pembelian ticket event terupdate dengan specs dan fitur yang lebih advance" title="Advance Event Ticketing - NexVent" img={nextvent5} img2={nextvent1} img3={nextvent9} img4={nextvent10} img5={nextvent7} img6={nextvent8} link={"/onprogress/nexvent"} />
                </div>
                <p className="my-5">UN-PUBLISH</p>
                <div className="flex justify-start flex-wrap gap-10">
                    <UnfinishCart description="Website untuk membuatan event serta pembelian ticket event terupdate" title="Event Ticketing - EventUs"  img={eventus1} img2={eventus6} img3={eventus3} img4={eventus4} img5={eventus5} img6={eventus2} link={"/unfinish/eventus"}/>
                </div>
            </div>
        </div>
    )
}