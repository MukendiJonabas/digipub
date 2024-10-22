import Image from "next/image";
import HeroSection from "@/components/herosection";
export default function Home() {
  return (
    <div>
      <div>
        <div className="bg-gradient-to-br from-black to-slate-400 relative w-full h-96 justify-center items-center text-center">
          <Image
            src={digi}
            alt="une image"
            className="w-full h-full object-cover absolute mix-blend-overlay"
          />

          <div className="p-24  bg-none justify-center items-center text-center">
            <p className="text-white text-[3.03rem] mb-8 font-bold italic">
              DIGI PUBLIC AUTEUR DES SOLUTIONS NUMERIQUE POUR UN SECTEUR PUBLIC
              EFFICACE
            </p>
          </div>
        </div>
      </div>
      <section className="flex gap-6 text-black w-auto h-auto p-5 bg-white items-center text-center justify-center rounded m-3">
        <div className=" bg-gradient-to-b from-gray-50 to-gray-200 h-auto w-auto p-10 rounded shadow shadow-white basis-2/12 items-center text-center justify-center bg-opacity-70">
          <p>
            <i className="font-bold text-green-900">
              MI KOMISA PONA BA SANGO YA LOLENGE NYOSO NA OYO ETALI MPAKO TO BO
              KAMBAMI YA MISOLO MIA EKOLO
            </i>
          </p>
          <form
            action="/"
            method="Post"
            className="bg-none rounded text-[1.2rem] text-slate-700 m-1 p-4 w-auto h-auto grid grid-rows-1 gap-2 justify-center items-center text-center shadow shadow-slate-400"
          >
            <input
              type="text"
              placeholder="votre nom complet"
              className="rounded p-1 text-[1.2rem] text-slate-700 m-1 bg-gradient-to-t from-slate-100 to-slate-200 shadow shadow-slate-400"
            />

            <input
              type="email"
              placeholder="votre e-mail"
              className="rounded p-1 text-[1.2rem] text-slate-700 m-1 bg-gradient-to-t from-slate-100 to-slate-200 shadow shadow-slate-400"
            />
            <span className="flex gap-4 justify-center items-center text-center">
              <input
                type="submit"
                value="Envoyer"
                className="p-1 rounded bg-gradient-to-t from-green-50 to-green-100 text-[1.0rem] shadow shadow-green-800"
              />
              <input
                type="reset"
                value="Annuler"
                className="p-1 rounded bg-gradient-to-t from-red-50 to-red-100 text-[1.0rem] shadow shadow-red-800"
              />
            </span>
          </form>
        </div>
        <div className="flex h-auto w-10 p-5 rounded basis-10/12 items-center text-center justify-center border-l-4 border-green-600">
          <div className="p-5 m-5">
            <p className="text-[2.9rem] font-bold text-green-900">
              <em>
                " DIGI PUBLIC " EZALI LIBOKE YA BIYANO EWUTI NA INFORMATIKI PONA
                KO YANOLA MITUNA MINGI NA OYO ETALI BO KAMBI YA MISOLO MIA EKOLO
              </em>
            </p>
            <em className="font-bold text-green-900">
              pona ko yeba mingi na yango fina
            </em>
            {/*ce bouton va ramener à la page ayant des informations sur tout les secteur traités par digi-public*/}
            <button className="p-1 m-2 text-green-950  bg-gradient-to-t from-green-50 to-green-100 text-[1.0rem] shadow shadow-green-800 rounded">
              <i>AWA</i>
            </button>
          </div>
        </div>
      </section>
      <HeroSection />
    </div>
  );
}
