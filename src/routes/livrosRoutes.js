import express from 'express';
import LivrosController from '../controllers/livrosController.js';

const routes = express.Router();

routes.get('/livros', LivrosController.listarLivros);
routes.get('/livros/busca', LivrosController.listarLivrosPorEditora);
routes.get('/livros/:id', LivrosController.listarLivroPorId);
routes.post('/livros', LivrosController.cadastrarLivro);
routes.put('/livros/:id', LivrosController.atualizarLivro);
routes.delete('/livros/:id', LivrosController.excluirLivro);

export default routes;