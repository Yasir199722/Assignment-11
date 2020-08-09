window.onload =function(){
    show(0)
}
var questions = [{
    id: 1,
    question: "Who is the founder of Microsoft?",
    answer: "Bill Gates",
    options: [
        "Mark Zuckerburg",
        "Steve Jobs",
        "Bill Gates",
        "Tom Cruise"
    ]
},
{
    id: 2,
    question: "Who is the founder of Apple?",
    answer: "Steve Jobs",
    options: [
        "Dennis Rictchie",
        "Steve Jobs",
        "Bill Gates",
        "Mark Zuckerburg"
    ]

},
{
    id: 3,
    question: "Who is the founder of Facebook?",
    answer: "Mark Zuckerburg",
    options: [
        "Mark Zuckerburg",
        "Steve Jobs",
        "Bill Gates",
        "Dennis Ritchie"
    ]
},
{
    id: 4,
    question: "Who is the founder of Google?",
    answer: "Larry Page",
    options: [
        "Mark Zuckerburg",
        "Larry Page",
        "Bill Gates",
        "Dennis Ritchie"
    ]
},
{
    id: 5,
    question: "Who is the founder of Computer?",
    answer: "Charles Babbage",
    options: [
        "Mark Zuckerburg",
        "Steve Jobs",
        "Bill Gates",
        "Charles Babbage"
    ]
},
{
    id: 6,
    question: "Who is the founder of Mathematics?",
    answer: "Phythagoras",
    options: [
        "Abacus",
        "Jabir Bin Hayyan",
        "Ibn Hattam",
        "Phythagoras"
    ]
},
{
    id: 7,
    question: "Who is the first president of Pakistan?",
    answer: "Iskandar Mirza",
    options: [
        "Quaid e Azam",
        "Liaquat Ali Khan",
        "Iskandar Mirza",
        "Ayub Khan"
    ]
},
{
    id: 8,
    question: "Who is the Prime Minister of Pakistan?",
    answer: "Imran Khan",
    options: [
        "Imran Khan",
        "Fawad Chowdary",
        "Omer Ayub",
        "Dr.Arif Alvi"
    ]
},
{
    id: 9,
    question: "Who is the education minister of province sindh?",
    answer: "Saeed Ghani",
    options: [
        "Murad Ali Shah",
        "Saeed Ghani",
        "Qaim Ali Shah",
        "Nasir Hussain"
    ]
},
{
    id: 10,
    question: "Who is the chief minister of province punjab?",
    answer: "Usman Buzdaar",
    options: [
        "Shah Mehmood Qureshi",
        "Sheikh Rasheed",
        "Usman Buzdaar",
        "Asad Omer"
    ]
}
]
var question_count = 0;
function nextquestion(){
    question_count++
    console.log(question_count)
    show(question_count)
}
function show(e){
    var ques = document.getElementById("question")
    ques.innerHTML = `<h1> ${questions[e].question} </h1>
    <ul class = "list">
                        <li class="option ">${questions[e].options[0]}</li>
                        <li class="option">${questions[e].options[1]}</li>
                        <li class="option">${questions[e].options[2]}</li>
                        <li class="option">${questions[e].options[3]}</li>
                    </ul>`
                    Active()
}
function Active(){
    let option1 = document.querySelectorAll("li.option")

    for(let i = 0; i < option1.length; i++){
        option1[i].onclick = function(){
            for(let j = 0; j < option1.length; j++){
                if(option1[j].classList.contains("active")){
                    option1[j].classList.remove("active")
                }
            }
            option1[i].classList.add("active")
        }
    }
}

