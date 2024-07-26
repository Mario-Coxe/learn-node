import http from 'node:http'

const users = []

const server = http.createServer((req, res) => {

    const {method, url} = req

    if(method === 'GET'){
        console.log(users)
        return res
        .setHeader('Content-type',  'application/json')
        .end(JSON.stringify(users))
    }
    if(method === 'POST'){
        users.push({
            id: 1,
            name: "Coxe"
        })

        return res.end("User Criado!")
    }
    //return res.end('Hello ')
})

server.listen(3333)