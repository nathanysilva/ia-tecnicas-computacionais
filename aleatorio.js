const nomes = ( "Roger","Nathy", "Ronaldo", "Katiane", "Cesar","Debora", "Xibrow")

export function aleatorio (lista){
    const posicao = Math.floor(Math.random()* lista.length);
    return lista[posicao];
}

export const nome = aleatorio(nomes)

