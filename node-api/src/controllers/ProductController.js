const mongoose = require('mongoose');

const Product = mongoose.model('Product');

module.exports = {
    async index(req, res) { // index -- listagem de todos os registros de produtos dentro da base de dados
        const { page = 1 } = req.query; //query -- para parametros get, está pegando o parâmetro page que está no get
        const products = await Product.paginate({}, { page, limit: 10 });  /*Product.find(); /*find -- se quiser passar verificação, pode; await -- faz com que a próxima 
        linha só execute depois de buscar os registros no banco de dados.   //// Product.paginate({/*wheres ou condições se precisasse(filtros)}, {page: (atual), limit: value})*/

        return res.json(products); //json -- javascript object notation 
    },

    async show(req, res) {
        const products = await Product.findById(req.params.id); //params -- para os ids definidos nas rotas e outras informações 

        return res.json(products);
    },

    async store(req, res) {
        const product = await Product.create(req.body); //cria o produto no banco de dados, enviando req.body(corpo da requisição).

        return res.json(product); //retorna o produto que acabou de ser criado no banco de dados.
    },

    async update(req, res) {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true }); //new : true -- retorna para o product(const) o novo produto, já atualizado

        return res.json(product);
    },

    async destroy(req, res) {
        await Product.findByIdAndRemove(req.params.id);

        return res.send();
    }

}