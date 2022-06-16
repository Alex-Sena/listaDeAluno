/*
lista de cadastro de alunos
percorrer a lista
    - percorrer de Zero até o número de alunos.
    - se o numero for par, escervapar e o numero correspondente.
    - se o numero for impar, escerva impar e o numero correspondente.
    - se o numero for 0, escreva Zero.
*/

/*
= atribuição de valores
== comparar se dois valores sao iguais (0 == "0") - isso é verdade
=== comparar se os dois valores sao identicos (0 === "0")
if (valorA == valorB)
*/

/*
let numeroDeAlunos = 10;

let contador=0

do
{
    if (contador == 0)
    {
        console.log("o nome atual zero.")
    }
    else if(contador %2 ==0)
    {
        console.log("o número "+contador+" é par.")
    }    
    else
    {
        console.log(`o número ${contador} é impar.`)
    }
    contador++ 
}while(contador < numeroDeAlunos)
*/

/*
let contador=0

while(contador < numeroDeAlunos)
{
    if (contador == 0)
    {
        console.log("o nome atual zero.")
    }
    else if(contador %2 ==0)
    {
        console.log("o número "+contador+" é par.")
    }    
    else
    {
        console.log(`o número ${contador} é impar.`)
    }
    contador++    
}
*/

let numeroDeAlunos = 10;

for(let contador=0; contador < numeroDeAlunos; contador++)
{
//console.log(contador)
    if (contador == 0)
    {
        console.log("o nome atual zero.")
    }
    else if(contador %2 ==0)
    {
        console.log("o número "+contador+" é par.")
    }    
    else
    {
        console.log(`o número ${contador} é impar.`)
    }
}


/*
let nomeDeAluno = ["Alexandre","Andre","Carla","Marcelo"];

for (let nome of nomeDeAluno) 
{
        console.log(`Essa pessoa se chama ${nome}`);
}
// console.log(nomeDeAluno[2]);
*/