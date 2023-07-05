//first request 
const module1 = require('./module1') // loads, compiles and then stores in cache

//second request from any other component
const module1 = require('./module2') // resolves it from memory cache

//we can also fetch newly compiled module using delete method, but first we have to 
//cached module from memory
delete require.cache[require.resolve('./moduleA')];