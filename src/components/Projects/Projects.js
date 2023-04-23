import { motion } from "framer-motion";
import LineGradient from "../LineGradient/LineGradient";
import projects from "../../assets/Project/projectArray";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariate = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ProjectGif = ({ title }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500 bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  // const projectTitle = title.split(' ');
  console.log(title);
  return (
    <a target="_blank" href={title.link} rel="noreferrer">
      <motion.div variants={projectVariate} className="relative my-2">
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title.name}</p>
          <p className="mt-7">{title.description}</p>
        </div>
        <div className="flex justify-center ">
          <img
            src={`../assets/${title.name}.gif`}
            className="bg-cover h-72 bg-center"
            alt={`${title.name} img`}
          />
        </div>
      </motion.div>
    </a>
  );
};
function Projects() {
  console.log(projects);
  return (
    <section id="projects" className="pt-48 pb-48 ">
      <motion.div
        className="md:w-2/4 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl ">
            MY <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt mb-10 ">
          MyProjects provides an easy and secure way to manage project files,
          share this information with project stakeholders, and maintain a
          library of frequently
        </p>
      </motion.div>

      {/* {PROJECTS} */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 "
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Row ONE */}
          <div className="flex justify-center text-center items-center p-10 bg-red max-w-[580px] max-h-[400px]  text-2xl font-playfair font-semibold">
            BEAUTIFUL USER INTERFACES
          </div>
          {projects?.map((item, i) => (
            <ProjectGif title={item} key={i} />
          ))}
          <div className="flex justify-center text-center items-center p-10 bg-yellow max-w-[580px] max-h-[400px]  text-2xl font-playfair font-semibold">
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Projects;
