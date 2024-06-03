import { FaPlus } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function Quizzes() {
    const { pathname } = useLocation();
    const course = pathname.split("/")[3];
    return (
        <div>
            <div className="text-nowrap">
                <button className="btn btn-lg btn-light me-1 float-end" style={{ border: '1px solid #DCDCDC' }}>
                    <BsThreeDotsVertical className="position-relative mb-1" />
                </button>

                <Link to={`/Kanbas/Courses/${course}/Quizzes/new`}>
                    <button className="btn btn-lg btn-danger me-1 mb-1 float-end">
                        <FaPlus className="position-relative me-2 mb-1" />
                        Quiz
                    </button>
                </Link>
            </div>
        </div>
    );
}