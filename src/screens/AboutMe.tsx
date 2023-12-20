import { Slide } from "react-awesome-reveal"
import arapucaVideo from '../assets/videos/aftermovie_arapuca_ofc.mp4'
import { useEffect, useRef } from "react";

export function AboutMe() {

  const videoRef = useRef<HTMLVideoElement  >(null);

  useEffect(() => {
    const handleVideoEnded = () => {
      videoRef.current?.play();
    };
    videoRef.current?.addEventListener('ended', handleVideoEnded);

    return () => {
      videoRef.current?.removeEventListener('ended', handleVideoEnded);
    };
  }, []);

  return (
    <div id="about" className="min-h-screen max-h-screen flex">
      <div className="max-w-2xl p-8 bg-violet-700">
        <h1 className="text-3xl text-zinc-50 font-bold mb-4">Sobre Mim</h1>
        <Slide direction="left" delay={0}>
          <p className="text-zinc-50 mb-6">
            Olá, sou Murillo Santos, um editor apaixonado por contar histórias visualmente.
            Minha jornada começou como fotógrafo, onde aprendi a capturar momentos únicos.
            Com o tempo, desenvolvi habilidades de edição de vídeo, aprimorando meu trabalho na pós-produção.
          </p>
          <p className="text-zinc-50 mb-6">
            Meu objetivo é criar conteúdo envolvente que deixe uma impressão duradoura.
            Trabalho com uma variedade de projetos, desde vídeos promocionais até produções cinematográficas.
          </p>
          <p className="text-zinc-50 mb-6">
            Estou sempre buscando desafios criativos e novas oportunidades para expandir meu conhecimento.
            Se você procura um editor dedicado e apaixonado pelo que faz, estou pronto para colaborar.
          </p>
        </Slide>
      </div>

      <div className='max-w-1xl hidden sm:block grow'>
        <video className="h-full object-cover w-full" ref={videoRef} src={arapucaVideo} autoPlay muted loop typeof="video/mp4"/>
      </div>
    </div>
  )
}
