import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
   {
    id: 1,
    title: "Jesse Livermore GenAI Mentor Bot (RAG)",
    decription:
      "Built a RAG mentor bot that answers strategy questions using embeddings + vector search for grounded, context-aware responses.",
    image: "public/projects/project5.png",
    tags: ["Python", "LangChain", "FAISS", "Hugging Face"],
    demoUrl: "#",
    githubUrl: "https://github.com/Krupa-lakshmana/GenAI-Mentor-Bot",
  },

   {
    id: 2,
    title: "DeepText Classifier (NLP)",
    decription:
      "Developed an NLP text classifier with preprocessing, model training and evaluation using standard classification metrics.",
    image: "public/projects/project8.png",
    tags: ["NLP", "TensorFlow", "Keras", "Python"],
    demoUrl: "#",
    githubUrl: "https://github.com/Krupa-lakshmana/ANN-Classification-Churnn",
  },
  
  {
    id: 3,
    title: "Gesture powered media control",
    decription:
      "A computer vision-based system that enables gesture-based control of media playback using hand recognition via webcam, built using OpenCV and MediaPipe for a touch-free user experience.",
    image: "/projects/project1.jpg",
    tags: ["Python", "OpenCV", "MediaPipe", "NumPy"],
    demoUrl: "#",
    githubUrl: "https://github.com/Krupa-lakshmana/Gesture-Powered-Media-Controller",
  },
  {
    id: 4,
    title: "Cloud-Native Web App Infrastructure (AWS)",
    decription:
      "Designed production-style AWS infra with VPC, ALB, Auto Scaling, RDS, IAM and CI/CD automation for cloud-native deployments.",
    image: "public/projects/project6.png",
    tags: ["AWS", "Terraform", "Packer", "GitHub Actions"],
    demoUrl: "#",
    githubUrl: "https://github.com/Krupa-lakshmana/webapp",
  },
  {
    id: 5,
    title: "Real-Time Event Pipeline (Kafka + Microservices)",
    decription:
      "Implemented an event-driven pipeline using Kafka and microservices for real-time ingestion and processing with reliable patterns.",
    image: "public/projects/project7.png",
    tags: ["Kafka", "Microservices", "Java", "Observability"],
    demoUrl: "#",
    githubUrl: "#",
  },
    {
    id: 6,
    title: "Fantasy Football League",
    decription:
      "A MySQL-based database project to manage a virtual football tournament, tracking player performance, team stats, and match outcomes using structured data models and dynamic SQL queries.",
    image: "/projects/project4.jpg",
    tags: ["MySQL", "SQL", "ER Diagrams", "Docker"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 7,
    title: "EasySplit",
    decription:
      "A JavaFX-based expense-splitting app that helps groups manage shared costs by calculating balances and minimizing repayments, with an intuitive interface and smart debt simplification.",
    image: "/projects/project2.jpg",
    tags: ["Java", "JavaFX", "Scene Builder", "Git"],
    demoUrl: "#",
    githubUrl: "https://github.com/Easy-Split/Easy-Split",
  },
  {
    id: 8,
    title: "Event Management Application",
    decription:
      "A JavaFX-based event management and calendar application that helps users track, organize, and prioritize their events with a user-friendly interface and smart scheduling features.",
    image: "/projects/project3.jpg",
    tags: ["Java", "JavaFX", "Scene Builder", "HashMaps & Stacks"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

function clsx(...xs) {
  return xs.filter(Boolean).join(" ");
}

function FlipCard({ project }) {
  const [flipped, setFlipped] = useState(false);
  const toggle = () => setFlipped((f) => !f);

  return (
    <article className="group relative [perspective:1000px]">
      <button
        type="button"
        aria-pressed={flipped}
        aria-label={`Flip card for ${project.title}`}
        onClick={toggle}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            toggle();
          }
        }}
        className="peer block w-full text-left focus:outline-none rounded-xl"
      >
        <div
          className={clsx(
            "relative h-[22rem] w-full",
            "[transform-style:preserve-3d] transition-transform motion-safe:duration-500 motion-reduce:transition-none",
            "pointer-fine:group-hover:[transform:rotateY(180deg)]",
            flipped && "[transform:rotateY(180deg)]"
          )}
        >
          {/* FRONT */}
          <div
            className={clsx(
              "absolute inset-0 overflow-hidden",
              "rounded-xl border border-zinc-200/70 dark:border-zinc-800/70",
              "bg-card shadow-sm hover:shadow-md",
              "[backface-visibility:hidden]"
            )}
          >
            <div className="h-48 w-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
              <p className="text-muted-foreground text-sm">
                Description
              </p>
            </div>
          </div>

          {/* BACK */}
          <div
            className={clsx(
              "absolute inset-0",
              "rounded-xl border border-zinc-200/70 dark:border-zinc-800/70",
              "bg-card shadow-md p-6 flex flex-col",
              "[transform:rotateY(180deg)] [backface-visibility:hidden]"
            )}
          >
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {project.decription}
            </p>

            {project.tags?.length ? (
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-zinc-300/60 dark:border-zinc-700/60 px-2.5 py-1 text-[11px] uppercase tracking-wide text-foreground/80"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}

            <div className="mt-auto flex items-center gap-3 pt-5">
      
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-sm hover:bg-accent"
                >
                  <Github className="h-4 w-4" /> Code
                </a>
              )}
            </div>
          </div>
        </div>
      </button>

      <div className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-offset-2 ring-offset-background peer-focus-visible:ring-2 peer-focus-visible:ring-primary" />
    </article>
  );
}

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of the projects I’ve worked on, showcasing my skills in
          software development, problem-solving, and building practical,
          user-focused solutions. Each project reflects my passion for technology
          and hands-on learning.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <FlipCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Krupa-lakshmana"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
