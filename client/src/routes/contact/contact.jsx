import { useContext } from "react";
import "./contact.scss";
import { AuthContext } from "../../context/AuthContext";

function Contact() {
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Contact Me</h1>
          <p>
            Thank you for your interest in Est8! If you have any questions,
            inquiries, or just want to connect, feel free to reach out to me
            through any of the following channels:
            <br />
            <br />
            <br />
            GitHub:{" "}
            <a
              href="https://github.com/Prathamrastogi"
              target="_blank"
              className="link"
            >
              Click Here
            </a>{" "}
            <br />
            Twitter:{" "}
            <a
              href="https://twitter.com/Pratham_rastog"
              target="_blank"
              className="link"
            >
              Click Here
            </a>{" "}
            <br />
            LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/pratham-rastogi-439379249/"
              target="_blank"
              className="link"
            >
              Click Here
            </a>
            <br />
            Portfolio:{" "}
            <a
              href="https://prathamrastogi.github.io/Portfolio/"
              target="_blank"
              className="link"
            >
              Click Here
            </a>
            <br />
            Email:{" "}
            <a
              href="mailto:samrastogi8641@gmail.com"
              target="_blank"
              className="link"
            >
              Click Here
            </a>
            <br />
            <br />
            <br />
            I look forward to hearing from you and discussing potential
            opportunities for collaboration!
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

export default Contact;
