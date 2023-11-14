# API REST Node.js

API REST para gerenciar filmes e estúdios desenvolvida com Node.js, JavaScript, Mongoose, MongoDB e Express.js..

<p align="left">
  <img alt="Repo's top languages" src="https://img.shields.io/static/v1?label=Main%20technology&message=Node.js&style=for-the-badge&color=007D9C&labelColor=000000">
</p>

## Endpoints

endpoints relacionados a um CRUD de **filmes**
 
<table>
  <tr>
    <th>Request name</th>
    <th>Method</th>
    <th>Endpoint</th>
    <th>Request body</th>
    <th>Returns</th>
  </tr>
  

  <tr>
    <td>RegisterFilm</td>
    <td>POST</td>
    <td><i>/film</i></td>
    <td>JSON with the properties <br /> <code>title: string, description: string, image_url: string, trailer_url: string, release_year: number, studioId: number, name_studio: number</td>
    <td>The register movie</td>
  </tr>

  <tr>
    <td>ListFilm</td>
    <td>GET</td>
    <td><i>/film</i></td>
    <td>No body</td>
    <td>All Movies</td>
  </tr>

  <tr>
    <td>ListFilmByStudio</td>
    <td>GET</td>
    <td><i>film/studio/{StudioId}</i></td>
    <td>No body</td>
    <td>All Movies by Studio</td>
  </tr>

   <tr>
    <td>UpdateFilm</td>
    <td>PUT</td>
    <td><i>/film/{filmId}</i></td>
    <td>JSON with the properties <br /> <code>title: string, description: string, image_url: string, trailer_url: string, release_year: number, studioId: number, name_studio: number</code></td>
    <td>The update movie </td>
  </tr>

  <tr>
    <td>DeleteFilm</td>
    <td>DELETE</td>
    <td><i>/film/{filmId}</i></td>
    <td>No body</td>
    <td>The delete movie</td>
  </tr>
</table>


  ## Endpoints

  endpoints relacionados a um CRUD de **Estúdios**
  
  <tr>
    <td>ListStudios</td>
    <td>GET</td>
    <td><i>/studio</i></td>
    <td>No body</td>
    <td>All studios</td>
  </tr>

  <tr>
    <td>RegisterStudio</td>
    <td>POST</td>
    <td><i>/studio</i></td>
    <td>JSON with the properties <br /> <code>title: string, headquarters: string, unique: true | false, studioid: number </td>
    <td>The register studio</td>
  </tr>

   <tr>
    <td>UpdateStudio</td>
    <td>PUT</td>
    <td><i>/studio/{studioId}</i></td>
    <td>JSON with the properties <br /> <code>title: string, headquarters: string, unique: true | false, studioid: number </code></td>
    <td>The update studio </td>
  </tr>

  <tr>
    <td>DeleteStudio</td>
    <td>DELETE</td>
    <td><i>/studio/{studioId}</i></td>
    <td>No body</td>
    <td>The delete studio</td>
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


