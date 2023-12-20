import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { Menu, Info, FolderOpen, Phone } from 'lucide-react';
import icon from '/murillo.icon.svg';

export function Navbar() {
  const [scrolling, setScrolling] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const threshold = 200;

      setScrolling(scrollTop > threshold);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    if (window.innerWidth <= 768) {
      setMenuOpen(!menuOpen);
    }
  };

  return (
    <nav
      className={`${scrolling ? 'bg-slate-900' : 'bg-slate-950'} w-screen px-4 py-2 fixed top-0 z-50 transition-all duration-700 ease-in-out`}
    >
      <div className="flex justify-between items-center">
        <Link
          activeClass='active'
          to='initial'
          spy={true}
          smooth={true}
          offset={-58}
          duration={1000}
          className='cursor-pointer'>
          <img src={icon} alt="M Icon" width={42} />
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <Menu width={40} className='text-zinc-50' />
          </button>
        </div>

        <ul
          className={`${menuOpen ? 'flex flex-col justify-center bg-slate-900 p-4 rounded-b-lg w-11/12 space-y-2 fixed top-14' : 'hidden'
            } text-zinc-50 font-medium md:flex md:flex-row md:justify-around md:w-full md:items-center`}
        >
          <li className='nav-item'>
            <Link
              activeClass='active'
              to='about'
              spy={true}
              smooth={true}
              offset={-58}
              duration={1000}
              onClick={toggleMenu}
              className={`nav-link cursor-pointer block md:inline-block ${scrolling ? 'text-white' : 'text-zinc-50'
                } ${menuOpen && 'py-2 text-xl flex items-center'}`}
            >
              {menuOpen && <Info width={32} className='mr-2 text-zinc-50' />}
              Sobre mim
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              activeClass='active'
              to='projects'
              spy={true}
              smooth={true}
              offset={-55}
              duration={1000}
              onClick={toggleMenu}
              className={`nav-link cursor-pointer block md:inline-block ${scrolling ? 'text-white' : 'text-zinc-50'
                } ${menuOpen && 'py-2 text-xl flex items-center'}`}
            >
              {menuOpen && <FolderOpen width={32} className='mr-2 text-zinc-50' />}
              Projetos
            </Link>
          </li>
          {/* <li className='nav-item'>
            <Link
              activeClass='active'
              to='contato'
              spy={true}
              smooth={true}
              duration={1000}
              onClick={toggleMenu}
              className={`nav-link cursor-pointer block md:inline-block ${scrolling ? 'text-white' : 'text-zinc-50'
                } ${menuOpen && 'py-2 text-xl flex items-center'}`}
            >
              {menuOpen && <Phone width={32} className='mr-2 text-zinc-50' />}
              Contato
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}
