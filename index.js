const api = require("./api")
const express = require('express');
const server = express();
server.use(express.json());
const bodyParser = require('body-parser')


server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended:true}))

//declarando que vou usar o ejs
server.set('view engine','ejs')
//Mostrando para o Express onde estaminha pasta views
server.set('views', './src/views')

//renderizando minha pagina principal
server.get('/',(req,res)=> {
    //chmamdo o arquivo da minha view
    res.render('index')
})

server.get('/autor', (req, res) => {
    return res.send ({ message: "Felipe"});
});


server.get('/pokemon/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const { data } = await api.get(`pokemon/${id}`);
      
      return res.send({ name:data.name});
    } catch (error) {
      res.send({ error: error.message });
    }
});

//pegando os dados da minha view
server.post('/', async(req, res) =>{
    const {id} = req.body
    // console.log(cep)
    const resultado = await buscarPokemon(id)
    console.log(resultado)

    res.render('resultado',{dado:resultado})
})


server.listen(8080, function(){
    console.log("Ok");
})