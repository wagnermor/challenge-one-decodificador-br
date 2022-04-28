const imgAluraLogoRef = document.getElementById("alura-logo")
const btnEncryptRef = document.getElementById("btn-encrypt")
const btnDecryptRef = document.getElementById("btn-decrypt")
const btnCopytRef = document.getElementById("btn-copy")
const textareaRef = document.getElementById("textarea")
const asideDivContentRef = document.getElementById("output")
const pRef = document.getElementById("p-output")

const formRef = document.querySelector("form")

function encrypt(string) {
  let encrypted = []
  for(let i = 0; i < string.length; i++) {
    let character = string[i]
    if(character === "e") character ="enter"
    if(character === "i") character ="imes"
    if(character === "a") character ="ai"
    if(character === "o") character ="ober"
    if(character === "u") character ="ufat"
    encrypted.push(character)
  }
  return encrypted.join('')
}

function decrypt(string) {
  let decrypted = []// join and split
  for(let word of string.split(' ')) {
    word = word.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a")
    .replace(/ober/g, "o").replace(/ufat/g, "u")
    decrypted.push(word)
  }
  return decrypted.join(' ')
}

async function copy() {
  const content = pRef.innerHTML
  await navigator.clipboard.writeText(content)
  textarea.value = pRef.innerHTML
}

imgAluraLogoRef.addEventListener("click", () => location.reload())

formRef.addEventListener("click", event => event.preventDefault())

btnEncryptRef.addEventListener("click", event => {
  textareaRef.value.toLowerCase()
  textareaRef.value.trim()
  if(textareaRef.value !== '') {
    pRef.innerHTML = `${encrypt(textareaRef.value)}`
    asideDivContentRef.classList.add("display-none")
    pRef.classList.remove("display-none")
    btnCopytRef.style.display = "inline-block"
    textareaRef.value=''
    textareaRef.focus()
  } else {
    alert('Digite um texto')
  }
})

btnDecryptRef.addEventListener("click", event =>{
  if(textarea.value) pRef.innerHTML = `${decrypt(textarea.value)}`
    else alert('Digite um texto')
  textareaRef.value=''
  textareaRef.focus()
})


btnCopytRef.addEventListener("click", () => {
  copy()
  textareaRef.focus()
})