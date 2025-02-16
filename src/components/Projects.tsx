

interface Project {
    id: number;
    name: string;
    url: string;
    repo: string;
    href: string;
}


const Projects = () => {
     
    const projects: Project[] = [
        { id: 1, name: "Real Time Chatting Platform", url: "#", repo: "https://github.com/oshnicChhetri/chat-app", href: "./chatApp.png" },
        { id: 2, name: "E-commerce", url:"https://eco-greentech.oshnic.com/ ", repo: "https://github.com/oshnicChhetri/e-commerce", href: "./eCommerce.png" },
        { id: 3, name: "Personal Portfolio", url: "https://portfolio.oshnic.com/", repo: "https://github.com/oshnicChhetri/portfolio", href: "./eCommerce.png" }
    ];

    return (
        <div className="w-full min-h-[500px] px-6 md:px-12 lg:px-20 mt-11 py-12">
            <h1 className="text-4xl font-bold mb-10 text-center text-white">My Projects</h1>
            
            <div className="flex flex-wrap justify-center lg:justify-between gap-8 a  column">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        
                        
                        className=" relative rounded-2xl shadow-lg overflow-hidden group hover:scale-105 transition-transform duration-300 w-[400px]  border-solid border-2 border-white" 
                    >
                        <div
                            className="w-full h-52 bg-cover bg-center transition-all duration-300 group-hover:blur-md"
                            style={{ backgroundImage: `url(${project.href})` }}
                        ></div>
                        
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-lg font-semibold underline mb-2"
                            >
                                Visit Website
                            </a>
                            <a
                                href={project.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white text-sm font-semibold underline"
                            >
                                View GitHub Repo
                            </a>
                        </div>
                        <div className="p-4 bg-gray-900 text-center">
                            <p className="text-white text-lg font-semibold">{project.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
