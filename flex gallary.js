const gal = document.querySelectorAll('.panel');
const temp = document.getElementById('temp');
 
function handle(){
    this.classList.toggle('open');
    
}

function handleText(){
      this.classList.toggle('open-active');
}

gal.forEach(param => (param.addEventListener('click',handle)));
gal.forEach(param => (param.addEventListener('transitionend',handleText)));
