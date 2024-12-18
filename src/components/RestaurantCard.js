import  CDN_URL  from "../utils/constant";
const style = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  const { resData } = props; //destructuring the object
  const { cloudinaryImageId, name, cuisines, avgRating, ...otherInfo } =
    resData.info; //destructuring the object
  const { deliveryTime } = otherInfo.sla;
  return (
    <div className="res-card" style={style}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h4 className="content">{name}</h4>
      <h5 className="content">{cuisines.join(", ")}</h5>
      <h5 className="content">{avgRating} Stars</h5>
      <h5 className="content">{deliveryTime} Minutes</h5>
    </div>
  );
};

export default RestaurantCard;
