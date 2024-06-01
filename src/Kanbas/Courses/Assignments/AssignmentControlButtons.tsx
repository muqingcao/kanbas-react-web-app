import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";
import { FaTrash } from "react-icons/fa";

export default function AssignmentControlButtons(
    { assignmentId, deleteAssignment }: { assignmentId: string; deleteAssignment: (assignmentId: string) => void; }) {
    const handleDelete = () => {
        const confirmDelete = window.confirm("Are you sure you want to remove the assignment?");
        if (confirmDelete) {
            deleteAssignment(assignmentId);
        }
    };

    return (
        <div className="float-end" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <div style={{ display: 'flex' }}>
                <FaTrash className="text-danger me-2 mb-1" onClick={handleDelete} />
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
            </div>
        </div>
    );
}
