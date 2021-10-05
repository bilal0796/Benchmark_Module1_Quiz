
let rightones=[0,0,0,0,0,0,0]
let wrongone=[0,0,0,0,0,0,0]
let questions = [
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "Q: What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      MultipleOptions: {
        1: "Central Process Unit",
        2: "Computer Personal Unit",
        3: "Central Processor Unit",
        4:"Central Processing Unit",
      },
      wrongAnswers: {a: "Central Process Unit",b: "Computer Personal Unit",c: "Central Processor Unit",},
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Q: In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      MultipleOptions: {1:"Static", 2: "Private", 3: "Public", 4:"Final",},
      wrongAnswers: {a: "Static",b: "Private",c: "Public",},
    },
    // {
    //   category: "Science: Computers",
    //   type: "boolean",
    //   difficulty: "easy",
    //   question: "The logo for Snapchat is a Bell.",
    //   correct_answer: "False",
    //   incorrect_answers: ["True"],
    // },
    // {
    //   category: "Science: Computers",
    //   type: "boolean",
    //   difficulty: "easy",
    //   question:
    //     "Pointers were not used in the original C programming language; they were added later on in C++.",
    //   correct_answer: "False",
    //   incorrect_answers: ["True"],
    // },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Q: What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      MultipleOptions: {1: ".png", 2: ".jpeg", 3: ".gif",4:".svg",},
      wrongAnswers: {a: ",png",b: ".jpeg",c: ".gif",},
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "Q: In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      MultipleOptions: {
        1: "Counter Strike: Source",
        2: "Corrective Style Sheet",
        3: "Computer Style Sheet",
        4: "Cascading Style Sheet",
      },
      wrongAnswers: {a: "Counter Strike: Source",b: "Corrective Style Sheet",c: "Computer Style Sheet",},
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Q: What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      MultipleOptions: {
        1: "Ice Cream Sandwich",
        2: "Jelly Bean",
        3: "Marshmallow",
        4: "Nougat",
      },
      wrongAnswers: {a: "Ice Cream Sandwich",b: "Jelly Bean",c: "Marshmallow",},
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "Q: On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      MultipleOptions: {1: "120", 2: "160", 3: "100",4:"140"},
      wrongAnswers: {a: "120",b: "160",c: "100",},
    },
    // {
    //    category: "Science: Computers",
    //    type: "boolean",
    //    difficulty: "easy",
    //    question: "Q: Linux was first created as an alternative to Windows XP.",
    //    correct_answer: "False",
    //    incorrect_answers: {1:""}"True"],
    // },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Q: Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      MultipleOptions: {1:"Python", 2:"C", 3:"Jakarta",4:"Java"},
      wrongAnswers: {a:"Python", b:"C", c:"Jakarta",},
    },
  ];

  const displayquestions = function(){
    let gettheclickeddata
    let questionscontainerNode = document.getElementById("QuestionsContainer")
      for(let i = 0; i <= 9; i++){
        let inputquestions = document.createElement("div")
        inputquestions.classList.add("question")
        inputquestions.innerText = questions[i].question
        questionscontainerNode.appendChild(inputquestions)
        for(let x=1; x <= 4; x++){
            let optionsvariableNode = document.getElementsByClassName("question")
            let optionsvariable = document.createElement("button")
            optionsvariable.innerHTML = questions[i].MultipleOptions[x]
            questionscontainerNode.appendChild(optionsvariable)
        }
        window.onclick = e => {
            gettheclickeddata = e.target.innerText
            for(let l=0; l<7; l++){
                if(gettheclickeddata===questions[l].correct_answer){
                  rightones[l]=1;//rightones.push(rightones[l]+1)  
                  wrongone[l]=0;
                  // window.location.href="result.html"
                    break
                }
                else if(gettheclickeddata===questions[l].wrongAnswers.a){
                    // alert("Sorry, wrong answer!")
                    wrongone[l]=1;//wrongone.push(wrongone[l]+1)
                    rightones[l]=0;
                    break
                }
                else if(gettheclickeddata===questions[l].wrongAnswers.b){
                  // alert("Sorry, wrong answer!")
                  wrongone[l]=1;//wrongone.push(wrongone[l]+1)
                  rightones[l]=0;
                  break
                }
                else if(gettheclickeddata===questions[l].wrongAnswers.c){
                  // alert("Sorry, wrong answer!")
                  wrongone[l]=1;//wrongone.push(wrongone[l]+1)
                  rightones[l]=0
                  break
                }
              }
            }
            
            
        }
        return rightones,wrongone
  }
  let sum_array = function(arr_in){
    let sumres = 0;
    for(let loop=0; loop<arr_in.length; loop++){
      sumres = sumres + arr_in[loop];
    }
    return sumres;
  }
  let result=function(){
    
    // for(let loop=0; loop<rightones.length; loop++){
    //   alert(wrongone[loop]);
    // }
    alert("You had:\n"+sum_array(rightones)+" : correct answers\n"+sum_array(wrongone)+" : wrong answers")
    //alert("Q1: "+(rightones[0].toString=="1")+"Q2: "+(rightones[1].toString=="1")+", Q3: "+rightones[2].toString=="1"+", Q4: "+rightones[3].toString=="1"+", Q5: "+rightones[4].toString=="1"+", Q6: "+rightones[5].toString=="1"+", Q7: "+rightones[6].toString=="1")
    rightones=0
    wrongone=0
  }
  // const result=function(){
  //   if()
  // }

window.onload = function () {
    displayquestions()
}