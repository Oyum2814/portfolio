import {AiFillHome,AiFillProfile,AiOutlinePaperClip} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
import Link from 'next/link'
import { saveAs } from "file-saver";

const Navbar = ()=>{
    const saveFile = () => {
        saveAs(
          "../resume.pdf",
          "Om_Mukherjee_Resume.pdf"
        );
      };
    return(
        <div className="fixed left-0 sm:bottom-0 sm:w-screen  w-[10vw] h-screen sm:h-[10vh] flex flex-col justify-center items-center z-40  bg-[#151728]">
            <div className="text-neutral-400  px-3 rounded-full my-4 flex flex-col sm:flex-row justify-center items-center sm:w-full sm:justify-evenly">
                <div className="py-4 hover:text-white transition cursor-pointer hover:translate-x-2  hover:scale-110 font-semibold text-lg "><Link href="/" ><AiFillHome size={30}/> </Link></div>
                <div className="py-4 hover:text-white transition cursor-pointer hover:translate-x-2  hover:scale-110 font-semibold text-lg "><Link href="/about" ><CgProfile size={30}/></Link></div>
                <div className="py-4 hover:text-white transition cursor-pointer hover:translate-x-2  hover:scale-110 font-semibold text-lg "><Link href="/projects" ><AiFillProfile size={30}/></Link></div>
                <button onClick={saveFile} className="py-4 hover:text-white transition cursor-pointer hover:translate-x-2  hover:scale-110 font-semibold text-lg "><AiOutlinePaperClip size={30}/></button>
            </div>
        </div>
    )
}

export default Navbar;