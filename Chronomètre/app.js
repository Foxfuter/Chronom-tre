  const watch = document.querySelector("#watch");
  const heure = document.querySelector("#heure");
  const minute = document.querySelector("#minute");
  const seconde = document.querySelector("#seconde");
  const miliseconde = document.querySelector("#miliseconde");

  let timer
  
  function startWatch() {
    timer = setInterval(start, 1);
  }
  
  function start() {
    miliseconde.textContent = (Number(miliseconde.textContent) + 1).toString().padStart(2, "0");
    if (Number(miliseconde.textContent) === 100) {
      miliseconde.textContent = "00";
      seconde.textContent = (Number(seconde.textContent) + 1).toString().padStart(2, "0");
    }
    if (Number(seconde.textContent) === 60) {
      seconde.textContent = "00";
      minute.textContent = (Number(minute.textContent) + 1).toString().padStart(2, "0");
    }
    if (Number(minute.textContent) === 60) {
      minute.textContent = "00";
      heure.textContent = (Number(heure.textContent) + 1).toString().padStart(2, "0");
    }
    updateTimer();
  }
  
  function updateTimer() {
    // Convertir les heures, les minutes, les secondes et les millisecondes en chaînes de caractères
    const heureString = heure.textContent.padStart(2, "0");
    const minuteString = minute.textContent.padStart(2, "0");
    const secondeString = seconde.textContent.padStart(2, "0");
    const milisecondeString = miliseconde.textContent.padStart(2, "0");
    // Afficher le temps sur l'élément watch
    watch.textContent = `${heureString}:${minuteString}:${secondeString}.${milisecondeString}`;
  }



  function pauseWatch() {
    clearInterval(timer);
  }


  function resetWatch() {
    clearInterval(timer);
    heure.textContent = "00";
    minute.textContent = "00";
    seconde.textContent = "00";
    miliseconde.textContent = "00";
    updateTimer()
  }


const buttonStart = document.querySelector('#start')
const buttonPause = document.querySelector('#pause')
const buttonReset = document.querySelector('#reset')

buttonStart.addEventListener('click',startOnClick)
buttonPause.addEventListener('click',pauseOnClick)
buttonReset.addEventListener('click',resetOnClick)

function startOnClick(){
    startWatch()
    watch.classList.remove("paused")
    buttonStart.disabled = true
}

function pauseOnClick(){
    pauseWatch()
    watch.classList.add("paused")
    buttonStart.disabled = false
}

function resetOnClick(){
    resetWatch()
    watch.classList.remove("paused")
    buttonStart.disabled = false
}

