import Link from 'next/link';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Hero = () => (
  <Background color="bg-gray-100">
    <Section yPadding="py-6">
      <NavbarTwoColumns logo={<Logo xl />} className="ml-[-192px]">
        {/* <li>
          <Link href="https://github.com/ixartz/Next-JS-Landing-Page-Starter-Template">
            GitHub
          </Link>
        </li>
        <li>
          <Link href="/">Sign in</Link>
        </li> */}
      </NavbarTwoColumns>
    </Section>

    <Section yPadding="pt-20 pb-32">
      <HeroOneButton
        title={
          <>
            {'Portal de Ferramentas\n'}
            <span className="text-primeBlue">Prime Control</span>
          </>
        }
        description={
          <span className="mx-auto max-w-md text-gray-1000">
            {' '}
            Acesso centralizado às ferramentas que potencializam a produtividade
            em QA. Navegue pelos nossos recursos especializados e acelere seu
            processo de testes.
          </span>
        }
        button={
          <div className="flex justify-center space-x-4">
            <Link href="https://testcoder.primecontrol.com.br">
              <Button
                xl
                className={`w-64 bg-primeBlue text-white hover:bg-primeBlue-dark`}
              >
                Test Coder API
              </Button>{' '}
              {/* Adjust the hover class as needed */}
            </Link>
            <Link href="https://tdm.primecontrol.com.br">
              <Button
                xl
                className="w-64 bg-primeBlue text-white hover:bg-primeBlue-dark"
              >
                Test Data Manager
              </Button>{' '}
              {/* Adjust the hover class as needed */}
            </Link>
          </div>
        }
      />
    </Section>
  </Background>
);

export { Hero };
