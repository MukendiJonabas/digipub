import Image from "next/image";
import It from "@/public/itservice2_pic5.png"
export default function Propos1 (){
    return (
        <div>
            <div className="relative w-full h-screen">
      <div className="absolute inset-0">
        <Image
          src={It}
          layout="fill"
          objectFit="cover"
          alt="Image de fond"
          quality={100}
        />
      </div>
      <div className="relative custom-image flex flex-col pt-20 justify-center h-[300px] mb-12 bg-center bg-cover gap-1 sm:h-screen sm:pt-96 sm:px-8 ">
      <div className="max-w-[1200px] w-[100%] mx-auto px-4 sm:px-0">
        <div className="border-2 border-solid border-[#2f82f0] bg-[#2f82f0] mb-1 p-1 sm:p-2 w-fit sm:w-fit ">
          <h1 className="text-[#040c07] text-[28px] font-bold sm:text-[30px]">IT Software Solution & Consultation</h1>
          </div>
          <div className="border-2 border-solid border-[#2f82f0] bg-[#2f82f0] mb-1 p-1 sm:p-2 w-fit sm:w-fit">
            <h1 className="text-[#040c07] text-[28px] font-bold sm:text-[35px]"></h1>
            </div>
            <div className="border-2 border-solid border-[#2f82f0] bg-[#2f82f0] mb-1 p-1 sm:p-2 w-fit sm:w-fit">
              <h1 className="text-[#e4e7e5] text-[28px] font-bold sm:text-[30px]"></h1>
              </div>
              </div>
      
              </div> 
        
      </div>
     
        </div>
    )
}