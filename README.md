# API REST Node.js

API REST para gerenciar filmes e estúdios desenvolvida com Node.js, JavaScript, Mongoose, MongoDB e Express.js..

<p align="left">
  <img alt="Repo's top languages" src="https://img.shields.io/static/v1?label=Main%20technology&message=Node.js&style=for-the-badge&color=007D9C&labelColor=000000">
</p>

## Endpoints

Nessa API você encontrará endpoints relacionados a um CRUD de **filmes e estúdios**
 
<table>
  <tr>
    <th>Request name</th>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Request body</th>
    <th>Returns</th>
  </tr>
  
  <tr>
    <td>ListFilm</td>
    <td>GET</td>
    <td><i>/film</i></td>
    <td>No body</td>
    <td>All Movies</td>
  </tr>

  <tr>
    <td>RegisterFilm</td>
    <td>POST</td>
    <td><i>/film</i></td>
    <td>JSON with the properties <br /> <code>title: string, description: string, image_url: string, trailer_url: string, release_year: number, studioId: number, name_studio: number</td>
    <td>The register movie</td>
  </tr>

   <tr>
    <td>UpdateMovie</td>
    <td>PUT</td>
    <td><i>/film/{filmId}</i></td>
    <td>JSON with the properties <br /> <code>title: string, description: string, image_url: string, trailer_url: string, release_year: number, studioId: number, name_studio: number</code></td>
    <td>The update movie </td>
  </tr>

  <tr>
    <td>DeleteMovie</td>
    <td>DELETE</td>
    <td><i>/film/{filmId}</i></td>
    <td>No body</td>
    <td>The delete movie</td>
  </tr>
</table>

 ## Tecnologias utilizadas

- Typescript
- Node.js
- Mongoose
- MongoDb
- Express.js.


##  Requisitos

Requisitos Funcionais 
- [x] O usuário deve poder criar uma transação;
- [x] O usuário deve poder obter um extrato de uma unica transação;
- [x] O usuário deve poder listar todas transações que já ocorreram;
- [x] O usuário deve poder visualizar o somatório após todas as transações;

Regras de Negócio
- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito que será subtraído;
- [X] Deve ser possível identificar o usuário entre as requisições;
- [X] O usuário só pode visualizar transações que ele criou;


