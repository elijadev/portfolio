"use client";

import { useState } from 'react';
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingOverlay,
  FloatingFocusManager
} from '@floating-ui/react';
import { Tag } from '@/components/Tag';
import Image from 'next/image';
import { MediaCarousel, MediaItem } from '@/components/MediaCarousel';

interface ProjectCardProps {
  title: string;
  shortDescription: string; //hook
  objective?: string;
  media: MediaItem[];
  tags: string[];
  projectUrl?: string;
  background?: string;
  challenges?: string[];
  outcome?: string;
  nextSteps?: string[];
}

export const ProjectCard = ({
  title,
  shortDescription,
  objective,
  media,
  tags,
  projectUrl,
  background,
  challenges,
  outcome,
  nextSteps
}: ProjectCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  return (
    <>
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        className="group w-full flex flex-col bg-zinc-950/80 backdrop-blur-sm border border-zinc-800 hover:border-white transition-colors duration-300 cursor-pointer rounded-none"
      >
        <div className="border-b border-zinc-800 px-4 py-2 flex justify-between items-center bg-black/50">
            <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest">
                SYS.FILE_{title.substring(0,3).toUpperCase()}
            </span>
            <span className="font-mono text-[10px] text-zinc-600 group-hover:text-red-500 transition-colors">
                [ CLICK TO EXECUTE ]
            </span>
        </div>

        <div className="relative w-full h-48 overflow-hidden border-b border-zinc-800">
            <Image 
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                width={1024} 
                height={1024} 
                src={media[0].url} 
                alt={title} 
            />
        </div>

        <div className="p-6 flex flex-col flex-grow">
          <h3 className="text-xl font-black text-white uppercase tracking-widest mb-3">{title}</h3>
          <p className="text-zinc-400 text-sm mb-6 flex-grow leading-relaxed font-mono">
            {shortDescription}
          </p>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={tag} value={tag} />
            ))}
          </div>
        </div>
      </div>

      {isOpen && (
        <FloatingOverlay className="bg-black/90 backdrop-blur-md grid place-items-center z-50 p-4 md:p-8" lockScroll>
          <FloatingFocusManager context={context}>
            <div
              ref={refs.setFloating}
              {...getFloatingProps()}
              className="bg-zinc-950 border border-white/20 w-full max-w-4xl max-h-full overflow-y-auto rounded-none text-white flex flex-col relative"
            >
              
              <div className="sticky top-0 bg-zinc-950/90 backdrop-blur-sm border-b border-white/20 p-4 flex justify-between items-center z-10">
                 <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">{"// EXECUTION RECORD"}</span>
                 <button 
                    onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} 
                    className="font-mono text-xs text-zinc-400 hover:text-white hover:bg-white/10 px-3 py-1 transition-colors border border-transparent hover:border-zinc-600"
                 >
                   [ X ] CLOSE
                 </button>
              </div>

              <div className="p-6 md:p-12">
                <h2 className="text-4xl font-black uppercase tracking-widest mb-8 border-b border-zinc-800 pb-6">
                    {title}
                </h2>

                <div className="mb-8">
                    <MediaCarousel media={media} />
                </div>

                <div className="space-y-8 text-zinc-300 font-sans leading-relaxed">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-b border-zinc-800 pb-8">
                        <div>
                            <span className="block font-mono text-xs text-zinc-500 mb-2">{"// OBJECTIVE"}</span>
                            <p className="font-bold text-white text-lg">{objective}</p>
                        </div>
                        <div>
                            <span className="block font-mono text-xs text-zinc-500 mb-2">{"// TECH USED"}</span>
                            <div className="flex flex-wrap gap-2">
                                {tags.map((tag) => <Tag key={`modal-${tag}`} value={tag} />)}
                            </div>
                        </div>
                    </div>

                    {background && (
                        <div>
                            <span className="block font-mono text-xs text-red-500 mb-2">{"// BACKGROUND"}</span>
                            <p className="text-zinc-400">{background}</p>
                        </div>
                    )}

                    {(challenges) && (
                      <div>
                          <span className="block font-mono text-xs text-red-500 mb-2">{"// CHALLENGES"}</span>
                          
                          {challenges && challenges.length > 0 && (
                              <ul className="list-square list-inside space-y-2 text-zinc-400 mb-4">
                                  {challenges.map((challenge, index) => (
                                      <li key={index}>{challenge}</li>
                                  ))}
                              </ul>
                          )}
                      </div>
                    )}

                  {(outcome) && (
                    <div>
                      <span className="block font-mono text-xs text-red-500 mb-2">{"// OUTCOME & NEXT STEPS"}</span>
                          
                      {outcome && (
                        <p className="text-white font-bold mt-4 pt-4 border-t border-zinc-700/50">
                            Outcome: {outcome}
                        </p>
                      )}

                      {nextSteps && nextSteps.length > 0 && (
                        <div>
                          <span className="block font-mono text-xs text-red-500 mb-2">{"// NEXT STEPS"}</span>
                          <ul className="list-square list-inside space-y-2 text-zinc-400 mb-4">
                            {nextSteps.map((step, index) => (
                              <li key={index}>{step}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {projectUrl && (
                  <div className="mt-12 pt-8 border-t border-zinc-800">
                    <a
                        href={projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-block px-8 py-4 font-mono text-sm uppercase tracking-widest bg-white text-black hover:bg-zinc-300 transition-colors border border-white"
                    >
                        Access Live Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          </FloatingFocusManager>
        </FloatingOverlay>
      )}
    </>
  );
};