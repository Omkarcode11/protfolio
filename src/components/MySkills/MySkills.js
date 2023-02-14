import React from 'react';
import useMediaQuery from '../../hooks/useMediaQuery';
import { motion } from 'framer-motion';
import LineGradient from '../LineGradient/LineGradient';

function MySkills() {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  return (
    <section id="skills" className="pt-10 pb-24">
      {/* {   HEADER AND IMAGE SECTION } */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="mid:w-1/3"
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 ">
            HTML, CSS, and JS for the client-side and maintaining databases and infrastructure server-side.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-15 before:absolute before:-top-10 before:-left-10  before:w-full  before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img
                alt="skills"
                src="assets/skills-image.png"
                className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
              />
            </div>
          ) : (
            <img
              alt="skills"
              src="assets/skills-image.png"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px]"
            />
          )}
        </div>
      </div>

      {/* {SKILLS} */}

      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* {EXPERIENCE} */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-52 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3 bg-gradient-rainbow p-2 md:bg-none">
                Experience{' '}
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 md: md:bg-blue sm:bg-transparent   absolute right-0 top-0 z-[-1]"></div>
            <p className="mt-3 md:mt-8">
              Can a fresher get full-stack developer? Full Stack development is one of the in-demand for the Software IT
              Industry in recent days. As a fresher, it would be an amazing career option as it might boost up your
            </p>
          </div>
        </motion.div>
        {/* {INNOVATIVE} */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-52 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair p-2 rounded-md font-semibold text-3xl mt-3 bg-gradient-rainbow md:bg-none">
                Innovative{' '}
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 md:bg-red sm:bg-transparent absolute right-0 top-0 z-[-1]"></div>
            <p className="mt-3 md:mt-8">
              Can a fresher get full-stack developer? Full Stack development is one of the in-demand for the Software IT
              Industry in recent days. As a fresher, it would be an amazing career option as it might boost up your
            </p>
          </div>
        </motion.div>
        {/* {IMAGINATIVE} */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-52  ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl p-2 mt-3 bg-gradient-rainbow md:bg-none">
                Imaginative{' '}
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 md:bg-yellow absolute right-0 top-0 z-[-1]"></div>
            <p className="mt-3 md:mt-8">
              Can a fresher get full-stack developer? Full Stack development is one of the in-demand for the Software IT
              Industry in recent days. As a fresher, it would be an amazing career option as it might boost up your
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default MySkills;
