import { createSlice } from "@reduxjs/toolkit";
import { assignments } from "../../Database";

const initialState = {
    assignments: assignments,
}
const assignmentSlice = createSlice({
    name: "assignments",
    initialState,
    reducers: {
        addAssignment: (state, { payload: assignment }) => {
            const newAssignment: any = {
                _id: assignment._id,
                title: assignment.title,
                course: assignment.course,
                points: assignment.points,
                assignmentGroup: assignment.assignmentGroup,
                displayGradeAs: assignment.displayGradeAs,
                submissionType: assignment.submissionType,
                due: assignment.due,
                from: assignment.from,
                until: assignment.until,
                description: assignment.description,
            }
            state.assignments = [...state.assignments, newAssignment];
        },

        deleteAssignment: (state, { payload: assignmentId }) => {
            state.assignments = state.assignments.filter((a) => a._id !== assignmentId);
        },
        
        editAssignment: (state, { payload: updatedAssignment }) => {
            state.assignments = state.assignments.map((a) =>
                a._id === updatedAssignment._id ? { ...updatedAssignment } : a);
        },
    },
});
export const { addAssignment, deleteAssignment, editAssignment } =
    assignmentSlice.actions;
export default assignmentSlice.reducer;