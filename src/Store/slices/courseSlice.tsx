import { createSlice } from '@reduxjs/toolkit';

interface CourseState {
    courses: any[];
    selectedCourse: any | null;
}

const initialState: CourseState = {
    courses: [
        { id: 1, name: 'Course 1', description: 'Description 1' },
        { id: 2, name: 'Course 2', description: 'Description 2' },
    ],
    selectedCourse: null,
};

const courseSlice = createSlice({
    name: 'courses',
    initialState,
    reducers: {
        setCourses: (state, action) => {
            state.courses = action.payload;
        },
        selectCourse: (state, action) => {
            state.selectedCourse = action.payload;
        },
    },
});

export const { setCourses, selectCourse } = courseSlice.actions;
export default courseSlice.reducer;
