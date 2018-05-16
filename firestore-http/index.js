const admin = require('firebase-admin');
const functions = require('firebase-functions');


//Initialize Firebase
admin.initializeApp(functions.config().firebase);

const db = admin.firestore();

//Number of Questions. We could have evaluated the count of questions, but thats for a future
//enhancement
const countQuestions = 2

//HTML Template for question
let question_template = ({
    id,
    title,
    option1,
    option2,
    option3,
    option4
}) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
        </head>
        <body>
          <h2>Welcome to Countries and their Capitals quiz</h2>
          <form name="quizform" action="/checkanswer" method="POST">
            <input type="hidden" name="id" value="${id}">
            <p>${title}</p>
            <select name="answer">
                <option value="1">${option1}</option>
                <option value="2">${option2}</option>
                <option value="3">${option3}</option>
                <option value="4">${option4}</option>
            </select>
            <input name="submit" type="submit"/>
          </form>
        </body>
      </html>`;
}

//HTML Template for correct answer
let correct_answer_template = () => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
        </head>
        <body>
          <h2>Welcome to Countries and their Capitals quiz</h2>
          <p>Great. Your answer is correct. <a href="/getRandomQuestion">Answer another question</a></p>
        </body>
      </html>`;
}

//HTML Template for wrong answer
let wrong_answer_template = ({
    correct_answer
}) => {
    return `
      <!DOCTYPE html>
      <html>
        <head>
        </head>
        <body>
          <h2>Welcome to Countries and their Capitals quiz</h2>
          <p>Sorry. The correct is ${correct_answer}. <a href="/getRandomQuestion">Answer another question</a></p>
        </body>
      </html>`;
}

//Function to get a random question from the Firestore questions collection
exports.getRandomQuestion = (req, res) => {

    //Get a random id
    const id = Math.floor(Math.random() * (countQuestions) + 1)
    var questionRef = db.collection('questions').doc(id.toString());
    var getDoc = questionRef.get()
        .then(doc => {
            if (!doc.exists) {
                throw new Error("No such document");
            } else {
                console.log('Document data:', doc.data());
                res.status(200).send(question_template({
                    id: doc.id,
                    title: doc.get('title'),
                    option1: doc.get('option1'),
                    option2: doc.get('option2'),
                    option3: doc.get('option3'),
                    option4: doc.get('option4')
                }));
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
            res.status(400).send('Error');
        });
}

//Function to check the answer submitted
exports.checkanswer = (req, res) => {

    //Extract out the id and the answer
    let id = req.body.id;
    let answer = req.body.answer;

    var questionRef = db.collection('questions').doc(id.toString());
    var getDoc = questionRef.get()
        .then(doc => {
            if (!doc.exists) {
                throw new Error("No such document");
            } else {
                if (doc.get('answer') === answer) {
                    res.status(200).send(correct_answer_template());
                } else {
                    res.status(200).send(wrong_answer_template({
                        correct_answer: getAnswer(doc, doc.get('answer'))
                    }));
                }
            }
        })
        .catch(err => {
            console.log('Error getting document', err);
            res.status(400).send('Error');
        });
}

//Retrieve the answer from the Question DocumentRef based on the option provided
function getAnswer(doc, answer) {
    let answer_text = "";
    switch (answer) {
        case "1":
            answer_text = doc.get('option1');
            break;
        case "2":
            answer_text = doc.get('option2');
            break;
        case "3":
            answer_text = doc.get('option3');
            break;
        case "4":
            answer_text = doc.get('option4');
            break;
    }
    return answer_text;
}