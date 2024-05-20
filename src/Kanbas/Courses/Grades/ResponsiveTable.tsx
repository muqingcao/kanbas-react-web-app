import { TbFileImport } from "react-icons/tb";

export default function ResponsiveTable() {
    return (
        <div className="table-responsive">
            <table className="table table-bordered">
                <thead>
                    <tr className="table-light">
                        <th>Student Name</th>
                        <th className="text-center">A1 SETUP <br /> Out of 100</th>
                        <th className="text-center">A2 HTML  <br /> Out of 100</th>
                        <th className="text-center">A3 CSS  <br /> Out of 100</th>
                        <th className="text-center">A4 BOOTSTRAP  <br /> Out of 100</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="table-white"><td className="text-danger">Jane Adams</td>
                        <td>100%</td><td>96.67%</td><td>92.18%</td><td>66.22%</td></tr>
                    <tr className="table-light"><td className="text-danger">Christina Allen</td>
                        <td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
                    <tr className="table-white"><td className="text-danger">Samreen Ansari</td>
                        <td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
                    <tr className="table-light"><td className="text-danger">Han Bao</td>
                        <td>100%</td><td>100%</td>

                        <div className="d-flex">
                            <input type="text" className="form-control" value="88.03%" />
                            <span className="input-group-text">
                                <TbFileImport />
                            </span>
                        </div>
                        <td>98.99%</td></tr>
                    <tr className="table-white"><td className="text-danger">Mahi Sai Srinivas Bobbili</td>
                        <td>100%</td><td>96.67%</td><td>98.37%</td><td>100%</td></tr>
                    <tr className="table-light"><td className="text-danger">Siran Cao</td>
                        <td>100%</td><td>100%</td><td>100%</td><td>100%</td></tr>
                </tbody>
            </table>
        </div>
    )
}