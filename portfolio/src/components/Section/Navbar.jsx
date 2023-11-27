
import SunIcon from "../ICons/Icon";
export default function Navbar({ Handler, Dark}) {

  return (
    <>
      <nav className={`flex spaceBwn marginLftRght w-[376px] ctrColumn sm:w-[600px  ]   md: md:w-[1280px]   `}>
        <div>

        <h1 className="text-4xl">{"<SS/>"}</h1>
        </div>
        <div className=" hidden md:flex ctrColumn gap24px  ">
          
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
       
        
          <button onClick={Handler} className="iconBtn">
            <SunIcon />
          </button>
         

          <button className="navBtn flex items-center">Download CV</button>
        </div> 
        <button className="md:hidden w-[48px]">
          <img src="data:image/webp;base64,UklGRhgBAABXRUJQVlA4WAoAAAAQAAAAXwAAXwAAQUxQSGAAAAABHyAQSPFomR0RkUFRJKlRfCAWaZjBRu6t2uXJL6L/ity2bahT0vGQ0eFy0wxNztHiAm0hnT7oVwofNaHcNEOTc7S4QFtIpw/6lcJHTSg3zdDkHC0u0BbS6YN+pfBRgxtWUDggkgAAAFAIAJ0BKmAAYAA+uUqgTKcko6I6qVjgFwlnAM9srxLk3ubAstf0jtqEWWqs8emtvU4mZx7wZap3jOEgXXdi3QgYyGHHn0O4xq+IAAD+9YMABM/eF/+7cAvn0C80oAb9TkpTp/9kR0qivbgaAC7rGt3pA3CSmFBvT7yv/3bf+n3RN0qmmwML72T4G26dp6iKuWQA" alt="" />
          </button>
      </nav>
    </>
  );
}

