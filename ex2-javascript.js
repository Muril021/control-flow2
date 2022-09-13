const n1Text=prompt('Digite o primeiro número: ');
const n1=Number(n1Text);
const n2Text=prompt('Digite o segundo número: ');
const n2=Number(n2Text);
const n3Text=prompt('Digite o terceiro número: ');
const n3=Number(n3Text);

if(n1<n2 && n2<n3){
    document.write(`Ordem crescente: ${n1}, ${n2}, ${n3}.`);
}else if(n3<n2 && n2<n1){
    document.write(`Ordem crescente: ${n3}, ${n2}, ${n1}.`);
}else if(n2<n1 && n1<n3){
    document.write(`Ordem crescente: ${n2}, ${n1}, ${n3}.`);
}else if(n1<n3 && n3<n2){
    document.write(`Ordem crescente: ${n1}, ${n3}, ${n2}.`);
}else{
    document.write(`Ordem crescente: ${n3}, ${n1}, ${n2}.`);
}