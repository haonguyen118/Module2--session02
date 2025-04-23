import React from "react";
import "../App.css";
export default function ColorBox() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "spaceBetween",
        border: "1px solid black",
        padding: 30,
        gap: 30,
      }}
    >
      <div
        style={{
          border: "1px solid black",
          width: 200,
          height: 200,
          backgroundColor: "red",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Box 1
      </div>
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: "blue",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid black",
        }}
      >
        Box 2
      </div>
      <div
        style={{
          width: 200,
          height: 200,
          backgroundColor: "green",

          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid black",
        }}
      >
        Box 3
      </div>
    </div>
  );
}
