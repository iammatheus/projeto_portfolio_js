
// Ao clicar nas opções do menu a cor altera
let menuOption = document.querySelectorAll('a');

for (let i = 0; i < menuOption.length; i++) {
    let el = menuOption[i];
    el.onclick = () => {
        for (let j = 0; j < menuOption.length; j++) {
            let color = menuOption[j] === el ? '#FD7A7A' : '#AEAEAE';
            menuOption[j].style.color = color;
        }
    }
}

//Imagens irão alterar conforme a opção clicada no menu
function navigation(){
    let pageLogo = document.getElementById('logos')
    var pageBanner = document.getElementById('banners')
    var pageLayout = document.getElementById('layouts')
    var pageCards = document.getElementById('cards')
    let titulo = document.getElementById('titulo')
    let options = document.getElementsByName('options')
    
    let menu = []
    
    for (var i=0;i<options.length;i++){
        if (options[i].checked) {
            menu.push(options[i].value)
        }
    }

    if(menu == "logo"){
        titulo.innerHTML = "Logo";
        pageLogo.style.display = "flex";
        pageBanner.style.display = "none";
        pageCards.style.display = "none";
        pageLayout.style.display = "none";
    }else if(menu == "banner"){
        titulo.innerHTML = "Banner";
        pageBanner.style.display = "flex";
        pageLogo.style.display = "none";
        pageCards.style.display = "none";
        pageLayout.style.display = "none";
    }else if(menu == "layout"){
        titulo.innerHTML = "Layout";
        pageLayout.style.display = "flex";
        pageLogo.style.display = "none";
        pageBanner.style.display = "none";
        pageCards.style.display = "none";
    }else if(menu == "card"){
        titulo.innerHTML = "Cards";
        pageCards.style.display = "flex";
        pageLogo.style.display = "none";
        pageBanner.style.display = "none";
        pageLayout.style.display = "none";
    }

}
