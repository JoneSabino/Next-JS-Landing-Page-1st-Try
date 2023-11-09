import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
  // title="Nossas Ferramentas"
  // description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
  >
    <VerticalFeatureRow
      title="Test Coder API"
      description={
        <>
          Transforme especificações de API em testes automatizados robustos com
          Robot Framework, otimizando seu fluxo de trabalho com eficácia e
          inovação.
        </>
      }
      image="/assets/images/tca.svg"
      imageAlt="TCA alt text"
    />
    <VerticalFeatureRow
      title="Test Data Manager"
      description={
        <>
          O TDM é formado pela união de processos e recursos tecnológicos que
          tem como objetivo oferecer massa de dados através do gerenciamento e
          automação de fluxos de negócios.
        </>
      }
      image="/assets/images/tdm.svg"
      imageAlt="TDM alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
