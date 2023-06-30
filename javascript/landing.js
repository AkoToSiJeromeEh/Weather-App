
const pLoading = document.getElementById('loading');
pLoading.classList.add('p-style');
let loadText = 'LOADING PLEASE WAIT...';
let loadZero = 0;
setInterval(() =>  {

     const newLoadingText = loadText.substring(0, loadZero);
     pLoading.textContent = newLoadingText;
     loadZero++;
     if(loadZero == 25){

        loadZero = 0;
     }
},200);
    setTimeout(function() {
     window.location.href = 'html/main.html';
  }, 10000);

  