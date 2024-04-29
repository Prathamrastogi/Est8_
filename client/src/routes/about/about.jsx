import { useContext } from "react";
import "./about.scss";
import { AuthContext } from "../../context/AuthContext";

function About() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Welcome to Est8</h1>
          <p>
            a testament to my passion for pushing the boundaries of web
            development and showcasing the potential of the MERN stack. As the
            brainchild of<b> Pratham Rastogi</b>, Est8 is more than just a
            project—it's a labor of love, meticulously crafted to demonstrate my
            expertise in the latest technologies and my dedication to creating
            immersive online experiences.
            <br />
            Through Est8, I invite you to explore the culmination of my skills
            and creativity, as I harness the power of{" "}
            <b>MongoDB, Express.js, React.js, and Node.js</b> to build a dynamic
            and responsive platform. From the seamless integration of real-time
            updates using<b> WebSocket technology</b> to the sleek and intuitive
            user interface, Est8 exemplifies my commitment to excellence in
            every aspect of development.
            <br />
            But Est8 is more than just a showcase—it's a statement of intent. By
            creating this platform, I aim to not only demonstrate my proficiency
            in the MERN stack but also to showcase my ability to deliver
            innovative solutions that exceed expectations. With Est8, I invite
            hiring teams to witness firsthand my passion for web development and
            my readiness to take on new challenges.
            <br />
            So, to all hiring teams seeking top-tier talent in web development,
            I extend an invitation to explore Est8 and discover the skills,
            dedication, and potential that I bring to the table. Let Est8 be the
            beginning of an exciting journey toward collaboration and innovation
            in the world of web development.
            <br />
          </p>
        </div>
      </div>
      <div className="imgContainer a">
        <img src="/IMG_T.JPG" alt="" />
      </div>
    </div>
  );
}

export default About;
