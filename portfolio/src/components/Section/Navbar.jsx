
import SunIcon from "../ICons/Icon";
export default function Navbar({ Handler, Dark}) {

  return (
    <>
      <div className={`flex spaceBwn marginLftRght ctrColumn  `}>
        <h1 className="text-4xl">{"<SS/>"}</h1>
        <div className="flex ctrColumn gap24px">
          <p>About</p>
          <p>Work</p>
          <p>Testimonials</p>
          <p>Contact</p>
          <button onClick={Handler} className="iconBtn">
            <SunIcon />
          </button>

          <button className="navBtn flex items-center">Download CV</button>
        </div>
      </div>
    </>
  );
}

