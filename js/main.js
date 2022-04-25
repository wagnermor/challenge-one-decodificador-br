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
