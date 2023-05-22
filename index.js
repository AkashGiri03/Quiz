var quizdata = [

    {
        question :'Which is javascript framework',
        a:'.net',
        b:'react',
        c:'flask',
        d:'django',
        Correct :'b'

    },
    {
        question :'Which is not programming language ',
        a:'html',
        b:'java',
        c:'c',
        d:'javascript',
        Correct :'a'

    },
    {
        question :'Which is not framework',
        a:'react',
        b:'javascript',
        c:'angular',
        d:'django',
        Correct :'b'

    },
    {
        question :'CSS stands for ',
        a:'Cascading style sheet',
        b:'Cascading style control',
        c:'Cascading style state ',
        d:'none',
        Correct :'a'

    }
]

// var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn = document.getElementById('submit')

var currentQuestion = 0
var quizscore = 0 

loadquiz()

function loadquiz()
{
    deselect()
    
    question.innerHTML = quizdata[currentQuestion].question
    option_a.innerText = quizdata[currentQuestion].a 
    option_b.innerText = quizdata[currentQuestion].b 
    option_c.innerText = quizdata[currentQuestion].c
    option_d.innerText = quizdata[currentQuestion].d 

}

function deselect()
{
    answer.forEach(answer=>answer.checked=false)
}

submitbtn.addEventListener('click' , ()=>{

    var selectedoption;

    answer.forEach(answer=>{

        if(answer.checked){
            selectedoption=answer.id
        }

    })

    if(selectedoption==quizdata[currentQuestion].Correct)
    {
        quizscore=quizscore+1
    }


    currentQuestion=currentQuestion+1


    if(currentQuestion==quizdata.length)
    {
        document.getElementById('quizdiv').innerText= `you have Scored ${quizscore} out of ${quizdata.length} `
        
    

    }else{
        loadquiz()
    }


})



