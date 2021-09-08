import "../College/Style.css";

import imgs from "../Images/college_02.jpg";
const ItemWidget = (props) => {
  const {
    rating,
    rating_remarks,
    tags,
    ranking,
    college_name,
    original_fees,
    discounted_fees,
    fees_cycle,
    amenties,
  } = props;

  return (
    <div id="Parent_box">
      <div id="child">
        <legend>
          <p> Prometed </p>
        </legend>

        <img src={imgs} alt="pic" />

        <div className="rating">
          <span>
            {rating}/5 <br />
            {rating_remarks}
          </span>
        </div>

        <div className="Best-College">
          <div className="main-location">
            <span className="location">{tags[0]}</span>
            <span className="location">{tags[1]}</span>
          </div>
          <p>#{ranking}</p>
        </div>

        <div className="content">
          <div className="FirstLine">
            <p>
              {college_name}
              <div className="Stars">
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star checked"></span>
                <span className="fa fa-star"></span>
                <span className="fa fa-star"></span>
              </div>
            </p>

            <span className="price">
              ₹ {original_fees} <i className="fas fa-tag"></i>
            </span>
          </div>

          <div className="secondline">
            <p>
              {" "}
              Near Vishwavidyalya Metro Station{" "}
              <span> | 2km away from bus stand</span>{" "}
            </p>

            <div id="Second-price">
              <span> ₹ {discounted_fees} </span>
            </div>
          </div>

          <div className="third-line">
            <div className="text">
              <p> 92% Match : </p>
              <span>2.5km</span>from GTB nagar,<span>7km</span>from Rajiv Chowk{" "}
              <p class="Semister">{fees_cycle}</p>
            </div>
          </div>

          <div className="fourth-line">
            <div id="sub-class">
              <div className="text2">
                {" "}
                Flat <span>Rs</span> <p>2,000</p> <span> off + upto Rs </span>{" "}
                <p>500</p> <span>wallet! to avali...</span> <solid>Login</solid>{" "}
              </div>

              <p id="Free-Wi-Fi">{amenties}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemWidget;
