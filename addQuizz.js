// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, set, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCeCrF6vPhvTYcwM4vaMaHB0Pfdyt9Jm0Q",
  authDomain: "quizz-app-ba4a6.firebaseapp.com",
  databaseURL: "https://quizz-app-ba4a6-default-rtdb.firebaseio.com",
  projectId: "quizz-app-ba4a6",
  storageBucket: "quizz-app-ba4a6.appspot.com",
  messagingSenderId: "381334678943",
  appId: "1:381334678943:web:ee0e2aa9bdb40330e0a1aa",
  measurementId: "G-799TX2FJ11"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase(app);

let question = document.getElementById('question');
let option = document.getElementById('option');
let optionParent = document.getElementById('optionParent');
let correctAnswer = document.getElementById('correctAnswer');

let options = []
let correctAns

function renderOption() {
  optionParent.innerHTML = ''
  for(let i = 0; i < options.length; i++){
    optionParent.innerHTML +=`<li onclick = "setCorrectAnswer('${options[i]}')" class = "p-2 fs-5 rounded shadow my-2" >${options[i]}</li>`
  }
}
window.addOpion = function(){
  options.push(option.value)
  option.value = ""
  console.log(options)
  renderOption()
}

window.setCorrectAnswer = function(a){
  correctAns = a
  correctAnswer.innerHTML = correctAns;
}


window.submitQustion = function(){
  let obj = {
    question: question.value,
    options: options,
    correctAns: correctAns
  }   

// create key for obj data

obj.id = push(ref(db,'questions/')).key

  // defining Reference
  const reference = ref(db,`questions/${obj.id}`)
  set(reference,obj)


  console.log(obj)
}
