const gal = document.querySelectorAll('.panel');
 
function handle(){
    this.classList.toggle('open');
    
}

function handleText(){
      this.classList.toggle('open-active');
}

gal.forEach(param => (param.addEventListener('click',handle)));
gal.forEach(param => (param.addEventListener('transitionend',handleText)));