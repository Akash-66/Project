
let questions = [
  {
    id: 1,
    question: "What year did the Titanic sink in the Atlantic Ocean on 15 April, on its maiden voyage from Southampton?",
    answer: "1912",
    options: [
      "1912",
      "1913",
      "1914",
      "1915"
    ]
  },
  {
    id: 2,
    question: "What is the name of the biggest technology company in South Korea?",
    answer: "Samsung",
    options: [
      "MI",
      "Samsung",
      "Nokia",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "What is the capital of Portugal?",
    answer: "Lisbon",
    options: [
      "Lisbon",
      "Southampton",
      "kerala",
      "None of these"
    ]
  },
  {
    id: 4,
    question: "In which year was The Godfather first released?",
    answer: "1972",
    options: [
      "1972",
      "1973",
      "1974",
      "None of these"
    ]
  },
  {
    id: 5,
    question: "How many self-referential cameos did Alfred Hitchcock make in his films from 1927–1976–33, 35 or 37?",
    answer: "37",
    options: [
      "37",
      "38",
      "39",
      "None of these"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
