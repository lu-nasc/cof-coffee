FROM  node:13 
# versão do node e container principal para execução do app

WORKDIR /usr/src/app
# diretório do projeto para executar o container principal

COPY package.json .
# copia os arquivos de dependencias da aplicação necessárias do node pro container

RUN npm install --quiet
# faz a mágica de instalar todas as dependências

COPY . .
# copia tudo q tiver no projeto pro container já q instalou tudo q precisa 

EXPOSE 8000
# porta da aplicação pra web/browser

CMD ["node", "src/app.js"]
# starta a aplicação