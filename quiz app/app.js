const question=[
    {
        question:"who is the largest animal in the world",
        answer:[
            {text:"tiger", correct:"false"},
            {text:"blue whale", correct:"true"},
            {text:"elephant", correct:"false"},
            {text:"hippo", correct:"false"}
        ]
    },
    {
        question:"who is the smallest continent in the world",
        answer:[
            {text:"asia", correct:"false"},
            {text:"antartica", correct:"false"},
            {text:"africa", correct:"false"},
            {text:"australia", correct:"true"}
        ]
    },
    {
        question:"who is the first prime minister of India",
        answer:[
            {text:"Narendra Modi", correct:"false"},
            {text:"Jawaharlal Nehru", correct:"true"},
            {text:"Mahatma Ghandhi", correct:"false"},
            {text:"MS Dhoni", correct:"false"}
        ]
    },
    {
        question:"who is the largest continent in the world",
        answer:[
            {text:"asia", correct:"true"},
            {text:"north-america", correct:"false"},
            {text:"africa", correct:"false"},
            {text:"europe", correct:"false"}
        ]
    }
];

const questionElement=document.querySelector("#question");
const answerBtn=document.querySelector(".ans-btn");
const nextBtn=document.querySelector(".next-btn");

let currentquesIndex=0;
let score=0;

function startquiz(){
    currentquesIndex=0;
    score=0;
    nextBtn.innerHTML="Next"
    showquestion();
};

function showquestion(){
    resetState();

    let currentIndex=question[currentquesIndex];
    let number= currentquesIndex + 1;
    questionElement.innerText= number + ". " + currentIndex.question;

    currentIndex.answer.forEach(answer =>{
        const button=document.createElement("button");
        button.innerHTML=answer.text;
        button.classList.add("btn");
        answerBtn.appendChild(button);

        if(answer.correct){
            button.dataset.correct=answer.correct
        }
        button.addEventListener("click",selectans);
    })
};

function resetState(){
    nextBtn.style.display="none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild)
    }
};

function selectans(e){
    const selectbtn=e.target;
    const iscorrect=selectbtn.dataset.correct ==="true";
    if(iscorrect){
        selectbtn.classList.add("correct");
        score++;
    }else{
        selectbtn.classList.add("incorrect");
    }
    Array.from(answerBtn.children).forEach(button =>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        };
        button.disabled=true;
    });
    nextBtn.style.display="block";
};

function showscore(){
    resetState();
    questionElement.innerHTML=`your score is ${score} out of ${question.length}!`;
    nextBtn.innerHTML="Play again"
    nextBtn.style.display="block"
}

function handlebtn(){
    currentquesIndex++
    if(currentquesIndex<question.length){
        showquestion();
    }else{
       showscore();
    };
}

nextBtn.addEventListener("click",()=>{
    if(currentquesIndex<question.length){
        handlebtn();
    }else{
        startquiz();
    };
});

startquiz();