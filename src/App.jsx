import React from 'react'
import Quizzes from './components/Quizzes'
import { nanoid } from 'nanoid';

export default function App() {
    const [getTriviaQuestions, setGetTriviaQuestions] = React.useState([]);
    const [quiz, setQuiz] = React.useState(createNewQuestions())

    React.useEffect(() => {
        fetch('https://opentdb.com/api.php?amount=10')
        .then(res => res.json())
        .then(data => setGetTriviaQuestions(data.results))
    }, [])

    function createNewQuestions() {
        const unfilteredQuestions = getTriviaQuestions
        const newQuestions = []
        for (let i = 0; i < unfilteredQuestions.length; i++) {
            const unfiltered = unfilteredQuestions[i]
            const newObj = {
                id: nanoid(),
                allQuestions: unfiltered.question,
                allAnswer: [unfiltered.correct_answer, unfiltered.incorrect_answers],
                isSelected: false
            }
            newQuestions.push(newObj);
        }
        return newQuestions;
    }

    console.log(quiz)


    const mappedQuizzes = quiz.map(quiz => (
        <Quizzes 
            id={quiz.id}
            allQuestions={quiz.allQuestions}
            allAnswer={quiz.allAnswer}
        />
    ))

    return (
        <div>

                {mappedQuizzes}

                <div className='start-container'>
                    <h1>Quizzical</h1>
                    <p>Some description if needed</p>
                    <button 
                        onClick={createNewQuestions}
                    >
                        Star quiz
                    </button>
                </div>            
        </div>
    )
}