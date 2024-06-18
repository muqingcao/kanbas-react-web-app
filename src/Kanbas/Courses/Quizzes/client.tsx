import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

// fetch all quizzes for a course
export const findQuizzesForCourse = async (cid: string) => {
    const response = await axios
        .get(`${COURSES_API}/${cid}/quizzes`);
    return response.data;
};

// fetch details of a quiz
export const findQuizDetails = async (cid: string, qid: string) => {
    const response = await axios.get(`${COURSES_API}/${cid}/quizzes/${qid}`);
    return response.data;
};