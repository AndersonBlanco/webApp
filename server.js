
const exp = require('express');  

const app = exp();

const script = `print('Hello Universe')`;

app.use(exp.static(__dirname + '/root'));
app.get('/', (req, res) =>{
   res.sendFile('root/auth.html', {root: __dirname});

});

app.get('/home', (req, res) =>{
    res.sendFile('root/home.html', {root: __dirname});
});

app.get('/chatgpt', (req, res) =>{
    res.sendFile('root/chatGPT.html', {root: __dirname});
});

const port = 8080;
app.listen(port, () =>{
    console.log(`Server listening on port ${port}`)
})

