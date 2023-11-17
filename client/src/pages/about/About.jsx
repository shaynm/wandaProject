import "./about.css";
import { FiGithub, FiFacebook, FiLinkedin, FiMail } from "react-icons/fi";

const About = () => {
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handleClick = () => {
    const emailAddress = "shaynm14@gmail.com";

    const subject = encodeURIComponent("Question about Jewelry");

    const body = encodeURIComponent("Hello,\n\nI wanted to ask you about...");

    window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div className="container ">
        <div className="d-flex">
          <div className="text">
            <h1 className="title">About Us</h1>

            <p className="moreInfo">
              {" "}
              Welcome to Wanda, your online jewelry destination, where elegance
              meets innovation. Each piece tells a unique story, expressing your
              individuality and style. Our curated collection captivates and
              inspires, offering timeless pieces for every occasion.
              Craftsmanship at Heart: Meticulously crafted to perfection, our
              jewelry combines traditional techniques with modern design. Unveil
              Beauty: Explore a world of sophistication with necklaces, rings,
              bracelets, and more. Beyond aesthetics, our jewelry makes a
              statement and expresses your unique personality. Customer-Centric:
              Enjoy a seamless shopping experience with our knowledgeable team
              always ready to assist. Ethical Excellence: Our commitment to
              ethical sourcing and sustainability aligns with our values. Join
              the Journey: Discover exquisite jewelry that transcends time,
              whether treating yourself or finding a meaningful gift. Thank you
              for choosing Wanda.
            </p>

            <div className="carousel-container">
              <div className="d-flex row">
                <div className="col-4 p-2 ">
                  <img
                    src="/images/about4.jpg"
                    alt="about"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 p-2">
                  <img
                    src="/images/about6.jpg"
                    alt="about"
                    className="img-fluid"
                  />
                </div>
                <div className="col-4 p-2 ">
                  <img
                    src="/images/about5.jpg"
                    alt="about"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="aboutUs">
        <div className="section2 d-flex justify-content-between flex-wrap mb-5">
          <div className="col-lg-3 col">
            <img
              src="/images/ourteam.svg"
              width="20%"
              style={{ opacity: "0.6", margin: "10px" }}
              alt="ourteam"
            />
            <h2>Our Team</h2>
            <p>
              Our dedicated team is passionate about delivering excellence and
              creating exceptional experiences for our customers.
            </p>
          </div>
          <div className="col-lg-3 col">
            <img
              src="/images/ourproducts.svg"
              width="20%"
              style={{ opacity: "0.6", margin: "10px" }}
              alt="ourproducts"
            />
            <h2>Our Products</h2>
            <p>
              Discover exquisite craftsmanship and elegance in every piece of
              our curated collection.
            </p>
          </div>
          <div className="col-lg-3 col">
            <img
              src="/images/ourcommunity.svg"
              width="20%"
              style={{ opacity: "0.6", margin: "10px" }}
              alt="ourcommunity"
            />
            <h2>Our Community</h2>
            <p>
              Nurturing Relationships and Empowering Together Through our
              Dazzling Jewelry Community.
            </p>
          </div>
        </div>

        <div className="d-flex justify-content-center align-items-center my-3">
          <FiGithub
            className="social mx-2 fs-5"
            onClick={() => openInNewTab("https://github.com/shaynm/")}
          />
          <FiFacebook
            className="social mx-2 fs-5"
            onClick={() => openInNewTab("https://www.facebook.com/shay.yani/")}
          />
          <FiLinkedin
            className="social mx-2 fs-5"
            onClick={() => openInNewTab("#")}
          />
          <FiMail className="social mx-2 fs-5" onClick={() => handleClick()} />
        </div>
      </div>
    </>
  );
};

export default About;
