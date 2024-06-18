import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    quizzes: [],
};
const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
        setQuizDetails: (state, action) => {
            const updatedQuiz = action.payload;
            const existingQuizIndex = state.quizzes.findIndex(quiz => quiz._id === updatedQuiz._id);
            if (existingQuizIndex !== -1) {
                state.quizzes[existingQuizIndex] = updatedQuiz;
            } else {
                state.quizzes.push(updatedQuiz);
            }
        },
        setQuizzes: (state, action) => {
            state.quizzes = action.payload;
        },
        addQuiz: (state, { payload: quiz }) => {
            const newQuiz: any = {
                _id: quiz._id,
                number: quiz.number,
                title: quiz.title,
                instruction: quiz.instruction,
                quiz_type: quiz.quiz_type,
                points: quiz.points,
                assignment_group: quiz.assignment_group,
                shuffle_answers: quiz.shuffle_answers,
                time_limit: quiz.time_limit,
                how_long: quiz.how_long,
                multiple_attempts: quiz.multiple_attempts,
                show_correct_answers: quiz.show_correct_answers,
                access_code: quiz.access_code,
                one_question_at_a_time: quiz.one_question_at_a_time,
                webcam_required: quiz.webcam_required,
                lock_questions_after_answering: quiz.lock_questions_after_answering,
                due_date: quiz.due_date,
                available_date: quiz.available_date,
                until_date: quiz.until_date,
                questions: quiz.questions,
                course: quiz.course,
            }
            state.quizzes = [...state.quizzes, newQuiz] as any;
        },

        deleteQuiz: (state, { payload: qid }) => {
            state.quizzes = state.quizzes.filter((q: any) => q._id !== qid);
        },

        editQuiz: (state, { payload: updatedQuiz }) => {
            state.quizzes = state.quizzes.map((q: any) =>
                q._id === updatedQuiz._id ? { ...updatedQuiz } : q) as any;
        },
    },
});
export const { addQuiz, deleteQuiz, editQuiz, setQuizzes } =
    quizSlice.actions;
export default quizSlice.reducer;