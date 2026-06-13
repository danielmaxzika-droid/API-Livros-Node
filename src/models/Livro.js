import mongoose from "mongoose";

const livroSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    titulo: { type: String, required: true },
    editora: { type: String },
    paginas: { type: Number },
    preco: { type: Number }
}, {versionKey: false}) // aqui foi usado o versionKey para evitar que o mongoose adicione um campo __v em cada documento do banco de dados, que é usado para controle de versão. Com versionKey: false, esse campo não será adicionado aos documentos.})

const livro = mongoose.model("livros", livroSchema)

export default livro;