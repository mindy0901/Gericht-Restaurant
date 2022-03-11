import "./Laurels.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { awards } from "../../constants/data";
import images from "../../constants/images";

const AwardCard = ({ award }) => (
      <div className="app__laurels_awards-card">
            <img src={award.imgUrl} alt="award" />
            <div className="app__laurels_awards-card_content">
                  <p className="p__cormorant" style={{ color: "#DCCA87" }}>{award.title}</p>
                  <p className="p__cormorant" >{award.subtitle}</p>
            </div>
      </div>
)

const Laurels = () => {
      return (
            <div className="app__bg app__wrapper section__padding" id="laurels">
                  <div className="app__wrapper_info">
                        <SubHeading title="Award & recognition" />
                        <h1 className="headtext__cormorant">Out Laurels</h1>
                        <div className="app__laurels_awards">
                              {awards.map((award) => (
                                    <AwardCard award={award} key={award.title} />
                              ))}
                        </div>
                  </div>

                  <div className="app__wrapper_img">
                        <img src={images.laurels} alt="img_laurels" />
                  </div>
            </div>
      )
}

export default Laurels