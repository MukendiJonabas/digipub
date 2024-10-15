import Image from "next/image";
import Pic4 from "@/public/itservice2_pic4.png"
import Pic2 from "@/public/itservice2_pic2.png"
import Pic3 from "@/public/itservice2_pic3.jpg"
export default function Propos2(){
    return (
        <div className="w-full max-w-[1200px] mx-auto h-[20%] px-4 flex flex-row sm:px-0 sm:py-16 ">
         
         <div className="flex flex-row w-full h-48 sm:h-[100%]  justify-between gap-2 pt-4 sm:py-4 sm:gap-6">
        <div className="flex flex-col w-full h-50 aos-init aos-animate">
            <div className="congo w-30 h-24 sm:h-[60%]">
            <Image
                src={Pic4}
                alt="ndunda"
                />
            </div>
            
            <div className="w-30 sm:h-[40%] p-2 sm:p-5 flex flex-col justify-center ">
                
                <h3 className="text-[#99f906] text-[9px] px-2 font-bold sm:text-[25px] text-start ">Data management & backup</h3>
                <p className="px-2 text-[#99f906] font-normal text-[5px] sm:text-[15px] text-start">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo</p>
                <a href="" target="_blank" rel="noreferrer" className="ml-2 mt-3 border-1 border-solid border-[#e3d83c] bg-[#e3d83c] text-[#106a39] py-1 px-1 text-[7px] w-14 h-5 sm:text-[15px] sm:w-32 sm:h-10 flex items-center justify-center ">Get more</a>
                </div>
                </div>
                <div className="flex flex-col w-full h-50 aos-init aos-animate" data-aos="fade-up">
                    <div className="congolicious w-30 h-24 sm:h-[60%] ">
                        
                    <Image
                src={Pic2}
                alt="ndunda"
                />
                        </div>
                        <div className="w-30 sm:h-[40%] p-2 sm:p-5 flex flex-col justify-center">
                            <h3 className="text-[#99f906] text-[8px] px-2 font-bold sm:text-[25px] text-start ">PC and Mac notebook service</h3>
                            <p className="px-2 text-[#99f906] font-normal text-[5px] sm:text-[15px] text-start">Ut ultricies imperdiet sodales. Aliquam fringilla aliquam ex sit amet elementum. Proin bibendum sollicitudin feugiat. Curabitur ut egestas justo</p>
                            <a className="ml-2 mt-3 border-1 border-solid border-[#e3d83c] bg-[#e3d83c] text-[#106a39] text-center flex items-center justify-center py-0 px-0 text-[7px] w-14 h-4 sm:text-[15px] sm:w-32 sm:h-10 " href="/congolicious-book">Get more</a>
                            </div>
                            </div>
                            <div className="flex flex-col w-full aos-init aos-animate" data-aos="fade-up">
                                <div className="bibititude w-30 h-24 sm:h-[60%]">
                                <Image
                                src={Pic3}
                                alt="ndunda"
                                  />   
                                </div>
                                <div className="w-30 sm:h-[40%] p-2 sm:p-5 flex flex-col justify-center">
                                    <h3 className="px-2 text-[#99f906] text-[8px] font-bold sm:text-[25px] text-start ">Personal devices security</h3>
                                    <p className="px-2 text-[#99f906] font-normal text-[5px] sm:text-[15px] text-start">Programme d’autonomisation des femmes victimes des conﬂits à l’est de la RDC.</p>
                                    <a className="ml-2 mt-3 border-1 border-solid border-[#e3d83c] bg-[#e3d83c] text-[#106a39] text-center flex items-center justify-center py-1 px-1 text-[7px] w-14 h-5 sm:text-[15px] sm:w-32 sm:h-10 " href="/bibititude">Get more</a>
                                    </div>
                                    </div>
                                    </div>

        </div>
    )
}