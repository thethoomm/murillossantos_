import { useState } from 'react';
import { Event } from '../types/event.type';
import { Project } from '../types/project.type';
import { HorizontalProjectCard } from './HorizontalProjectCard';
import { ChevronDown, ChevronUp } from 'lucide-react';

import { Fade } from 'react-awesome-reveal';

type Props = {
  event: Event;
};

export function EventList({ event }: Props) {
  const [aftermovieOpen, setAftermovieOpen] = useState(false);
  const [realtimeOpen, setRealtimeOpen] = useState(false);
  const [generalOpen, setGeneralOpen] = useState(true)

  const toggleAftermovie = () => {
    setAftermovieOpen(!aftermovieOpen);
  };

  const toggleRealtime = () => {
    setRealtimeOpen(!realtimeOpen);
  };

  const toggleGeneral = () => {
    setGeneralOpen(!generalOpen);
  };

  return (
    <div className="bg-slate-950 w-screen sm:px-10 sm:w-1/2 flex flex-col rounded-md overflow-hidden shadow-md transition-all duration-300 ease-in-out">
      <Fade>
        <div
          className="flex flex-col border-2 rounded-t-xl border-b-0 border-slate-900 sm:flex-row items-center px-4 py-3 cursor-pointer justify-center"
          onClick={toggleGeneral}
        >
          <div className="flex flex-col items-center sm:mr-4">
            <img
              src={event.image ? event.image : 'https://placehold.co/400'}
              alt="Event Image"
              className="w-full aspect-square h-32 object-cover mb-4 sm:w-32 sm:h-24 md:w-40 md:h-32 rounded-2xl"
            />
            <div className="flex flex-col items-center justify-center text-center">
              <h2 className="text-xs uppercase font-thin text-zinc-50">{event.type}</h2>
              <h2 className="text-lg font-bold text-zinc-50">{event.name.toUpperCase()}</h2>
              <h2 className="text-xs font-medium text-zinc-50">Entregas: {event.totalProjects}</h2>
              <h2 className="text-xs font-medium text-zinc-50">Disponíveis: {event.projects.filter((project) => project.content).length}</h2>
            </div>
          </div>
        </div>

        {
          !generalOpen ? (
            <div className="px-4 py-3 border-2 border-slate-900 rounded-xl rounded-t-none border-t-0 space-y-2">

              {aftermovieOpen && (
                <>
                  <h4 className="flex justify-between flex-row text-md font-semibold text-zinc-50 mb-2 cursor-pointer" onClick={toggleAftermovie}>
                    <span>
                      Aftermovie: &nbsp;
                      {
                        event.projects.filter((project) => project.type === 'Aftermovie').length
                      }
                    </span>
                    <ChevronUp width={20} />
                  </h4>
                  {event.projects
                    .filter((project: Project) => project.type === 'Aftermovie')
                    .map((project: Project) => (
                      <HorizontalProjectCard key={project.id} project={project} />
                    ))}
                </>
              )}
              {
                !aftermovieOpen && (
                  <h4 className="flex justify-between flex-row text-md font-semibold text-zinc-50 mb-2 cursor-pointer" onClick={toggleAftermovie}>
                    <span>
                      Aftermovie: &nbsp;
                      {
                        event.projects.filter((project) => project.type === 'Aftermovie').length
                      }
                    </span>
                    <ChevronDown width={20} />
                  </h4>
                )
              }

              {realtimeOpen && (
                <>
                  <h4 className="flex justify-between flex-row text-md font-semibold text-zinc-50 mb-2 cursor-pointer" onClick={toggleRealtime}>
                    <span>
                      Realtime: &nbsp;
                      {
                        event.projects.filter((project) => project.type === 'Realtime').length
                      }
                    </span>
                    <ChevronUp width={20} />
                  </h4>
                  {event.projects
                    .filter((project: Project) => project.type === 'Realtime')
                    .map((project: Project) => (
                      <HorizontalProjectCard key={project.id} project={project} />
                    ))}
                </>
              )}

              {
                !realtimeOpen && (
                  <h4 className="flex justify-between flex-row text-md font-semibold text-zinc-50 mb-2 cursor-pointer" onClick={toggleRealtime}>
                    <span>
                      Realtime: &nbsp;
                      {
                        event.projects.filter((project) => project.type === 'Realtime').length
                      }
                    </span>
                    <ChevronDown width={20} />
                  </h4>
                )
              }

              {(!aftermovieOpen && !realtimeOpen) ? (
                <button className='text-zinc-50 w-full font-medium bg-violet-700 rounded py-2' onClick={toggleGeneral}>ver menos</button>
              ) : <p></p>}
            </div>
          ) : (
            <button className='text-zinc-50 w-full font-medium bg-violet-700 rounded rounded-t-none py-2' onClick={toggleGeneral}>ver mais</button>
          )
        }
      </Fade>
    </div>
  );
}
