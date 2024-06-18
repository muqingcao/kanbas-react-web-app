import { GiPencil } from "react-icons/gi";
import { Link, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findQuizDetails } from "./client";
import { useEffect } from "react";
import { setQuizDetails } from './reducer';

export default function Detail() {
    const { pathname } = useLocation();
    const { cid } = useParams();
    const qid = pathname.split("/")[5];
    const dispatch = useDispatch();
    
    // Retrieving details for a quiz
    const fetchQuizDetails = async () => {
        try {
            const details = await findQuizDetails(cid as string, qid);
            dispatch(setQuizDetails(details));
        } catch (error) {
            console.error("Failed to fetch quiz details:", error);
        }
    };

    useEffect(() => {
        fetchQuizDetails();
    }, []);
    
    // find from redux
    const allQuizzes = useSelector((state: any) => state.quizzesReducer ? state.quizzesReducer.quizzes : []);
    const currQuiz = allQuizzes.find((quiz: any) => quiz.course === cid && quiz._id === qid);

    // format date
    const formattedDateTime = (date: any) => {
        return date ? date.toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        }).replace(',', ' ')
            : '';
    }

    return (
        <div id="detail-container">
            <div className="d-flex justify-content-center mb-3">
                <div className="text-nowrap">
                    <button id="preview-button" className="btn btn-lg btn-light border me-1" >
                        Preview
                    </button>
                    <Link id="quiz-edit" to={`/Kanbas/Courses/${cid}/Quizzes/${qid}/editdetail`}>
                        <button id="edit-button" className="btn btn-lg btn-light border me-1">
                            <GiPencil className="position-relative me-1 mb-1" />
                            Edit
                        </button>
                    </Link>
                </div>
            </div>
            <hr />

            <h1 id="quiz-title">{currQuiz?.number} - {currQuiz?.title}</h1>
            <div id="quiz-type" className="row mt-4">
                <div className="col-4" style={{ textAlign: "right", fontWeight: 'bold' }}>
                    Quiz Type
                </div>
                <div className="col-8">
                    {currQuiz?.quiz_type}
                </div>
            </div>
            <div id="quiz-points" className="row">
                <div className="col-4" style={{ textAlign: "right", fontWeight: 'bold' }}>
                    Points
                </div>
                <div className="col-8">
                    {currQuiz?.points}
                </div>
            </div>
            <div id="quiz-assignment-group" className="row">
                <div className="col-4" style={{ textAlign: "right", fontWeight: 'bold' }}>
                    Assignment Group
                </div>
                <div className="col-8">
                    {currQuiz?.assignment_group}
                </div>
            </div>
            <div id="quiz-shuffle-answers" className="row">
                <div className="col-4" style={{ textAlign: "right", fontWeight: 'bold' }}>
                    Shuffle Answers
                </div>
                <div className="col-8">
                    {currQuiz?.shuffle_answers}
                </div>
            </div>
            <div id="quiz-time-limit" className="row">
                <div className="col-4" style={{ textAlign: "right", fontWeight: 'bold' }}>
                    Time Limit
                </div>
                <div className="col-8">
                    {currQuiz?.time_limit}
                </div>
            </div>
            <div id="quiz-multiple-attempts" className="row">
                <div className="col-4" style={{ textAlign: "right", fontWeight: 'bold' }}>
                    Multiple Attempts
                </div>
                <div className="col-8">
                    {currQuiz?.multiple_attempts}
                </div>
            </div>
            {currQuiz?.multiple_attempts === "Yes" && (
                <div id="quiz-how-many-attempts" className="row">
                    <div className="col-4" style={{ textAlign: "right", fontWeight: 'bold' }}>
                        How Many Attempts
                    </div>
                    <div className="col-8">
                        {currQuiz?.how_many_attempts}
                    </div>
                </div>
            )}
            <div id="quiz-show-correct-answers" className="row">
                <div className="col-4" style={{ textAlign: "right", fontWeight: 'bold' }}>
                    Show Correct Answers
                </div>
                <div className="col-8">
                    {currQuiz?.show_correct_answers}
                </div>
            </div>
            <div id="quiz-access-code" className="row">
                <div className="col-4" style={{ textAlign: "right", fontWeight: 'bold' }}>
                    Access Code
                </div>
                <div className="col-8">
                    {currQuiz?.access_code}
                </div>
            </div>
            <div id="quiz-one-question-at-a-time" className="row">
                <div className="col-4" style={{ textAlign: "right", fontWeight: 'bold' }}>
                    One Question at a Time
                </div>
                <div className="col-8">
                    {currQuiz?.one_question_at_a_time}
                </div>
            </div>
            <div id="quiz-webcam-required" className="row">
                <div className="col-4" style={{ textAlign: "right", fontWeight: 'bold' }}>
                    Webcam Required
                </div>
                <div className="col-8">
                    {currQuiz?.webcam_required}
                </div>
            </div>
            <div id="quiz-lock-questions-after-answering" className="row">
                <div className="col-4" style={{ textAlign: "right", fontWeight: 'bold' }}>
                    Lock Questions After Answering
                </div>
                <div className="col-8">
                    {currQuiz?.lock_questions_after_answering}
                </div>
            </div>

            <table id="quiz-schedule" className="table mt-4">
                <thead>
                    <tr>
                        <th id="due-header" scope="col">Due</th>
                        <th id="available-from-header" scope="col">Available from</th>
                        <th id="until-header" scope="col">Until</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td id="due-date">{formattedDateTime(new Date(currQuiz?.due_date))}</td>
                        <td id="available-from">{formattedDateTime(new Date(currQuiz?.available_date))}</td>
                        <td id="until-date">{formattedDateTime(new Date(currQuiz?.until_date))}</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}
