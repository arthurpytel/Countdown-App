mesesEl=document.getElementById('meses');
diasEl=document.getElementById('dias');
horasEl=document.getElementById('horas');
minutosEl=document.getElementById('minutos');
segundosEl=document.getElementById('segundos');

const anonovo='1 jan 2023';

function contagem_rg(){

    const data_anonovo=new Date(anonovo);
    const data_atual=new Date();

    const segundos_totais=(data_anonovo-data_atual)/1000;
    const segundos=Math.trunc(segundos_totais)%60;
    const minutos=Math.trunc(segundos_totais/60)%60;
    const horas=Math.trunc(segundos_totais/3600)%24
    const dias=Math.trunc(segundos_totais/3600/24);
    const meses=Math.trunc(segundos_totais/3600/24/30)

    mesesEl.innerHTML=meses;
    diasEl.innerHTML=dias;
    horasEl.innerHTML=horas;
    minutosEl.innerHTML=minutos;
    segundosEl.innerHTML=segundos;
   
}

setInterval(contagem_rg,1000);
