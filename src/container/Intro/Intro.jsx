import { PauseCircleOutlined, PlayCircleOutlined } from "@ant-design/icons";
import { useRef, useState } from "react";
import meal from "../../assets/meal.mp4";
import "./Intro.css";

const Intro = () => {
      const [pause, setPause] = useState(true);
      const vidRef = useRef();

      const handleVideo = () => {
            setPause(!pause)
            if (pause) {
                  vidRef.current.pause();
            } else {
                  vidRef.current.play();
            }
      }

      return (
            <div className="video">
                  <video src={meal} type="video/mp4" autoPlay loop controls={false} muted ref={vidRef} />
                  <div className="video-overlay flex__center">
                        <div className="video-overlay__button flex__center" onClick={handleVideo}>
                              {pause
                                    ? <PauseCircleOutlined className="video-button" />
                                    : <PlayCircleOutlined className="video-button" />}
                        </div>
                  </div>
            </div>
      )
}

export default Intro