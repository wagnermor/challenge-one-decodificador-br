const btnEncryptRef = document.getElementById("btn-encrypt")
const btnDecryptRef = document.getElementById("btn-decrypt")
const textareaRef = document.getElementById("textarea")
const asideRef = document.getElementById("output")
// const pRef = document.getElementById("p-output")

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
  const content = document.getElementById("p-output").innerHTML
  await navigator.clipboard.writeText(content)
}

btnEncryptRef.addEventListener("click", event => {
  event.preventDefault()
  textareaRef.value.toLowerCase()
  textareaRef.value.trim()
  if(textareaRef.value !== '') {
    asideRef.innerHTML = `<p id="p-output" style="text-align:left">${encrypt(textareaRef.value)}</p>`
  } else {
    alert('Digite um texto')
  }
})

btnDecryptRef.addEventListener("click", event =>{
  event.preventDefault()
  if(textarea.value) asideRef.innerHTML = `<p id="p-output"> ${decrypt(textarea.value)}</p>`
})