import "../../Contact/ContactContent/ContactContent.css";
import ScheduleImage from "../../../img/schedule.svg";
import Btn from "../../reusables/Btn";

const ScheduleContent = () => {
  return (
    <div>
      <div className="contact-content">
        <div className="contact-flex-container">
          <div className="contact-right">
            <span className="contact-subtitle schedule-subtitle">
              Bytestacks Technology Limited stands out among thousands of other
              digital wallets due to its advanced features.
            </span>
            <div className="contact-form">
              <form action="">
                <div className="mini-flex">
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="mini-flex">
                  <input type="tel" placeholder="Your Phone" />
                </div>{" "}
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                ></textarea>
                <br />
                <Btn title="Schedule Now" orangeBg="orange-btn" linkTo="" />
              </form>
            </div>
          </div>
          <div className="contact-left">
            <img src={ScheduleImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleContent;
