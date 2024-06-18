import { BsThreeDotsVertical } from "react-icons/bs";
import { RiForbidLine } from "react-icons/ri";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import EditorNavigation from "./EditorNavigation";
import { RxCross2 } from "react-icons/rx";
import { useEffect, useState } from "react";
import { addQuiz, editQuiz } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import { findQuizDetails } from "./client";

export default function EditorDetail() {
    const { pathname } = useLocation();
    const { cid } = useParams<{ cid: string }>();
    const qid = pathname.split("/")[5];
    const [currQuiz, setCurrQuiz] = useState<any>(null);
    const isEdit = pathname.includes("edit");
    const dispatch = useDispatch();
    const navigate = useNavigate();




    // const allQuizzes = useSelector((state: any) => state.quizReducer ? state.quizReducer.quizzes : []);
    // const currQuiz = allQuizzes.find((quiz: any) => quiz.course === cid && quiz._id === qid);


    // default values for all inputs
    const defaultTitle = currQuiz ? currQuiz.title : "Unnamed quiz";
    const defaultDescription = currQuiz ? currQuiz.description : "";
    const defaultQuizType = currQuiz ? currQuiz.quiz_type : "Graded Quiz";
    const defaultPoints = currQuiz ? currQuiz.points : "";
    const defaultAssignmentGroup = currQuiz ? currQuiz.assignment_group : "Quizzes";

    const defaultShuffleAnswers = currQuiz ? currQuiz.shuffle_answers : "Yes";
    const defaultTimeLimit = currQuiz ? currQuiz.time_limit : "Yes";
    const defaultHowLong = currQuiz ? currQuiz.how_long : "20";
    const defaultMultipleAttempts = currQuiz ? currQuiz.multiple_attempts : "No";
    const defaultHowManyAttempts = currQuiz ? currQuiz.how_many_attempts : "1";
    const defaultShowCorrectAnswers = currQuiz ? currQuiz.show_correct_answers : "Immediately";
    const defaultAccessCode = currQuiz ? currQuiz.access_code : "No";
    const defaultAccessCodeNumber = currQuiz ? currQuiz.access_code_number : "";
    const defaultOneQuestionAtATime = currQuiz ? currQuiz.one_question_at_a_time : "Yes";
    const defaultWebcamRequired = currQuiz ? currQuiz.webcam_required : "No";
    const defaultLockQuestionsAfterAnswering = currQuiz ? currQuiz.lock_questions_after_answering : "No";

    const currentDate = new Date();
    const defaultDueDate = currQuiz ? currQuiz.due_date : currentDate.toISOString().slice(0, 10) + "T00:00";
    const defaultAvailableDate = currQuiz ? currQuiz.available_date : currentDate.toISOString().slice(0, 10) + "T00:00";
    const defaultAvailableUntil = currQuiz ? currQuiz.until_date : currentDate.toISOString().slice(0, 10) + "T00:00";

    const [title, setTitle] = useState(defaultTitle);
    const [description, setDescription] = useState(defaultDescription);
    const [quizType, setQuizType] = useState(defaultQuizType);
    const [points, setPoints] = useState(defaultPoints);
    const [assignmentGroup, setAssignmentGroup] = useState(defaultAssignmentGroup);

    const [isShuffleAnswers, setIsShuffleAnswers] = useState(defaultShuffleAnswers);
    const [isTimeLimit, setIsTimeLimit] = useState(defaultTimeLimit);
    const [howLong, setHowLong] = useState(defaultHowLong);
    const [isMutipleAttempts, setIsMutipleAttempts] = useState(defaultMultipleAttempts);
    const [howManyAttempts, setHowManyAttempts] = useState(defaultHowManyAttempts);
    const [showCorrectAnswers, setShowCorrectAnswers] = useState(defaultShowCorrectAnswers);
    const [isAccessCode, setIsAccessCode] = useState(defaultAccessCode);
    const [accessCodeNumber, setAccessCodeNumber] = useState(defaultAccessCodeNumber);

    const [isOneQuestionAtATime, setIsOneQuestionAtATime] = useState(defaultOneQuestionAtATime);
    const [isWebcamRequired, setIsWebcamRequired] = useState(defaultWebcamRequired);
    const [isLockQuestionsAfterAnswering, setIsLockQuestionsAfterAnswering] = useState(defaultLockQuestionsAfterAnswering);

    const [dueDate, setDueDate] = useState(defaultDueDate);
    const [availableDate, setAvailableDate] = useState(defaultAvailableDate);
    const [availableUntil, setAvailableUntil] = useState(defaultAvailableUntil);

    const handleSave = () => {
        const quiz = {
            _id: isEdit ? qid : Date.now().toString(),
            course: cid,
            title: title,
            description: description,
            quiz_type: quizType,
            points: points,
            assignment_group: assignmentGroup,
            shuffle_answers: isShuffleAnswers,
            time_limit: isTimeLimit,
            how_long: howLong,
            multiple_attempts: isMutipleAttempts,
            how_many_attempts: howManyAttempts,
            show_correct_answers: showCorrectAnswers,
            access_code: isAccessCode,
            access_code_number: accessCodeNumber,
            one_question_at_a_time: isOneQuestionAtATime,
            webcam_required: isWebcamRequired,
            lock_questions_after_answering: isLockQuestionsAfterAnswering,
            due_date: dueDate,
            available_date: availableDate,
            until_date: availableUntil,
        };
        if (isEdit) {
            dispatch(editQuiz(quiz));
        } else {
            dispatch(addQuiz(quiz));
        }
        navigate(`/Kanbas/Courses/${cid}/Quizzes`);
    };

    // Retrieving details for a quiz
    const fetchQuizDetails = async () => {
        try {
            const details = await findQuizDetails(cid as string, qid);
            setCurrQuiz(details);
        } catch (error) {
            console.error("Failed to fetch quiz details:", error);
        }
    };
    useEffect(() => {
        fetchQuizDetails();
    }, [cid, qid]);

    return (
        <form onSubmit={handleSave}>
            <div id="wd-quiz-editor" className="p-4">
                <div className="d-flex justify-content-end mb-1">
                    <div className="text-nowrap">
                        <button id="options-button" className="btn btn btn-light border ms-3 float-end" >
                            <BsThreeDotsVertical className="position-relative mb-1" />
                        </button>

                        <div id="quiz-published" className="float-end ms-3 py-2" >
                            <RiForbidLine className="position-relative me-1 mb-1 text-muted" />
                            <span className="text-muted">Not Published</span>
                        </div>

                        <div id="quiz-points" className="float-end py-2" >
                            Points 0
                        </div>
                    </div>
                </div>
                <hr />
                <EditorNavigation pathname={pathname} />

                {/* Title */}
                <div className="row mt-3 mb-3">
                    <div className="col">
                        <input
                            id="quiz-name"
                            className="form-control"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="row mb-3">
                    <div className="col">
                        <label htmlFor="quiz-description" className="form-label">
                            <b>Quiz Instructions</b>
                        </label>
                        <textarea
                            id="quiz-description"
                            className="form-control"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            style={{ minHeight: '100px', padding: '15px' }}
                        />
                    </div>
                </div>

                {/* Quiz Type */}
                <div className="row justify-content-end">
                    <div className="col-md-11">
                        <div className="form-group row mb-3">
                            <label htmlFor="wd-quiz-type" className="col-sm-3 col-form-label" style={{ textAlign: 'right' }}>
                                Quiz Type
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="wd-quiz-type"
                                    value={quizType}
                                    onChange={(e) => setQuizType(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Points */}
                        <div className="form-group row mb-3">
                            <label htmlFor="wd-quiz-points" className="col-sm-3 col-form-label" style={{ textAlign: 'right' }}>
                                Points
                            </label>
                            <div className="col-sm-9">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="wd-quiz-points"
                                    value={points}
                                    onChange={(e) => setPoints(e.target.value)}
                                />
                            </div>
                        </div>

                        {/* Assignment Group */}
                        <div className="form-group row mb-3 justify-content-end">
                            <label htmlFor="wd-assignment-group" className="col-sm-3 col-form-label" style={{ textAlign: 'right' }}>
                                Assignment Group
                            </label>
                            <div className="col-sm-9 position-relative">
                                <select
                                    className="form-select"
                                    id="wd-assignment-group"
                                    value={assignmentGroup}
                                    onChange={(e) => setAssignmentGroup(e.target.value)}
                                >
                                    <option value="Quizzes">Quizzes</option>
                                    <option value="Exams">Exams</option>
                                    <option value="Assignments">Assignments</option>
                                    <option value="Project">Project</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row mb-3">
                            <label htmlFor="wd-quiz-options" className="col-sm-3 col-form-label" style={{ textAlign: 'right' }}>
                                Options
                            </label>
                            <div className="col-sm-9 align-items-center">

                                {/* Shuffle Answers  */}
                                <div className="mt-2">
                                    <input
                                        type="checkbox"
                                        id="wd-quiz-shuffle-answers"
                                        checked={isShuffleAnswers === "Yes"}
                                        onChange={() => { setIsShuffleAnswers(isShuffleAnswers === "Yes" ? "No" : "Yes") }}
                                        className="me-2"
                                    />
                                    <label htmlFor="wd-quiz-shuffle-answers">
                                        Shuffle Answers
                                    </label>
                                </div>

                                {/* Time Limit */}
                                <div className="text-nowrap d-flex mt-3 align-items-center">
                                    <div className="d-flex">
                                        <input
                                            type="checkbox"
                                            id="wd-quiz-time-limit"
                                            checked={isTimeLimit === "Yes"}
                                            onChange={() => { setIsTimeLimit(isTimeLimit === "Yes" ? "No" : "Yes") }}
                                            className="me-2 d-flex"
                                        />
                                    </div>
                                    <div className="d-flex me-4">
                                        <label htmlFor="wd-quiz-time-limit">
                                            Time Limit
                                        </label>
                                    </div>
                                    {isTimeLimit === "Yes" && (
                                        <div className="input-group mb-3 d-flex">
                                            <input
                                                type="text"
                                                className="form-control ms-2"
                                                placeholder="Enter number"
                                                value={howLong}
                                                onChange={(e) => setHowLong(e.target.value)}
                                            />
                                            <span className="input-group-text">minutes</span>
                                        </div>
                                    )}
                                </div>

                                {/* Multiple Attempts */}
                                <div className="text-nowrap d-flex mt-3 align-items-center">
                                    <div className="d-flex">
                                        <input
                                            type="checkbox"
                                            id="wd-quiz-multiple-attempts"
                                            checked={isMutipleAttempts === "Yes"}
                                            onChange={() => { setIsMutipleAttempts(isMutipleAttempts === "Yes" ? "No" : "Yes") }}
                                            className="me-2 d-flex"
                                        />
                                    </div>
                                    <div className="d-flex me-4">
                                        <label htmlFor="wd-quiz-multiple-attempts">
                                            Mutiple Attempts
                                        </label>
                                    </div>

                                    {isMutipleAttempts === "Yes" && (
                                        <div className="input-group mb-3 d-flex">
                                            <input
                                                type="text"
                                                className="form-control ms-2"
                                                placeholder="Enter number"
                                                value={howManyAttempts}
                                                onChange={(e) => setHowManyAttempts(e.target.value)}
                                            />
                                            <span className="input-group-text">times</span>
                                        </div>
                                    )}
                                </div>

                                {/* Show Correct Answers */}
                                <div className="form-group d-flex mt-3 align-items-center">
                                    <label htmlFor="wd-show-correct-answers" className="me-4">
                                        Show Correct Answers
                                    </label>
                                    <div className="position-relative">
                                        <select
                                            className="form-select"
                                            id="wd-show-correct-answers"
                                            value={showCorrectAnswers}
                                            onChange={(e) => setShowCorrectAnswers(e.target.value)}
                                        >
                                            <option value="Immediately">Immediately</option>
                                            <option value="After due">After due</option>
                                            <option value="Never">Never</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Access Code */}
                                <div className="text-nowrap d-flex mt-3 align-items-center">
                                    <div className="d-flex">
                                        <input
                                            type="checkbox"
                                            id="wd-quiz-access-code"
                                            checked={isAccessCode === "Yes"}
                                            onChange={() => { setIsAccessCode(isAccessCode === "Yes" ? "No" : "Yes") }}
                                            className="me-2 d-flex"
                                        />
                                    </div>
                                    <div className="d-flex me-4">
                                        <label htmlFor="wd-quiz-access-code">
                                            Access Code
                                        </label>
                                    </div>

                                    {isAccessCode === "Yes" && (
                                        <div className="mt-2 d-flex">
                                            <input
                                                type="text"
                                                className="form-control ms-2"
                                                placeholder="Enter your code"
                                                value={accessCodeNumber}
                                                onChange={(e) => setAccessCodeNumber(e.target.value)}
                                            />
                                        </div>
                                    )}
                                </div>

                                {/* One Question at a Time */}
                                <div className="mt-3">
                                    <input
                                        type="checkbox"
                                        id="wd-one-question-at-a-time"
                                        checked={isOneQuestionAtATime === "Yes"}
                                        onChange={() => { setIsOneQuestionAtATime(isOneQuestionAtATime === "Yes" ? "No" : "Yes") }}
                                        className="me-2"
                                    />
                                    <label htmlFor="wd-one-question-at-a-time">
                                        One Question at a Time
                                    </label>
                                </div>

                                {/* Webcam Required */}
                                <div className="mt-3">
                                    <input
                                        type="checkbox"
                                        id="wd-webcam-required"
                                        checked={isWebcamRequired === "Yes"}
                                        onChange={() => { setIsWebcamRequired(isWebcamRequired === "Yes" ? "No" : "Yes") }}
                                        className="me-2"
                                    />
                                    <label htmlFor="wd-webcam-required">
                                        Webcam Required
                                    </label>
                                </div>

                                {/* Lock Questions After Answering */}
                                <div className="mt-3">
                                    <input
                                        type="checkbox"
                                        id="wd-lock-questions-after-answering"
                                        checked={isLockQuestionsAfterAnswering === "Yes"}
                                        onChange={() => { setIsLockQuestionsAfterAnswering(isLockQuestionsAfterAnswering === "Yes" ? "No" : "Yes") }}
                                        className="me-2"
                                    />
                                    <label htmlFor="wd-lock-questions-after-answering">
                                        Lock Questions After Answering
                                    </label>
                                </div>
                            </div>
                        </div>


                        <div className="form-group row">
                            <label htmlFor="wd-quiz-assign-to" className="col-sm-3 col-form-label" style={{ textAlign: 'right' }}>Assign</label>
                            <div className="col-sm-9">
                                <div className="border rounded p-3 mb-3">
                                    <div className="form-group mb-2">
                                        <label htmlFor="wd-quiz-assign-to" style={{ fontWeight: 'bold' }}>Assign to</label>
                                        <div className="input-group">
                                            <span className="form-control" id="wd-quiz-assign-to">Everyone <RxCross2 /></span>
                                        </div>
                                    </div>

                                    {/* Due date */}
                                    <div className="form-group mb-2">
                                        <label htmlFor="wd-quiz-due-date" style={{ fontWeight: 'bold' }}>Due</label>
                                        <input
                                            type="datetime-local"
                                            className="form-control"
                                            id="wd-quiz-due-date"
                                            value={dueDate}
                                            onChange={(e) => setDueDate(e.target.value)}
                                        />
                                    </div>

                                    {/* Available date */}
                                    <div className="form-group row mb-2">
                                        <div className="col-sm-6 d-flex flex-column justify-content-center">
                                            <label htmlFor="wd-quiz-available-from" className="col-sm-6 col-form-label" style={{ fontWeight: 'bold' }}>
                                                Available from
                                            </label>
                                            <input
                                                type="datetime-local"
                                                className="form-control"
                                                id="wd-quiz-available-from"
                                                value={availableDate}
                                                onChange={(e) => setAvailableDate(e.target.value)}
                                            />
                                        </div>

                                        {/* Until date */}
                                        <div className="col-sm-6 d-flex flex-column justify-content-center">
                                            <label htmlFor="wd-quiz-available-until" className="col-sm-6 col-form-label" style={{ fontWeight: 'bold' }}>
                                                Until
                                            </label>
                                            <input
                                                type="datetime-local"
                                                className="form-control"
                                                id="wd-quiz-available-until"
                                                value={availableUntil}
                                                onChange={(e) => setAvailableUntil(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="d-flex justify-content-end">
                    <Link to={`/Kanbas/Courses/${cid}/Quizzes`}>
                        <button type="button" className="btn btn-light border me-2 board">
                            Cancel
                        </button>
                    </Link>

                    <button
                        onClick={handleSave}
                        type="submit"
                        className="btn btn-danger"
                    >
                        Save
                    </button>
                </div>
            </div >
        </form>
    )
}