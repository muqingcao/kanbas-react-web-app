import "./index.css";
import { useParams } from "react-router";
import { courses } from "../../Database";
import { Link, useLocation } from "react-router-dom";

export default function CoursesNavigation() {
    const { cid } = useParams();
    const course = courses.find((course) => course._id === cid);
    const { pathname } = useLocation();
    const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
    return (
        <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
            {links.map((link) => (
                <Link
                    key="link" to={`/Kanbas/Courses/${course?._id}/${link}`}
                    id="wd-course-home-link"
                    className={`list-group-item border border-0 ${pathname.includes(link) ? "active" : "text-danger"}`}>
                    {link}
                </Link>
            ))}
        </div>
    );
}