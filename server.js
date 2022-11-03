const express = require('express')
const app = express()
const PORT = 8000


const rappers = {


    'rick ross': {
        'birthName': 'William Leonard Roberts II',
        'age': 46,
        'birthLocation': 'Clarksdale, Mississippi',
        'othername': 'Rozay'

    },

    'jeezy': {

        'birthName': 'Jay Wayne Jenkins',
        'age': 45,
        'birthLocation': 'Columbia, South Carolina',
        'othername': 'Big SNo'

    },


    'lil wayne': {

        'birthName': 'Dwayne Michael Carter Jr',
        'age': 40,
        'birthLocation': 'New Orleans, Louisiana',
        'othername': 'Weezy F Baby'

    },

    'unknown': {

        'birthName': 'unknown',
        'age': 0,
        'birthLocation': 'unknown'

    }

}

app.get('/', (request, response) => {

    response.sendFile(__dirname + '/index.html')

})

app.get('/api', (request, response) => {

    console.log(request.params.name)
    const rapperName = request.params.name.tolowerCase()
    if (rappers[rapperName]) {

        response.json(rappers[rapperName])
    } else {
        response.json(rappers['unknown'])
    }
})


app.listen(PORT, () => {

    console.log(`The server is now running on port ${PORT}! Betta Go Catch It`)

})