import { Container } from "./styles";
import { OrdersBoard } from "../OrdersBoard";
import { Order } from "../../types/Order";

const orders: Array<Order> = [
   {
      "_id": "66ce362471d159d43aa45176",
      "table": "123",
      "status": "IN_PRODUCTION",
      "products": [
         {
            "product": {
               "name": "Pizza Quatro Queijos",
               "imagePath": "1724738968792-quatro-queijos.png",
               "price": 40,
            },
            "quantity": 3,
            "_id": "66ce362471d159d43aa45177"
         },
         {
            "product": {
               "name": "Coca Cola",
               "imagePath": "1724788149795-coca-cola.png",
               "price": 7,
            },
            "quantity": 2,
            "_id": "66ce362471d159d43aa45178"
         }
      ]
   },
   {
      "_id": "66ce370d4ac74fa60b412695",
      "table": "3",
      "status": "WAITING",
      "products": [
         {
            "product": {
               "name": "Coca Cola",
               "imagePath": "1724788149795-coca-cola.png",
               "price": 7,
            },
            "quantity": 2,
            "_id": "66ce370d4ac74fa60b412696"
         }
      ]
   }
];

export function Orders() {
   return (
      <Container>
         <OrdersBoard
            icon="🕕"
            title="Fila de Espera"
            orders={orders}
         />
         <OrdersBoard
            icon="👨‍🍳"
            title="Em preparação"
            orders={[]}
         />
         <OrdersBoard
            icon="✅"
            title="Pronto"
            orders={[]}
         />

      </Container>
   );
}
