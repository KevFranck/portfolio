import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: "url(/background.jpg)"}}>
          <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
            <h1 className="text-[30px] text-white font-semibold">
              OWONA NGUINI Franc Kevin
              <br></br>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Ingénieur Télécoms & Développeur Web
              </span>
            </h1>
            <p className="text-gray-200 hidden md:block">
              Découvrez mon univers : Developpent Web, Administration des Réseaux et implémentation des technologies d'Internet Des Objets
            </p>
            <div className="flex-col md:flex-row hidden md:flex gap-5">
              <Link href="/competences" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
                Plus
              </Link>

              <Link href="/projets" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
                Projets
              </Link>

              <Link href="/contacts" className="rounded-[20px] group relative bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
                Contacts
              </Link>
            </div>
          </div>
          <div className="flex-1">
              <Image
              src="/logo.jpeg"
              alt="photo"
              height={250}
              width={250}
              className="rounded-[20px] right-55 top-40"
              />
            </div>
      </div>

      <div className="absolute flex bottom-10 z-[20] right-5 flex-col md:hidden gap-5">
              <Link href="/competences" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
                Plus
              </Link>

              <Link href="/projets" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
                Projets
              </Link>

              <Link href="/contacts" className="rounded-[20px] group bg-blue-500 hover:bg-blue-400 px-5 py-3 text-lg text-white max-w-[200px]">
                Contacts
              </Link>
            </div>

            
    </main>
  );
}
