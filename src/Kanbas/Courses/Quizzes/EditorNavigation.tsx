export default function EditorNavigation({ pathname }: { pathname: string }) {
    const cid = pathname.split("/")[3];
    const qid = pathname.split("/")[5];

    // Check if the current path is for editing or creating a new quiz
    const detailsHref = pathname.includes("edit") ? `#/Kanbas/Courses/${cid}/Quizzes/${qid}/editdetail`
        : `#/Kanbas/Courses/${cid}/Quizzes/newdetail`;
    const questionsHref = pathname.includes("edit") ? `#/Kanbas/Courses/${cid}/Quizzes/${qid}/editquestions`
        : `#/Kanbas/Courses/${cid}/Quizzes/newquestions`;

    return (
        <div id="wd-quiz-editor" >
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <a
                        id="quiz-edit"
                        href={detailsHref}
                        className={`nav-link ${pathname.includes("detail") ? "active" : ""}`}
                        style={{ color: pathname.includes("detail") ? "black" : "#dc3545" }}
                    >
                        Details
                    </a>
                </li>

                <li className="nav-item">
                    <a
                        id="questions-edit"
                        href={questionsHref}
                        className={`nav-link ${pathname.includes("questions") ? "active" : ""}`}
                        style={{ color: pathname.includes("questions") ? "black" : "#dc3545" }}
                    >
                        Questions
                    </a>
                </li>
            </ul >
        </div >
    )
}