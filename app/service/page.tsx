import logo from "../../public/logo-inline-white.png";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <section>
      <section className="bg-zinc-100 border-2 border-black m-auto p-3 pl-32 pr-32 flex justify-between flex-col md:flex-row items-center text-xl text-gray-600">
        <div className="p-5 w-auto h-auto hover:shadow-neutral-300 hover:shadow-inner hover:translate-x-1 duration-300  hover:ease-in border-gray-600 hover:border-b-4 hover:bg-black hover:text-white">
          <span>
            <strong>
              <em>
                <i>DIGI Public</i>
              </em>
            </strong>
          </span>
        </div>
        <div className="bg-zinc-100  m-auto  ml-32 mr-32 flex gap-10 flex-col md:flex-row  justify-center items-center text-xl text-gray-600">
          <div className="pl-5 pr-5 p-3 hover:shadow-neutral-300 hover:shadow-inner hover:translate-x-1 hover:scale-100 duration-300  hover:ease-in border-gray-600 hover:border-b-4 hover:bg-slate-100">
            DIGI{" "}
            <span>
              <strong>
                <em>
                  <i>foncier</i>
                </em>
              </strong>
            </span>
          </div>
          <div className="pl-5 pr-5 p-3 hover:shadow-neutral-300 hover:shadow-inner hover:translate-x-1 hover:scale-100 duration-300  hover:ease-in border-gray-600 hover:border-b-4 hover:bg-slate-100">
            DIGI{" "}
            <span>
              <strong>
                <em>
                  <i>Transport</i>
                </em>
              </strong>
            </span>
          </div>
          <div className=" pl-5 pr-5 p-3   hover:shadow-neutral-300 hover:shadow-inner hover:translate-x-1 hover:scale-100 duration-200  hover:ease-in  border-gray-600 hover:border-b-4 hover:bg-slate-100">
            DIGI{" "}
            <span>
              <strong>
                <em>
                  <i>Taxe</i>
                </em>
              </strong>
            </span>
          </div>
          <div className="pl-5 pr-5 p-3   hover:shadow-neutral-300 hover:shadow-inner hover:translate-x-1 hover:scale-100 duration-200  hover:ease-in  border-gray-600 hover:border-b-4 hover:bg-slate-100">
            DIGI{" "}
            <span>
              <strong>
                <em>
                  <i>ID-Bio</i>
                </em>
              </strong>
            </span>
          </div>
          <div className=" pl-5 pr-5 p-3   hover:shadow-neutral-300 hover:shadow-inner hover:translate-x-1 hover:scale-100 duration-200  hover:ease-in  border-gray-600 hover:border-b-4 hover:bg-slate-100">
            DIGI{" "}
            <span>
              <strong>
                <em>
                  <i>GRP</i>
                </em>
              </strong>
            </span>
          </div>
          <div className=" pl-5 pr-5 p-3  hover:shadow-neutral-300 hover:shadow-inner hover:translate-x-1 hover:scale-100 duration-200  hover:ease-in  border-gray-600 hover:border-b-4 hover:bg-slate-100">
            DIGI{" "}
            <span>
              <strong>
                <em>
                  <i>Mine</i>
                </em>
              </strong>
            </span>
          </div>
        </div>
      </section>

      <section className="">
        <div>
          <div className="bg-gradient-to-br to-black from-slate-400 relative w-full h-96  ">
            <Image
              src={logo}
              alt="une image"
              className="w-full h-full object-cover absolute mix-blend-overlay"
            />
            <div className="p-24  bg-none justify-center items-center text-center">
              <p className="text-white p-3 text-[2.0rem] mb-8 font-bold ">
                DIGIPublic AUTEUR DES SOLUTIONS NUMERIQUE
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
