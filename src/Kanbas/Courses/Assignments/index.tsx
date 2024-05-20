import AssignmentControls from "./AssignmentControls";
import { CiSearch } from "react-icons/ci";
import AssignmentControlButtons from "./AssignmentControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { GiNotebook } from "react-icons/gi";
import { IoEllipsisVertical } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { VscTriangleDown } from "react-icons/vsc";

export default function Assignments() {
    return (
        <div id="wd-assignments">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <div className="input-group" style={{ width: '200px' }}>
                    <span className="input-group-text" style={{ backgroundColor: 'transparent' }}>
                        <CiSearch />
                    </span>
                    <input id="wd-search-assignment"
                        className="form-control"
                        placeholder="Search..." />
                </div>
                <AssignmentControls />
            </div>

            <ul id="wd-modules" className="list-group rounded-0">
                <li className="wd-module list-group-item p-0 mb-5 fs-5">
                    <div className="wd-title p-3 ps-2 bg-light d-flex justify-content-between align-items-center">
                        <div className="d-flex align-items-center">
                            <BsGripVertical className="me-2 fs-3" />
                            <VscTriangleDown className="me-2" />
                            ASSIGNMENTS
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="border rounded-5 p-2 me-2">40% of Total</div>
                            <FaPlus className="me-2" />
                            <IoEllipsisVertical className="fs-4" />
                        </div>
                    </div>

                    <ul className="wd-lessons list-group rounded-0">
                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                                    <BsGripVertical className="me-2" style={{ fontSize: '1.5rem' }} />
                                    <GiNotebook style={{ color: 'green', marginRight: '12px', fontSize: '1.5rem' }} />
                                    <div style={{ margin: '0 20px' }}>
                                        <a className="wd-assignment-link"
                                            href="#/Kanbas/Courses/1234/Assignments/123"
                                            style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>
                                            A1
                                        </a>
                                        <br />
                                        <span>
                                            <span className="text-danger">Multiple Modules</span> | <b> Not available until</b> May 6 at 12:00am | <b> Due </b> May 13 at 11:59pm | 100 pts
                                        </span>
                                    </div>
                                </div>
                                <AssignmentControlButtons />
                            </div>
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                                    <BsGripVertical className="me-2" style={{ fontSize: '1.5rem' }} />
                                    <GiNotebook style={{ color: 'green', marginRight: '12px', fontSize: '1.5rem' }} />
                                    <div style={{ margin: '0 20px' }}>
                                        <a className="wd-assignment-link"
                                            href="#/Kanbas/Courses/1234/Assignments/123"
                                            style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>
                                            A2
                                        </a>
                                        <br />
                                        <span>
                                            <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 13 at 12:00am | <b>Due</b> May 20 at 11:59pm | 100 pts
                                        </span>
                                    </div>
                                </div>
                                <AssignmentControlButtons />
                            </div>
                        </li>

                        <li className="wd-lesson list-group-item p-3 ps-1">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                                <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                                    <BsGripVertical className="me-2" style={{ fontSize: '1.5rem' }} />
                                    <GiNotebook style={{ color: 'green', marginRight: '12px', fontSize: '1.5rem' }} />
                                    <div style={{ margin: '0 20px' }}>
                                        <a className="wd-assignment-link"
                                            href="#/Kanbas/Courses/1234/Assignments/123"
                                            style={{ color: 'black', textDecoration: 'none', fontWeight: 'bold' }}>
                                            A3
                                        </a>
                                        <br />
                                        <span>
                                            <span className="text-danger">Multiple Modules</span> | <b>Not available until</b> May 20 at 12:00am | <b>Due</b> May 27 at 11:59pm | 100 pts
                                        </span>
                                    </div>
                                </div>
                                <AssignmentControlButtons />
                            </div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    );
}