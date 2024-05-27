import { useParams } from "react-router";
import { enrollments, grades, users, assignments } from "../../Database";

export default function ResponsiveTable() {
    const { cid } = useParams();

    const courseAssignments = assignments.filter((assignment) => assignment.course === cid);

    const enrolledStudents = enrollments
        .filter((enrollment) => enrollment.course === cid)
        .map((enrollment) => users.find(user => user._id === enrollment.user));

    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr className="table-light">
                        <th>Student Name</th>
                        {courseAssignments.map((assignment) => (
                            <th className="text-center">{assignment._id}<br /> Out of 100</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {enrolledStudents.map((student, index) => (
                        <tr key={student?._id} className={index % 2 === 0 ? 'table-white' : 'table-light'}>
                            <td className="text-danger">{student?.firstName} {student?.lastName}</td>
                            {courseAssignments.map(assignment => {
                                const gradeRecord = grades.find(grade => grade.student === student?._id && grade.assignment === assignment._id);
                                const grade = gradeRecord ? `${gradeRecord.grade}%` : 'N/A';
                                return <td key={assignment._id}>{grade}</td>;
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}