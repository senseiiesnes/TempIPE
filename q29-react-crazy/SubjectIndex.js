// src/SubjectIndex.js

import React from "react";
import { Link } from "react-router-dom";

const subjects = [
  { id: "fsd2", name: "FSD2" },
  { id: "json", name: "JSON" },
  { id: "nodejs", name: "NodeJS/ExpressJS" },
  { id: "reactjs", name: "React JS" },
];

function SubjectIndex() {
  return (
    <div>
      <h1>Subject Index</h1>
      <table>
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
