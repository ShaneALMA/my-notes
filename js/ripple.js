function setRipple(elem, color) {
  elem.classList.add("ripple");
  if (elem === floating_new_note) {
    elem.style.position = "fixed";
  }
  elem.addEventListener('mousedown', e => {
    let scrollY = Math.round(window.scrollY);
    let pageY = e.pageY;
   
    if(scrollY > 0){
      pageY -= scrollY;
    }
    
    let posX = e.pageX - elem.getBoundingClientRect().left,
      posY = pageY - elem.getBoundingClientRect().top,
      waveWidth = 1.5 * elem.getBoundingClientRect().width;
    let divRippleEffect = document.createElement('div');
    divRippleEffect.style.background = color;
    divRippleEffect.className = 'ripple-effect';
    divRippleEffect.style.width = `${waveWidth}px`;
    divRippleEffect.style.height = `${waveWidth}px`;
    divRippleEffect.style.left = `${ posX - (waveWidth / 2) }px`;
    divRippleEffect.style.top = `${ posY - (waveWidth / 2) }px`;
    elem.appendChild(divRippleEffect);

    window.setTimeout(() => {
      elem.removeChild(divRippleEffect);
    }, 2000);
  });
}

setRipple(floating_new_note, "rgba(255,255,255,.8)");
setRipple(main_title, "rgba(255,255,255,.8)");
for(let i = 0; i < 2; i++){
  setRipple(main_opts.children[i], "rgba(255,255,255,.8)");
}
for (let header_item of header_items) {
  setRipple(header_item, "rgba(255,255,255,.8)");
}


//new note
for(let i = 0; i < 2; i++){
  if (i === 0) {
    setRipple(new_opts_float.children[i],"#0d0");
  } else {
    setRipple(new_opts_float.children[i],"#f00");
  }
}

for (let i = 0; i < 2; i++) {
  if (i === 0) {
    setRipple(reply_cont.children[i], "#d00");
  } else {
    setRipple(reply_cont.children[i], "#0d0");
  }
}

//show note

for (let i = 0; i < 2; i++) {
  if (i === 0) {
    setRipple(show_opts_float.children[i], "rgba(255,255,255,.5");
    
  } else {
    setRipple(show_opts_float.children[i], "#d00");
    
  }
}


