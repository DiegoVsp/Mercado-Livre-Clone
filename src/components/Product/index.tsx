import React from 'react';

import tshirtImage from '../../assets/tshirt.png';

import { Container, Row, Panel, Column, Gallery, Section, Description } from './styles';
import SellerInfo from '../SellerInfo';

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
            <img src={tshirtImage} alt="T-Shirt" />
          </Gallery>

          <Info />
        </Column>

        <Column>
          {/* <ProductAction /> */}
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
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam aliquam consequatur nemo vitae blanditiis placeat quos molestias perspiciatis eveniet repudiandae? Rerum unde aspernatur in voluptatum optio amet itaque qui nihil.
      <br />
      <br />
    Itens inclusos: <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />
    - 1x LED <br />

      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam deserunt expedita incidunt eligendi nisi et ipsum maiores esse rem soluta. Ab mollitia eveniet sequi, esse iure dolor quae. Sit, numquam. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum enim ea laboriosam tempora ad dignissimos modi architecto nam quas eius sequi facere provident, dolores nobis expedita et! Iste, aspernatur necessitatibus!
    </p>
  </Description>
)
export default Product;
