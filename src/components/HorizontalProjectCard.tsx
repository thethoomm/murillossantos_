import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Project } from '../types/project.type';
import { HelpCircle, Video } from 'lucide-react';

Modal.setAppElement('#root'); // Define o elemento raiz do seu aplicativo

type Props = {
  project: Project;
};

export function HorizontalProjectCard({ project }: Props) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const openModal = () => {
    if (project.content) {
      setIsModalOpen(true);
    }
  };

  const closeModal = () => {
    setIsModalOpen((prevIsModalOpen) => !prevIsModalOpen);
  };

  useEffect(() => {
    console.log('Estado do modal atualizado:', isModalOpen);
  }, [isModalOpen]);

  return (
    <div
      onClick={openModal}
      className={`flex flex-row items-center justify-center ${project.content
        ? 'cursor-pointer shadow-lg shadow-slate-900 bg-green-500 text-zinc-50'
        : 'bg-slate-800 text-slate-900'
        } h-12 rounded-md p-4 mb-4 shadow-md`}
    >
      {project.content ? <Video width={32} className='text-zinc-50 mr-2' /> : <HelpCircle size={20} className='mr-2'/> }
      <h3 className="text-sm font-semibold">{project.name}</h3>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        contentLabel="Video Modal"
        className='bg-black/90 h-screen w-screen flex flex-col items-center justify-center'
      >
        <p className='text-zinc-50 font-medium text-xl mb-2'>{project.name}</p>
        <iframe src={project.content} className='h-3/4 w-screen object-contain rounded-lg ' allow="autoplay; fullscreen; web-share"  title="aftermovie_nubeat"></iframe>
        {/* <video src={project.content} onEnded={closeModal} className='h-3/4 object-contain rounded' controls autoPlay /> */}
        <button onKeyDown={(event) => {
          if (event.keyCode === 27) closeModal()
        }}
          onTouchStart={closeModal}
          onClickCapture={closeModal}
          className='bg-rose-700 text-zinc-50 font-medium w-screen fixed bottom-0 rounded-t py-3 px-32 hover:bg-rose-800'>
          Fechar conteúdo
        </button>
      </Modal>
    </div>
  );
}
