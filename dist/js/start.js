function submitForm(e) {
    e.preventDefault();
    let name = document.forms["welcome_form"]["name"].value;
  
    sessionStorage.setItem("name", name);
    var ele = document.getElementsByName('done');
    if (ele == "quiz"){
    	location.href = "quiz.html";
    }
    if (ele == "quizM"){
    	location.href = "quizM.html";
    }
    if (ele =="quizH"){
    	location.href = "quizH.html";
    }
  
    location.href = "quiz.html";
  }