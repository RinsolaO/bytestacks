import "./CoopHeader.css";
import AboutImg from "../../img/coop.png";
import BankingFlex from "../reusables/BankingFlex";
import Header from "../Header/Header";

const CoopHeader = () => {
  return (
    <div>
      <div className="coop-container container">
        <Header activeClass="active" />
        <h5>Software Solutions</h5>
      </div>
      <BankingFlex
        title="SOFTWARE SOLUTIONS"
        subtitle="Providing your business with
            infrastructure solutions that
            powers last mile payments."
        details="With our cooperative banking service, we’ll provide your company with dependable 
        financial solutions that help you reach your goals."
        flexImage={AboutImg}
        showText="show-text"
      />
    </div>
  );
};

export default CoopHeader;
