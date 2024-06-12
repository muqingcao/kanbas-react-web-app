import { createSlice } from "@reduxjs/toolkit";
import { quizzes } from "../../Database";

const initialState = {
    quizzes: quizzes,
}
const quizSlice = createSlice({
    name: "quizzes",
    initialState,
    reducers: {
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
            state.quizzes = state.quizzes.filter((a: any) => a._id !== qid);
        },

        editQuiz: (state, { payload: updatedQuiz }) => {
            state.quizzes = state.quizzes.map((a: any) =>
                a._id === updatedQuiz._id ? { ...updatedQuiz } : a) as any;
        },
    },
});
export const { addQuiz, deleteQuiz, editQuiz } =
    quizSlice.actions;
export default quizSlice.reducer;