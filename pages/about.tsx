import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import {TbBrandNextjs,TbBrandReactNative} from 'react-icons/tb'
import {BiLogoMongodb,BiLogoReact,BiLogoTypescript,
    BiLogoNodejs,BiLogoDjango,BiLogoPython,BiLogoUnity,BiLogoBlender,
    BiLogoFigma,BiLogoAws,
    BiLogoCPlusPlus,BiLogoJava} from 'react-icons/bi'
import {SiPrisma,SiFlask,SiTailwindcss,SiSelenium,SiCloudera,SiCsharp} from 'react-icons/si'
const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center lg:justify-start items-center"> 
      <Navbar />
      <div className=" lg:absolute z-10 top-0 w-[90vw] ml-[10vw]  flex flex-col justify-center items-center h-auto lg:pb-[10vh]
      lg:w-full lg:ml-0 ">
            <h1 className="text-blue-400 text-3xl mb-4 lg:mt-12">My Skills</h1>
            <div className="max-w-[52%] lg:max-w-[75%] text-white text-center lg:mt-12 lg:mb-0 mb-12 text-xl">
                I am a Full Stack Web Developer, having Experience in Web Development, Web Scraping, Web Auomation, Cyber Security and Game Development.
            </div>
            <div className="flex w-[90%] justify-around lg:items-center lg:flex-col lg:mt-8">
                <div className="lg:my-4 px-4 py-3 w-[35vh] h-[40vh] bg-neutral-400 bg-opacity-20 rounded-xl flex flex-col items-around justify-center">
                    <h1 className="text-white font-semibold text-lg text-center lg:text-xl mt-4">Web Development</h1>
                    <div className="grid-cols-3  grid mt-4">
                        <span  title="Selenium" className="m-3">
                            <BiLogoReact size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">React</div>
                        </span>
                        <span  title="Next.JS" className="m-3">
                            <TbBrandNextjs size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">Next.js</div>
                        </span>
                        <span  title="TailwindCSS" className="m-3">
                            <SiTailwindcss size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">TailwindCSS</div>
                        </span>
                        <span  title="Prisma" className="m-3">
                            <SiPrisma size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">Prisma</div>
                        </span>
                        <span  title="MongoDB" className="m-3">
                            <BiLogoMongodb size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">MongoDB</div>
                        </span>
                        <span  title="Typescript" className="m-3">
                            <BiLogoTypescript size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">Typescript</div>
                        </span>
                        <span  title="Node.js" className="m-3">
                            <BiLogoNodejs size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">Node.js</div>
                        </span>
                        <span  title="Flask" className="m-3">
                            <SiFlask size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">Flask</div>
                        </span>
                        <span  title="Django" className="m-3">
                            <BiLogoDjango size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">Django</div>
                        </span>
                    </div>
                </div>

                <div className="lg:my-4 px-4 py-3 w-[35vh] h-[40vh] bg-neutral-400 bg-opacity-20 rounded-xl flex flex-col items-evely justify-center ">
                    <h1 className="text-white font-semibold text-lg text-center lg:text-xl">Web Automation & Scraping</h1>
                    <div className="grid-cols-3  grid mt-4">
                        <span  title="Selenium" className="m-3">
                            <SiSelenium size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">Selenium</div>
                        </span>
                        <span  title="BeautifulSoup" className="m-3">
                            <BiLogoPython size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">bs4</div>
                        </span>
                        <span  title="Tkinter" className="m-3">
                            <BiLogoPython size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">Tkinter</div>
                        </span>
                    </div>
                    <h1 className="text-white font-semibold text-lg text-center mt-4 lg:text-xl">Game Development</h1>
                    <div className="grid-cols-3  grid mt-4">
                        <span  title="Unity" className="m-3">
                            <BiLogoUnity size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">Unity</div>
                        </span>
                        <span  title="Blender" className="m-3">
                            <BiLogoBlender size={48} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">Blender</div>
                        </span>
                        <span  title="CSharpScripting" className="m-3">
                            <SiCsharp size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">Scripting</div>
                        </span>
                    </div>
                </div>

                <div className="lg:my-4 px-4 py-3 w-[35vh] h-[40vh] bg-neutral-400 bg-opacity-20 rounded-xl flex flex-col items-around justify-center">
                    <h1 className="text-white font-semibold text-lg text-center lg:text-xl">Competitive Programming</h1>
                    <div className="grid-cols-3  grid mt-4">
                        <span  title="C++" className="m-3">
                            <BiLogoCPlusPlus size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">C++</div>
                        </span>
                        <span  title="Java" className="m-3">
                            <BiLogoJava size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">Java</div>
                        </span>
                        <span  title="Python" className="m-3">
                            <BiLogoPython size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">Python</div>
                        </span>
                    </div>
                    <h1 className="text-white font-semibold text-lg text-center mt-4 lg:text-xl">Miscellaneous</h1>
                    <div className="grid-cols-3  grid mt-4">
                        <span  title="Figma" className="m-3">
                            <BiLogoFigma size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">Wireframing</div>
                        </span>
                        <span  title="react native" className="m-3">
                            <TbBrandReactNative size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">Native</div>
                        </span>
                        <span  title="Amazon Web Services" className="m-3">
                            <BiLogoAws size={50} className="text-white mx-auto"/>
                            <div className="text-white text-xs text-center font-extralight">AWS</div>
                        </span>
                    </div>
                </div>
            </div>
            
      </div>

     
    </div>
  )
}
