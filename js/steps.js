document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.question');
  const steps = document.querySelectorAll('.step');
  const findYourShade = document.querySelector('.findYourShade');
  const survey = document.querySelector('#survey-container');
  let currentQuestion = 0;
  let filterProduct = [];
  function showQuestion(index) {
    questions.forEach((question, i) => {
      question.style.display = i === index ? 'block' : 'none';
    
    });
    updateProgressBar(index);
  }

  function updateProgressBar(index) {
    steps.forEach((step, i) => {
      if (i <= index) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });
  }
  function rgbToHex(rgb) {
    const rgbArray = rgb.match(/\d+/g);
    const r = parseInt(rgbArray[0]).toString(16).padStart(2, '0');
    const g = parseInt(rgbArray[1]).toString(16).padStart(2, '0');
    const b = parseInt(rgbArray[2]).toString(16).padStart(2, '0');
    return `#${r}${g}${b}`.toUpperCase();
  }
  function goToNextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      showQuestion(currentQuestion);
    }
    if(currentQuestion === 4){
      console.log(survey);
      findYourShade.style.display = 'none';
      survey.style.display = 'none';
    }
    const activeNatural = document.querySelector('.allColors .active');
    let activeNaturalObject = {type: activeNatural.getAttribute('name'), color: rgbToHex(activeNatural.style.backgroundColor)} 

    const activeUndertone = document.querySelector('.app-card .active');
    let activeUndertoneObject = {type: activeUndertone.getAttribute('name'), color: rgbToHex(activeUndertone.style.backgroundColor)} 

    const activeMoreImg = document.querySelector('.eye-color .active img');
    let activeMoreImgObject = {type: "Eye color", img: activeMoreImg.src} 
    const activeMoreColor = document.querySelector('.hair-color .active img');
    let activeMoreColorObject = {type: "Hair", img: activeMoreColor.src} 

    const activeShade = document.querySelector('.shades .active');
    let activeActiveShadeObject = {type: "Shade",  color: rgbToHex(activeShade.style.backgroundColor)} 

    if(currentQuestion == 1)
      filterProduct.push(activeNaturalObject);
    else if(currentQuestion == 2)
      filterProduct.push(activeUndertoneObject);
    else if(currentQuestion == 3){
      filterProduct.push(activeMoreImgObject);
      filterProduct.push(activeMoreColorObject);
    }
    else if(currentQuestion == 4)
      filterProduct.push(activeActiveShadeObject);
    localStorage.setItem('filerProduct', JSON.stringify(filterProduct))
    console.log(filterProduct);

  }
  function goToPreviousQuestion() {
    filterProduct.pop();
    localStorage.removeItem('filerProduct')
    localStorage.setItem('filerProduct', JSON.stringify(filterProduct))
    currentQuestion--;
    if (currentQuestion >= 0) {
      showQuestion(currentQuestion);
    }
  }
  
  document.getElementById('next-1').addEventListener('click', goToNextQuestion);
  document.getElementById('next-2').addEventListener('click', goToNextQuestion);
  document.getElementById('next-3').addEventListener('click', goToNextQuestion);
  document.getElementById('next-4').addEventListener('click', goToNextQuestion);
  document.getElementById('back-1').addEventListener('click', goToPreviousQuestion);
  document.getElementById('back-2').addEventListener('click', goToPreviousQuestion);
  document.getElementById('back-3').addEventListener('click', goToPreviousQuestion);
  showQuestion(currentQuestion);
});



const fair = document.querySelectorAll('.allColors div');
const cards = document.querySelectorAll('.app-card .div');
const eye = document.querySelectorAll('.eye-color .colors div div');
const hair = document.querySelectorAll('.hair-color .colors div div');
const shades = document.querySelectorAll('.shades .colors div div');
fair.forEach(circle => {
    circle.addEventListener('click', () => {
      fair.forEach(c => c.classList.remove('active'));
        circle.classList.add('active');
    });
});
cards.forEach(circle => {
  circle.addEventListener('click', () => {
    cards.forEach(c => c.classList.remove('active'));
      circle.classList.add('active');
  });
});
eye.forEach(circle => {
  circle.addEventListener('click', () => {
    eye.forEach(c => c.classList.remove('active'));
      circle.classList.add('active');
  });
});
hair.forEach(circle => {
  circle.addEventListener('click', () => {
    hair.forEach(c => c.classList.remove('active'));
      circle.classList.add('active');
  });
});

shades.forEach(circle => {
  circle.addEventListener('click', () => {
    shades.forEach(c => c.classList.remove('active'));
      circle.classList.add('active');
  });
});

