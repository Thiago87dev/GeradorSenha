import geraSenha from './geradores'

const res = document.querySelector('.res')
const qntCaracter = document.querySelector('#qnt-caracter')
const maiusc = document.querySelector('#maiusc')
const minusc = document.querySelector('#minusc')
const num = document.querySelector('#numeros')
const simb = document.querySelector('#simb')
const btn = document.querySelector('.btn')

export default () => {
    btn.addEventListener('click',()=>{
        res.innerHTML = geraSenha(qntCaracter.value, maiusc.checked, minusc.checked, num.checked, simb.checked )
    })
}
