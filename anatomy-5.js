var x;
var verdadeiro 
if (verdadeiro){ 
    console.log('Verdadeiro')
    x = 10
}else{
    console.log('é falso')
}

console.log(x)

if (!verdadeiro ) {
    console.log('é falso')
}

if( 5 -5 && 5 +5  ){
    console.log('verdadeiro')
}else{
    console.log('falso')
}

var condicional = 5 -5 && 5 + 5 || 10 - 2

console.log(condicional)

let corFavorita = 'vermelhor'

switch(corFavorita){
    case 'rosa':
        console.log('linda cor')
        break
    case 'vermelhor':
        console.log('cor legal')    
        break
    default:
        console.log('cor feia')
}   

let idade1 = 17  
let idade2 =  173
let idade3 =  10

if (idade1 > idade2 && idade1 > idade3 ){
    console.log(` a idade maior é ${idade1}`)
}
else if (idade2 > idade1 && idade2 > idade3) {
    console.log(` a idade maior é ${idade2}`)
}else{
    console.log(` a idade maior é ${idade3}`)

}


if (idade1  > idade2){
    console.log(` a idade maior é ${idade1}`)

} else if (idade1 === idade2) {
    console.log(` as idades são iguais ${idade1} e ${idade2}`)

} else{
    console.log(`idade ${idade1} é menor `)
}
