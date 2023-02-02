function enviaFormularioLogin(url, body) {
  console.log(body)
  let request = new XMLHttpRequest()
  request.open("POST", url, true)
  request.setRequestHeader("Content-Type", "application/json")
  request.send(JSON.stringify(body))

  request.onload = function () {
    console.log(this.responseText)
  }
  return request.responseText
}


function loginUsuario() { 
  event.preventDefault()
  let url = "http://localhost:8070/agropesca/usuario/login"
  let login = document.getElementById("login").value
  let senha = document.getElementById("senha").value
  console.log(typeof(login.length))
  if (login.length < 5 ){
      alert("Seu login é muito pequeno!")
    } else if(senha.length < 5) {
      alert("Sua senha é muito pequena.")
    }

    const hasUpper = (str) => /[A-Z]/.test(str);
    const hasCaracter = (str) => /[^a-zA-Z0-9]+/g.test(str);
    if (!hasUpper(senha)){
      alert("Sua senha deve conter uma letra maiuscula.")
    }
    if(!hasCaracter(senha)){
      alert("Sua senha deve conter caracteres especiais")
    }

  body = {
    "usuarioLogin": login,
    "senha": senha
  }
  enviaFormularioLogin(url, body)

  console.log(login)
  console.log(senha)
}