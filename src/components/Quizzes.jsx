export default function Quizzes({allQuestions, allAnswer}) {
    return (
        <div className="quizzes-container">
            <div>
                <h2>{allQuestions}</h2>
                <h5>{allAnswer}</h5>
            </div>
        </div>
    )
}