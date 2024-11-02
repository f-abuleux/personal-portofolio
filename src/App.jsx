import './app.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from "./Pages/Home";
import About from './Pages/About';
import WorkArt from './Pages/WorkArts';
import contentful from './assets/logos/contentful.svg'
import css3 from './assets/logos/css3.svg'
import express from './assets/logos/express.svg'
import html5 from './assets/logos/html5.svg'
import htmx from './assets/logos/htmx.svg'
import javascript from './assets/logos/javascript.svg'
import mysql from './assets/logos/mysql.svg'
import nextdotjs from './assets/logos/nextdotjs.svg'
import prisma from './assets/logos/prisma.svg'
import react from './assets/logos/react.svg'
import tailwindcss from './assets/logos/tailwindcss.svg'
import typescript from './assets/logos/typescript.svg'
import hero1 from "./assets/3DArt.png"
import hero2 from "./assets/CompanyProfile.png"
import hero3 from "./assets/Grocery Store.png"
import hero4 from "./assets/unpublish/EventUs1.png"
import hero5 from "./assets/onprogress/NexVent1.png"
import UnfinishWorkArt from './Pages/UnfinishWorkArts';



export default function App() {
  const test = "3dworkart"

  return (
    <div className="font-[HelveticaNeueCyr]" id="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path={`/details/3dworkart`} element={<WorkArt specsimg1={react} specsimg2={css3} specsimg3={javascript} specsimg4 specsimg5 notes={<p className="text-[12px] sm:mx-14 ">Notes : <span className='font-bold'>"npm install"</span> then <span className='font-bold'>"npm run dev"</span> run localhost</p>} website='https://front-end-vol1.vercel.app/' repository="https://github.com/f-abuleux/Front-End-vol1.git" desicription="Forkaa adalah sebuah galeri digital yang menampilkan hasil karya 3D yang saya buat selama mendalami berbagai aspek dari dunia 3D, mulai dari modeling, texturing, hingga animasi. Melalui situs ini, saya ingin memperlihatkan perkembangan dan eksplorasi saya dalam seni visual tiga dimensi, yang mencakup penciptaan bentuk, pewarnaan dan tekstur detail, serta pengaturan gerakan yang memperkaya pengalaman visual." title="Forkaa" hero={hero1} />} />
          <Route path={`/details/formici`} element={<WorkArt specsimg1={nextdotjs} specsimg2={typescript} specsimg3={tailwindcss} specsimg4={contentful} specsimg5 notes={<p className="text-[12px] sm:mx-14 ">Notes : <span className='font-bold'>"npm install"</span> then <span className='font-bold'>"npm run dev"</span> run localhost</p>} website="https://compro-formici-git-main-farraos-abdillahs-projects.vercel.app/" repository="https://github.com/f-abuleux/Compro.git" desicription="The Formici website was successfully launched, establishing a compelling online presence that effectively showcases the company’s expertise in web development and digital art services. Through a user-friendly layout and carefully designed visuals, the site communicates the company’s mission to help clients expand their reach by bringing their 'art' into the digital world. This project demonstrated my ability to integrate visual storytelling with technical frontend skills, delivering a dynamic and impactful company profile platform that resonates with potential clients and highlights the value of digital transformation." title="Formici - Company Profile" hero={hero2} />} />
          <Route path={`/details/bask-it`} element={<WorkArt specsimg1={nextdotjs} specsimg2={typescript} specsimg3={express} specsimg4={mysql} specsimg5={prisma} notes={<div className="text-[12px] sm:mx-14 "><p>Notes : *run in terminal</p><p className=''>Installation :</p> <span className='font-bold'>1. "npm install"</span>, <span className='font-bold'>"cd ./apps/api"  &</span> <span className='font-bold'>2."npx prisma generate"</span><p>then</p><p className='font-bold'>2. "cd ../.." & "npm run dev"</p><p>Port Status : </p><p>Frontend : <span className='font-bold'>localhost:3000</span></p><p>Backend : <span className='font-bold'>localhost:8000/api</span></p></div>} website="https://jcwd040801.purwadhikabootcamp.com/" repository="https://github.com/purwadhikafullstack/JCWD0408-01.git" desicription="Development of Bask-it, a Grocery Web App designed to streamline grocery management for both end-users and administrators. As the project lead, I took responsibility for designing and implementing both frontend and backend structures, using Next.js for the user-friendly frontend and Express.js with Prisma for the robust backend. I architected the database, crafted intuitive routing, and implemented secure admin account management and authorization. Key features included comprehensive product, discount, and inventory management modules, along with a reporting and analytics system to support data-driven decisions. As a result, Bask-it launched successfully, offering a seamless and efficient grocery management solution that showcased my ability to handle full-cycle web development for complex applications." title="Bask-it - Grocery Store" hero={hero3} />} />
          <Route path={`/unfinish/eventus`} element={<UnfinishWorkArt specsimg1={nextdotjs} specsimg2={typescript} specsimg3={express} specsimg4={mysql} specsimg5={prisma} notes={<div className="text-[12px] sm:mx-14 "><p>Notes : *run in terminal</p><p className=''>Installation :</p> <span className='font-bold'>1. "npm install"</span>, <span className='font-bold'>"cd ./apps/api"  &</span> <span className='font-bold'>2."npx prisma generate"</span><p>then</p><p className='font-bold'>2. "cd ../.." & "npm run dev"</p><p>Port Status : </p><p>Frontend : <span className='font-bold'>localhost:3000</span></p><p>Backend : <span className='font-bold'>localhost:8000/api</span></p></div>} repository="https://github.com/Elfansyah/mini-project.git" desicription="Tasked with creating EventUs, an Event Management website requiring a user-friendly, secure platform that could handle complex event operations. I led the project from concept to deployment, using Next.js for the frontend and Express.js with Prisma for the backend, ensuring smooth performance and scalability. I designed an intuitive layout, implemented secure user authentication and authorization, and developed a referral-based reward system to engage users. Additionally, I built a comprehensive event management dashboard and structured a robust database to support real-time data handling. As a result, EventUs launched successfully, providing an efficient, interactive experience that streamlined event management and increased user engagement" title="Event-Us - Event Management" hero={hero4} />} />
          <Route path={`/onprogress/nexvent`} element={<UnfinishWorkArt specsimg1={nextdotjs} specsimg2={typescript} specsimg3={express} specsimg4={mysql} specsimg5={prisma} notes={<div className="text-[12px] sm:mx-14 "><p>Notes : *run in terminal</p><p className=''>Installation :</p> <span className='font-bold'>1. "npm install"</span>, <span className='font-bold'>"cd ./apps/api"  &</span> <span className='font-bold'>2."npx prisma generate"</span><p>then</p><p className='font-bold'>2. "cd ../.." & "npm run dev"</p><p>Port Status : </p><p>Frontend : <span className='font-bold'>localhost:3000</span></p><p>Backend : <span className='font-bold'>localhost:8000/api</span></p></div>} repository="" desicription="" title="NextVent - Advance Event Management" hero={hero5} />} />
        </Routes>
      </Router>
    </div>
  )
}