import React from "react";

export default function UserInfo() {
  const User = {
    Name: "Nguyen Van A",
    Gender: "Nam",
    Birthday: "06/03/2024",
    Email: "nva@gmail.com",
    Address: "Thanh Xuan, Ha Noi",
  };
  return (
    <>
      <p style={{ color: "blue" }}>Bai tap 03</p>
      <h2>Thong tin ca nhan</h2>
      <ul>
        <li>Ho va ten: {User.Name}</li>
        <li>Gioi tinh: {User.Gender}</li>
        <li>Ngay sinh: {User.Birthday}</li>
        <li>Email: {User.Email}</li>
        <li>Dia chi: {User.Address}</li>
      </ul>
    </>
  );
}
