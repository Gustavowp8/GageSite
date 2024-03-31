const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);

/*Mensagem*/

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var fundo = window.document.getElementById('boasVindasDois')
    var data = new Date()
    var hora =  data.getHours()

    if(hora >= 0 && hora < 12)
    {
        //Bom dia
        img.src = 'img/manha.png'
        msg.innerHTML = `Bom dia, Estamos felizes em ver você aqui.`
        msg.style.color = '#5e17eb'
        msg.style.background = '#ffffff44'
        fundo.style.backgroundImage = 'url(img/001-manha.jpg)';
    }
    else if(hora >= 12 && hora <= 18)
    {
        //Boa tarde
        img.src = 'img/tarde.png'
        msg.innerHTML = `Boa tarde, Estamos felizes em ver você aqui.`
        fundo.style.backgroundImage = 'url(img/002-tarde.jpg)';
    }
    else
    {
        //noite
        img.src = 'img/noite.png'
        msg.innerHTML = `Boa noite, Estamos felizes em ver você aqui.`
        msg.style.color = '#ffffff'
        fundo.style.backgroundImage = 'url(img/003-noite.jpg)';
    }

    var entrou = 'Houve acesso as ' + hora
    console.log(entrou)
  
    var my_text = `Mensagem do site Gage %0A %0A  ${entrou}`
  
    var token = "5101167923:AAHY984g_xsMRbz-m2Bvyz-N_lAgWXBVhwE";
    var chat_id = -1001247274051
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
  
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
}

function btnFecha(){
    popup.style.display = 'none'
}

function acesso(){
    alert('Acesso negado!')
}

function chama(){
    location='contatos.html'
}

/*Area contatos*/
function chamaInsta(){
    location='https://www.instagram.com/gagedev20'
}

function chamaWhast(){
    location='https://wa.me/556135752752?text=Ol%C3%A1%2C+preciso+esclarecer+uma+duvida'
}

function chamaYou(){
    location='https://www.youtube.com/channel/UC06k8u6-wycS0-6WAOdVl2Q'
}

function chamaEmail(){
    alert('Este e o nosso e-mail: gagedeveloper@gmail.com')
}

/* Função JS */

function msgEnviar(){
  
    var nome = document.getElementById('nomeL').value
    var email = document.getElementById('email').value
    var tele = document.getElementById('telefone').value
    var msg = document.getElementById('mensagem').value
  
    if(msg =='' || nome =='' || tele == ''){
      alert('FALTA DADOS')
    } else{
      var my_text = `Mensagem de Gage %0A %0A Nome: ${nome} %0A %0A Com o email: ${email} %0A %0A Telefone: ${tele} %0A %0A Escreveu: ${msg}`
  
    var token = "5101167923:AAHY984g_xsMRbz-m2Bvyz-N_lAgWXBVhwE";
    var chat_id = -1001247274051
    var url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${my_text}`
  
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();
  
    alert('Mensagem enviada!')
    }
  }