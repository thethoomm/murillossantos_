import { Instagram } from 'lucide-react';
import { Fade } from 'react-awesome-reveal';


export function Initial() {
  return (
    <div id='initial' className="bg-slate-950 h-screen flex-col space-y-4 justify-center items-center text-center flex">
      <div className='space-y-3'>
        <Fade duration={1500}>
          <h4 className='text-zinc-50 initial-title tracking-widest'>Editor | Fotógrafo</h4>
          <h1 className='text-zinc-50 font-bold text-4xl sm:text-5xl lg:text-6xl initial-title'>
            MURILLO <br /> SANTOS
          </h1>
          <h2 className='text-zinc-50 barcode-font text-3xl sm:text-5xl lg:text-5xl'>MURILLO SANTOS</h2>
        </Fade>
      </div>
      <a
        className='flex rounded px-6 sm:px-12 py-2 text-zinc-50 font-medium hover:bg-slate-800 transition duration-300 ease-in-out'
        href="https://www.instagram.com/murillossantos_/"
      >
        <Instagram width={'40'} />
        @murillossantos_
      </a>
    </div>
  );
}
