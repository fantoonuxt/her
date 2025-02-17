document.addEventListener('DOMContentLoaded', function() {
  const questions = document.querySelectorAll('.question');
  const steps = document.querySelectorAll('.step');
  const findYourShade = document.querySelector('.findYourShade');
  const survey = document.querySelector('#survey-container');
  let currentQuestion = 0;

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
  }
  function goToPreviousQuestion() {
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



const fair = document.querySelectorAll('.fair .colors div');
const medium = document.querySelectorAll('.medium .colors div');
const tan = document.querySelectorAll('.tan .colors div');
const deep = document.querySelectorAll('.deep .colors div');
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
medium.forEach(circle => {
  circle.addEventListener('click', () => {
    medium.forEach(c => c.classList.remove('active'));
      circle.classList.add('active');
  });
});
tan.forEach(circle => {
  circle.addEventListener('click', () => {
    tan.forEach(c => c.classList.remove('active'));
      circle.classList.add('active');
  });
});
deep.forEach(circle => {
  circle.addEventListener('click', () => {
    deep.forEach(c => c.classList.remove('active'));
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

