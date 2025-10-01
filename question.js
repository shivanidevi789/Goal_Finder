const options = document.querySelectorAll('.option');
const correctCount = document.getElementById('correctCount');

let totalQuestions = 0;
let correctAnswers = 0;
const attemptedQuestions = new Set();

// Keep track of answers per page 
const pageAnswers = {};

options.forEach(option => {
    option.addEventListener('click', () => {
        const questionId = option.getAttribute('data-question');
        const isCorrect = option.getAttribute('data-correct') === 'true';
        const currentPage = window.location.pathname.split("/").pop();

        if (!attemptedQuestions.has(questionId)) {
            options.forEach(o => {
                if (o.getAttribute('data-question') === questionId) {
                    o.classList.remove('selected', 'correct', 'wrong');
                    if (o === option) {
                        o.classList.add('selected');
                        if (isCorrect) {
                            o.classList.add('correct');
                            correctAnswers++;
                        } 
                                     
                        else {
                            o.classList.add('wrong');
                            options.forEach(correctOption => {
                                if (
                                    correctOption.getAttribute('data-question') === questionId &&
                                    correctOption.getAttribute('data-correct') === 'true'
                                ) {
                                    correctOption.classList.add('correct');
                                }
                            });
                        }

                        
                        totalQuestions++;
                        attemptedQuestions.add(questionId);

                        // Store answer for this page
                        if (!pageAnswers[currentPage]) {
                            pageAnswers[currentPage] = {
                                totalQuestions: 0,
                                correctAnswers: 0
                            };
                        }
                        pageAnswers[currentPage].totalQuestions++;
                        if (isCorrect) {
                            pageAnswers[currentPage].correctAnswers++;
                        }
                    }
                }
            });
        }
         

        // Show explanation
        const explanation = document.querySelector(`.explanation[data-question="${questionId}`);
        if (explanation) {
            explanation.style.display = 'block';
        }
        correctCount.textContent = correctAnswers;
    });
});
 