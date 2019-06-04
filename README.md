# Painel de responsáveis por resolver Incidentes                                                  

Aplicação Front end  consome a api na url: http://localhost:8080/im-day e apresenta os dias e responsáveis por cada dia.

# Roadmap!

  - Validação quando não tiver conexão com a api.
  - Apresentação de mensagem ao usuário indicando indisponibilidade.   
  
### Tecnologias 

Usamos as seguintes tecnologias :

* [Node] - Interpretador java script assíncrono.
* [express] - framework para aplicativo da web do Node.js mínimo e flexível
* [Bootstrap] - .
* [Docker] - .


### Installation

As especificações para a criação do container estão contidas Dockerfile na raiz do projeto .

    - FROM node:8  # Definimos em qual imagem vamos criar a aplicação  
    - WORKDIR /app # Criamos um diretorio dentro da imagem para a aplicação 
    - COPY package.json /app #Copiamos para dentro do container o arquivo com as especificações das dependencias   
    - RUN npm install  #Instala as dependências especificadas no package.json 
    - COPY . /app  # Copia todo o codigo da aplicação para o container
    - EXPOSE 8081  # instrução EXPOSE para que ela seja mapeada pelo daemon do docker
    - CMD node index.js # Comando executa a aplicação


### Docker
Para criação e execução do container usamos respectivamente os seguintes comandos 

```sh
$ docker build -t <your username>/node-web-app
$ docker run -p 4200:8080 -d <your username>/node-web-app 
```

### Detalhes

- A aplicação é iniciada em http://localhost:4200/


   [Node]: <https://nodejs.org/en/>
   [Express]: <https://expressjs.com/pt-br/>
   [Bootstrap]: <https://getbootstrap.com/>
   [Docker]: <https://www.docker.com/>
  
  
