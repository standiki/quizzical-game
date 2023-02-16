export default function Quizzes({questions, correct, incorrect}) {
    return (
        <div className="quizzes-container">
            <div>
                <h2>{questions}</h2>
                <h5>{incorrect} {correct}</h5>
            </div>
        </div>
    )
}