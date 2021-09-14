const axios = require('axios')

axios.get('https://www.youtube.com')
.then( (response) => console.log(response))
.catch((err)=> console.log(err))
.then(() => console.log('I am finally here..'));


