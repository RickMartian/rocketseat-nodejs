const express = require('express'); //importando express dentro
const mongoose = require('mongoose'); //ORM para trabalhar com mongoDB no nodejs
const cors = require('cors');
const requireDir = require('require-dir');

//INICIANDO O APP
const app = express(); /*executa a função express, instancia o express */

app.use(express.json()); //permite com que dados sejam enviados em formato de json.
app.use(cors()); //da acesso a sua api para todos os métodos(get, post, etc) de qualquer lugar

//INICIANDO O DB
mongoose.connect('mongodb://192.168.99.100:27017/nodeapi', { useNewUrlParser: true });

requireDir('./src/models');

//const Product = mongoose.model('Product'); /*Da acesso ao Product para inserir novos valores, atualizar, etc */

//require('./src/models/Product'); //requisita o Schema Product (que regista o model Product na aplicação (no banco));

//require-dir -- biblioteca que faz todos os requires de um diretório automaticamente para n precisar ficar dando require um por um. 

app.use('/api', require('./src/routes'));// .use recebe todo tipo de requisição 

app.listen(3001); //Fala pra aplicação ouvir a porta 3001 no navegador











/*-------------------------------------------------COMENTÁRIOS ÚTEIS---------------------------------------------- */
// //PRIMEIRA ROTA
// app.get('/', (req, res) => { /*Toda vez que o usuário acessar a rota
//     Primeiro parâmentro: rota
//     Segundo parâmetro: função que recebe dois params, rep e res
//     req == requisição do servidor(quando acessar a página), contém todos os detalhes e informações
//     dessa requisição. Contendo parâmetros, corpo do req, usuario da req, autenticação, ip, todas informações
//     res == resposta que vamos dar para a requisição
//     Fluxo do backend --> A gente faz uma requisição(acessando a url, dando f5, etc) e o servidor irá nos devolver uma
//     resposta*/

//     Product.create({ 
//         title: 'React Native',
//         description: 'Build native apps with React',
//         url: 'http://github.com/facebook/react-native'
//      })

//     return res.send('Hello RocketSeat');//envia resposta pro usuário

// });