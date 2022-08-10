var videoGames = ['nintendo', 'ps4', 'xbox']
videoGames.push('3DS')

console.log(videoGames)
videoGames.pop()
console.log(videoGames)

for (let numero = 1; numero <= 5; numero++  ){
    console.log(numero)
}

var i = 0 

while( i <5){
    console.log(i)
    i++
}

for (var i = 0; i < videoGames.length; i++){
    console.log(videoGames[i])
    if(videoGames[i] === 'xbox '){
        console.log('parando o programa')
        break
    }
} 

console.log(videoGames.length)


videoGames.forEach(function(video, index, array ){
         console.log(video, index, array)
})