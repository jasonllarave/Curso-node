const dividir=(num1, num2)=>{
    return new Promise((res, rej)=>{ //creo la funcion anidada y la exporto con module
        setTimeout(()=>{
         if (parseInt (num2) == 0){
            rej('no se puede dividir ente 0')
         }  else {
            const resultado = num1/num2;
            res(resultado);
         }    
}, 1500);    // 1500 (seg y medio) es lo que tardara en ejecutarse la funcion
    });
};

module.exports = {
    dividir
}