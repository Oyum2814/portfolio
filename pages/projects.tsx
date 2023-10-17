import Navbar from "@/components/Navbar";

const projects = ()=>{
    return(
        <div className="w-screen h-screen flex flex-col justify-center lg:justify-start items-center"> 
            <Navbar />
            <div className=" lg:absolute z-10 top-0 w-[90vw] ml-[10vw]  flex flex-col justify-center items-center h-auto lg:pb-[10vh]
      lg:w-full lg:ml-0 ">
                <h1 className="text-blue-400 text-3xl mb-4 lg:mt-12">Projects</h1>
                <div className="grid-cols-3 lg:grid-cols-1  grid mt-4">
                    <div className="lg:my-4 mx-2 lg:mx-0 px-4 py-3 w-[35vh] h-[40vh] bg-neutral-400 bg-opacity-20 rounded-xl flex flex-col items-around justify-center">
                        
                    </div>
                    <div className="lg:my-4 mx-2 lg:mx-0 px-4 py-3 w-[35vh] h-[40vh] bg-neutral-400 bg-opacity-20 rounded-xl flex flex-col items-around justify-center">
                        
                    </div>
                    <div className="lg:my-4 mx-2 lg:mx-0 px-4 py-3 w-[35vh] h-[40vh] bg-neutral-400 bg-opacity-20 rounded-xl flex flex-col items-around justify-center">
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default projects;