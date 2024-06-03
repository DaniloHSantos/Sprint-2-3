<h1 align="center">API IBGE</h1>
 
## :pushpin: Índice
 
- [Descrição](#bookmark_tabs-descrição)
- [Como rodar](#computer-como-rodar)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Explicação das funções](#newspaper-explicação-das-funções)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Diagrama AWS](#bar_chart-diagrama-aws)
- [Dificuldades](#anger-dificuldades)
- [Autores](#-autores)
 

 
## :bookmark_tabs: Descrição
 
Desenvolvemos uma interface gráfica com `HTML` e `CSS` e utilizamos `NodeJS` e `JavaScript` para desenvolver uma aplicação que consome a API do IBGE. Fizemos o uso do `Docker` e `Docker-compose` para containerizar o projeto e realizamos o deploy em uma máquina `EC2 na AWS` para acesso público.
 
#### Como utilizar o sistema:
 
- O usuário seleciona o filtro de busca por sexo.
- O usuário digita um nome e clica no botão buscar.
- O sistema então gera uma tabela mostrando a frequência do nome informado.
 
![Design sem nome (1)](https://github.com/Compass-pb-aws-2024-ABRIL/sprints-2-3-pb-aws-abril/assets/123120658/0038e72e-a5ce-42c6-9aaa-3b7bc59511af)
 
## :computer: Como rodar
1. Pré-requisitos = Instale o [Docker](https://docs.docker.com/desktop/install/windows-install/) no seu computador ou o [Node](https://nodejs.org/en)
2. Clone o repositório na sua máquina local
```bash
git clone https://github.com/Compass-pb-aws-2024-ABRIL/sprints-2-3-pb-aws-abril.git
cd sprints-2-3-pb-aws-abril
git checkout grupo-4
```

3. Rode a aplicação:
 - Em Docker (Abra o aplicativo no seu computador)
```bash
docker compose up
```
 - Em Node
```bash
npm install
npm run dev
```

4. Abra a [aplicação docker](http://localhost:80/) ou a [aplicação node](http://localhost:3000)

5. Caso queira parar a aplicação aperte `Cntrl + C` no terminal
 
## 📂 Estrutura do Projeto
 
```bash
src/
├─ public/
├─├─ css/
├─├─├─ styles.css
├─├─ js/
├─├─├─ index.js
├─ routes/
├─├─ mainRoutes.js
├─ view/
├─├─ index.html
├─ app.js
docker-compose.yaml
Dockerfile
package-lock.json
package.json
README.md
```

 
## :newspaper: Explicação das funções
O código possui sete funções: `validaInputLetras()`, `getIBGE()`, `preencheTabela()`, `route.get()`, `app.use(express.static('./src/public'))`, `app.use('/', routes)`, `app.listen()`.
1. A função `validaInputLetras()` é utilizada para validar o nome digitado, vendo se não tem números, espaços ou caracteres especiais.
2. `getIBGE()` após chamar a função `validaInputLetras()` ela vê o sexo selecionado e faz a busca na API de acordo com o nome e sexo e manda os dados para a função `preencheTabela()`.
3. `preencheTabela()` recebe os dados e coloca eles em forma de tabela no HTML.
4. `route.get()` é uma função que é utilizada para renderizar a página HTML.
5. `app.use(express.static('./src/public'))` fornece os arquivos estáticos além do HTML, como o CSS e index.js.
6. `app.use('/', routes)` utilizado para chamar o arquivo mainRoutes.
7. A última função `app.listen()` define a porta onde a função irá funcionar caso utilize `node run dev`.
 
## ‍👨‍💻 Tecnologias utilizadas
 
• `HTML`
• `CSS`
• `JavaScript`
• `NodeJS`
• `Docker`
 
## :bar_chart: Diagrama AWS
![5a5a90b3-877c-4bb7-954b-b7214731f7fe](https://github.com/Compass-pb-aws-2024-ABRIL/sprints-2-3-pb-aws-abril/assets/123120658/bf11b947-7760-41aa-a3e2-fbfcc39e3f92)
 
## :anger: Dificuldades
- Não conseguimos separar as funções do index.js em arquivos diferentes pois não conseguimos fazer o import e export funcionar.
- Como foi o 1° contato com API do grupo não conseguimos utilizar a API que escolhemos inicialmente do jeito que queríamos e tivemos que mudar de API, o que fez com que não conseguíssemos explorar muitsa utilidades em Node (funções como get, post, fetch...).
- Tivemos dificuldades em rodar a máquina EC2 na AWS, pois não estávamos conseguindo acessa-la via terminal e via IP público. Após nos aprofundarmos em como as sub-redes e VPCs da AWS funcionam e criar uma especificamente para a nossa aplicação, conseguimos fazer funcionar!
 
## ✍🏻 Autores
 
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/117547163?v=4" width=115><br><sub>Danilo Honorio dos Santos</sub>](https://github.com/DaniloHSantos) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/150451502?v=4" width=115><br><sub>Emanuel Oliveira de Assis Domingues</sub>](https://github.com/emanuel-oliveirad) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/165322143?v=4" width=115><br><sub>Isael Aparecido Rosa</sub>](https://github.com/IsaelRosa) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/123120658?v=4" width=115><br><sub>Samuel de Oliveira Vanoni</sub>](https://github.com/SamuVanoni)
| :---: | :---: | :---: | :---: |
