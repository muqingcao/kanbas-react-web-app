import axios from "axios";
export const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
export const USERS_API = `${REMOTE_SERVER}/api/users`;

// fetch all the people in the course
export const findAllUsers = async () => {
    const response = await axios.get(USERS_API);
    return response.data;
};

// fetch users by role type
export const findUsersByRole = async (role: string) => {
    const response = await
        axios.get(`${USERS_API}?role=${role}`);
    return response.data;
};