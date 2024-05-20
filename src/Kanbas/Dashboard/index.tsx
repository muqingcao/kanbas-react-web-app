export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses" className="row">
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    
                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card">
                            <img src="/images/reactjs.jpg" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS1234 React JS
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> 
                                    Go 
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card">
                            <img src="/images/5001_copy.png" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5001 Intensive Foundations of Computer Science
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> 
                                    Go 
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card">
                            <img src="/images/5002_copy.png" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5002 Discrete Structures
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> 
                                    Go 
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card">
                            <img src="/images/5004_copy.png" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5004 Object Oriented Design
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> 
                                    Go 
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card">
                            <img src="/images/5008_copy.png" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5008 Data Structures, Algorithms, and Their Applications Within Computer Systems
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> 
                                    Go 
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card">
                            <img src="/images/5610_copy.png" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5610 Web Development
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> 
                                    Go 
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card">
                            <img src="/images/5800_copy.png" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5800 Algorithms
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> 
                                    Go 
                                </a>
                            </div>
                        </div>
                    </div>


                    <div className="wd-dashboard-course col" style={{ width: "250px" }}>
                        <div className="card">
                            <img src="/images/5520_copy.png" />
                            <div className="card-body">
                                <a className="wd-dashboard-course-link"
                                    href="#/Kanbas/Courses/1234/Home"
                                    style={{ textDecoration: "none", color: "navy", fontWeight: "bold" }}>
                                    CS5520 Mobile Application Development
                                </a>
                                <p className="wd-dashboard-course-title card-text">
                                    Full Stack software developer
                                </p>
                                <a href="#/Kanbas/Courses/1234/Home" className="btn btn-primary"> 
                                    Go 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}