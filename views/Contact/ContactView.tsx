import {
  faPaperPlane,
  faMapMarker,
  faEnvelope,
  faUserGraduate,
  faGlobeEurope,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faYoutube,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Title from "../../components/Title/Title";
import Button from "../../components/Button/Button";
import CalendlyComponent from "../../components/Calendly/Calendly";

type Props = {};

const ContactView = ({}: Props) => {
  return (
    <section className={`section dark:bg-pink-800 bg-pink-400`}>
      <Title text="Contact" title="Contact" highlightedText="Me" />
      <div className="flex pt-12 p-8 md:pb-1 sm:pb-16 lg:flex-row sm:flex-col ">
        <div className="flex-2 ">
          <div className="mt-4 p-0 leading-8 text-4xl uppercase font-bold">
            Contact me here
          </div>
          <p className="py-4">
            Want to make software for you? Just write it to me here
          </p>
          <div className="contact-info p-1">
            <div className="contact-item">
              <div className="icon flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faMapMarker} />
                <span>Location: </span>
              </div>
              <p>Warsaw, Poland</p>
            </div>
            <div className="contact-item">
              <div className="icon flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faEnvelope} />
                <span>Email: </span>
              </div>
              <p>
                <span>rucinpk@gmail.com</span>
              </p>
            </div>
            <div className="contact-item">
              <div className="icon flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faUserGraduate} />
                <span>Education: </span>
              </div>
              <p>
                <span>Military University of Technology</span>
              </p>
            </div>
            <div className="contact-item">
              <div className="icon flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faPhone} />
                <span>Mobile Number: </span>
              </div>
              <p>
                <span>+48 696 555 402</span>
              </p>
            </div>
            <div className="contact-item">
              <div className="icon flex items-center justify-center gap-2">
                <FontAwesomeIcon icon={faGlobeEurope} />
                <span>Languages: </span>
              </div>
              <p>
                <span>English, Polish, Japanese</span>
              </p>
            </div>
          </div>
          <div className="contact-icons">
            <div className="contact-icon">
              <a
                href="www.facebook.com"
                className="bg-gray-800"
                target="_blank"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
              <a href="#" className="bg-gray-800" target="_blank">
                <FontAwesomeIcon icon={faGithub} />
              </a>
              <a href="#" className="bg-gray-800" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="bg-gray-800" target="_blank">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex-3 sm:ml-0 md:ml-8 pb-1 sm:pb-16">
          <form action="" className="contact-form">
            <div className="my-4 mx-0 flex">
              <input type="text" required placeholder="YOUR NAME" />
              <input
                className="ml-5"
                type="email"
                required
                placeholder="YOUR EMAIL"
              />
            </div>
            <div className="my-5 mx-0">
              <input type="text" required placeholder="ENTER SUBJECT" />
            </div>
            <div className="my-4 mx-0 flex">
              <textarea
                name=""
                id=""
                cols={15}
                rows={8}
                placeholder="Message Here..."
              ></textarea>
            </div>
            <Button text="Submit" onClick={() => {}} icon={faPaperPlane} />
          </form>
        </div>
      </div>
      <div>
        <CalendlyComponent />
      </div>
    </section>
  );
};

export default ContactView;
