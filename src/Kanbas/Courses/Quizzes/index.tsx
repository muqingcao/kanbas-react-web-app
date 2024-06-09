import { FaCheckCircle, FaCircle, FaPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { VscTriangleDown } from "react-icons/vsc";
import { IoEllipsisVertical } from "react-icons/io5";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { AiOutlinePlus } from "react-icons/ai";

export default function Quizzes() {
    const { pathname } = useLocation();
    const course = pathname.split("/")[3];
    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="input-group" style={{ width: '200px' }}>
                    <span className="input-group-text" style={{ backgroundColor: 'transparent' }}>
                        <CiSearch />
                    </span>
                    <input id="wd-search-assignment"
                        className="form-control"
                        placeholder="Search for Quiz" />
                </div>
                <div className="text-nowrap">
                    <button className="btn btn-lg btn-light border me-1 float-end" >
                        <BsThreeDotsVertical className="position-relative mb-1" />
                    </button>

                    <Link to={`/Kanbas/Courses/${course}/Quizzes/new`}>
                        <button className="btn btn-lg btn-danger me-1 float-end">
                            <AiOutlinePlus className="position-relative me-1 mb-1" />
                            Quiz
                        </button>
                    </Link>
                </div>
            </div>
            <hr />

            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5" >
                    <div className="wd-title p-3 ps-2 bg-light d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <VscTriangleDown className="me-2" />
                            <b>Assignment Quizzes</b>
                        </div>
                    </div>


                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1" style={{ borderLeft: '5px solid green' }}>
                            <div className="d-flex align-self-center" >
                                <div className="align-self-center" style={{ display: 'flex' }}>
                                    <MdOutlineRocketLaunch className="me-2 ms-2" />
                                </div>

                                <div className="flex-grow-1" style={{ margin: '0 20px' }}>
                                    <Link to={`/Kanbas/Courses/${course}/Quizzes/Q1`}
                                        style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>
                                        Q1 - HTML
                                    </Link>
                                    <br />
                                    <span>
                                        <b> Closed </b> | <b> Due </b> Sep 21 at 1pm | 29 pts | 11 Questions
                                    </span>
                                </div>
                                <div className="d-flex align-self-center" >
                                    <div>
                                        <FaCheckCircle className="text-success fs-5" />
                                        <FaCircle className="text-white fs-6" />
                                    </div>
                                    <div>
                                        <IoEllipsisVertical className="fs-4" />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </li>
            </ul >

        </div >
    );
}





