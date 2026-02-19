import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
const projects = [
    {
        title: "World Fire Safety System",
        description:
            "A comprehensive fire safety web application showcasing products and services with interactive sections, responsive design, and informative visuals.",
        image: "/projects/world-fire-safety.png",
        tags: ["React", "HTML", "CSS", "JavaScript", "Spring Boot"],
        link: "https://www.worldfiresafety.com/",
        github: "https://github.com/rishikeshsalunke/world-fire-safety",
    },
    {
        title: "Restaurant Website",
        description:
            "A modern restaurant website with interactive menu sections, responsive layout, and smooth navigation built using HTML, CSS, and JavaScript.",
        image: "/projects/restaurant.png",
        tags: ["HTML", "CSS", "JavaScript"],
        link: "https://sagerestaurant.netlify.app/",
        github: "https://github.com/YOUR_GITHUB_USERNAME/restaurant-website",
    },
    {
        title: "Live Weather Application",
        description:
            "A responsive weather application that fetches real-time data using public APIs. Users can search cities and view current weather conditions with a clean UI.",
        image: "/projects/weather.png",
        tags: ["Java", "JSP", "HTML", "CSS", "Servlet", "JavaScript", "API"],
        link: "https://weather-app-3ge9.onrender.com/", // your live link
        github: "https://github.com/YOUR_GITHUB_USERNAME/weather-app",
    },
    // {
    //     title: "AI Writing Assistant",
    //     description:
    //         "An intelligent writing tool powered by GPT-4, helping users create better content faster.",
    //     image: "/projects/project3.png",
    //     tags: ["React", "OpenAI", "Python", "FastAPI"],
    //     link: "#",
    //     github: "#",
    // },
    // {
    //     title: "Project Management Tool",
    //     description:
    //         "A collaborative workspace for teams with real-time updates, task tracking, and integrations.",
    //     image: "/projects/project4.png",
    //     tags: ["Next.js", "Socket.io", "MongoDB", "Redis"],
    //     link: "#",
    //     github: "#",
    // },
];


export const Projects = () => {
    return (
        <section id="projects" className="py-32 relative overflow-hidden">
            {/* Bg glows */}
            <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        Featured Work
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Projects that
                        <span className="font-serif italic font-normal text-white">
                            {" "}
                            make an impact.
                        </span>
                    </h2>

                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        A selection of my recent work, from complex web applications to
                        innovative tools that solve real-world problems.
                    </p>

                </div>

                {/* Projects Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, idx) => (
                        <div key={idx}
                            className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                            style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden group w-full">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-auto max-h-75 md:max-h-100 object-contain transition-transform duration-700 group-hover:scale-105"
                                />

                                <div
                                    className="absolute inset-0 bg-linear-to-t from-card via-card/50 to-transparent opacity-60"
                                />

                                {/* Overlay Links */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a
                                        href={project.link}
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <ArrowUpRight className="w-5 h-5" />
                                    </a>
                                    <a
                                        href={project.github}
                                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                                    >
                                        <Github className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>



                            {/* Content */}
                            <div className="p-6 space-y-4">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{project.title}</h3>
                                    <a
                                        href={project.link}>
                                        <ArrowUpRight

                                            className="w-5 h-5 
                                        text-muted-foreground group-hover:text-primary
                                            group-hover:translate-x-1 
                                            group-hover:-translate-y-1 transition-all"
                                        />
                                    </a>
                                </div>

                                <p className="text-muted-foreground text-sm">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIdx) => (
                                        <span
                                            key={tagIdx}
                                            className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))} </div>

                            </div>

                        </div>
                    ))}
                </div>

                {/* View All CTA */}
                <div className="text-center mt-12 animate-fade-in">
                    <AnimatedBorderButton>
                        View All projects
                        <ArrowUpRight className="w-5 h-5" />

                    </AnimatedBorderButton>
                </div>

            </div>
        </section>
    )
}