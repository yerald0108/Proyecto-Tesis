import { IoMdClose } from "react-icons/io";
import { useGlobalStore } from "../../store/global.store"
import { Link, NavLink } from "react-router-dom";
import { navbarLinks } from "../../constants/links";


export const NavbarMobile = () => {

    const setActiveNavMobile = useGlobalStore(
        state => state.setActiveNavMobile
    );
    
  return (
    <div className="bg-white text-black h-screen w-full shadow-lg animate-slide-in-right fixed z-50 flex justify-center py-32">
        <button className="absolute top-5 right-5" onClick={() => setActiveNavMobile(false)}>
            <IoMdClose size={30} className="text-black"/>
        </button>

        <div className="flex flex-col items-center justify-center min-h-screen gap-20 -mt-80">
            <Link to='/'
                onClick={() => setActiveNavMobile(false)}
                className="text-4xl font-bold tracking-tighter transition-all"
            >
                <img src="/logo.jpg" className='h-12 mx-auto'/>
                <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-1">
                    INOTU
                </h1>
            </Link>

            

            <nav className="flex flex-col items-center gap-5 -mt-10">
                {navbarLinks.map(item => (
                    <NavLink
                        to={item.href}
                        key={item.id}
                        className={({ isActive }) => 
                            `${isActive ? 'text-amber-800 underline' : ''
                            } transition-all duration-300 font-medium hover:text-amber-800 hover:underline` }
                    >
                        {item.title}
                    </NavLink>
                ))}
            </nav>
        </div>
    </div>
  );
};
