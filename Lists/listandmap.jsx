import React from "react";
import styles from '../Lists/listandmap.module.css'
function ListAndMap() {
    const studentDetails = [
        {
            name: "Keerthi",
            roll: 123,
            college: "ACET",
            branch: "AIML"
        },
        {
            name: "Keerthi",
            roll: 13,
            college: "ACE",
            branch: "AIML"
        },
        {
            name: "Keerthi",
            roll: 12,
            college: "ACT",
            branch: "AIML"
        },
        {
            name: "Keer",
            roll: 23,
            college: "ACOE",
            branch: "CSE"
        },
        {
            name: "Keer",
            roll: 23,
            college: "ACOE",
            branch: "CSE"
        }
    ];

    return (
        <>
            <h1>Map Data</h1>
            {
                studentDetails.map((student, ind) => {
                    return (
                        <div className={styles.container}>
                            <p>Name: {student.name}</p>
                            <p>Roll Number: {student.roll}</p>
                            <p>College:{student.college}</p>
                            <p>Branch:{student.branch}</p>
                        </div>
                    );
                })
            }
        </>
    );
}
export default ListAndMap;
