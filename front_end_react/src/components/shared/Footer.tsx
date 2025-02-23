import { BiChevronRight } from "react-icons/bi";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { Link } from "react-router-dom";
import { socialLinks } from "../../constants/links";

export const Footer = () => {
  return (
    <footer className="py-5 bg-red-100 px-12 flex justify-between gap-10 text-slate-200 text-sm flex-wrap mt-10 md:flex-nowrap">

        <div className="flex flex-col items-center">
            <Link to='/'>
                <img src="/footer/logo_home.png" className='h-12'/>
            </Link>

            <p className="font-semibold text-lg uppercase tracking-tighter text-gray-900 text-center">
                Instituto Nacional de Ordenamiento
            </p>
    
            <p className="font-semibold text-lg uppercase tracking-tighter text-gray-900 text-center">
                Territorial y Urbanismo
            </p>
        </div>

        <div className="flex flex-col gap-4 flex-1">
            <p className="font-semibold text-lg uppercase tracking-tighter text-gray-900">
                ¡Suscríbete!
            </p>

            <p className="text-base font-medium text-gray-900">
                Si quieres recibir información sobre nuestras publicaciones. 
            </p>

            <div className="border border-gray-900 flex items-center gap-2 px-3 py-2 rounded-full">
                <input 
                    type="email" 
                    placeholder="Correo Electrónico"
                    className="pl-2 bg-red-100 text-slate-900 w-full focus:outline-none placeholder:font-bold placeholder:text-slate-900"
                />

                <button className="text-slate-900">
                    <BiChevronRight />
                </button>
            </div>
        </div>

        <div className="flex flex-col gap-4 flex-1">
            <p className="font-semibold text-lg uppercase tracking-tighter text-gray-900">
                Póliticas
            </p>

            <nav className="flex flex-col gap-2 text-base font-medium">
                <Link to='/ilegalidades' className="text-slate-900">Ilegalidades</Link>
                <Link to='#' className="text-slate-900">Documentos Normativos</Link>
                <Link to='#' className="text-slate-900">Artículos más leídos</Link>
            </nav>
        </div>


        <div className="flex flex-col gap-4 flex-1">
            <p className="font-semibold text-lg uppercase tracking-tighter text-slate-900">
                Contáctenos
            </p>
            <div className="flex items-center gap-2">
                
                <HiOutlineLocationMarker className="w-5 h-5 text-slate-900" />
 
                <p className="text-base leading-6 text-slate-900">
                    Boyeros, La Habana 
                </p>
            </div>
            <div className="flex items-center gap-2">
                
                <HiOutlineMail className="w-5 h-5 text-slate-900" />
 
                <p className="text-base leading-6 text-slate-900">
                    inotu@intou.gob.cu 
                </p>
            </div>
            <div className="flex items-center gap-2">
                
                <HiOutlinePhone className="w-5 h-5 text-slate-900" />
 
                <p className="text-base leading-6 text-slate-900">
                76480563
                </p>
            </div>

            <div className="flex">
                {
                    socialLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-900 border border-gray-600 w-full h-full py-3.5 flex items-center justify-center
                            transition-all hover:bg-white hover:text-gray-950"
                        >
                            {link.icon}
                        </a>
                    ))
                }
            </div>
        </div>
    </footer>
  );
};
