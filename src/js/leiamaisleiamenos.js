var pontos = document.querySelector('#pontos');
var mais = document.querySelector('.mais');
var btnleia = document.querySelector('#btnleiamais');
var trocaptext1 = document.querySelector('.pprincipalpage1')
var trocaptext2 = document.querySelector('.pprincipalpage2')
var textepage2 = document.querySelector('.textepage2')
var x = window.screen.width;
var y = window.screen.height;
    
    if(x >520 && y > 600){
        pontos.style.display='none';
        mais.style.display = 'none';
        btnleiamais.style.display = 'none';
        trocaptext1.textContent="Acreditamos que todas as pessoas tem um grande potencial, e é assim que nosso grupo vem crescendo: Dando espaço e oportunidades para que nossa equipe troque vivências, experiências e aprendizados. Somos formados por pessoas que amam o que fazem e acreditam que podem mudar o mundo através de seus conhecimentos."
        trocaptext2.textContent="O Grupo Ousía Arqué se empenha a diariamente desenvolver ideias e marcas para serem REVOLUÇÃO!";
    } else{
        if(x <520 && y < 600){
            
        }
    }


function leiaMais(){
    var pontos = document.querySelector('#pontos');
    var mais = document.querySelector('.mais');
    var btnleia = document.querySelector('#btnleiamais');

    if(pontos.style.display === 'none') {
       pontos.style.display = 'inline'
       mais.style.display = 'none';
       btnleia.innerHTML="LER MAIS"
       textepage2.style.background ='transparent'
        
       
        
    } else {
            pontos.style.display = 'none'
            mais.style.display = 'inline';
            btnleia.innerHTML="LER MENOS"
            textepage2.style.background ='rgba(0, 0, 0, 0.541)'
            
    }
}