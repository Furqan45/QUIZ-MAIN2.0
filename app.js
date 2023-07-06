  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
  import { getDatabase, ref, onChildAdded } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAFnWgMt2MvBZwKeIMhUAJyP5nX_PKJr34",
    authDomain: "quiz-app-2-85dfe.firebaseapp.com",
    databaseURL: "https://quiz-app-2-85dfe-default-rtdb.firebaseio.com",
    projectId: "quiz-app-2-85dfe",
    storageBucket: "quiz-app-2-85dfe.appspot.com",
    messagingSenderId: "350271713716",
    appId: "1:350271713716:web:c0e75069282e16746b02e1",
    measurementId: "G-14HLK9NE37"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase()


  function geteDataFromDatabase(){
    const reference = ref(db, 'questions/')
    onChildAdded(reference, function (data) {
        console.log(data.val())
            questions.push(data.val())
            renderQuestion()
    })
  }
     
  geteDataFromDatabase()




var questions = [
    // {
    //     question: "HTML Stands for ______________",
    //     options: ["HyeperTextingMailLanguage", "HiTextMailLanguage", "Hypertext Markup Language", "HyperloopTextMailLangugae"],
    //     correctAnswer: "Hypertext Markup Language",
    // },
    // {
    //     question: "CSS Stands for ______________",
    //     options: ["CascadStyleShoot", "CascadeStyleSize", "Cascading Style Sheet", "CascadeSheetStyle"],
    //     correctAnswer: "Cascading Style Sheet",
    // },
    // {
    //     question: "JS Stands for ______________",
    //     options: ["JavaSripted", "JavaScore", "JavaScript", "JavaSlip"],
    //     correctAnswer: "JavaScript",
    // },
    // {
    //     question: "RAM Stands for ______________",
    //     options: ["Random Accessed Memory", "Read Only Memory", "Random Access Memory", "RAM"],
    //     correctAnswer: "Random Access Memory",
    // },
    // {
    //     question: "SQL Stands for ______________",
    //     options: [".SQL", "MYSQL", "Structured Query Language", "SQL"],
    //     correctAnswer: "Structured Query Language",
    // },
    // {
    //     question: "is HTML is Programming Language?",
    //     options: ["YES", "NO"],
    //     correctAnswer: "NO",
    // },
];


var displayQuestion = document.getElementById("displayquestion");
var CurrentQuestionNumber = document.getElementById("currentQuestionNumber");
var totalQuestionNumber = document.getElementById("totalQuestionNumber")
var optionsParent = document.getElementById("optionsParent")

var indexVal = 0;
var marks = 0;
var score = 0;

window.checkAns =function(a, b) {
    console.log(a, b);
    if (a === b) {
    //     marks = marks + 1;
    //     console.log("Answer " + (indexVal + 1) + " is correct.");
    // } else {
    //     console.log("Answer " + (indexVal + 1) + " is wrong.");
    score++
    console.log(score)
    }
    // console.log("Total Marks: " + marks);
    nextQue();
}

window.nextQue = function(){
    if(indexVal + 1 == questions.length){
        alert("You are score is" + score)
    }else{
        indexVal++;
        renderQuestion()
    }
    }
    



function renderQuestion() {
    var que = questions[indexVal];
    displayQuestion.innerHTML = que.question;
    totalQuestionNumber.innerHTML = questions.length;
    CurrentQuestionNumber.innerHTML = indexVal + 1;

    optionsParent.innerHTML = "";

    for (var i = 0; i < que.options.length; i++) {
        optionsParent.innerHTML +=  `<div class="col-md-6">
        <button onclick="checkAns('${que.options[i]}','${que.correctAnswer}')" class="btn bg-info-subtle w-100 py-2 mb-3">
        ${que.options[i]}
        </button>
        </div>` }
        

}




renderQuestion();