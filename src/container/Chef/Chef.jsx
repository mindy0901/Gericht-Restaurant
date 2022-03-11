import "./Chef.css";
import images from "../../constants/images";
import SubHeading from "../../components/SubHeading/SubHeading";

const Chef = () => {
      return (
            <div className="app__bg app__wrapper section__padding">
                  <div className="app__wrapper_img app__wrapper_img-reverse">
                        <img src={images.chef} alt="chef" />
                  </div>

                  <div className="app__wrapper_info">
                        <SubHeading title="Chef's Word" />
                        <h1 className="headtext__cormorant">What we belive in</h1>

                        <div className="chef-content">
                              <div className="chef-content__quotes">
                                    <img src={images.quote} alt="quote" />
                                    <p className="p__opensans">
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .
                                    </p>
                              </div>
                              <p className="p__opensans">
                                    auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
                              </p>
                        </div>
                        <div className="chef-sign">
                              <h3>Kevin Luo</h3>
                              <p className="p__opensans">Chef & Founder</p>
                              <img src={images.sign} alt="sign" />
                        </div>
                  </div>
            </div>
      )
}

export default Chef