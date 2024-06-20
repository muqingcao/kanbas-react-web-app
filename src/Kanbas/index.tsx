import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router";
import Courses from "./Courses";
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";
import * as client from "./Courses/client";
import * as enrollmentClient from "./Courses/Enrollments/client";
import Account from "./Account";
import Session from "./Account/Session";
import ProtectedRoute from "./ProtectedRoute";
import AllCourses from "./Dashboard/AllCourses";

export default function Kanbas() {
    const [courses, setCourses] = useState<any[]>([]);
    const [enrolledCourses, setEnrolledCourses] = useState<any[]>([]);

    // Retrieving Courses
    const fetchCourses = async () => {
        const courses = await client.fetchAllCourses();
        setCourses(courses);
    };

    // Retrieving enrolled Courses
    const fetchEnrolledCourses = async () => {
        const courses = await enrollmentClient.findMyEnrollments();
        setEnrolledCourses(courses);
    };

    useEffect(() => {
        fetchCourses();
        fetchEnrolledCourses();
    }, []);

    const [course, setCourse] = useState<any>({
        _id: "0",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description",
    });

    // Creating New Courses
    const addNewCourse = async () => {
        const newCourse = await client.createCourse(course);
        setCourses([...courses, newCourse]);
    };

    // Deleting a Course
    const deleteCourse = async (courseId: string) => {
        await client.deleteCourse(courseId);
        setCourses(
            courses.filter((course) => course._id !== courseId)
        );
    };

    // Updating a Course
    const updateCourse = async () => {
        await client.updateCourse(course);
        setCourses(
            courses.map((c) => {
                if (c._id === course._id) {
                    return course;
                } else {
                    return c;
                }
            })
        );
    };

    // Enrolling in a Course
    const enrollInCourse = async (courseId: string) => {
        await enrollmentClient.createEnrollment(courseId);
        fetchEnrolledCourses();
    };

    // Unenrolling from a Course
    const unenrollFromCourse = async (courseId: string) => {
        await enrollmentClient.deleteEnrollment(courseId);
        fetchEnrolledCourses();
    };


    return (
        <Provider store={store}>
            <Session>
                <div id="wd-kanbas" className="h-200">
                    <div className="d-flex h-200">
                        <div className="d-none d-md-block bg-black">
                            <KanbasNavigation />
                        </div>
                        <div className="flex-fill p-4">
                            <Routes>
                                <Route path="/" element={<Navigate to="Dashboard" />} />
                                <Route path="/Account/*" element={<Account />} />
                                <Route path="Dashboard" element={
                                    <ProtectedRoute>
                                        <Dashboard
                                            courses={courses}
                                            course={course}
                                            setCourse={setCourse}
                                            addNewCourse={addNewCourse}
                                            deleteCourse={deleteCourse}
                                            updateCourse={updateCourse}
                                            enrollInCourse={enrollInCourse}
                                            unenrollFromCourse={unenrollFromCourse}
                                            enrolledCourses={enrolledCourses}
                                        />
                                    </ProtectedRoute>
                                } />
                                <Route path="/AllCourses" element={
                                    <AllCourses
                                        courses={courses}
                                        enrollInCourse={enrollInCourse}
                                    />
                                } />
                                <Route path="Courses/:cid/*" element={
                                    <ProtectedRoute>
                                        <Courses courses={courses} />
                                    </ProtectedRoute>} />

                                <Route path="Calendar" element={<h1>Calendar</h1>} />
                                <Route path="Inbox" element={<h1>Inbox</h1>} />
                            </Routes>
                        </div>
                    </div>
                </div>
            </Session>
        </Provider>
    )
};