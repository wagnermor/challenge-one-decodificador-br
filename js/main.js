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

function isEncrypt(string) {
  return /enter|imes|ai|ober|ufat/g.test(string)
}

async function copy(content) {
  await navigator.clipboard.writeText(content)
  textarea.value = content
}

function printOutput(text) {
  if(textareaRef.value !== '') {
    pRef.innerHTML = text
    asideDivContentRef.classList.add("display-none")
    pRef.classList.remove("display-none")
    btnCopytRef.style.display = "inline-block"
    textareaRef.value=''
    textareaRef.focus()
  } else {
    alert('Digite um texto')
  }
}

imgAluraLogoRef.addEventListener("click", () => location.reload())
formRef.addEventListener("click", event => event.preventDefault())

btnEncryptRef.addEventListener("click", () => {
  textareaRef.value.toLowerCase()
  textareaRef.value.trim()

  isEncrypt(textareaRef.value) ? 
    alert("Texto já criptografado, primeiro clique em descriptografar") : 
    printOutput(encrypt(textareaRef.value))
  
})

btnDecryptRef.addEventListener("click", () =>{
  textareaRef.value.toLowerCase()
  textareaRef.value.trim()

  !isEncrypt(textareaRef.value) ?
    alert("Texto já descriptografado, primeiro clique em criptografar") : 
    printOutput(decrypt(textareaRef.value))
})


btnCopytRef.addEventListener("click", () => {
  copy(pRef.innerHTML)
  textareaRef.focus()
})