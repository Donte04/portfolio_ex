import "./about.css";
import img from "../../img/chess.jpg";
import Award from "../../img/award.png"

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img
                        src={img}
                        alt=""
                        className="a-img"
                    />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About me</h1>
                <p className="a-sub">
                    It is a long established fact that a reader will be distracted by the readable
                    content.
                </p>
                <p className="a-desc">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Ipsam placeat corrupti quidem natus sit provident molestias 
                    ratione! Numquam quaerat eius velit nemo hic, fugit, nesciunt 
                    provident veniam sapiente ex praesentium?
                </p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                    <div className="a-award-texts">
                        <h4 className="a-award-title">International Design Awards 2021</h4>
                        <p className="a-award-desc">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis, perspiciatis eveniet placeat explicabo totam officiis nemo nulla corporis repellat facere et laboriosam officia porro, nihil nostrum sapiente quibusdam 
                            mollitia! Doloribus.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
