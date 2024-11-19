function Presente(){
    if (confirm("Você deseja enviar um presente de R$ 40 reais para Sophia ?")) {
        location = "https://mpago.la/2cwuvK9"
    } else {
        // Código a ser executado se o usuário clicar em "Cancelar"
        console.log("Usuário clicou em Cancelar");
    }
}


function JanelaPresenca(){
    janela.style.display = 'block'
}

function msgEnviar(){
    var nome = document.getElementById('Nome').value
  
    if(nome ==''){
      alert('FALTA DADOS')
    } else{
      var my_text = `Mensagem de Gage %0A %0A Nome: ${nome} %0A %0A Confirmou presença`
  
    var token = "5101167923:AAHY984g_xsMRbz-m2Bvyz-N_lAgWXBVhwE";
    var chat_id = -1001247274051
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
  
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  
    alert('Mensagem enviada!')
    janela.style.display = 'none'
    }
  }