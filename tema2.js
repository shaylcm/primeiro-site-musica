
//variaveis usadas
var primeiro = document.querySelector("#primeiro");
var nav = document.querySelector("nav");
var body = document.querySelector("body");
var rodape= document.querySelector("#rodape");
var botao= document.querySelector(".botao");
var boto= document.querySelector(".boto");
var bot=document.querySelector("#bot");
var apaga =document.querySelector("#apaga");




//MUDAR TEMA DA PÁGINA
bot.onclick = function(){
	alert("ATENÇÃO:Ao clicar na logo 'MUSICA' o tema da página será alterado e retornará ao tema original somente quando a página for atualizada ,OU,quando clicares em um dos títulos no cabeçalho antes do menu nav;:");
	primeiro.style.backgroundColor = "#0d3b66";
	nav.style.backgroundColor=" #f0544f";
	document.body.style.backgroundImage = "url('musica2.png')";
    rodape.style.backgroundColor="#0d3b66";
    botao.style.backgroundColor="#0d3b66";



};
//VOLTAR PARA O TEMA ORIGINAL DA
boto.onclick=function(){
	primeiro.style.backgroundColor = "#008B8B";
	nav.style.backgroundColor=" black";
	document.body.style.backgroundImage = "url('music3.png')";
    rodape.style.backgroundColor="#008B8B";
    botao.style.backgroundColor="#008B8B";
    select.style.backgroundColor="#008B8B";


};

	botao.onclick = function(){
		if(document.formu.nome.value!="" &&  document.formu.email.value !=""  &&   document.formu.texto.value!=""){
			alert("ENVIADO COM SUCESSO!");
			

	}
		else {
			alert("opss! algum campo  vazio");
		}
	
	}



	

	
	
