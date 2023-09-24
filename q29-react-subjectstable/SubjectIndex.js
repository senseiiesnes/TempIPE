// src/SubjectIndex.js

import React from "react";
import { Link } from "react-router-dom";

const subjects = [
  { id: "1", name: "FSD" },
  { id: "2", name: "Python" },
];

function SubjectIndex() {
  return (
    <div>
      <h1>Subjects</h1>
      <table border="1">
        <thead>
          <tr>
            <th>Subject</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((subject) => (
            <tr key={subject.id}>
              <td>
                <Link to={`/subjects/${subject.id}`}>{subject.name}</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SubjectIndex;
