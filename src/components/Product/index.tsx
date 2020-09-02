import React from 'react';

import foneImage from '../../assets/fone.png';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img src={foneImage} alt="foneBluetooth" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction/>
          <SellerInfo/>
          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>
    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Ipsum</p>
        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
      </span>

      <span>
        <p className="title">Garantia do vendedor</p>
        <p className="description">Sem garantia</p>
      </span>
    </div>

    <a href="#" >Saiba mais sobre garantia</a>
  </Section>
)
const Info = () => (
  <Description>
    <h2>Descrição</h2>

    <p>
    Mussum Ipsum, cacilds vidis litro abertis. Quem manda na minha terra sou euzis! Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Em pé sem cair, deitado sem dormir, sentado sem cochilar e fazendo pose. Manduma pindureta quium dia nois paga.
      <br />
      <br />
    Itens inclusos: <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />

      <br />
      Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Quem num gosta di mé, boa gentis num é. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Diuretics paradis num copo é motivis de denguis.Mussum Ipsum, cacilds vidis litro abertis. Diuretics paradis num copo é motivis de denguis. A ordem dos tratores não altera o pão duris. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
    </p>
  </Description>
)
export default Product;
