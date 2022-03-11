import "./Gallery.css";
import SubHeading from "../../components/SubHeading/SubHeading";
import { useRef } from "react";
import { InstagramOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import images from "../../constants/images";

const slideImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04];

const Gallery = () => {
      const scrollRef = useRef(null);

      const scroll = (direction) => {
            const { current } = scrollRef;
            if (direction === "left") {
                  current.scrollLeft -= 300;
            } else {
                  current.scrollLeft += 300;
            }
      }

      return (
            <div className="app__gallery flex__center">
                  <div className="app__gallery-content">
                        <SubHeading title="Instagram" />
                        <h1 className="headtext__cormorant">Photo Gallery</h1>
                        <p className="p__opensans" style={{ color: "#AAA", marginTop: "2rem" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                        <button className="custom__button">View More</button>
                  </div>
                  <div className="app__gallery-images">
                        <div className="app__gallery-images_container" ref={scrollRef}>
                              {slideImages.map((image, index) => (
                                    <div className="app__gallery-images_card flex__center" key={index}>
                                          <img src={image} alt="gallery" />
                                          <InstagramOutlined className="gallery__image-icon" />
                                    </div>
                              ))}
                        </div>
                        <div className="app__gallery-images_arrows">
                              <LeftOutlined className="app__gallery-icon" onClick={() => scroll("left")} />
                              <RightOutlined className="app__gallery-icon" onClick={() => scroll("right")} />
                        </div>
                  </div>
            </div>
      )
}

export default Gallery