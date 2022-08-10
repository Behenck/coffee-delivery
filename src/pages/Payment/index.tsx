import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Minus,
  Money,
  Plus,
  Trash,
} from 'phosphor-react'
import {
  Actions,
  Address,
  CardsPayments,
  CardsPaymentsButton,
  Cart,
  CartCoffees,
  CompleteOrder,
  Counter,
  Details,
  FormAddress,
  FormInput,
  Info,
  ItensCart,
  PaymentContainer,
  PaymentContent,
  Product,
  Total,
  TrashButton,
} from './styles'

import CoffeImage from '../../assets/Expresso-Tradicional.png'

export function Payment() {
  return (
    <PaymentContainer>
      <CompleteOrder>
        <h1>Complete seu pedido</h1>

        <Address>
          <header>
            <MapPinLine size={22} weight="bold" />
            <div>
              <h2>Endereço de Entrega</h2>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </header>

          <FormAddress>
            <div>
              <FormInput type="text" placeholder="CEP" inputSize="33" />
            </div>
            <div>
              <FormInput type="text" placeholder="Rua" inputSize="100" />
            </div>
            <div>
              <FormInput type="text" placeholder="Número" inputSize="33" />
              <FormInput type="text" placeholder="Complemento" inputSize="66" />
            </div>
            <div>
              <FormInput type="text" placeholder="Bairro" inputSize="33" />
              <FormInput type="text" placeholder="Cidade" inputSize="50" />
              <FormInput type="text" placeholder="UF" inputSize="13" />
            </div>
          </FormAddress>
        </Address>

        <PaymentContent>
          <header>
            <CurrencyDollar size={22} weight="bold" />
            <div>
              <h2>Pagamento</h2>
              <p>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </p>
            </div>
          </header>

          <CardsPayments>
            <CardsPaymentsButton>
              <CreditCard size={16} />
              CARTÃO DE CRÉDITO
            </CardsPaymentsButton>
            <CardsPaymentsButton>
              <Bank size={16} />
              CARTÃO DE DÉBITO
            </CardsPaymentsButton>
            <CardsPaymentsButton>
              <Money size={16} />
              DINHEIRO
            </CardsPaymentsButton>
          </CardsPayments>
        </PaymentContent>
      </CompleteOrder>

      <CartCoffees>
        <h1>Cafés selecionados</h1>
        <Cart>
          <Product>
            <Info>
              <img src={CoffeImage} alt="" />
              <Details>
                <p>Expresso Tradicional</p>
                <Actions>
                  <Counter>
                    <button>
                      <Minus size={14} weight="bold" />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus size={16} weight="bold" />
                    </button>
                  </Counter>
                  <TrashButton>
                    <Trash size={16} weight="bold" />
                    REMOVER
                  </TrashButton>
                </Actions>
              </Details>
            </Info>
            <span>R$ 9,90</span>
          </Product>

          <Product>
            <Info>
              <img src={CoffeImage} alt="" />
              <Details>
                <p>Expresso Tradicional</p>
                <Actions>
                  <Counter>
                    <button>
                      <Minus size={14} weight="bold" />
                    </button>
                    <span>1</span>
                    <button>
                      <Plus size={16} weight="bold" />
                    </button>
                  </Counter>
                  <TrashButton>
                    <Trash size={16} weight="bold" />
                    REMOVER
                  </TrashButton>
                </Actions>
              </Details>
            </Info>
            <span>R$ 9,90</span>
          </Product>

          <ItensCart>
            <div>
              <p>Total de itens</p>
              <p>R$ 29,70</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ 3,50</p>
            </div>
            <Total>
              <p>Total</p>
              <p>R$ 33,20</p>
            </Total>
            <button>CONFIRMAR PEDIDO</button>
          </ItensCart>
        </Cart>
      </CartCoffees>
    </PaymentContainer>
  )
}
