import { AiOutlineSetting } from "react-icons/ai";
import { TbFileImport } from "react-icons/tb";
import { TbFileExport } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";
import { CiFilter } from "react-icons/ci";
import ResponsiveTable from "./ResponsiveTable";
import "./style.css";

export default function Grades() {
    return (
        <div>
            <div className="d-flex justify-content-end mb-4">
                <button className="btn btn-lg btn-light me-1 float-end border" >
                    <TbFileImport className="position-relative me-1" />
                    Import
                </button>

                <button className="btn btn-lg btn-light me-1 float-end border" >
                    <TbFileExport className="position-relative me-1" />
                    Export
                    <IoIosArrowDown />
                </button>

                <button className="btn btn-lg btn-light me-1 float-end border" >
                    <AiOutlineSetting />
                </button>
            </div>

            <div className="form-group row mb-4 ">
                <div className="col-sm-6 d-flex flex-column justify-content-center">
                    <label className="col-sm-6 col-form-label" style={{ fontWeight: 'bold' }}>Student Names</label>
                    <div className="input-group col-sm-6" >
                        <span className="input-group-text" style={{ backgroundColor: 'transparent' }}>
                            <CiSearch />
                        </span>
                        <input className="form-control"
                            placeholder="Search Students" />
                        <span className="input-group-text" style={{ backgroundColor: 'transparent' }}>
                            <IoIosArrowDown />
                        </span>
                    </div>
                </div>
                <div className="col-sm-6 d-flex flex-column justify-content-center">
                    <label className="col-sm-6 col-form-label" style={{ fontWeight: 'bold' }}>Assignment Names</label>
                    <div className="input-group col-sm-6" >
                        <span className="input-group-text" style={{ backgroundColor: 'transparent' }}>
                            <CiSearch />
                        </span>
                        <input className="form-control"
                            placeholder="Search Assignments" />
                        <span className="input-group-text" style={{ backgroundColor: 'transparent' }}>
                            <IoIosArrowDown />
                        </span>
                    </div>
                </div>
            </div>

            <div className="text-nowrap justify-content-end mb-4">
                <button className="btn btn-lg btn-light me-1 border" >
                    <CiFilter />
                    Apply Filters
                </button>
            </div>
            <ResponsiveTable />

        </div>
    );
}

