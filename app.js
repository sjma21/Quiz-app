const que = [
    {
        question: "What do you call a computer that sings?",
        answers: [
            {text: "Melodious Machine", correct: false},
            {text: "Serenade Server", correct: false},
            {text: "A Dell with Adele", correct: true},
            {text: "A laptop vocalist", correct: false},
        ]
    },
    {
        question: "Why was the computer cold?",
        answers: [
            {text: " It left its Windows open", correct: true},
            {text: "It caught a byte", correct: false},
            {text: "Its CPU was freezing", correct: false},
            {text: "It had too many hard drives", correct: false},
        ]
    },
    {
        question: "Why did the smartphone go to therapy?",
        answers: [
            {text: "It had too many apps", correct: false},
            {text: "It kept losing its contacts", correct: true},
            {text: "It couldn't find its GPS", correct: false},
            {text: "It had a touch screen issue", correct: false},
        ]
    },
    {
        question: "What did the router say to the computer?",
        answers: [
            {text: "You're wired", correct: false},
            {text: "You've got mail", correct: false},
            {text: "Stop buffering!", correct: false},
            {text: "You've got a strong connection with me!", correct: true},
        ]
    }

];
const questionelement = document.getElementById("ques");
const ansbtn = document.getElementById("ansbutton");
const nextbtn = document.getElementById("next-btn");

let  cuurind = 0;
let score = 0;
function startquiz(){
    cuurind = 0;
    score = 0;
    nextbtn.innerHTML="Next";
    showquestion();


}
function showquestion(){
    resetstate();
     let cuurque = que[cuurind];
     let quesinfo = cuurind+1;
     questionelement.innerHTML = quesinfo + ". "+ cuurque.question;

     cuurque.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansbtn.appendChild(button);
        if(answer.correct){
                button.dataset.correct = answer.correct;
        } 
        button.addEventListener("click", selectAnswer);

     });
}
function resetstate(){
    nextbtn.style.display = "none";
    while(ansbtn.firstChild){
        ansbtn.removeChild(ansbtn.firstChild);
    }
}
function selectAnswer(e){
    const selectedbtn = e.target;
    const iscorrect = selectedbtn.dataset.correct === "true";
    if(iscorrect){
        selectedbtn.classList.add("correct");
        score++;
        }else{
            selectedbtn.classList.add("incorrect");
        }
        Array.from(ansbtn.children).forEach(button=>{
            if(button.dataset.correct==="true"){
                button.classList.add("correct");
            }
            button.disabled=true;
        });
        nextbtn.style.display = "block";
}
function showscore(){
    resetstate();
    questionelement.innerHTML = `You Scored ${score} out of ${que.length}!`;
    nextbtn.innerHTML = "Play Again";
    nextbtn.style.display = "block";
}
function handlenextbutton(){
    cuurind++;
    if(cuurind<que.length){
        showquestion();
    }else{
        showscore();
    }
}
nextbtn.addEventListener("click",()=>{
    if(cuurind<que.length){
        handlenextbutton();
    }else{
        startquiz();
    }
});

startquiz();

