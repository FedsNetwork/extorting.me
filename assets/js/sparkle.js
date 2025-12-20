// Sparkle cursor effect
(function(){
    const sparkleChars=['✦','✧','✯','✬','✫','*'];
    const colors=['#ff0000','#00ff00','#0000ff','#ffff00','#ff00ff','#00ffff'];
    let mouseX=0,mouseY=0,isMoving=false,movementTimeout=null,sparkleInterval=null;

    function createSparkle(){
        const sparkle=document.createElement('div'); sparkle.className='sparkle';
        const offsetX=(Math.random()-0.5)*20, offsetY=(Math.random()-0.5)*20;
        sparkle.style.left=(mouseX+offsetX)+'px';
        sparkle.style.top=(mouseY+offsetY)+'px';
        sparkle.style.color=colors[Math.floor(Math.random()*colors.length)];
        sparkle.textContent=sparkleChars[Math.floor(Math.random()*sparkleChars.length)];
        document.body.appendChild(sparkle);
        setTimeout(()=>sparkle.remove(),800);
    }

    function updateMousePosition(e){
        mouseX=e.clientX; mouseY=e.clientY;
        if(!isMoving){isMoving=true;sparkleInterval=setInterval(createSparkle,50);}
        if(movementTimeout) clearTimeout(movementTimeout);
        movementTimeout=setTimeout(()=>{isMoving=false;if(sparkleInterval){clearInterval(sparkleInterval);sparkleInterval=null;}},100);
    }

    function stopSparkles(){isMoving=false; if(sparkleInterval) clearInterval(sparkleInterval); if(movementTimeout) clearTimeout(movementTimeout);}
    document.addEventListener('mousemove',updateMousePosition);
    document.addEventListener('mouseleave',stopSparkles);
})();
