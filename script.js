let headingText = document.getElementById('heading')
let contentText = document.getElementById('textcontent')
let time = document.getElementById('time')
let correct = document.getElementById('correctness')


let score = 0
let q = 0  //question counter, up to 3
let secondsLeft = 60


//quesiton set and options set
let questions = ['Inside which HTML element do we put the JavaScript?',
                'Where is the correct place to insert a JavaScript?',
                'What is the correct syntax for referring to an external script called "xxx.js"?',]
let question1opts = ['<script>','<js>','<scripting>','<javascript>']
let question2opts = ['The <body> section', 'The <head> section', 'The <meta> section', 'The <style> section']
let question3opts = ['<script src="xxx.js">', '<script href="xxx.js">', '<script name="xxx.js">','Not this option']




// Starting Page Content with a start button initialized on HTML file
headingText.textContent = 'Code Quiz'
contentText.textContent = `Get ready! 1 min multipay choice code quiz. (1 wrong answer = 10 seconds consumed)`
document.getElementById('start').addEventListener('click',startTime);


// Quiz timer starts; Create 4 buttons for options; Delete start button
function startTime() {

    document.getElementById('start').remove()
    createButton(1)
    createButton(2)
    createButton(3)
    createButton(4)
    document.getElementById('1').addEventListener('click',reply_click);
    document.getElementById('2').addEventListener('click',reply_click);
    document.getElementById('3').addEventListener('click',reply_click);
    document.getElementById('4').addEventListener('click',reply_click);
    

    if (secondsLeft === 60){
        showQuestion()
    }
    let timerInterval = setInterval(function () {
        time.textContent = secondsLeft
        secondsLeft--
    
        
        if (secondsLeft <= 0) {
        clearInterval(timerInterval)
        time.textContent = ''
        showScore()
      }
    }, 1000)
}

// Create buttons with numbered IDs, each on a new line 
function createButton(idNumber){
    let button = document.createElement('button')
    button.setAttribute("id",idNumber)
    button.setAttribute("class","btn btn-success option my-3 options")
    let newRow = document.createElement('tr')
    document.getElementById("multiple-choices").appendChild(newRow)
    newRow.appendChild(button)
}

// Show Questions according to question counter q
function showQuestion(){

    headingText.textContent = "Question " + (q+1).toString()
    contentText.textContent = questions[q]

    let options = document.querySelectorAll('.option')

    if (q===0){
        options[0].textContent = question1opts[0]
        options[1].textContent = question1opts[1]
        options[2].textContent = question1opts[2]
        options[3].textContent = question1opts[3]
    } else if (q===1){
        options[0].textContent = question2opts[0]
        options[1].textContent = question2opts[1]
        options[2].textContent = question2opts[2]
        options[3].textContent = question2opts[3]
    } else if (q===2){
        options[0].textContent = question3opts[0]
        options[1].textContent = question3opts[1]
        options[2].textContent = question3opts[2]
        options[3].textContent = question3opts[3]
    }

}

// Show score page; Delete option buttons; Create input form for initial and submit button
function showScore(){
    headingText.textContent = 'Finish'
    contentText.textContent = 'Your score is ' + score.toString()
    correct.textContent =''   

    document.getElementById('1').remove()
    document.getElementById('2').remove()
    document.getElementById('3').remove()
    document.getElementById('4').remove()

    createForm()
    document.getElementById('submit').addEventListener('click',submitClick)

    
}

// Click submit button will append user input to a new line along with score
function submitClick(){
    let newInitial = document.createElement('p')
    newInitial.textContent = document.getElementById('input').value + "  " + score
    document.getElementById('container').appendChild(newInitial)
    document.getElementById('input').setAttribute("value","")

}


//click reply function for choosing correct/wrong answer until time's up or questions finished
function reply_click(){

    if (this.id==="1"){
        score++
        correct.textContent = "Correct!"
    } else {
        secondsLeft-=10
        correct.textContent = "Wrong"
    }

    if (q<questions.length-1){
        q++
        showQuestion()
    }else{
        secondsLeft=0
    }
 

}


// Create input form for recording
function createForm(){
    
    let input = document.createElement('input')
    input.setAttribute("type","text")
    input.setAttribute("value","Initial")
    input.setAttribute("id","input")
    input.setAttribute("class","my-3")
    document.getElementById('container').appendChild(input)

    let submit = document.createElement('input')
    submit.setAttribute("type","submit")
    submit.setAttribute("value","Submit")
    submit.setAttribute("id","submit")
    document.getElementById('container').appendChild(submit)
}



