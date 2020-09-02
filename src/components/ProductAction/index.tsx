import React from 'react';

import {
  Container,
  Condition,
  Row,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
  HeartIcon

} from './styles';

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo  |  620 vendidos</Condition>

      <Row>
        <h1>Fone De Ouvido Jbl T500bt Bluetooth</h1>
        <HeartIcon/>
      </Row>

      <DispatchTag>Enviando Normalmente</DispatchTag>

     <PriceCard>
       <PriceRow>
        <span className="symbol">R$</span>
        <span className="fraction">234</span>
        <span className="cents">99</span>
       </PriceRow>
       <InstallmentsInfo>em 12x de R$ 19,58</InstallmentsInfo>
     </PriceCard>

     <StockStatus>Estoque disponível</StockStatus>
     <MethodCard>
       <CheckIcon/>

       <div>
         <span className="title">Frete grátis</span>
         <span className="details">Benefício Mussum Ipsum</span>
         <a href="#" className="more">
           Ver mais opções
         </a>
       </div>
     </MethodCard>
     <Actions>
       <Button >Comprar agora</Button>
       <Button >Adicionar ao carrinho</Button>
     </Actions>

     <Benefits>
       <li>
         <ShieldIcon/>
         <p>Compra Garantida, receba o produto que está esperando ou devolvemos o seu dinheiro.</p>
       </li>
     </Benefits>
</Container>
  );
};

export default ProductAction;
