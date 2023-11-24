import AboutBtn from "./Button";
import Photo from "./../../../public/Pic1.png";
export default function SecondMain() {
  return (
    <div className="secondMain ">
        <div className="flex ctrRow" >     <AboutBtn /></div>
 
      <div className="flex ctrRow marginTop48px   ">
        <div className="seconRight relative">
          <img src={Photo.src} />
          <div className="emptyBig">

          </div>
        </div>
        <div className="secondLeft">
          <h1>Curious about me? Here you have it:</h1>
          <p className="fontstyle">
            I'm a passionate, self-proclaimed designer who specializes in full
            stack development (React.js & Node.js). I am very enthusiastic about
            bringing the technical and visual aspects of digital products to
            life. User experience, pixel perfect design, and writing clear,
            readable, highly performant code matters to me.
          </p>
          <p className="fontstyle">
            I began my journey as a web developer in 2015, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. Now,
            in my early thirties, 7 years after starting my web development
            journey, I'm building cutting-edge web applications using modern
            technologies such as Next.js, TypeScript, Nestjs, Tailwindcss,
            Supabase and much more.
          </p>
          <p className="fontstyle">
            I am very much a progressive thinker and enjoy working on products
            end to end, from ideation all the way to development.
          </p>
          <p className="fontstyle">
            When I'm not in full-on developer mode, you can find me hovering
            around on twitter or on indie hacker, witnessing the journey of
            early startups or enjoying some free time. You can follow me on
            Twitter where I share tech-related bites and build in public, or you
            can follow me on GitHub.
          </p>
          <p className="fontstyle">
          Finally, some quick bits about me.
          </p>
          <u className="flex gap24px">
          <div>
          <li className="fontstyle">   
               B.E. in Computer Engineering
                </li>
                <li className="fontstyle">              
                B.E. in Computer Engineering
                </li>
              </div> 
              <div>
              <li className="fontstyle">     
                B.E. in Computer Engineering
                </li>
                <li className="fontstyle">            
                B.E. in Computer Engineering
                </li>
              </div>
          </u>
          <p className="fontstyle">
          One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉
          </p>
        </div>
      </div>
    </div>
  );
}
