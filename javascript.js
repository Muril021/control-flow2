// Converter texto em número
const ageText=prompt('Digite sua idade: ');
const age=Number(ageText);

/* Converter número em texto
 * const age=prompt('Digite sua idade: ');
 * const ageString=String(age);
 */

if(age>18){
    document.write('Você é adulto!');
}else if(age>12){
    document.write('Você é adolescente!');
}else{
    document.write('Você é criança!');
}

// \n --> quebra de linha (console) | <br> --> quebra de linha (corpo da página)

document.write('<br>');

switch(age){
    case 16:
        document.write('Já pode votar!');
        break;
    case 18:
        document.write('Já pode beber e dirigir, mas não ao mesmo tempo!');
        break;
    case 65:
        document.write('Já pode se aposentar!');
        break;
    default:
        document.write('Se f#deu!');
        break;
}