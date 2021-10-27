import Header from "../../Header/Header";
import BankingFlex from "../../reusables/BankingFlex";
import AboutImg from "../../../img/agency.png";
import { motion } from "framer-motion";

import "./AgencyHeader.css";

const AgencyHeader = () => {
  return (
    <div>
      <div className="agency-container container">
        <Header activeClass="active" />
        <h5>Agency Banking</h5>
      </div>
      <motion.div transition={{ delay: 1 }}>
        <BankingFlex
          title="AGENCY BANKING"
          subtitle="Providing your business with
            infrastructure solutions that
            powers last mile payments."
          details="We’re agent banking service providers, responsible for managing various banking agents. We’re also responsible for operating  service, marketing, cash handling, branding, and many more.
        "
          detailsMore="We make it simple to offer innovative digital financial services to your retail and business customers—all on the same powerful, API-first platform—so your customers can bank how, when and where they want.
        We’re responsible for services such as:"
          detailsMini="
        We’re responsible for services such as:"
          itema="Cash-in"
          itemb="Cash-out"
          itemc="Balance inquiry"
          itemd="Generate mini statements"
          iteme="Collection of documents"
          itemf="Microloans"
          itemg="Airtime purchase"
          itemh="Bill payments"
          itemi="P2P transfer"
          flexImage={AboutImg}
          showList="show-list"
          showText="show-text"
        />
      </motion.div>
    </div>
  );
};

export default AgencyHeader;
