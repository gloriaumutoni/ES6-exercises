// You're building a secure configuration system. Create a function secureConfig(config) that takes an object config and uses a Symbol as a key to store a private property named apiKey. Return the modified config object.
function secureConfig(config){
    const apiproperty=Symbol('apiKey')
    config[apiproperty]='apikey symbol'
    return config
}
let myConfig={
    user:'Database',
    age:20
}
let symbol=secureConfig(myConfig)
// retreiving the keys
console.log(Object.getOwnPropertySymbols(symbol))


