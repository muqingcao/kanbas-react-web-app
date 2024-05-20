import { FaPlus } from "react-icons/fa6";

export default function AssignmentControls() {
    return (
        <div className="text-nowrap">
            <button className="btn btn-lg btn-danger me-1 float-end">
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Assignment
            </button>

            <button className="btn btn-lg btn-light me-1 float-end" style={{ border: '1px solid #DCDCDC' }}>
                <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
                Group
            </button>
        </div>
    );
}

