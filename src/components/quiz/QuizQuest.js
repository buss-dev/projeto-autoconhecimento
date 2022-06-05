import './Quiz.css'


export default function QuizQuest({quest1, id}) {
    return (
        <div className="quizMonicaQuestions mt-2">
            <div className="row">
                <img alt='imgQuiz' className='p-4' src={quest1.imgSource}></img>
            </div>

            <div className="row pb-2 text-center">
                <p>{quest1.questionLine1}</p>
            </div>
        </div>
    )
}