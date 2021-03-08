function onlynumber(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode( key );
  //var regex = /^[0-9.,]+$/;
  var regex = /^[0-9.]+$/;
  if( !regex.test(key) ) {
     theEvent.returnValue = false;
     if(theEvent.preventDefault) theEvent.preventDefault();
  }
}


function imc(){
  var  peso =  (document.getElementById("peso").value);
  var  altura = (document.getElementById("altura").value);
  
  var  resultado =  peso / ((altura * altura) / 10000);

  function infinit(){
    if(resultado !== Infinity && resultado !== NaN){
      document.querySelector('.resultado').innerHTML = resultado.toFixed(1);
    }
  }
  infinit()

      if(resultado < 18.5){
        document.querySelector('#magreza').style.display = "block";
        document.querySelector('#normal').style.display = "none";
        document.querySelector('#sobrepeso').style.display = "none";
        document.querySelector('#obesidade').style.display = "none";
        document.querySelector('#obesidadeSeria').style.display = "none";        
        document.querySelector('#obesidadeGrave').style.display = "none";               
        document.querySelector('.resultado').style.display = "block";
      }
      else if (resultado >= 18.5 && resultado < 25){
        document.querySelector('#magreza').style.display = "none";
        document.querySelector('#normal').style.display = "block";
        document.querySelector('#sobrepeso').style.display = "none";
        document.querySelector('#obesidade').style.display = "none";
        document.querySelector('#obesidadeSeria').style.display = "none";        
        document.querySelector('#obesidadeGrave').style.display = "none";            
        document.querySelector('.resultado').style.display = "block";
      }
      else if (resultado >= 25 && resultado < 30){
        document.querySelector('#magreza').style.display = "none";
        document.querySelector('#normal').style.display = "none";
        document.querySelector('#sobrepeso').style.display = "block";
        document.querySelector('#obesidade').style.display = "none";
        document.querySelector('#obesidadeSeria').style.display = "none";        
        document.querySelector('#obesidadeGrave').style.display = "none";            
        document.querySelector('.resultado').style.display = "block";
      }
      else if (resultado >= 30 && resultado < 35){
        document.querySelector('#magreza').style.display = "none";
        document.querySelector('#normal').style.display = "none";
        document.querySelector('#sobrepeso').style.display = "none";
        document.querySelector('#obesidade').style.display = "block";
        document.querySelector('#obesidadeSeria').style.display = "none";        
        document.querySelector('#obesidadeGrave').style.display = "none";            
        document.querySelector('.resultado').style.display = "block";
      }
      else if (resultado >= 35 && resultado < 40){
        document.querySelector('#magreza').style.display = "none";
        document.querySelector('#normal').style.display = "none";
        document.querySelector('#sobrepeso').style.display = "none";
        document.querySelector('#obesidade').style.display = "none";
        document.querySelector('#obesidadeSeria').style.display = "block";        
        document.querySelector('#obesidadeGrave').style.display = "none";            
        document.querySelector('.resultado').style.display = "block";
      }
      else if (resultado >= 40 && resultado < 9999999){
        document.querySelector('#magreza').style.display = "none";
        document.querySelector('#normal').style.display = "none";
        document.querySelector('#sobrepeso').style.display = "none";
        document.querySelector('#obesidade').style.display = "none";
        document.querySelector('#obesidadeSeria').style.display = "none";        
        document.querySelector('#obesidadeGrave').style.display = "block";            
        document.querySelector('.resultado').style.display = "block";
      }
      else{
        alert('Digite valores corretos!!!')
        
      }
}
      


calcular.addEventListener('click', imc); 
