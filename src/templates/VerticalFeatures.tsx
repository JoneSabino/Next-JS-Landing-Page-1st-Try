import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Nossas Ferramentas"
    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada nisi tellus, non imperdiet nisi tempor at."
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
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Test Data Manager"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse bibendum, nunc non posuere consectetur, justo erat semper enim, non hendrerit dui odio id enim."
      image="/assets/images/tdm.svg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
