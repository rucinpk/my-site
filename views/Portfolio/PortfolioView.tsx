import Image from "next/image";

type Props = {};

const PortfolioView = ({}: Props) => {
  return (
    <section className={`section bg-blue-800`}>
      <div className="text-center">
        <div className="relative uppercase text-5xl z-10 font-bold">
          My <span>Portfolio</span>
          <span className="absolute font-black -z-10 text-gray-800 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl">
            My Work
          </span>
        </div>
      </div>

      <p className="port-text">
        Here is some of my work that I've done in various programming languages.
      </p>
      <div className="portfolios">
        <div className="portfolio-item">
          <div className="image">
            <Image
              src="/images/me.png"
              quality={100}
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <Image
              src="/images/me.png"
              quality={100}
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <Image
              src="/images/me.png"
              quality={100}
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <Image
              src="/images/me.png"
              quality={100}
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <Image
              src="/images/me.png"
              quality={100}
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <Image
              src="/images/me.png"
              quality={100}
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="portfolio-item">
          <div className="image">
            <Image
              src="/images/me.png"
              quality={100}
              width={400}
              height={400}
              alt=""
            />
          </div>
          <div className="hover-items">
            <h3>Project Source</h3>
            <div className="icons">
              <a href="#" className="icon">
                <i className="fab fa-github"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-behance"></i>
              </a>
              <a href="#" className="icon">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioView;
