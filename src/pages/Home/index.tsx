import Card from "../../components/Card";
import styles from "./styles.module.scss";
import SupervisorIcon from "../../assets/icon-supervisor.svg";
import TeamBuilderIcon from "../../assets/icon-team-builder.svg";
import KarmaIcon from "../../assets/icon-karma.svg";
import CalculatorIcon from "../../assets/icon-calculator.svg";

export default function Home() {
  return (
    <main>
      <div className={styles.hero}>
        <h1>
          Reliable, efficient delivery
          <br />
          <strong>Powered by Technology</strong>
        </h1>
        <p>
          Our Artificial Intelligence powered tools use millions of project data
          points to ensure that your project is successful
        </p>
      </div>

      <div>
        <Card
          cardColor="cyan"
          title="Supervisor"
          subtitle="Monitors activity to identify project roadblocks"
          imageUrl={SupervisorIcon}
          altText="Lupa. Ilustração de uma lupa com um olho humano ao contro."
        />

        <div>
          <Card
            cardColor="red"
            title="Team Builder"
            subtitle="Scans our talent network to create the optimal team for your project"
            imageUrl={TeamBuilderIcon}
            altText="Homepage. Ilustração de uma casa vermelha sobre uma página da Web de cor cinza."
          />
          <Card
            cardColor="orange"
            title="Karma"
            subtitle="Regularly evaluates our talent to ensure quality"
            imageUrl={KarmaIcon}
            altText="Lâmpada brilhante com uma engrenagem ao centro. Ilustração."
          />
        </div>

        <Card
          cardColor="blue"
          title="Calculator"
          subtitle="Uses data from past projects to provide better delivery estimates"
          imageUrl={CalculatorIcon}
          altText="Gráficos em um monitor de computador. Ilustração."
        />
      </div>
    </main>
  );
}
