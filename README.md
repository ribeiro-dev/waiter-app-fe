# Waiter App

Este projeto consiste em um sistema completo para gerenciamento de pedidos, dividido em três partes: um [aplicativo mobile](https://github.com/ribeiro-dev/waiter-app-mobile) para o cliente, uma [API](https://github.com/ribeiro-dev/waiter-app-api) para processamento de pedidos e um [painel web](https://github.com/ribeiro-dev/waiter-app-fe) para gerenciamento da cozinha.

## Funcionalidades

* **Aplicativo Móvel (Mobile):**
    * Realização de pedidos de comidas e bebidas.
    * Seleção de produtos e especificação da mesa.
    * Envio de pedidos em tempo real para a API.
* **API (Backend):**
    * Recebimento e processamento de pedidos do aplicativo móvel.
    * Armazenamento de dados em banco de dados NoSQL (MongoDB).
    * Comunicação em tempo real com o painel web para notificar novos pedidos.
* **Painel Web (Frontend):**
    * Visualização de pedidos em tempo real.
    * Gerenciamento dos pedidos
    * Atualização do status dos pedidos através de uma interface intuitiva.
        * Fila de espera
        * Em preparação
        * Pronto

## Tecnologias Utilizadas

* **Mobile:**
    * React Native
    * Axios
    * Styled Components
* **Backend:**
    * [Tecnologia utilizada, ex: Node.js com Express, Python com Flask/Django, etc.]
    * Node.js
    * Express
    * React
    * MongoDB
    * Socket.IO
* **Frontend:**
    * React
    * Axios
    * Socket.IO
