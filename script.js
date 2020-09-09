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


document.getElementById('1').onclick = reply_click;
document.getElementById('2').onclick = reply_click;
document.getElementById('3').onclick = reply_click;
document.getElementById('4').onclick = reply_click;



startingPage()
function startingPage (){
    headingText.textContent = 'Code Quiz'
    contentText.textContent = `Get ready! 1 min multipay choice code quiz.\n(1 wrong answer = 20 seconds consumed)`
    document.getElementById('start').onclick = quiz;
}

function startTime() {
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



function reply_click()
{
    if (this.id="1"){
        score++
    } else {
        secondsLeft-=20
    }
    return score, secondsLeft
}

function quiz (){

    for (i=0;i<questions.length;i++){
        headingText.textContent = "Question " + (i+1)
        contentText.textContent = questions[i]

        if (i===0){
            options[0].textContent = question1opts[0]
            options[1].textContent = question1opts[1]
            options[2].textContent = question1opts[2]
            options[3].textContent = question1opts[3]
        } else if (i===1){
            options[0].textContent = question2opts[0]
            options[1].textContent = question2opts[1]
            options[2].textContent = question2opts[2]
            options[3].textContent = question2opts[3]
        } else if (i===2){
            options[0].textContent = question3opts[0]
            options[1].textContent = question3opts[1]
            options[2].textContent = question3opts[2]
            options[3].textContent = question3opts[3]
        }
    }
}