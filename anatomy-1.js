function sayHello(){
    console.log('Hello!')

}

sayHello()

function sayHelloTo(name){
    console.log(`Hello ${name}`)
}
sayHelloTo('murilo')

function returnHi(){
    return 'Hi!'
}

let retorna = returnHi()
console.log(retorna) 

function returnHiTo(name){
    return `Hi ${name}!`
}

console.log(returnHiTo('murilo'))