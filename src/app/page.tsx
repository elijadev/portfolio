import { HoverPopup } from '@/components/HoverPopup';
import { Tag } from '@/components/Tag';
import { ProjectCard } from '@/components/ProjectCard';
import {MediaItem} from "@/components/MediaCarousel";
import Image from 'next/image';
import githubLogo from '/public/github.svg';
import React from 'react';

export default function Home() {
    const projects: {
    title: string;
    tags: string[];
    shortDescription: string;
    objective?: string;
    background: string;
    challenges: string[];
    outcome: string;
    nextSteps?: string[];
    media: MediaItem[];
    projectUrl?: string;
}[] = [
        {
            "title": "Epsilon (WIP)",
            "tags": ["Avalonia", "C#", "ShadUI", "SQLite"],
            "shortDescription": "A cross platform desktop app centered built around the PARA organization system, designed for full data ownership and extinsibility. No subscriptions. Open-source, locally encrypted, and built with Avalonia and C#.",
            "objective": "Create a PKMS that can adapt and support my workflows and integrate with external tools and utilities.",
            "background": "I had stumbled upon a video going over an introduction of a PKMS (personal knowledge management system) and it inspired me to create my own personal project born out of a desire for a more efficient lifestyle. I wanted to have a tool that could not only track and analyze areas of my life but also integrate with my current workflows and my existing apps and tools to create a smart life dashboard that could grow alongside my expanding interests, increase my productivity and bring structure to every areas of my life.",
            "challenges": ["Designing a clean UI that balances powerful features with ease of use", "Implementing a robust tagging and linking system to facilitate complex knowledge networks"],
            "outcome": "A functional desktop application that serves as a personalized knowledge management system, currently in active use for project management and note taking.", 
            "nextSteps": ["Finish remaining UI components", "Complete cross-device sync via custom solution", "Release and open source the project on GitHub"],
            "media": [
                {type: "image", url: "/secondbrain_1.png"},
                {type: "image", url: "/secondbrain_2.png"},
                {type: "image", url: "/secondbrain_3.png"},
                {type: "image", url: "/secondbrain_4.png"},
                {type: "image", url: "/secondbrain_5.png"},
                {type: "image", url: "/secondbrain_6.png"}, 
                {type: "image", url: "/secondbrain_7.png"},
                {type: "image", url: "/secondbrain_8.png"},
                {type: "image", url: "/secondbrain_9.png"},
            ],
        },
        { 
            "title": "PolyPets", 
            "tags": ["C#", "HLSL", "ShaderLab", "Unity", "Photoshop", "Blender"], 
            "shortDescription": "My first commercial product inspired by the famous 90's Tamagotchi. An interactive virtual pet simulation, bridging technical 3D graphics with end-to-end product delivery and monetization.", 
            "objective": "Build a successful commercial product from start to finish, navigating the realities of shipping software while pushing my technical skills in graphics programming and game development.",
            "background": "This was my first commercial product and a personal litmus test. Up until this point, I had built countless systems and tools, but I wanted to prove I could push a project past the finish line into a paid release. It required stepping out of the development sandbox and managing the actual realities of shipping software. The project was a success, proving my capability to build something the market actively values.", 
            "challenges": [ "Bridging the gap between technical prototyping and commercial polish", "Writing optimized shaders that perform well without draining resources"], 
            "outcome": "Successfully launched acommercial product, generated sales, and validated my end-to-end delivery process.", 
            "media": [
                {type: "image", url: "/polypet_1.png"},
                {type: "image", url: "/polypet_2.jpg"},
                {type: "image", url: "/polypet_3.jpg"},
                {type: "image", url: "/polypet_4.jpg"},
                {type: "image", url: "/polypet_5.png"},
            ], 
            "projectUrl": "https://github.com/elijadev/poly-pets"
        }, 
        { 
            "title": "Windows 95 Horror Game", 
            "tags": ["C#", "Unity", "Photoshop", "Blender"],
            "shortDescription": "A proof-of-concept survival horror experience that is centered around Windows 95 that aims to nail the desktop experience and atmosphere of the era. The desktop mechanics work, though the horror elements were only partially explored.", 
            "background": "A passion-driven proof of concept inspired by the aesthetic of vintage computing. I wanted to see if I could accurately replicate the psychological tension of classic 90s media by trapping the player inside a retro operating system.", 
            "challenges": ["Accurately recreating the clunky, specific interactions and visual artifacts of vintage operating systems to maintain immersion"], 
            "outcome": "A functional proof-of-concept prototype that successfully captures the targeted retro aesthetic and interactive constraints.", 
            "media": [
                {type: "image", url: "/winhorror_1.png"},
                {type: "image", url: "/winhorror_2.png"},
                {type: "video", url: "/winhorror_3.webm"}
            ], 
            "projectUrl": "https://github.com/elijadev/desktop-horror-game" 
        }, 
        // { 
        //     "title": "Flight Companion", 
        //     "tags": ["C#"], 
        //     "background": "Born out of a desire for unrestricted telemetry tracking. Standard flight simulation tools felt too limiting, so I decided to build my own tablet-based companion app. I wanted complete control over the data I was viewing and how it was presented during my flights.",
        //     "challenges": [ "Extracting live data using complex FSUIPC bit offsets", "Transforming raw, fluctuating byte data into smooth, accurate mathematical readouts for the UI" ], 
        //     "outcome": "A functional backend prototype capable of reading live simulation telemetry, currently serving as a foundation for future UI implementation.", 
        //     "shortDescription": "A custom telemetry tracker and companion app designed to bypass the limitations of standard flight simulation tools.", 
        //     "media": [      
        //         {type: "image", url: "/buttcakes_1.png"},
        //         {type: "image", url: "/buttcakes_2.png"},
        //         {type: "image", url: "/buttcakes_3.png"}
        //     ],
        //     "projectUrl": "https://github.com/elijadev/flightcompanion" 
        // }, 
        { 
            "title": "Pilot2Speech",
            "tags": ["C#", "FSUIPC"], 
            "shortDescription": "A C# service that hooks into Pilot2ATC and replaces its text-to-speech functionalitywith AI-generated voices, allowing for  more immersive ATC audio communications.", 
            "background": "I wanted to improve the immersion of a flight simulation ATC program (Pilot2Atc) by upgrading its legacy text-to-speech engine. The goal was to build a service that silently listens to the app in the background and intercepts the communications to feed them into modern AI voice APIs.", 
            "challenges": ["Navigating completely undocumented bit offsets to intercept software states, which required active community collaboration and forum diving", "Parsing live text logs and orchestrating external AI API calls without interrupting the main simulation thread" ], 
            "outcome": "A working technical foundation that successfully bridges a closed-ecosystem legacy application with modern AI voice integration.", 
            "media": [
                {type: "image", url: "/pilot2speech_1.png"},
                {type: "image", url: "/pilot2speech_2.png"},
            ],
            "projectUrl": "https://github.com/elijadev/Pilot2Speech" 
        },
        { 
            "title": "Butta Cakes", 
            "tags": ["React", "HTML", "CSS", "PHP", "Javascript"],
            "shortDescription": "My first paid gig building a full-stack web prototype built for a family bakery. Never went live, but it marked my entry into end-to-end web development.",
            "background": "At 18 years old, I was tasked with building the first website for my uncle's growing bakery business. I was entirely unqualified for a full-stack job at the time, but the opportunity triggered a massive period of growth. I used this project as a crash course to teach myself web architecture, driven entirely by the pressure of delivering real utility for a family business.",
            "challenges": [ "Learning foundational web frameworks (PHP/JS) entirely from scratch on the fly", "Translating abstract business needs into a functional digital design" ], 
            "outcome": "Delivered a fully functional prototype and successfully completed my first paid development contract, laying the foundation for my software career.", 
            "media": [
                {type: "image", url: "/buttacakes_1.jpeg"},
                {type: "image", url: "/buttacakes_2.jpeg"},
                {type: "image", url: "/buttacakes_3.jpeg"},
                // {type: "image", url: "/buttcakes_4.jpeg"},
            ],             
            "projectUrl": "https://github.com/elijadev/buttacakes" 
        },
        { 
            "title": "3D Models",
            "tags": ["Blender", "Photoshop", "Substance Painter"], 
            "shortDescription": "An ongoing archive of 3D assets demonstrating technical proficiency and experience with modeling, topology and texturing.",
            "background": "Over the years, I have modeled countless assets for personal games and passion projects. This collection is simply a display of my raw technical capability when it comes to spatial design, topology, and texturing.", 
            "challenges": [ "Adapting to the specific constraints of varying projects—balancing strict polygon counts for interactive engines versus high-fidelity texturing for static renders" ], "outcome": "A diverse, ongoing archive of production-ready assets currently displayed on my Sketchfab portfolio.", 
            "media": [
                {type: "image", url: "/models_1.jpeg"},
                {type: "image", url: "/models_2.jpeg"},
                {type: "image", url: "/models_3.jpeg"},
                {type: "image", url: "/models_4.jpeg"},
                {type: "image", url: "/models_5.jpeg"},
                {type: "image", url: "/models_6.jpeg"},
                {type: "image", url: "/models_7.jpeg"},
            ],
            "projectUrl": "https://sketchfab.com/hrycebilton"
        }
    ];
    
    return (
        <>
            <video aria-hidden="true" autoPlay loop muted playsInline className="fixed inset-0 w-full h-full object-cover -z-20">
                <source src="/background.webm" type="video/webm" />
                <source src="/background.mp4" type="video/mp4" />
            </video>

            <div className="fixed inset-0 bg-black/30 -z-10 pointer-events-none"></div>

            <div className="h-screen w-full overflow-y-scroll scroll-smooth snap-y snap-proximity text-white font-sans">
                <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-zinc-950/60 border-b border-white/10 px-6 py-4 flex justify-between items-center transition-all">
                    <div className="font-black text-white tracking-widest uppercase text-sm">
                        <a href="#intro">
                        [ Bryce Hilton ]
                        </a>
                    </div>
                    
                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest text-zinc-400">
                        <a href="#about" className="hover:text-white transition-colors">About</a>
                        <a href="#toolkit" className="hover:text-white transition-colors">Toolkit</a>
                        <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                        <a href="#contact" className="text-red-500 hover:text-red-400 transition-colors">Initiate Contact</a>
                    </div>
                </nav>

                {/* --- INTRO --- */}
                <section id="intro" className="h-screen w-full snap-center flex flex-col items-center justify-center relative px-4 scroll-mt-20 ">
                    
                    <div className="mix-blend-difference text-white text-center z-10 pointer-events-none select-none mb-8">
                        <h1 className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter">Bryce</h1>
                        <h1 className="text-[12vw] leading-[0.85] font-black uppercase tracking-tighter">Hilton</h1>
                    </div>

                    <div className="flex flex-col items-center max-w-2xl text-center p-8 backdrop-blur-md bg-black/40 border border-white/20 z-20">
                        <p className="font-mono text-sm uppercase tracking-widest text-zinc-300 mb-8 leading-relaxed">
                            [ SYS.INIT ]<br/>
                            I&apos;m Bryce — a self-directed builder and systems thinker. I make things I think should exist,
                            </p>
                        <div className="flex items-center gap-6">
                            <a href="#about" className="px-6 py-3 font-mono text-xs uppercase tracking-widest border border-white hover:bg-white hover:text-black transition-colors rounded-none">
                                About Me
                            </a>
                            <a href="#contact" className="px-6 py-3 font-mono text-xs uppercase tracking-widest bg-red-700 text-white border border-red-700 hover:bg-red-600 transition-colors rounded-none">
                                Resume / Contact
                            </a>
                            
                            <div className="flex items-center gap-4 pl-4 border-l border-white/20">
                                <a href="https://www.github.com" target="_blank" className="hover:opacity-70 transition-opacity">
                                    <Image src={githubLogo} alt="Github" width={24} height={24} className="invert" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- ABOUT, TOOLKIT & CAPABILITIES --- */}
                <section id="about" className="min-h-screen w-full snap-start flex flex-col items-center justify-center py-24 px-4 bg-zinc-950 relative z-10 border-t border-zinc-800">
                    <div className="max-w-5xl w-full p-4 md:p-12">
                        
                        {/* --- ABOUT ME --- */}
                        <div className="mb-24">
                            <h2 className="text-4xl font-black uppercase mb-6 border-b border-zinc-800 pb-4 tracking-widest text-white">About Me</h2>
                            
                            <p className="text-zinc-400 leading-relaxed text-lg mb-8 max-w-3xl">
                            I&apos;m Bryce — a self-directed builder driven by a simple instinct: if something should exist, I&apos;ll make it. That&apos;s pulled me across software, game development, woodworking, gardening, and wherever else curiosity or necessity has pointed. I&apos;ve been learning by doing since I was 14, and I haven&apos;t stopped. Right now I&apos;m deep in software — full-stack development, digital tools, and personal knowledge systems — but the through-line has always been the same: identify the gap, build the thing, make it work. I&apos;m looking for meaningful work where that instinct is an asset.                    
                            </p>
                            
                            <h3 className="text-xs font-mono text-zinc-600 uppercase tracking-widest mb-4">Current Explorations</h3>
                            <div className="flex flex-wrap gap-3">
                                <HoverPopup popupContent="Fascinated by digital twins and models of real world systems and simulations. I like to build software that explore various systems to aid in logistics and environmental planning. ">
                                    <Tag value="Simulation Dynamics" />
                                </HoverPopup>
                                <HoverPopup popupContent="I enjoy deconstructing the underlying subprocesses and logic that make complex systems function.">
                                    <Tag value="Systems Learning" />
                                </HoverPopup>
                                <HoverPopup popupContent="Since picking up my first soldering iron and Arduino, I've been fascinated with the inner working of my gadgets. I grew up voiding the warranties on laptops and consoles just to see how they worked, much to my mother's dismay.">
                                    <Tag value="Electronic Hardware" />
                                </HoverPopup>
                                <HoverPopup popupContent="I am deeply passionate about bridging technology and biology to build and improve agricultural practices, improve ecosystems, and increase yields.">
                                    <Tag value="AgTech" />
                                </HoverPopup>
                                <HoverPopup popupContent="My programming journey started with LWJGL as a teenager. Since then I maintain a deep fascination for graphical frameworks like Vulkan and OpenGL.">
                                    <Tag value="Graphics Programming" />
                                </HoverPopup>
                                <HoverPopup popupContent="I don't view AI as a replacement for human logic, but as point for optimization. I believe there is a place for sustainable, human-centric AI integrations potential for using AI systems as a tool to aid human processes.">
                                    <Tag value="AI Efficiency" />
                                </HoverPopup>
                            </div>
                        </div>

                        {/* --- TOOLKIT --- */}
                        <div id="toolkit" className="mb-24">
                            <h2 className="text-4xl font-black uppercase mb-6 border-b border-zinc-800 pb-4 tracking-widest text-white">My Toolkit</h2>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                
                                <div className="bg-white/5 border border-white/10 p-6 flex flex-col">
                                    <span className="font-mono text-sm uppercase text-zinc-400 block mb-4">01. Languages & Syntax</span>
                                    
                                    <span className="text-[11px] font-mono text-zinc-600 mb-2">{"// MACHINE"}</span>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <Tag value="C#" />
                                        <Tag value="Javascript / TS" />
                                        <Tag value="HTML / CSS"/>
                                        <Tag value="C++" />
                                        <Tag value="SQL" />
                                        <Tag value="Python" />
                                    </div>

                                    <span className="text-[11px] font-mono text-zinc-600 mb-2">{"// HUMAN"}</span>
                                    <div className="flex flex-wrap gap-2">
                                        <Tag value="English (Native)" />
                                        <Tag value="Spanish (A1-A2)" isTheoretical={true}/>
                                        <Tag value="German (A1)" isTheoretical={true}/> 
                                        <Tag value="American Sign Language (Conversational)" />
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6 flex flex-col">
                                    <span className="font-mono text-sm uppercase text-zinc-400 block mb-4">02. Frameworks & Data</span>
                                    
                                    <span className="text-[10px] font-mono text-zinc-600 mb-2">{"// FRONTEND & BACKEND"}</span>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <Tag value="React / Next.js" />
                                        <Tag value="Node.JS" />
                                        <Tag value="Tailwind CSS"/>
                                        <Tag value="Material UI"/>
                                        <Tag value="Avalonia"/>
                                        <Tag value="ShadUI"/>
                                        <Tag value="React Native"/>
                                        <Tag value="Expo"/>
                                        <Tag value="Docker"/>
                                    </div>

                                    <span className="text-[10px] font-mono text-zinc-600 mb-2">{"// DATABASE"}</span>
                                    <div className="flex flex-wrap gap-2">
                                        <Tag value="Qdrant (Vector)" />
                                        <Tag value="MySQL" />
                                        <Tag value="SQLite"/>
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6 flex flex-col">
                                    <span className="font-mono text-sm uppercase text-zinc-400 block mb-4">03. 3D & Simulation</span>
                                    
                                    <span className="text-[10px] font-mono text-zinc-600 mb-2">{"// ENGINES"}</span>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <Tag value="Unity" />
                                        <Tag value="Blender" />
                                        <Tag value="Substance Painter"/>
                                    </div>

                                    <span className="text-[10px] font-mono text-zinc-600 mb-2">{"// RENDERING"}</span>
                                    <div className="flex flex-wrap gap-2">
                                        <Tag value="HLSL" />
                                        <Tag value="ShaderLab" />
                                    </div>
                                </div>

                                <div className="bg-white/5 border border-white/10 p-6 flex flex-col">
                                    <span className="font-mono text-sm uppercase text-zinc-400 block mb-4">04. Hardware & Interfaces</span>
                                    
                                    <span className="text-[10px] font-mono text-zinc-600 mb-2">{"// PHYSICAL"}</span>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        <Tag value="Arduino" />
                                        <Tag value="IoT Prototyping" />
                                        <Tag value="Sensor Telemetry" />
                                    </div>

                                    <span className="text-[10px] font-mono text-zinc-600 mb-2">{"// DESIGN"}</span>
                                    <div className="flex flex-wrap gap-2">
                                        <Tag value="Figma" />
                                        <Tag value="Photoshop"/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* --- CAPABILITIES --- */}
                        <div className="bg-zinc-950 border border-zinc-800 p-6 md:p-8 mt-12 font-mono">
                            <div className="flex justify-between items-end border-b border-zinc-800 mb-6 pb-4">
                                <h3 className="text-2xl font-black uppercase tracking-widest text-white font-sans">
                                    Operational Archive
                                </h3>
                                <span className="text-xs text-zinc-500 uppercase tracking-widest">
                                    {"// HISTORICAL RECORD"}
                                </span>
                            </div>

                            <p className="text-zinc-400 text-xs mb-8 max-w-3xl leading-relaxed uppercase tracking-widest">
                            A chronological log of environments operated within. I treat every role as an opportunity to collect micro-skills, observe human workflows, and build the cross-disciplinary intuition I bring to everything I make.
                            </p>
                            <div className="w-full overflow-x-auto">
                                <table className="w-full text-left text-sm text-zinc-400 min-w-[700px]">
                                    <thead>
                                        <tr className="border-b border-zinc-800 text-zinc-600">
                                            <th className="font-normal py-3 w-24">YEAR</th>
                                            <th className="font-normal py-3 w-1/3">ENVIRONMENT / ROLE</th>
                                            <th className="font-normal py-3">SYSTEMS & WORKFLOWS EXPOSED TO</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-zinc-800/50 hover:bg-white/5 transition-colors group">
                                            <td className="py-4 align-top text-zinc-500 group-hover:text-white">2024-Pres.</td>
                                            <td className="py-4 align-top pr-4">
                                                <span className="block text-white font-bold mb-1">Independent Business Operations</span>
                                                <span className="text-xs">Self-Employed / End-to-End Delivery</span>
                                            </td>
                                            <td className="py-4 align-top text-xs leading-relaxed">
                                                Bootstrapped operations from the ground up. Managed client requirements, digital fulfillment, and product life-cycles. Learned how to balance technical debt with actual business needs and hard deadlines.
                                            </td>
                                        </tr>

                                        <tr className="border-b border-zinc-800/50 hover:bg-white/5 transition-colors group">
                                            <td className="py-4 align-top text-zinc-500 group-hover:text-white">2021-2024</td>
                                            <td className="py-4 align-top pr-4">
                                                <span className="block text-white font-bold mb-1">Data Processing & Media</span>
                                                <span className="text-xs">Transcriptionist</span>
                                            </td>
                                            <td className="py-4 align-top text-xs leading-relaxed">
                                                Processed massive amounts of internal corporate communications and media operations. Extracted insights into how executive &quot;inner circles&quot; communicate, structure data, and make operational decisions.
                                            </td>
                                        </tr>

                                        <tr className="border-b border-zinc-800/50 hover:bg-white/5 transition-colors group">
                                            <td className="py-4 align-top text-zinc-500 group-hover:text-white">2021</td>
                                            <td className="py-4 align-top pr-4">
                                                <span className="block text-white font-bold mb-1">Physical Logistics</span>
                                                <span className="text-xs">UPS / Ground-Level Operations</span>
                                            </td>
                                            <td className="py-4 align-top text-xs leading-relaxed">
                                                Worked high-volume logistics on a warehouse floor, and observed where digital management systems translate into the people actually doing the work.
                                            </td>
                                        </tr>

                                        <tr className="border-b border-zinc-800/50 hover:bg-white/5 transition-colors group">
                                            <td className="py-4 align-top text-zinc-500 group-hover:text-white">2018-2019</td>
                                            <td className="py-4 align-top pr-4">
                                                <span className="block text-white font-bold mb-1">Founding Operations</span>
                                                <span className="text-xs">Butta Cakes</span>
                                            </td>
                                            <td className="py-4 align-top text-xs leading-relaxed">
                                                Aided in the creation and front face setup of a new business. Learned fundamental project planning skills, basic design principles, and communication with non-technical clients.
                                            </td>
                                        </tr>

                                        <tr className="border-b border-zinc-800/50 hover:bg-white/5 transition-colors group">
                                            <td className="py-4 align-top text-zinc-500 group-hover:text-white">2017</td>
                                            <td className="py-4 align-top pr-4">
                                                <span className="block text-white font-bold mb-1">Freelance Media Production</span>
                                                <span className="text-xs">Live Event Videography</span>
                                            </td>
                                            <td className="py-4 align-top text-xs leading-relaxed">
                                                Operated professional camera equipment in live, unscripted environments, along with managing on-site production decisions and client communication as part of a small crew.
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>

                {/* --- PROJECTS & CONTACT --- */}
                <section id="projects" className="relative min-h-screen w-full snap-start flex bg-zinc-950 flex-col items-center justify-center py-24 px-4">

                    <div className="max-w-5xl w-full relative z-10">
                        <div className="mb-24">
                            <h2 className="text-4xl font-black uppercase mb-8 border-b border-zinc-800 pb-4 tracking-widest">
                                Projects
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {projects.map((project) => (
                                    <ProjectCard 
                                        key={project.title}
                                        title={project.title} 
                                        shortDescription={project.shortDescription}
                                        media={project.media}
                                        objective={project.objective}
                                        tags={project.tags} 
                                        projectUrl={project.projectUrl}
                                        background={project.background}
                                        outcome={project.outcome}
                                        challenges={project.challenges}
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="backdrop-blur-md bg-black/60 border border-red-900 p-12 text-center">
                            <h2 id="contact" className="text-3xl font-black uppercase mb-4 tracking-widest text-red-500">Initiate Contact</h2>
                            <p className="text-zinc-300 font-mono text-sm uppercase max-w-xl mx-auto mb-8 leading-relaxed">
                                I am open to freelance and collaborative work—especially with teams building mission-driven, evidence-based systems.
                            </p>
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                                <a href="mailto:elijadev@proton.me?subject=Transmission via Dream Nation"
                                className="px-8 py-4 font-mono text-sm uppercase tracking-widest bg-white text-black hover:bg-zinc-300 transition-colors rounded-none inline-block">
                                    Send Transmission
                                </a>
                                <a href="/Bryce_Hilton_Resume.pdf" 
                                download="Bryce_Hilton_Resume.pdf"
                                className="px-8 py-4 font-mono text-sm uppercase tracking-widest bg-red-700 text-white border border-red-700 hover:bg-red-600 transition-colors rounded-none inline-block text-center">
                                    [ DOWNLOAD DATA_SHEET ]
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}