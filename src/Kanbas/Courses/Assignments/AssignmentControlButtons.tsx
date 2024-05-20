import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark";

export default function AssignmentControlButtons() {
    return (
        <div className="float-end" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <div style={{ display: 'flex' }}>
                <GreenCheckmark />
                <IoEllipsisVertical className="fs-4" />
            </div>
        </div>
    );
}
