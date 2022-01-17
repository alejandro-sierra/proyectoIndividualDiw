function accionPlay()
{
	if(!medio.paused && !medio.ended) 
	{
		medio.pause();
		play.value='\u25BA'; //\u25BA
    document.body.style.backgroundColor = '#fff';
	}
	else
	{
		medio.play();
		play.value='||';
        document.body.style.backgroundColor = 'grey';
	}
}
function accionReiniciar()
{
    medio.currentTime = 0;
    medio.play();
    play.value='||';
}
function accionRetrasar()
{
    medio.currentTime = medio.currentTime - 5;

}
function accionAdelantar()
{
    medio.currentTime = medio.currentTime + 5;
}
function accionSilenciar()
{
    if (!medio.muted) {
        medio.muted = true;
    }else if (medio.muted) {
        medio.muted = false;
    }
}
function accionMasVolumen()
{
    if (medio.volume < 1) {
        medio.volume += 0.1
    }
}
function accionMenosVolumen()
{
    if (medio.volume > 0) {
        medio.volume -= 0.1
    }
}

function iniciar() 
{
	
	medio=document.getElementById('medio');
	play=document.getElementById('play');
	reiniciar=document.getElementById('reiniciar');
	retrasar=document.getElementById('retrasar');
	adelantar=document.getElementById('adelantar');
	silenciar=document.getElementById('silenciar');

	play.addEventListener('click', accionPlay);
	reiniciar.addEventListener('click', accionReiniciar);
	retrasar.addEventListener('click', accionRetrasar);
	adelantar.addEventListener('click', accionAdelantar);
	silenciar.addEventListener('click', accionSilenciar);
	menosVolumen.addEventListener('click', accionMenosVolumen);
	masVolumen.addEventListener('click', accionMasVolumen);
}

window.addEventListener('load', iniciar, false);    