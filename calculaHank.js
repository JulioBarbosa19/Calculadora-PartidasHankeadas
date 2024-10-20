function getHankPlayer(wins,loses){
    let score, hank;
    score = wins - loses;

    if(score <= 10){
        hank = "Ferro";
    }else if(score >=11 && score <= 20){
        hank = "Bronze";
    }
    else if(score >=21 && score <= 50){
        hank = "Prata";
    }else if(score >=51 && score <= 80){
        hank = "Ouro";
    }else if(score >=81 && score <= 90){
        hank = "Diamante";
    }else if(score >=91 && score <= 100){
        hank = "Lendário";
    }else{
        hank = "Imortal";
    }

    return `O Herói tem saldo de ${score} está no nível de ${hank}`;

}

let playerNumberOne = getHankPlayer(200, 126);
let playerNumberTwo = getHankPlayer(300, 26);
let playerNumberThree = getHankPlayer(100, 126);

console.log("Informações do Jogador Numero 1 : " + playerNumberOne);
console.log("Informações do Jogador Numero 2 : " + playerNumberTwo);
console.log("Informações do Jogador Numero 3 : " + playerNumberThree);