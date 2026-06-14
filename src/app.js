import express from 'express';
import conectaNaDatabase from './config/dbconnect.js';
import routes from './routes/index.js';

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro na conexão com o banco de dados: ", erro);
})

conexao.once("open", () => {
    console.log("Conexão com o banco de dados estabelecida com sucesso!")
})

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1)
    res.status(204).send("Livro deletado com sucesso")
});

export default app;

//mongodb+srv://danielmaxzika_db_user:<db_password>@cluster0.4vwnymy.mongodb.net/?appName=Cluster0
