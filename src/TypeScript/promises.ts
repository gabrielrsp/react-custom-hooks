// PROMISE.ALL

import axios from 'axios'

export function testPromiseAll () {

  Promise.all([
    axios.get('https://api.github.com/users/gabrielrsp'),
    axios.get('https://api.github.com/users/gabrielrsp/repos')
  ]).then (responses => {
    console.log(responses[0].data.login)
    console.log(responses[1].data.length)
  })
  .catch(err => console.log(err.message))
}