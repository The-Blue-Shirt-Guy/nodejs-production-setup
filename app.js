import express from 'express';

let app = express()

app.get('/', (req, res) => {
    res.send('Hello world 1')
})


app.listen(8080, () => {
    console.log('server is working')
})