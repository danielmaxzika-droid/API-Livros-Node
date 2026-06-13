import express from 'express';
import conectaNaDatabase from './config/dbconnect.js';
import livro from './models/Livro.js';



const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro na conexão com o banco de dados: ", erro);
})

conexao.once("open", () => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!")
})

const app = express();
app.use(express.json()); // aqui foi usado o express.json() para que o Express possa entender e processar os dados enviados no corpo da requisição em formato JSON. Sem isso, o Express não seria capaz de interpretar corretamente os dados enviados pelo cliente, e a propriedade req.body estaria vazia ou indefinida. Com express.json(), o Express pode analisar o corpo da requisição e disponibilizar os dados como um objeto JavaScript acessível através de req.body.  

app.get("/", (req, res) => {
    res.status(200).send("Curso de node.js")
})

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({})
    res.status(200).json(listaLivros);
})

app.get("/livros/:id", (req, res) => { // o : foi usado para indicar que o id é um parâmetro de rota, ou seja, um valor dinâmico que pode ser diferente para cada requisição. Quando um cliente faz uma requisição para a rota "/livros/1", por exemplo, o valor "1" será capturado como o parâmetro id e estará disponível em req.params.id. Isso permite que o servidor processe a requisição de forma dinâmica, respondendo com o livro correspondente ao id fornecido na URL.
  const index = buscaLivro(req.params.id);
  res.status(200).json(livros[index]);   
})

app.post("/livros", (req, res) => {
    livros.push(req.body); //aqui foi usado o push e o .body por que o push é um método de array que adiciona um novo elemento ao final do array, e o .body é uma propriedade do objeto de requisição que contém os dados enviados pelo cliente no corpo da requisição, geralmente em formato JSON. Então, quando um cliente envia uma requisição POST para a rota "/livros" com um novo livro no corpo da requisição, esse livro é adicionado ao array de livros usando o push.
    res.status(201).send("Livro cadastrado com sucesso")
    //aqui foi usado o codigo 201 por que o código de status HTTP 201 Created é usado para indicar que uma nova entidade foi criada com sucesso como resultado da requisição. No contexto de uma requisição POST, isso significa que um novo recurso (neste caso, um livro) foi adicionado ao servidor. O código 201 é uma resposta apropriada para indicar que a operação de criação foi bem-sucedida e que o recurso foi criado com sucesso.
})

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo
    res.status(200).json(livros)
})

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1)
    res.status(204).send("Livro deletado com sucesso")
});

export default app;

//mongodb+srv://danielmaxzika_db_user:<db_password>@cluster0.4vwnymy.mongodb.net/?appName=Cluster0
