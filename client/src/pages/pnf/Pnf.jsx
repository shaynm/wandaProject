import "./pnf.css";
import { useNavigate } from "react-router-dom";
function Pnf() {
  const navigate = useNavigate();
  return (
    <>
      <div className="container">
        <div className="pnfPage mb-5">
          <div className="pnf">
            <p>4</p>
            <img src="\images\daimond404.png" alt="daimond" />
            <p>4</p>
          </div>
          <p className="pngText">
            Ops...The requested page is not available or cannot be found.
          </p>
          <button className="bttn" onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}

export default Pnf;
