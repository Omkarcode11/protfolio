import React from 'react'

function SocialMediaIcons() {

  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer"
      >
      <img alt="linked-link" src="../../assets/linkedin.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.facbook.com"
        target="_blank"
        rel="noreferrer"
      >
      <img alt="linked-link" src="../../assets/facebook.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.instagram.com"
        target="_blank"
        rel="noreferrer"
      >
      <img alt="linked-link" src="../../assets/instagram.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.twitter.com"
        target="_blank"
        rel="noreferrer"
      >
      <img alt="linked-link" src="../../assets/twitter.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com"
        target="_blank"
        rel="noreferrer"
      >
      <img alt="linked-link" src="../../assets/github.png" />
      </a>
    </div>
  );
}

export default SocialMediaIcons