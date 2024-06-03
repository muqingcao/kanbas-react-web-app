import { GiPencil } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

export default function Detail() {
    const { pathname } = useLocation();
    const course = pathname.split("/")[3];
    const quiz = pathname.split("/")[5];
    return (
        <div>
            <div className="d-flex justify-content-center mb-3">
                <div className="text-nowrap">
                    <button className="btn btn-lg btn-light border me-1" >
                        Preview
                    </button>
                    <button className="btn btn-lg btn-light border me-1">
                        <GiPencil className="position-relative me-1 mb-1" />
                        Edit
                    </button>
                </div>
            </div>
            <hr />

            <h1>Q1 - HTML</h1>
            <div className="row mt-4">
                <div className="col-3" style={{ textAlign: "right", fontWeight: 'bold' }}>
                    Quiz Type
                </div>
                <div className="col-9">
                    Graded Quiz
                </div>
            </div>

            <table className="table mt-4">
                <thead>
                    <tr>
                        <th scope="col">Due</th>
                        <th scope="col">For</th>
                        <th scope="col">Available from</th>
                        <th scope="col">Until</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Sep 21 at 1pm</td>
                        <td>Everyone</td>
                        <td>Sep 21 at 11:40am</td>
                        <td>Sep 21 at 1pm</td>
                    </tr>
                </tbody>
            </table>


        </div>
    )
}