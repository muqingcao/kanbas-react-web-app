import './styles.css';
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "../Courses/client";
import * as acountClient from "../Account/client";

export default function Dashboard({
    courses,
    course,
    setCourse,
    addNewCourse,
    deleteCourse,
    updateCourse,
    enrollInCourse,
    unenrollFromCourse,
    enrolledCourses
}: {
    courses: any[];
    course: any;
    setCourse: (course: any) => void;
    addNewCourse: () => void;
    deleteCourse: (course: any) => void;
    updateCourse: () => void;
    enrollInCourse: (courseId: string) => void;
    unenrollFromCourse: (courseId: string) => void;
    enrolledCourses: any[];
}) {
    // fetch all the published courses
    const [publishedCourses, setPublishedCourses] = useState<any[]>([]);
    const fetchPublishedCourses = async () => {
        const courses = await client.fetchPublishedCourses();
        setPublishedCourses(courses);
    };

    useEffect(() => {
        fetchPublishedCourses();
        fetchUserRole();
    }, []);

    // view all courses button
    const navigate = useNavigate();
    const handleViewAllCourses = () => {
        navigate('../AllCourses', { state: { courses } });
    };

    // Fetch user role
    const [userRole, setUserRole] = useState<string>("");
    const fetchUserRole = async () => {
        try {
            const currentUser = await acountClient.profile();
            setUserRole(currentUser.role);
        } catch (error) {
            console.error("Error fetching user role:", error);
        }
    };


    return (
        <div className="p-4" id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1><hr />
            {(userRole === "USER" || userRole === "FACULTY") && (
                <div>
                    <h5>New Course
                        <button className="btn btn-primary float-end"
                            id="wd-add-new-course-click"
                            onClick={async () => {
                                await addNewCourse();
                                await fetchPublishedCourses();
                            }}>
                            Add
                        </button>

                        <button className="btn btn-warning float-end me-2"
                            id="wd-update-course-click"
                            onClick={async () => {
                                await updateCourse();
                                await fetchPublishedCourses();
                            }}>
                            Update
                        </button>

                    </h5><br />
                    <input value={course.name} className="form-control mb-2"
                        onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                    <textarea value={course.description} className="form-control"
                        onChange={(e) => setCourse({ ...course, description: e.target.value })} />
                    <hr />
                    <br />
                </div>
            )}



            {(userRole === "USER" || userRole === "FACULTY") && (
                <div>
                    <h2 id="wd-dashboard-published">My Courses ({publishedCourses.length})</h2> <hr />
                    <div id="wd-dashboard-courses" className="row">
                        <div className="row row-cols-1 row-cols-md-5 g-4">
                            {publishedCourses.map((course) => {
                                return (
                                    <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                                        <Link to={`/Kanbas/Courses/${course.number}/Home`} className="text-decoration-none" >
                                            <div className="card rounded-3 overflow-hidden">
                                                <img src={course.image} height={160} alt={`${course.name} course`} />
                                                <div className="card-body">
                                                    <span className="wd-dashboard-course-link"
                                                        style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                                                        {course.name}
                                                    </span>
                                                    <p className="card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                                                        {course.description}
                                                    </p>

                                                    <Link
                                                        to={`/Kanbas/Courses/${course.number}/Home`}
                                                        className="btn btn-primary">
                                                        Go
                                                    </Link>

                                                    <button onClick={async (event) => {
                                                        event.preventDefault();
                                                        await deleteCourse(course._id);
                                                        await fetchPublishedCourses();
                                                    }} className="btn btn-danger float-end"
                                                        id="wd-delete-course-click">
                                                        Delete
                                                    </button>

                                                    <button onClick={(event) => {
                                                        event.preventDefault();
                                                        setCourse(course);
                                                    }}
                                                        className="btn btn-warning me-2 float-end"
                                                        id="wd-edit-course-click" >
                                                        Edit
                                                    </button>

                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            )}

            <button onClick={handleViewAllCourses} className="btn btn-warning btn-warning float-end">
                View All Courses
            </button>

            <h2 id="wd-dashboard-published">
                Enrolled Courses ({enrolledCourses.length})
            </h2>
            <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {enrolledCourses.map((course) => (
                        <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                            <Link
                                to={`/Kanbas/Courses/${course.number}/Home`}
                                className="text-decoration-none"
                            >
                                <div className="card rounded-3 overflow-hidden">
                                    <img src={course.image} height={160} alt={`${course.name} course`} />
                                    <div className="card-body">
                                        <span
                                            className="wd-dashboard-course-link"
                                            style={{
                                                textDecoration: "none",
                                                color: "navy",
                                                fontWeight: "bold",
                                            }}
                                        >

                                            {course.name}
                                        </span>

                                        <p
                                            className="wd-dashboard-course-title card-text"
                                            style={{ maxHeight: 53, overflow: "hidden" }}
                                        >
                                            {course.description}
                                        </p>
                                        <a
                                            href="#/Kanbas/Courses/1234/Home"
                                            className="btn btn-primary"
                                        >
                                            Go
                                        </a>
                                        <button
                                            onClick={(e) => {
                                                e.preventDefault();
                                                unenrollFromCourse(course._id);
                                            }}
                                            className="btn btn-danger float-end"
                                        >
                                            Unenroll
                                        </button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <hr />


            {/* <h2 id="wd-dashboard-all-courses">All Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-5 g-4">
                    {courses.map((course) => {
                        return (
                            <div className="wd-dashboard-course col" style={{ width: "300px" }}>
                                <div className="card rounded-3 overflow-hidden">
                                    <img src={course.image} height={160} alt={`${course.name} course`} />
                                    <div className="card-body">
                                        <span className="wd-dashboard-course-link"
                                            style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }} >
                                            {course.name}
                                        </span>
                                        <p className="card-text" style={{ maxHeight: 53, overflow: "hidden" }}>
                                            {course.description}
                                        </p>
                                        <button
                                            onClick={() => enrollInCourse(course._id)}
                                            className="btn btn-success float-end"
                                        >
                                            Enroll
                                        </button>

                                        <Link to={`/Kanbas/Courses/${course.number}/Home`} className="btn btn-primary">
                                                Go
                                            </Link>

                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                deleteCourse(course._id);
                                            }} className="btn btn-danger float-end"
                                                id="wd-delete-course-click">
                                                Delete
                                            </button>

                                            <button onClick={(event) => {
                                                event.preventDefault();
                                                setCourse(course);
                                            }}
                                                className="btn btn-warning me-2 float-end"
                                                id="wd-edit-course-click" >
                                                Edit
                                            </button> 


                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div> */}
        </div>
    );
}