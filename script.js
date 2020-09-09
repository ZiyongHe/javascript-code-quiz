let headingText = document.getElementById('heading')
let contentText = document.getElementById('textcontent')
let time = document.getElementById('time')
let correct = document.getElementById('correctness')
let options = document.querySelectorAll('.option')

let score = 0
let initial = ''

let questions = ['Inside which HTML element do we put the JavaScript?',
                'Where is the correct place to insert a JavaScript?',
                'What is the correct syntax for referring to an external script called "xxx.js"?',]
let question1opts = ['<script>','<js>','<scripting>','<javascript>']
let question2opts = ['The <body> section', 'The <head> section', 'The <meta> section', 'The <style> section']
let question3opts = ['<script src="xxx.js">', '<script href="xxx.js">', '<script name="xxx.js">','Not this option']

startingPage()
function startingPage (){
    headingText.textContent = 'Code Quiz'
    contentText.textContent = `Get ready! 1 min multipay choice code quiz.\n(1 wrong answer = 20 seconds consumed)`
}

function start() {
    let secondsLeft = 60
    let timerInterval = setInterval(function () {
        time.textContent = toString(secondsLeft)
        secondsLeft--

      if (secondsLeft === 0) {
        clearInterval(timerInterval)
        showScore()
      }


    }, 1000)
}

function showScore(){
    headingText.textContent = 'Finish'
    contentText.textContent = 'Your score is ' + toString(score)
    
}

questions.forEach(quiz)

function quiz (){
    headingText.textContent = "Question "+toString(indexOf(questions)+1)
    contentText.textContent = questions[indexOf(questions)]

    if (indexOf(questions)===0){
        options[0].textContent = quesiton1opts[0]
        options[1].textContent = quesiton1opts[1]
        options[2].textContent = quesiton1opts[2]
        options[3].textContent = quesiton1opts[3]
    } else if (indexOf(questions)===1){
        options[0].textContent = quesiton2opts[0]
        options[1].textContent = quesiton2opts[1]
        options[2].textContent = quesiton2opts[2]
        options[3].textContent = quesiton2opts[3]
    } else if (indexOf(questions)===2){
        options[0].textContent = quesiton3opts[0]
        options[1].textContent = quesiton3opts[1]
        options[2].textContent = quesiton3opts[2]
        options[3].textContent = quesiton3opts[3]
    }
}