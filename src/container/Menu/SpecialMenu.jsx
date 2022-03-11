import SubHeading from "../../components/SubHeading/SubHeading";
import MenuItem from "../../components/Menuitem/MenuItem";
import { cocktails, wines } from "../../constants/data";
import images from "../../constants/images";
import "./SpecialMenu.css";

const SpecialMenu = () => {
      return (
            <div className="menu flex__center section__padding" id="specialMenu">
                  <div className="menu-title">
                        <SubHeading title="Menu That Fits You Palatte" />
                        <h1 className="headtext__cormorant">Today's Special</h1>
                  </div>

                  <div className="menu-list">
                        <div className="menu-list__wine flex__center">
                              <p className="menu-list__title">Wine & Beer</p>
                              <div className="menu-list__items">
                                    {wines.map((wine, index) => (
                                          <MenuItem key={index} title={wine.title} price={wine.price} tags={wine.tags} />
                                    ))}
                              </div>
                        </div>

                        <div className="menu-list__img">
                              <img src={images.menu} alt="menu_img" />
                        </div>

                        <div className="menu-list__cocktails flex__center">
                              <p className="menu-list__title">Cocktails</p>
                              <div className="menu-list__items">
                                    {cocktails.map((cocktail, index) => (
                                          <MenuItem key={index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
                                    ))}
                              </div>
                        </div>

                  </div>

                  <div style={{ marginTop: "15px" }}>
                        <button className="custom__button">View More</button>
                  </div>
            </div>
      )
}

export default SpecialMenu