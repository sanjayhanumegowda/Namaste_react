import { MENU_ITEM_IMG_URL, MENU_ITEM_URL } from "../utils/constant";
import { useEffect, useState } from "react";

import Shimmer from "./Shimmer";
import { useParams } from "react-router";

const RestaurantMenu = () => {
    const {resId} = useParams();
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
    const data = await fetch(MENU_ITEM_URL+resId);
    const json = await data.json();
    console.log(json?.data.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card?.card);
    setResInfo(json?.data);
  };
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;
    let itemCards = [];
      if(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
        ?.card?.itemCards){
            itemCards =  resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
            ?.card?.itemCards;
        } else {
            itemCards = [...resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
            ?.card?.categories[0]?.itemCards,...resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2]?.card
            ?.card?.categories[1]?.itemCards]
        } 

  return (
    <div className="menu">
      <div className="menu-item-info">
        <h2 className="restaurant-name">{name}</h2>
        <p className="restaurant-info">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
        <h2>Menu</h2>
      </div>
      <div className="Menu-items">
        {itemCards.map((itemCard) => (
          <RestaurantMenuItems
            key={itemCard?.card?.info.id}
            itemCard={itemCard?.card?.info}
          />
        ))}
      </div>
    </div>
  );
};

const RestaurantMenuItems = (props) => {
  const { itemCard } = props;
  const { name, defaultPrice, price, description, imageId } = itemCard;
  return (
    <div className="menu-item-card">
      <div className="menu-item-desc">
        <h2>{name}</h2>
        <h3>{defaultPrice ? defaultPrice / 100 : price / 100} ₹</h3>
        <p className="item-description">{description}</p>
      </div>
      <div>
        <img
          className="item-logo"
          alt="res-logo"
          src={MENU_ITEM_IMG_URL + imageId}
        />
      </div>
    </div>
  );
};

export default RestaurantMenu;
