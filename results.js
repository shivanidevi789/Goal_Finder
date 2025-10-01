
// Load answers from local storage 
const pageAnswers = JSON.parse(localStorage.getItem('correctCount'));

// Calculate scores for each page
const pageScores = {};
for (const page in pageAnswers) {
    pageScores[page] = pageAnswers[page].correctAnswers / pageAnswers[page].totalQuestions;
}

// Find the page with the highest score
let bestPage = '';
let highestScore = 0;
for (const page in pageScores) {
    if (pageScores[page] > highestScore) {
        bestPage = page;
        highestScore = pageScores[page];
    }
}  

// Update the victory message in results.html based on the best page
const victoryElement = document.getElementsByClassName('victory');
if (bestPage) {
    if (bestPage === 'Education_Biology.html') {
        victoryElement.textContent = `Congratulations! You're a DOCTOR!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a DOCTOR!"
        
    }
    else if (bestPage === 'Education_Business-studies.html') {
        victoryElement.textContent = `Congratulations! You're a Business Man!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a Business Man!"
        
    }
    else if (bestPage === 'Education_Chemistry.html') {
        victoryElement.textContent = `Congratulations! You're a Scientest!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a Scientest!"
    }
    else if (bestPage === 'Education_Civics.html') {
        victoryElement.textContent = `Congratulations! You're a Politician!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a Politician!"
    }
    else if (bestPage === 'Education_Commerce.html') {
        victoryElement.textContent = `Congratulations! You're an Accountant!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're an Accountant!"
    }
    else if (bestPage === 'Education_Economics.html') {
        victoryElement.textContent = `Congratulations! You're an Economist!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're an Economist!"
    }
    else if (bestPage === 'Education_English.html') {
        victoryElement.textContent = `Congratulations! You're a TEACHER!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a TEACHER!"
    }
    else if (bestPage === 'Education_Geography.html') {
        victoryElement.textContent = `Congratulations! You're a Geographer!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a Geographer!"
    }
    else if (bestPage === 'Education_Hindi.html') {
        victoryElement.textContent = `Congratulations! You're a Linguist!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a Linguist!"
    }
    else if (bestPage === 'Education_History.html') {
        victoryElement.textContent = `Congratulations! You're a Historian!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a Historian!"
    }
    else if (bestPage === 'Education_Mathematics.html') {
        victoryElement.textContent = `Congratulations! You're a Mathematician!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a Mathematician!"
    }
    else if (bestPage === 'Education_Physics.html') {
        victoryElement.textContent = `Congratulations! You're a Physicist!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a Physicist!"
    }
    else if (bestPage === 'Education_Political-Science.html') {
        victoryElement.textContent = `Congratulations! You're a Political Scientist!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a Political Scientist!"
    }
    else if (bestPage === 'Education_Psychology.html') {
        victoryElement.textContent = `Congratulations! You're a Psychologist!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a Psychologist!"
    }
    else if (bestPage === 'Education_Sociology.html') {
        victoryElement.textContent = `Congratulations! You're a Sociologist!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a Sociologist!"
    }
    else if (bestPage === 'programming_C_language.html') {
        victoryElement.textContent = `Congratulations! You're a C Programmer!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a C Programmer!"
    } 
    else if (bestPage === 'programming_C-sharp_language.html') {
        victoryElement.textContent = `Congratulations! You're a C# Programmer!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a C# Programmer!"
    }
    else if (bestPage === 'programming_C++_language.html') {
        victoryElement.textContent = `Congratulations! You're a C++ Programmer!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a C++ Programmer!"
    }
    else if (bestPage === 'programming_Css_language.html') {
        victoryElement.textContent = `Congratulations! You're a CSS Developer!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a CSS Developer!"
    }
    else if (bestPage === 'programming_Go_language.html') {
        victoryElement.textContent = `Congratulations! You're a Go Programmer!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're a Go Programmer!"
    }
    else if (bestPage === 'programming_Html_language.html') {
        victoryElement.textContent = `Congratulations! You're an HTML Developer!`;
        document.querySelector(".victory").innerHTML="Congratulations! You're an HTML Developer!"
    }
    else if (bestPage === 'programming_Java_language.html') {
        victoryElement.textContent = `    Congratulations! You're a Java Programmer!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'programming_perl_language.html') {
        victoryElement.textContent = `Congratulations! You're a Perl Programmer!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'programming_Js_language.html') {
        victoryElement.textContent = `Congratulations! You're a JavaScript Developer!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'programming_Php_language.html') {
        victoryElement.textContent = `Congratulations! You're a PHP Developer!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'programming_Python_language.html') {
        victoryElement.textContent = `Congratulations! You're a Python Programmer!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'programming_R_language.html') {
        victoryElement.textContent = `Congratulations! You're an R Programmer!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'programming_Ruby_language.html') {
        victoryElement.textContent = `Congratulations! You're a Ruby Programmer!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'programming_SQL_language.html') {
        victoryElement.textContent = `Congratulations! You're a SQL Developer!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'programming_Swift_language.html') {
        victoryElement.textContent = `Congratulations! You're a Swift Programmer!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'programming_Typescript_language.html') {
        victoryElement.textContent = `Congratulations! You're a TypeScript Developer!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'sport_Archery.html') {
        victoryElement.textContent = `Congratulations! You're an Archer!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'sport_Badminton.html') {
        victoryElement.textContent = `Congratulations! You're a Badminton Player!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'sport_Baseball.html') {
        victoryElement.textContent = `Congratulations! You're a Baseball Player!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'sport_Basketball.html') {
        victoryElement.textContent = `Congratulations! You're a Basketball Player!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'sport_Boxing.html') {
        victoryElement.textContent = `Congratulations! You're a Boxer!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'sport_chess.html') {
        victoryElement.textContent = `Congratulations! You're a Chess Player!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'sport_cricket.html') {
        victoryElement.textContent = `Congratulations! You're a Cricketer!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'sport_Football.html') {
        victoryElement.textContent = `Congratulations! You're a Football Player!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'sport_Golf.html') {
        victoryElement.textContent = `Congratulations! You're a Golfer!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'sport_Gymnastics.html') {
        victoryElement.textContent = `Congratulations! You're a Gymnast!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'sport_Hockey.html') {
        victoryElement.textContent = `Congratulations! You're a Hockey Player!`;
        //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'sport_Rugby.html') {
        victoryElement.textContent = `Congratulations! You're a Rugby Player!`;
        //document.querySelector(".victory").innerHTML=""
    }
        else if (bestPage === 'sport_Swimming.html') {
        victoryElement.textContent = `Congratulations! You're a Swimmer!`;
            //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'sport_Table-Tennis.html') {
        victoryElement.textContent = `Congratulations! You're a Table Tennis Player!`;
        //document.querySelector(".victory").innerHTML=""
    }
        else if (bestPage === 'sport_Tennis.html') {
        victoryElement.textContent = `Congratulations! You're a Tennis Player!`;
            //document.querySelector(".victory").innerHTML=""
    }
    else if (bestPage === 'sport_Volleyball.html') {
        victoryElement.textContent = `Congratulations! You're a Volleyball Player!`;
        //document.querySelector(".victory").innerHTML=""
    }

    else {
        victoryElement.textContent = `Congratulations! Your best performance was on ${bestPage}`;
    }
}
else {
    victoryElement.textContent = "You haven't completed any quizzes yet.";
}