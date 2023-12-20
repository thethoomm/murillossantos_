import { Projects } from '../data/Projects';

import { Event } from '../types/event.type';
import { Abilities } from '../data/Abilities';
import { EventList } from '../components/EventList';

export function Portifolio() {
  return (
    <div className='bg-slate-950 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col justify-center items-center'>

      <div className='flex flex-col w-full items-center justify-center'>
        <h1 className='text-zinc-50 font-semibold text-2xl mt-12 mb-8 text-center'>Habilidades</h1>
        <div className='flex flex-row w-full sm:w-3/4 lg:w-1/2 xl:w-1/3 items-center justify-center'>
          {Abilities.map((ability, index) => (
            <div key={index} className='flex flex-row text-center items-baseline justify-center'>
              <p className={`text-sm text-zinc-50 dmsans-font${index === Abilities.length - 1 ? '' : ' mr-2'}`}>
                {ability}
              </p>
            </div>
          ))}
        </div>
      </div>

      <h1 className='text-zinc-50 font-semibold text-2xl mt-12 mb-8'>Projetos Realizados</h1>
      <div className='w-full flex flex-wrap justify-center space-y-8 space-x-2'>
        {Projects.map((event: Event) => (
          <EventList key={event.name} event={event} />
        ))}
      </div>
    </div>
  );
}
