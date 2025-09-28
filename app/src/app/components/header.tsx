export default function Header() {
    return (
        // <div className="flex justify-center items-center">
        //     <div className="bg-transparent border-1 border-[#8892b0] w-[60%] h-[80px] rounded-[35px] fixed top-0 flex justify-around items-center text-[18px] mt-7 text-[#8892b0] ">
        //         <h1 className="hover:text-[#c0c6d7]">About</h1>
        //         <h1 className="hover:text-[#c0c6d7]">Experience</h1>
        //         <h1 className="hover:text-[#c0c6d7]">Projects</h1>
        //         <h1 className="hover:text-[#c0c6d7]">Writing</h1>

        //     </div>
        // </div>

        <div className="flex justify-end items-center">
            <div className="bg-transparent w-[40%] h-[50px] rounded-[35px] fixed top-0 flex justify-around items-center text-[18px] mt-5 mr-3 text-[#8892b0] ">
                <a className="relative inline-block group hover:text-[#c0c6d7]">
                      About
                    <span className="absolute left-0 -bottom-1  w-0 h-[2px] bg-[#4ddfd0] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a className="relative inline-block group hover:text-[#c0c6d7]">
                      Experience
                    <span className="absolute left-0 -bottom-1 w-0 h-[2px]  bg-[#4ddfd0] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a className="relative inline-block group hover:text-[#c0c6d7]">
                      Projects
                    <span className="absolute left-0 -bottom-1  w-0 h-[2px]  bg-[#4ddfd0] transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a className="relative inline-block group hover:text-[#c0c6d7]">
                      Writing
                    <span className="absolute left-0 -bottom-1  w-0 h-[2px]  bg-[#4ddfd0] transition-all duration-300 group-hover:w-full"></span>
                </a>   

            </div>
        </div>
    )
}