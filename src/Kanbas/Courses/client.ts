import axios from "axios";

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// Retrieving Courses
export const fetchAllCourses = async () => {
    const response = await axios.get(COURSES_API);
    return response.data;
};

// Creating New Courses
export const createCourse = async (course: any) => {
    const response = await axios.post(COURSES_API, course);
    return response.data;
};

// Deleting a Course
export const deleteCourse = async (id: string) => {
    const response = await axios.delete(`${COURSES_API}/${id}`);
    return response.data;
};

// Updating a Course
export const updateCourse = async (course: any) => {
    const response = await axios.put(`${COURSES_API}/${course._id}`, course);
    return response.data;
};
