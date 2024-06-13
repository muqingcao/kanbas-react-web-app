import React, { useState, useEffect } from "react";
import * as client from "./client";
export default function PeopleTable() {
    const [users, setUsers] = useState<any[]>([]);
    const [role, setRole] = useState("");

    // fetch all the people in the course
    const fetchUsers = async () => {
        const users = await client.findAllUsers();
        setUsers(users);
    };

    // fetch users by role type
    const filterUsersByRole = async (role: string) => {
        setRole(role);
        if (role) {
            const users = await client.findUsersByRole(role);
            setUsers(users);
        } else {
            fetchUsers();
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);
    return (
        <div id="wd-people-table">

            <select 
            value={role} 
            onChange={(e) => filterUsersByRole(e.target.value)} 
            className="form-select float-start w-25" >
                <option value="">All Roles</option> 
                <option value="STUDENT">Students</option>
                <option value="TA">Assistants</option> 
                <option value="FACULTY">Faculty</option>
                <option value="USER">Users</option>
            </select>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user: any) => (
                        <tr key={user._id}>
                            <td className="text-nowrap"> {user.firstName} {user.lastName} </td>
                            <td>{user.loginId}</td><td>{user.section}</td><td>{user.role}</td><td>{user.lastActivity}</td>
                            <td>{user.totalActivity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

