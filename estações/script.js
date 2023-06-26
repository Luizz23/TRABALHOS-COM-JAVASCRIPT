function estação() {  
    let mês = prompt('Digite o mês em extenso (ex: Outubro)') 
    let saída = document.querySelector('section#saida') 
    let estação 
    switch (mês.toUpperCase()) {  
        case 'JANEIRO': case 'FEVEREIRO': case 'MARÇO':  
            estação = 'VERÃO' 
            break  
        case 'ABRIL': case 'MAIO': case 'JUNHO': 
            estação = 'OUTONO' 
            break 
        case 'JULHO': case 'AGOSTO': case 'SETEMBRO': 
            estação = 'INVERNO' 
            break 
        case 'OUTUBRO': case 'NOVEMBRO': case 'DEZEMBRO': 
            estação = 'PRIMAVERA' 
            break 
        default: 
            estação = 'INDEFINIDA' 
            break 
    } 
    saída.innerHTML = `<p>No mês de <strong>${mês}</strong>, estamos na estação <strong>${estação}</strong>.</p>` 
}