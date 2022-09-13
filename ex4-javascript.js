let numText=prompt('Digite um número positivo:');
let num=Number(numText);

if(num<0){
    numText=prompt('Número inválido! Digite um número positivo:');
    num=Number(numText);
}
else if(num%2==0){
    document.write(`O número é par.`);
    document.write(`<br>`);
    document.write(`Sua raíz quadrada é: ${Math.sqrt(num)}.`);
}else if(num%2==1){
    document.write(`O número é ímpar.`);
    document.write(`<br>`);
    document.write(`Esse número elevado ao quadrado é: ${Math.pow(num, 2.0)}.`);
}