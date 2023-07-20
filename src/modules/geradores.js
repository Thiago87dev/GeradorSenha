const rand = (min, max) => Math.floor(Math.random() * (max - min) + min)
const geraMaiusc = () => String.fromCharCode(rand(65, 91))
const geraMinusc = () => String.fromCharCode(rand(97, 123))
const geraNum = () => String.fromCharCode(rand(48, 58))
const simbolos = '!@#$%&-|?*=+'
const geraSimb = () => simbolos[rand(0, simbolos.length)]

export default function geraSenha(qnt, maisc, minusc, num, simb) {
    const senhaArray = []
    qnt = Number(qnt)

    for (let i = 0; i < qnt; i++) {
        maisc && senhaArray.push(geraMaiusc())
        minusc && senhaArray.push(geraMinusc())
        num && senhaArray.push(geraNum())
        simb && senhaArray.push(geraSimb())
    }
    senhaArray.slice(0, qnt)
    
    if (qnt === 0) return 'quantidade não pode ser 0'
    return senhaArray.slice(0,qnt).sort(()=> 0.5 - Math.random()).join('') || 'Nada selecionado'
}



