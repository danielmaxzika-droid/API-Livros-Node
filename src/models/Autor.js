import mongoose from 'mongoose';

const autorSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    nacionalidade: { type: String }
    }, {versionKey: false}) // aqui foi usado o versionKey para evitar que o mongoose adicione um campo __v em cada documento do banco de dados, que é usado para controle de versão. Com versionKey: false, esse campo não será adicionado aos documentos.}))

const autor = mongoose.model("autores", autorSchema)

export {autor, autorSchema};
