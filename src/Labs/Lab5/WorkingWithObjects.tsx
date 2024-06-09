import React, { useState } from "react";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

export default function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    })
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/assignment`

    const [module, setModule] = useState({
        id: "101",
        name: "Introduction to Programming",
        description: "This module covers the basics of programming, including variables, control structures, and basic algorithms.",
        course: "Computer Science 101"
    })
    const MODULE_API_URL = `${REMOTE_SERVER}/lab5/module`

    return (
        <div id="wd-working-with-objects">
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-assignments" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment`}>
                Get Assignment
            </a><hr />

            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-assignment-title" className="btn btn-primary"
                href={`${REMOTE_SERVER}/lab5/assignment/title`}>
                Get Title
            </a><hr />

            <h4>Modifying Properties - Title</h4>
            <a id="wd-update-assignment-title"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input className="form-control w-75" id="wd-assignment-title"
                value={assignment.title} onChange={(e) =>
                    setAssignment({ ...assignment, title: e.target.value })} />
            <hr />

            <h4>Modifying Properties - Score</h4>
            <a id="wd-update-assignment-score"
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}>
                Update Score
            </a>
            <input className="form-control w-75" id="wd-assignment-score"
                value={assignment.score} onChange={(e) =>
                    setAssignment({ ...assignment, score: Number(e.target.value) })} />
            <hr />

            <h4>Retrieving Objects</h4>
            <a id="wd-retrieve-modules" className="btn btn-danger"
                href={`${REMOTE_SERVER}/lab5/module`}>
                Get Module
            </a><hr />

            <h4>Retrieving Properties</h4>
            <a id="wd-retrieve-module-name" className="btn btn-danger"
                href={`${REMOTE_SERVER}/lab5/module/name`}>
                Get Name
            </a><hr />

            <h4>Modifying Properties - Name</h4>
            <a id="wd-update-module-name"
                className="btn btn-danger float-end"
                href={`${MODULE_API_URL}/name/${module.name}`}>
                Update Name
            </a>
            <input className="form-control w-75" id="wd-module-name"
                value={module.name} onChange={(e) =>
                    setModule({ ...module, name: e.target.value })} />
            <hr />

        </div>
    );
}  