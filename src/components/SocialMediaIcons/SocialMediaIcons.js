import React from 'react'

function SocialMediaIcons() {

  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/omkardev/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linked-link" src="../../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facebook.com/omkar.sonawne.98"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linked-link" src="../../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com/_omkar_sonawane/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linked-link" src="../../assets/instagram.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://github.com/Omkarcode11/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linked-link" src="../../assets/github.png" />
      </a>
    </div>
  );
}

export default SocialMediaIcons
