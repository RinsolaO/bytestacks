import "./AboutTrust.css";
import BankingFlex from "../../reusables/BankingFlex";
import AboutImg from "../../../img/about-trust.svg";

const AboutTrust = () => {
  return (
    <div>
      <BankingFlex
        title="What We Power"
        subtitle="Achieve digital transformation for your business services"
        trust="Collection"
        trust1="Aggregation"
        trust2="Reconciliation"
        trust3="Data Analysis"
        flexImage={AboutImg}
        showTrust="show-trust"
        miniTrust="Allows you track your Agent network and their revenue collections on field for proper accountability. "
        miniTrust1="Allows you manage and organize the Agents Journey from the moment they on-board to the moment they drop-out. "
        miniTrust2="Allows you to monitor transactions and reconcile your accounts with partners’ remittances. With this all boxes are checked and there are no errors."
        miniTrust3="Allows you view real time analytics of every transaction as it’s happening and increases business intelligence."
      />
    </div>
  );
};

export default AboutTrust;
