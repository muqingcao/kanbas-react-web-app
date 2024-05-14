export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name"><b>Assignment Name</b></label><br /><br/>
            <input id="wd-name" value="A1 - ENV + HTML" />
            <br />
            <br />
            <textarea id="wd-description" rows={10} cols={45}>
            The assignment is available online Submit a link to the 
landing page of your Web application running on Netlify. 
The landing page should include the following: 
Your full name and section Links to each of the lab assignments 
Link to the Kanbas application Links to all relevant source 
code repositories. The Kanbas application should include 
a link to navigate back to the landing page.
            </textarea><br /><br/>

            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr><br/>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group">
                            <option selected value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="LABS">LABS</option>
                            <option value="PROJECTS">PROJECTS</option>
                        </select>
                    </td>
                </tr><br/>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as">
                            <option selected value="Percentage">Percentage</option>
                            <option value="Points">Points</option>
                        </select>
                    </td>
                </tr><br/>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type">
                            <option selected value="Online">Online</option>
                            <option value="No Submission">No Submission</option>
                            <option value="On Paper">On Paper</option>
                        </select>
                    </td>
                </tr><br/>

                <tr>
                    <td>
                    </td>
                    <td>
                        <label>Online Entry Options</label><br/>
                        <input type="checkbox"
                            name="check-online-entry-options" id="wd-text-entry"/>
                        <label htmlFor="wd-text-entry">Text Entry</label><br/>
                        <input type="checkbox"
                            name="check-online-entry-options" id="wd-website-url"/>
                        <label htmlFor="wd-website-url">Website URL</label><br/>
                        <input type="checkbox"
                            name="check-online-entry-options" id="wd-media-recordings"/>
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br/>
                        <input type="checkbox"
                            name="check-online-entry-options" id="wd-student-annotation"/>
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br/>
                        <input type="checkbox"
                            name="check-online-entry-options" id="wd-file-upload"/>
                        <label htmlFor="wd-file-upload">File Uploads</label>
                    </td>
                </tr><br/>

                <tr>
                    <td>
                    </td>
                    <td>
                        <label htmlFor="wd-assign-to">Assign Assign to</label><br/>
                        <input id="wd-assign-to" value="Everyone" />
                    </td>
                </tr><br/>


                <tr>
                    <td>
                    </td>
                    <td>
                        <label htmlFor="wd-due-date">Due</label><br/>
                        <input type="date"
                            id="wd-due-date"
                            value="2023-05-13"/><br/>
                    </td>
                </tr><br/>

                <tr>
                    <td>
                    </td>
                    <td>
                        <label htmlFor="wd-available-from">Available from</label><br/>
                        <input type="date"
                            id="wd-available-from"
                            value="2023-05-06"/>
                    </td>
                    <td>
                        <label htmlFor="wd-available-until">Until</label><br/>
                        <input type="date"
                            id="wd-available-until"
                            value="2023-05-06"/><br/>
                    </td>
                </tr>
            </table>
            <hr/>
            <button>Cancel</button>
            <button>Save</button>
        </div>
    ); 
}