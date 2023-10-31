class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('Hello, World!');
  }

  show() {
    // Obter um unico registro
  }

  store() {
    // Criar novo registro
  }

  create() {
    // Criar um novo registro
  }

  delete() {
    // Deletar um registro
  }
}

// Singleton
// Ao importar com a palavra chave 'new', todas os modulos que importarem a
// classe usarao a mesma classe e nao uma nova instancia
module.exports = new ContactController();
