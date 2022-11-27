import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {};

const ContactView = ({}: Props) => {
  return (
    <section className={`section bg-pink-800`}>
      <div className="text-center">
        <div className="relative uppercase text-5xl z-10 font-bold">
          Contact <span className="text-green-400">Me</span>
          <span className="absolute font-black -z-10 text-gray-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl">
            Contact
          </span>
        </div>
      </div>
      <div className="flex pt-12">
        <div className="left-contact ">
          <h4 className="mt-4 text-4xl uppercase">Contact me here</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In, laborum
            numquam? Quam excepturi perspiciatis quas quasi.
          </p>
          <div className="contact-info">
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-map-marker-alt"></i>
                <span>Location</span>
              </div>
              <p>: London, united Kingdom</p>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-envelope"></i>
                <span>Email</span>
              </div>
              <p>
                <span>: maclinzuniversal@gmail.com</span>
              </p>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-user-graduate"></i>
                <span>Education</span>
              </div>
              <p>
                <span>: Sussex University, East Sussex</span>
              </p>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-user-graduate"></i>
                <span>Mobile Number</span>
              </div>
              <p>
                <span>: 07522670617</span>
              </p>
            </div>
            <div className="contact-item">
              <div className="icon">
                <i className="fas fa-globe-africa"></i>
                <span>Languages</span>
              </div>
              <p>
                <span>: Afrikaans, English, Spanish</span>
              </p>
            </div>
          </div>
          <div className="contact-icons">
            <div className="contact-icon">
              <a href="www.facebook.com" target="_blank">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" target="_blank">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="right-contact">
          <form action="" className="contact-form">
            <div className="input-control i-c-2">
              <input type="text" required placeholder="YOUR NAME" />
              <input type="email" required placeholder="YOUR EMAIL" />
            </div>
            <div className="input-control">
              <input type="text" required placeholder="ENTER SUBJECT" />
            </div>
            <div className="input-control">
              <textarea
                name=""
                id=""
                cols={15}
                rows={8}
                placeholder="Message Here..."
              ></textarea>
            </div>
            <div className="submit-btn">
              <a
                href=""
                className="rounded-large font-semibold relative border-2 border-violet-800 flex self-start items-center overflow-hidden"
              >
                <span className="px-6 py-0 text-amber-200 z-10">Submit</span>
                <span className="btn-icon bg-violet-700 flex items-center justify-center rounded-full p-4 z-10">
                  <FontAwesomeIcon icon={faDownload} />
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactView;
