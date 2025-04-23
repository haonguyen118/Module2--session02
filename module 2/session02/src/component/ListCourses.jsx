import React from "react";

export default function ListCourses() {
  const ListCourses = ["HTML", "CSS", "JavaScript", "ReactIS"];
  return (
    <>
      <p style={{ color: "blue" }}>Bai tap 01</p>
      <h2>Danh sach khoa hoc</h2>
      <ol>
        {ListCourses.map((course, index) => {
          return <li key={index}>{course}</li>;
        })}
      </ol>
    </>
  );
}
