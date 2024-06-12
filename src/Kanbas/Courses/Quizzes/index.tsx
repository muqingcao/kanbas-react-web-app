import { FaCheckCircle, FaCircle, FaPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { VscTriangleDown } from "react-icons/vsc";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";
import { deleteQuiz } from "./reducer";
import { useDispatch, useSelector } from "react-redux";

export default function Quizzes() {
    const { pathname } = useLocation();
    const cid = pathname.split("/")[3];
    const quizzes = useSelector((state: any) => state.quizzesReducer ? state.quizzesReducer.quizzes : []);
    const dispatch = useDispatch();

    return (
        <div id="quizzes-container">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="input-group" style={{ width: '200px' }}>
                    <span className="input-group-text" style={{ backgroundColor: 'transparent' }}>
                        <CiSearch />
                    </span>
                    <input id="wd-search-quiz"
                        className="form-control"
                        placeholder="Search for Quiz" />
                </div>
                <div className="text-nowrap">
                    <button id="options-button" className="btn btn-lg btn-light border me-1 float-end" >
                        <BsThreeDotsVertical className="position-relative mb-1" />
                    </button>

                    <Link to={`/Kanbas/Courses/${cid}/Quizzes/newdetail`}>
                        <button id="new-quiz-button" className="btn btn-lg btn-danger me-1 float-end">
                            <AiOutlinePlus className="position-relative me-1 mb-1" />
                            Quiz
                        </button>
                    </Link>
                </div>
            </div>
            <hr />

            <ul id="wd-quizzes" className="list-group rounded-0">
                <li className="list-group-item p-0 mb-5 fs-5" >
                    <div className="wd-title p-3 ps-2 bg-light d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <VscTriangleDown className="me-2" />
                            <b>Assignment Quizzes</b>
                        </div>
                    </div>


                    <ul className="wd-quiz list-group rounded-0">
                        {quizzes
                            .filter((quiz: any) => quiz.course === cid)
                            .map((quiz: any) => (
                                <li className="wd-quiz-item list-group-item p-3 ps-1" style={{ borderLeft: '5px solid green' }}>
                                    <div className="d-flex align-self-center" >
                                        <div className="align-self-center" style={{ display: 'flex' }}>
                                            <MdOutlineRocketLaunch className="me-2 ms-2" />
                                        </div>

                                        <div className="flex-grow-1" style={{ margin: '0 20px' }}>
                                            <Link id="quiz-link" to={`/Kanbas/Courses/${cid}/Quizzes/${quiz._id}`}
                                                style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>
                                                {quiz.number} - {quiz.title}
                                            </Link>
                                            <br />
                                            <span id="quiz-details">
                                                <b> Closed </b> | <b> Due </b> Sep 21 at 1pm | 29 pts | 11 Questions
                                            </span>
                                        </div>
                                        <div className="d-flex align-self-center" >
                                            <div id="quiz-status">
                                                <FaCheckCircle className="text-success fs-5" />
                                                <FaCircle className="text-white fs-6" />
                                            </div>
                                            <div id="quiz-options">
                                                <IoEllipsisVertical className="fs-4" />
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            ))}
                    </ul>
                </li>
            </ul >

        </div >
    );
}





