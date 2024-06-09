import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// Update an Assignment
export const updateAssignment = async (assignment: any) => {
    const response = await axios.
        put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    return response.data;
};

// Deleting an Assignment
export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios
        .delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
};

// Creating Assignments for a Course
export const createAssignment = async (cName: string, assignment: any) => {
    const response = await axios.post(`${COURSES_API}/${cName}/assignments`, assignment);
    return response.data;
};

// Retrieving Assignments for Course
export const findAssignmentsForCourse = async (cName: string) => {
    const response = await axios
        .get(`${COURSES_API}/${cName}/assignments`);
    return response.data;
};

