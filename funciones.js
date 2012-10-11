//funcion encargada de crear el objeto ajax
function conectar(){
  try{
    http = new XMLHttpRequest();
  }catch(error1){
    try{
      http = new ActiveXObject("Msxml2.XMLHTTP");
    }catch(error2){
      try{
        http = new ActiveXObject("Microsoft.XMLHTTP");
      }catch(error3){
        http = false;
      }
    }
  }
  return http;
}
var conexion = conectar();
var url;
var num=0;

function anterior(){
  num=num-1;
  url="lamina_"+num;
   conexion.onreadystatechange=function(){
  if (conexion.readyState==4 && conexion.status==200) {
    document.getElementById('myDiv').innerHTML=conexion.responseText;
  }
 }
  conexion.open("POST",url,true);
  conexion.send();
}

function siguiente(){
  num=num+1;
  url="lamina_"+num;
  conexion.onreadystatechange=function(){
  if (conexion.readyState==4 && conexion.status==200) {
    document.getElementById('myDiv').innerHTML=conexion.responseText;
  }
 }
  conexion.open("POST",url,true);
  conexion.send();
}
function pulsar(event){
  if(event.keyCode == 39){
    siguiente();
  }else if(event.keyCode == 37) {
    anterior();
  }
}
function html4(){
  conexion.onreadystatechange=function(){
  if (conexion.readyState==4 && conexion.status==200) {
    document.getElementById('etiqueta').innerHTML=conexion.responseText;
  }
 }
  conexion.open("POST","html4.html",true);
  conexion.send();
}
function html5(){
  conexion.onreadystatechange=function(){
  if (conexion.readyState==4 && conexion.status==200) {
    document.getElementById('etiqueta').innerHTML=conexion.responseText;
  }
 }
  conexion.open("POST","html5.html",true);
  conexion.send();
}

function cambio(div){
  conexion.onreadystatechange=function(){
  if (conexion.readyState==4 && conexion.status==200) {
    document.getElementById('cambiar').innerHTML=conexion.responseText;
  }
 }
  conexion.open("POST",div.id+'.html',true);
  conexion.send();
  //arreglo para guaradar los id
  var idcapa=new Array();
  idcapa[0]='html';
  idcapa[1]='multimedia';
  idcapa[2]='grafico';
  idcapa[3]='aplicaciones';
  idcapa[4]='semantico';
  idcapa[5]='css3';

  var idimg=new Array();
  idimg[0]='htmlno';
  idimg[1]='multimediano';
  idimg[2]='graficono';
  idimg[3]='aplicacionesno';
  idimg[4]='semanticono';
  idimg[5]='css3no';
  //over
  var over=new Array();
  over[0]='imagenes/over_html5.png';
  over[1]='imagenes/over_multimedia.png';
  over[2]='imagenes/over_grafico.png';
  over[3]='imagenes/over_aplicaciones.png';
  over[4]='imagenes/over_semantico.png';
  over[5]='imagenes/over_css3.png';
  //no over 
  var noover=new Array();
  noover[0]='imagenes/noover_html5.png';
  noover[1]='imagenes/noover_multimedia.png';
  noover[2]='imagenes/noover_grafico.png';
  noover[3]='imagenes/noover_aplicaciones.png';
  noover[4]='imagenes/noover_semantico.png';
  noover[5]='imagenes/noover_css3.png';
  for (var i = 0; i <= idcapa.length; i++) {
    if (idcapa[i]==div.id) {
      document.getElementById(idimg[i]).src=over[i];
    }else{
      document.getElementById(idimg[i]).src=noover[i];
    }
  }
}
