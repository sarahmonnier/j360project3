
window.onload = function () {
  
  var questionArea = document.getElementsByClassName('questions')[0],
      answerArea   = document.getElementsByClassName('answers')[0],
      checker      = document.getElementsByClassName('checker')[0],
      current      = 0,
  
      allQuestions = {
        'Who were the producer and director?' : ['George Lucas and Francis Ford Coppola', 'Ridley Scott and Steven Spielberg', 'Andrew Stanton and James Cameron', 	'J.J. Abrams and Tim Burton', 0],
        
        'Who ate the map?' : ['Commander Bog', 'The Supreme Leader' , 'Hooter', 'Idee', 2],
        
        'How did Captain EO and the crew find the homing beacon?' : ['The map', 'They were pulled to it by a tractor beam', 'The Supreme Leader showed them the way', 'They crashed right into it', 3],
        
        'What gift does Captain EO bring for the Supreme Leader?' : ['The key to unlocking her beauty', 'Hooter', 'A cape', 'A spaceship', 0],
        
        'What does Hooter break after slipping on the cape?': ['His trunk', 'Major Domo', 'His keyboard', 'The fourth wall', 2],
      };
      
  function loadQuestion(curr) {

  
    var question = Object.keys(allQuestions)[curr];
    
    questionArea.innerHTML = '';
    questionArea.innerHTML = question;    
  }
  
  function loadAnswers(curr) {

  
    var answers = allQuestions[Object.keys(allQuestions)[curr]];
    
    answerArea.innerHTML = '';
    
    for (var i = 0; i < answers.length -1; i += 1) {
      var createDiv = document.createElement('div'),
          text = document.createTextNode(answers[i]);
      
      createDiv.appendChild(text);      
      createDiv.addEventListener("click", checkAnswer(i, answers));
      
      
      answerArea.appendChild(createDiv);
    }
  }
  
  function checkAnswer(i, arr) {
   
    return function () {
      var givenAnswer = i,
          correctAnswer = arr[arr.length-1];
      
      if (givenAnswer === correctAnswer) {
        addChecker(true);             
      } else {
        addChecker(false);                        
      }
      
      if (current < Object.keys(allQuestions).length -1) {
        current += 1;
        
        loadQuestion(current);
        loadAnswers(current);
      } else {
        questionArea.innerHTML = 'Done'
        answerArea.innerHTML = '';
      }
                              
    };
  }
  
  function addChecker(bool) {
  
    var createDiv = document.createElement('div'),
        txt       = document.createTextNode(current + 1);
    
    createDiv.appendChild(txt);
    
    if (bool) {
      
      createDiv.className += 'correct';
      checker.appendChild(createDiv);
    } else {
      createDiv.className += 'false';
      checker.appendChild(createDiv);
    }
    	
  }
  
  loadQuestion(current);
  loadAnswers(current);
  
};


