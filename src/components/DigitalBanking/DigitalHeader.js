import "./DigitalHeader.css";
import AboutImg from "../../img/digital.png";
import BankingFlex from "../reusables/BankingFlex";
import Header from "../Header/Header";

const DigitalHeader = () => {
  return (
    <div>
      <div className="digital-container container">
        <Header activeClass="active" />
        <h5>Analytics</h5>
      </div>
      <BankingFlex
        title="ANALYTICS"
        subtitle="Providing your business with
            infrastructure solutions that
            powers last mile payments."
        details="We  make  it simple to  offer innovative digital  financial  services to  your  retail  and
        business customers—all on the same powerful, API-first platform—so your customers can 
        bank how, when and where they want. 
        We monitor everything that is happening in operations in real-time. With Bytestacks, you 
        can follow every action as an agent and track key metrics. Get an accurate view as an  
        Agent and  performance  by  checking  the  most  important  KPIs.  The  Data Dashboard  
        available  provides  you  powerful  insights  and  useful  information  to  support your 
        decisions."
        showText="show-text"
        flexImage={AboutImg}
      />
    </div>
  );
};

export default DigitalHeader;
