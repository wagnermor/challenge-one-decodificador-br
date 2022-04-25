const btnEncryptRef = document.getElementById("btn-encrypt")
const btnDecryptRef = document.getElementById("btn-decrypt")
const textareaRef = document.getElementById("textarea")
const asideRef = document.getElementById("output")

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

// function decrypt(string) {
//   let encrypted = []
//   for(let i = 0; i < string.length; i++) {
//     let character = string[i]
//     if(character === "e") character ="enter"
//     if(character === "i") character ="imes"
//     if(character === "a") character ="ai"
//     if(character === "o") character ="ober"
//     if(character === "u") character ="ufat"
//     encrypted.push(character)
//   }
//   return encrypted.join('')
// }

let teste = "gato gordo"
let pega = []
pega.push(teste.split(" "))
console.log(pega)

btnEncryptRef.addEventListener("click", event => {
  event.preventDefault()
  asideRef.innerHTML = `<p style="text-align:left">${encrypt(textareaRef.value)}</p>`
})