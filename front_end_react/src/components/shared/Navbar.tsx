import { Link, NavLink } from "react-router-dom";
import { navbarLinks } from "../../constants/links";
import { HiOutlineBell, HiOutlineSearch } from "react-icons/hi";
import { FaBarsStaggered } from "react-icons/fa6";
import { Logo } from "./Logo";
import { useGlobalStore } from "../../store/global.store";


export const Navbar = () => {

    const openSheet = useGlobalStore(state => state.openSheet);
    const setActiveNavMobile = useGlobalStore(state => state.setActiveNavMobile);

  return (
    <div className="fixed top-0 left-0 w-full z-50">
        <header className="bg-white text-black py-4 flex items-center justify-between px-5 border-b border-slate-200 lg:px-12">
            <Logo />
            <nav className="space-x-5 hidden md:flex">
                {
                    navbarLinks.map(link =>(
                        <NavLink 
                            key={link.id}
                            to={link.href}
                            className={({ isActive }) => 
                                `${isActive ? 'text-amber-800 underline' : ''
                                } transition-all duration-300 font-medium hover:text-amber-800 hover:underline` }
                        >
                            {link.title}
                        </NavLink>
                    ))
                }
            </nav>

            <div className="flex gap-5 items-center">
                <button onClick={() => openSheet('search')}>
                    <HiOutlineSearch size={25} />
                </button>

                <div className="relative">
                    <Link
                        to='/cuenta'
                        className="border-2 border-slate-700 w-9 h-9 rounded-full grid place-items-center text-lg font-bold"
                    >
                        Y
                    </Link>
                </div>

                <button className="relative">
                    <span className="absolute -bottom-2 -right-2 w-5 h-5 grid place-items-center bg-black text-white text-xs rounded-full">
                        0
                    </span>
                    <HiOutlineBell size={30} />
                </button>
            </div>

            <button className="md:hidden" onClick={() => setActiveNavMobile(true)}>
                <FaBarsStaggered size={25} />
            </button>
        </header>
    </div>
  );
};
