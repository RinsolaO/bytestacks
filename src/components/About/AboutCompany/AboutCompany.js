import "./AboutCompany.css";
import AboutImg from "../../../img/about-company.svg";
import BankingFlex from "../../reusables/BankingFlex";

const AboutCompany = () => {
  return (
    <div className="about-company-container">
      <BankingFlex
        title="ABOUT OUR COMPANY"
        subtitle="Providing your business with
            infrastructure solutions that
            powers last mile payments."
        details="Bytestacks Technology Limited provides agency banking platform which provides 
        multidimensional solution to provide simplified access to financial services for Nigeria's  most population who do not have easy access to the traditional  banking system while encouraging entrepreneurship as a pathway to economic empowerment, and also this is  an expression of our commitment to reduce the number of people who are unbanked and under-banked in Nigeria.
        "
        detailsMore="Bytestacks Technology Limited has experience and expertise to build custom web and  mobile solutions. IT consulting, full-cycle software development and UX/UI design is what we do excellently."
        percentTitle="Agency Banking"
        percent="90%"
        percentTitle1="Digital Banking"
        percent1="70%"
        percentTitle2="Co-operative Banking"
        percent2="55%"
        flexImage={AboutImg}
        showBanking="show-banking"
        showText="show-text"
      />
    </div>
  );
};

export default AboutCompany;
