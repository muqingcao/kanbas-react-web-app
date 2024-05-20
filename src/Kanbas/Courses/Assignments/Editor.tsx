import { IoIosArrowDown } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor" className="p-4">
            <div className="row mb-3">
                <div className="col">
                    <label htmlFor="wd-name" className="form-label"><b>Assignment Name</b></label>
                    <input id="wd-name" className="form-control" value="A1" />
                </div>
            </div>

            <div className="row mb-3">
                <div className="col">
                    <div id="wd-description" className="form-control" contentEditable={true} style={{ minHeight: '100px', padding: '15px' }}>
                        <p>The assignment is <span className="text-danger">available online</span>. </p>
                        <p>Submit a link to the landing page of your Web application running on Netlify. </p>
                        <p>The landing page should include the following:
                            <ul>
                                <li>Your full name and section</li>
                                <li>Links to each of the lab assignments</li>
                                <li>Link to the Kanbas application</li>
                                <li>Links to all relevant source code repositories</li>
                            </ul>
                        </p>
                        <p>The Kanbas application should include a link to navigate back to the landing page.</p>
                    </div>
                </div>
            </div>


            <div className="container">
                <form>
                    <div className="row justify-content-end">
                        <div className="col-md-11">

                            <div className="form-group row mb-3">
                                <label htmlFor="wd-points" className="col-sm-3 col-form-label" style={{ textAlign: 'right' }}>Points</label>
                                <div className="col-sm-9">
                                    <input type="text" className="form-control" id="wd-points" value={100} />
                                </div>
                            </div>

                            <div className="form-group row mb-3 justify-content-end">
                                <label htmlFor="wd-group" className="col-sm-3 col-form-label" style={{ textAlign: 'right' }}>Assignment Group</label>
                                <div className="col-sm-9 position-relative">
                                    <select className="form-control" id="wd-group">
                                        <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                                        <option value="EXAMS">EXAMS</option>
                                        <option value="QUIZZES">QUIZZES</option>
                                        <option value="LABS">LABS</option>
                                        <option value="PROJECTS">PROJECTS</option>
                                    </select>
                                    <IoIosArrowDown className="position-absolute" style={{ top: '50%', right: '20px', transform: 'translateY(-50%)' }} />
                                </div>
                            </div>

                            <div className="form-group row mb-3">
                                <label htmlFor="wd-display-grade-as" className="col-sm-3 col-form-label" style={{ textAlign: 'right' }}>Display Grade as</label>
                                <div className="col-sm-9 position-relative">
                                    <select className="form-control" id="wd-display-grade-as">
                                        <option selected value="Percentage">Percentage</option>
                                        <option value="Points">Points</option>
                                    </select>
                                    <IoIosArrowDown className="position-absolute" style={{ top: '50%', right: '20px', transform: 'translateY(-50%)' }} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="wd-submission-type" className="col-sm-3 col-form-label" style={{ textAlign: 'right' }}>Submission Type</label>
                                <div className="col-sm-9">
                                    <div className="border rounded p-3 mb-3">
                                        <div className="form-group mb-2 position-relative">
                                            <select className="form-control" id="wd-submission-type">
                                                <option selected value="Online">Online</option>
                                                <option value="No Submission">No Submission</option>
                                                <option value="On Paper">On Paper</option>
                                            </select>
                                            <IoIosArrowDown className="position-absolute" style={{ top: '50%', right: '10px', transform: 'translateY(-50%)' }} />
                                        </div>
                                        <div className="form-group">
                                            <label style={{ fontWeight: 'bold' }}>Online Entry Options</label>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="wd-text-entry" />
                                                <label htmlFor="wd-text-entry" className="form-check-label">Text Entry</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="wd-website-url" />
                                                <label htmlFor="wd-website-url" className="form-check-label">Website URL</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="wd-media-recordings" />
                                                <label htmlFor="wd-media-recordings" className="form-check-label">Media Recordings</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="wd-student-annotation" />
                                                <label htmlFor="wd-student-annotation" className="form-check-label">Student Annotation</label>
                                            </div>
                                            <div className="form-check">
                                                <input type="checkbox" className="form-check-input" id="wd-file-upload" />
                                                <label htmlFor="wd-file-upload" className="form-check-label">File Uploads</label>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>

                            <div className="form-group row">
                                <label htmlFor="wd-assign-to" className="col-sm-3 col-form-label" style={{ textAlign: 'right' }}>Assign</label>
                                <div className="col-sm-9">
                                    <div className="border rounded p-3 mb-3">
                                        <div className="form-group mb-2">
                                            <label htmlFor="wd-assign-to" style={{ fontWeight: 'bold' }}>Assign to</label>
                                            <div className="input-group">
                                                <span className="form-control" id="wd-assign-to">Everyone <RxCross2 /></span>
                                            </div>
                                        </div>

                                        <div className="form-group mb-2">
                                            <label htmlFor="wd-due-date" style={{ fontWeight: 'bold' }}>Due</label>
                                            <input type="datetime-local" className="form-control" id="wd-due-date" value="2023-05-13T00:00" />
                                        </div>

                                        <div className="form-group row mb-2">
                                            <div className="col-sm-6 d-flex flex-column justify-content-center">
                                                <label htmlFor="wd-available-from" className="col-sm-6 col-form-label" style={{ fontWeight: 'bold' }}>Available from</label>
                                                <input type="date" className="form-control" id="wd-available-from" value="2023-05-06" />
                                            </div>
                                            <div className="col-sm-6 d-flex flex-column justify-content-center">
                                                <label htmlFor="wd-available-until" className="col-sm-6 col-form-label" style={{ fontWeight: 'bold' }}>Until</label>
                                                <input type="date" className="form-control" id="wd-available-until" value="2023-05-06" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr />
                    <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-light border mr-2 board">Cancel</button>
                        <button type="submit" className="btn btn-danger">Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
}