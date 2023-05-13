// VARIABLES

const question1 = document.querySelector(".accordion1")
const question2 = document.querySelector(".accordion2")
const question3 = document.querySelector(".accordion3")
const question4 = document.querySelector(".accordion4")
const question5 = document.querySelector(".accordion5")

const arrowImage1 = document.querySelector(".arrowImage1")
const arrowImage2 = document.querySelector(".arrowImage2")
const arrowImage3 = document.querySelector(".arrowImage3")
const arrowImage4 = document.querySelector(".arrowImage4")
const arrowImage5 = document.querySelector(".arrowImage5")

const answer1 = document.querySelector(".panel1")
const answer2 = document.querySelector(".panel2")
const answer3 = document.querySelector(".panel3")
const answer4 = document.querySelector(".panel4")
const answer5 = document.querySelector(".panel5")


// FUNCTIONS

function showAnswer1() {
    question1.classList.toggle("accordionBold")
    answer1.classList.toggle("panel1")
    answer1.style.color = "var(--dark-grayish-blue)"
    answer1.style.marginBottom = "1.5rem"

    reset1()
}

function clickArrow1() {
    question1.classList.toggle("accordionBold")
    answer1.classList.toggle("panel1")
    answer1.style.color = "var(--dark-grayish-blue)"
    answer1.style.marginBottom = "1.5rem"

    reset1()
}

function showAnswer2() {
    question2.classList.toggle("accordionBold")
    answer2.classList.toggle("panel2")
    answer2.style.color = "var(--dark-grayish-blue)"
    answer2.style.marginBottom = "1.5rem"

    reset2()
}

function clickArrow2() {
    question2.classList.toggle("accordionBold")
    answer2.classList.toggle("panel2")
    answer2.style.color = "var(--dark-grayish-blue)"
    answer2.style.marginBottom = "1.5rem"
    
    reset2()
}

function showAnswer3() {
    question3.classList.toggle("accordionBold")
    answer3.classList.toggle("panel3")
    answer3.style.color = "var(--dark-grayish-blue)"
    answer3.style.marginBottom = "1.5rem"
    
    reset3()
}

function clickArrow3() {
    question3.classList.toggle("accordionBold")
    answer3.classList.toggle("panel3")
    answer3.style.color = "var(--dark-grayish-blue)"
    answer3.style.marginBottom = "1.5rem"

    reset3()
}

function showAnswer4() {
    question4.classList.toggle("accordionBold")
    answer4.classList.toggle("panel4")
    answer4.style.color = "var(--dark-grayish-blue)"
    answer4.style.marginBottom = "1.5rem"

    reset4()
}

function clickArrow4() {
    question3.classList.toggle("accordionBold")
    answer4.classList.toggle("panel4")
    answer4.style.color = "var(--dark-grayish-blue)"
    answer4.style.marginBottom = "1.5rem"

    reset4()
}

function showAnswer5() {
    question5.classList.toggle("accordionBold")
    answer5.classList.toggle("panel5")
    answer5.style.color = "var(--dark-grayish-blue)"
    answer5.style.marginBottom = "1.5rem"

    reset5()
}

function clickArrow5() {
    question5.classList.toggle("accordionBold")
    answer5.classList.toggle("panel5")
    answer5.style.color = "var(--dark-grayish-blue)"
    answer5.style.marginBottom = "1.5rem"

    reset5()
}

// FUNCTIONS RESET

function reset1() {
    answer2.classList.toggle("hide")
    answer3.classList.toggle("hide")
    answer4.classList.toggle("hide")
    answer5.classList.toggle("hide")
}

function reset2() {
    answer1.classList.toggle("hide")
    answer3.classList.toggle("hide")
    answer4.classList.toggle("hide")
    answer5.classList.toggle("hide")
}

function reset3() {
    answer1.classList.toggle("hide")
    answer2.classList.toggle("hide")
    answer4.classList.toggle("hide")
    answer5.classList.toggle("hide")
}

function reset4() {
    answer1.classList.toggle("hide")
    answer2.classList.toggle("hide")
    answer3.classList.toggle("hide")
    answer5.classList.toggle("hide")
}

function reset5() {
    answer1.classList.toggle("hide")
    answer2.classList.toggle("hide")
    answer3.classList.toggle("hide")
    answer4.classList.toggle("hide")
}
    
// EVENTS
    
/* question.addEventListener("click", () => {
    question.classList.toggle("accordionBold")
    answer.classList.toggle("panel")
    answer.style.color = "var(--dark-grayish-blue)"
    answer.style.marginBottom = "1.5rem"
})
    
arrowImage.addEventListener("click", () => {
    question.classList.toggle("accordionBold")
    answer.classList.toggle("panel")
    answer.style.color = "var(--dark-grayish-blue)"
    answer.style.marginBottom = "1.5rem"
}) */