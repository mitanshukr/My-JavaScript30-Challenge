function playSound(e) {
    const audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
    const key = document.querySelector('div[data-key="' + e.keyCode + '"]');
    //console.log(audio);
    if(!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}
//https://keycode.info/ check this link to know the keyCode of each keys.

//What is e in the above function?
// e versus this ??

function removePlayingClass(e){
    if (e.propertyName !== 'transform') return;
    // console.log(e);
    // console.log(this);

    this.classList.remove('playing')
   // e.target.classList.remove('playing');
   //Remark: Learn about this and bind.
   //what is target in e.target.classList??
   
}


window.addEventListener('keydown', playSound);
//why not keypress event?
const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removePlayingClass));
//Note: Adding .bind() to the calling function, result in binding 'Window'
//to the above eventlistener, which
//result in error.
