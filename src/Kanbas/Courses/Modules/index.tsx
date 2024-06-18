import React, { useState, useEffect } from "react";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as client from "./client";

export default function Modules() {
    const { cid } = useParams();
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector((state: any) => state.modulesReducer);
    const dispatch = useDispatch();
    const [refreshModules, setRefreshModules] = useState(false);

    // Update a Module
    const saveModule = async (module: any) => {
        const status = await client.updateModule(module);
        dispatch(updateModule(module));
    };

    // Deleting a Module
    const removeModule = async (moduleId: string) => {
        await client.deleteModule(moduleId);
        dispatch(deleteModule(moduleId));
    };

    // Retrieving Modules for Course
    const fetchModules = async () => {
        const modules = await client.findModulesForCourse(cid as string);
        dispatch(setModules(modules));
    };
    useEffect(() => {
        fetchModules();
        if (refreshModules) {
            fetchModules();
            setRefreshModules(false); 
        }
    }, [refreshModules, dispatch]);

    // Creating Modules for a Course
    const createModule = async (module: any) => {
        const newModule = await client.createModule(cid as string, module);
        dispatch(addModule(newModule));
        setRefreshModules(true);
    };

    return (
        <div id="wd-modules">
            <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
                addModule={() => {
                    createModule({ name: moduleName, course: cid });
                    setModuleName("");
                }} />

            <br /><br /><br /><br />
            <ul id="wd-modules" className="list-group rounded-0">

                {modules
                    .filter((module: any) => module.course === cid)
                    .map((module: any) => (
                        <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                            <div className="wd-title p-3 ps-2 bg-secondary">
                                <BsGripVertical className="me-2 fs-3" />

                                {!module.editing && module.name}
                                {module.editing && (
                                    <input className="form-control w-50 d-inline-block"
                                        onChange={(e) =>
                                            saveModule({ ...module, name: e.target.value })}

                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                dispatch(updateModule({ ...module, editing: false }));
                                            }
                                        }}
                                        value={module.name} />
                                )}

                                <ModuleControlButtons moduleId={module._id}
                                    deleteModule={(moduleId) => {
                                        removeModule(moduleId);
                                    }}
                                    editModule={(moduleId) => dispatch(editModule(moduleId))}
                                />

                            </div>
                            {module.lessons && (
                                <ul className="wd-lessons list-group rounded-0">
                                    {module.lessons.map((lesson: any) => (
                                        <li className="wd-lesson list-group-item p-3 ps-1" style={{ borderLeft: '5px solid green' }}>
                                            <BsGripVertical className="me-2 fs-3" />
                                            {lesson.name}
                                            <LessonControlButtons />
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
            </ul>
        </div>
    )
}