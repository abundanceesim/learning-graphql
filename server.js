const express = require('express')
const expressGraphQL = require('express-graphql')
const app = express()
app.listen(5000., ()=> {
    console.log('Server running');
})

app.use('/graphql', expressGraphQL({
    graphiql:true
}))