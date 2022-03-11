import React from 'react';
import images from '../../constants/images';
import "./AboutUs.css";

const AboutUs = () => {
      return (
            <div className="aboutus app__bg flex__center section__padding" id="about">
                  <div className="aboutus-overlay flex__center">
                        <img src={images.G} alt="g letter" />
                  </div>

                  <div className="aboutus-content flex__center">
                        <div className="aboutus-content__about">
                              <h1 className="headtext__cormorant">About</h1>
                              <img src={images.spoon} alt="about_spoon" className="spoon__image" />
                              <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
                              <button className="custom__button">Know More</button>
                        </div>
                  </div>

                  <div className="aboutus-content__knife flex__center">
                        <img src={images.knife} alt="about_knife" />
                  </div>

                  <div className="aboutus-content flex__center">
                        <div className="aboutus-content__history">
                              <h1 className="headtext__cormorant">Our History</h1>
                              <img src={images.spoon} alt="history_spoon" className="spoon__image" />
                              <p className="p__opensans">Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
                              <button className="custom__button">Know More</button>
                        </div>
                  </div>
            </div>
      )
}

export default AboutUs