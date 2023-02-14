import React from 'react';
import { motion } from 'framer-motion';
import useMediaQuery from '../../hooks/useMediaQuery';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import SocialMediaIcons from '../SocialMediaIcons/SocialMediaIcons';

function Landing({ setSelectedPage }) {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  return (
    <section id="home" className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10">
      {/* {IMAGE SECTION} */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreens ? (
          <div className="relative z-0 ml-15 before:absolute before:-top-14 before:-left-14 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
            <img
              alt="profile"
              src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]"
            />
          </div>
        ) : (
          <img
            alt="profile"
            src="https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[400px] md:max-w-[600px] rounded-t-[400px]"
          />
        )}
      </div>

      {/* {MAIN SECTION} */}

      <div className="z-30 basis-2/5  mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView={'visible'}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start ">Omkar  Sonawane</p>

          <p className="mt-10 mb-7 text-sm text-center md:text-start">
            Dedicated and efficient full stack developer with 6+ years experience in application layers, presentation
            layers, and databases. Certified in both F/E and B/E technologies. Spearheaded successful transition from
            LAMP stack to MEAN which cut latency by 40% and increased effectiveness of database administrators by 20%.
            Seeking to further improve HTML5 and CSS3 skills as the future full stack develope
          </p>
        </motion.div>


          {/* {CALL TO ACTIONS} */}

          <motion.div
          className='flex mt-5 justify-center md:justify-start'
          initial="hidden"
          whileInView='visible'
          viewport={{once:true, amount:0.5}}
          transition={{delay : 0.2 , duration:0.5}}
          variants={{
            hidden: {opacity:0 , x:-50},
            visible: {opacity:1,x:0}
          }}          
          >
            <AnchorLink
            className='bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500'
            onClick={()=>setSelectedPage('contact')}
            href="#contact"
            >
              Contact Me
            </AnchorLink>
            <AnchorLink
            className='rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5'
            onClick={()=>setSelectedPage('contact')}
            href="#contact"
            >
              <div
              className='bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10'
              >
                Let's talk
              </div>
            </AnchorLink>

          </motion.div>

       <motion.div
       className='flex mt-5 justify-center md:justify-start'
       initial="hidden"
       whileInView={'visible'}
       viewport={{once:true,amount:0.5}}
       transition={{delay:0.2,duration:0.5}}
       variants={{
        hidden:{opacity:0,x:-50},
        visible:{opacity:1,x:0}
       }}
       >

      <SocialMediaIcons/>

       </motion.div>



      </div>
    </section>
  );
}

export default Landing;
