let ageText=prompt('Digite a sua idade:');
let age=Number(ageText);

if(age<10){
    ageText=prompt('Idade inválida! Digite a sua idade:');
    age=Number(ageText);
}else if(age>=10 && age<=14){
    document.write(`Categoria infantil.`);
}else if(age<=17){
    document.write(`Categoria juvenil.`);
}else if(age<=25){
    document.write(`Categoria adulto.`);
}else{
    ageText=prompt('Idade inválida! Digite a sua idade:');
    age=Number(ageText);
}