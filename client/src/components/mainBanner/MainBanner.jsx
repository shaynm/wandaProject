import "./mainBanner.css";
import { FiChevronRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import CouponComponent from "../../pages/cart/CouponComponent";

const MainBanner = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="d-flex">
        <div className="text">
          <h1 className="title">New Collection</h1>

          <p className="moreInfo">
            {" "}
            Introducing our 2023 Tropical Treasures Jewelry Collection – where
            modern elegance meets timeless tropical charm. Explore captivating
            designs that reflect your unique style. Discover the luxury of our
            curated selection, inspired by the beauty of the tropics. Each piece
            tells a story of sun-soaked days and exotic nights, meticulously
            crafted to capture nature's essence. Elevate your look with our
            range of necklaces, bracelets, earrings, and more. Embrace the
            fusion of sophistication and nature, carrying a piece of the tropics
            wherever you go. Experience the allure of our 2023 collection – a
            celebration of natural beauty and artistic craftsmanship.
          </p>
          <CouponComponent />
          <div className="carousel-container">
            <div className="d-flex row">
              <div className="col-4 p-2 ">
                <img
                  src="/images/main1.jpg"
                  alt="new collection"
                  className="img-fluid"
                />
              </div>
              <div className="col-4 p-2">
                <img
                  src="/images/main2.jpg"
                  alt="new collection"
                  className="img-fluid"
                />
              </div>
              <div className="col-4 p-2">
                <img
                  src="/images/main3.jpg"
                  alt="new collection"
                  className="img-fluid"
                />
              </div>
            </div>

            <button onClick={() => navigate("/NewCollection")} className="row">
              <span>
                See More
                <FiChevronRight className="icon" />
              </span>
            </button>
          </div>
        </div>
        <img src="/images/mainBanner2.png" alt="main" className="carouselImg" />
      </div>
    </div>
  );
};

export default MainBanner;
