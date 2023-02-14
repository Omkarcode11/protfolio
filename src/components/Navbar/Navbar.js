import React, { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../../hooks/useMediaQuery';

const Link = ({ page, selectedPage, setSelectedPage }) => {
  const loverCasePage = page.toLowerCase();
  return (
    <AnchorLink
      className={`${selectedPage === loverCasePage ? 'text-yellow' : ''} hover:text-yellow transition duration-300
    `}
      href={`#${loverCasePage}`}
      onClick={() => setSelectedPage(loverCasePage)}
    >
      {page}
    </AnchorLink>
  );
};

function Navbar({ selectedPage, setSelectedPage, isTopOfPage }) {
  const [isMenuToggled, setIsMenuToggled] = useState(false);
  const navBackground = isTopOfPage ? '' : 'bg-yellow-400';

  const isAboveMediumScreens = useMediaQuery('(min-width:768px');

  return (
    <nav className={`${navBackground}z-40 w-full fixed top-0 py-6`}>
      <div className="flex items-center justify-between mx-auto w-5/6">
        <h4 className="font-playfair text-3xl font-bold h-7">OM</h4>
        {/* {DESKTOP NAV} */}
        {isAboveMediumScreens ? (
          <div className="flex justify-between gap-16 font-opensans text-sm font-semibold">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
          </div>
        ) : (
          <button className=" rounded-full bg-red p-2 " onClick={() => setIsMenuToggled(!isMenuToggled)}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-7">
              <path d="M12,10a2,2,0,1,0,2,2A2,2,0,0,0,12,10ZM5,10a2,2,0,1,0,2,2A2,2,0,0,0,5,10Zm14,0a2,2,0,1,0,2,2A2,2,0,0,0,19,10Z" />
            </svg>
          </button>
        )}

        {/* {MOBILE MENU POPUP} */}

        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 h-full bg-deep-blue w-[300px] ">
            {/* {CLOSE ICON} */}

            <div className="flex text-center flex-col  py-12 mr-16">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)} className="flex justify-end mb-7">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
                    fill="white"
                    fill-opacity="0.54"
                  />
                </svg>
              </button>

              {/* {MENU ITEMS} */}
              <div className="flex flex-col gap-10 ml-[33%] text-2xl text-gray-400">
                <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Skills" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Projects" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Testimonials" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
