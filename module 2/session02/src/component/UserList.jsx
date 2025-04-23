import React from "react";

export default function UserList() {
  const User = [
    {
      id: 1,
      userName: "Nguyen Van A",
      dateOfBirth: "1990/06/12",
      gender: "Nam",
      address: "Ha Noi",
    },
    {
      id: 2,
      userName: "Nguyen Thuy Dung",
      dateOfBirth: "1996/09/12",
      gender: "Nu",
      address: "Nam Dinh",
    },
    {
      id: 3,
      userName: "Nguyen Khanh Thy",
      dateOfBirth: "2014/09/12",
      gender: "Nu",
      address: "Vinh Phuc",
    },
  ];

  return (
    <div>
      <table style={{ border: "1px solid black" }}>
        <thead>
          <th>Id</th>
          <th>Name</th>
          <th>Ngay sinh</th>
          <th>Gioi tinh</th>
          <th>Dia chi</th>
          <th>Action</th>
        </thead>
        <tbody>
          {User.map((User) => (
            <tr key={User.id} style={{ border: "1px solid black" }}>
              <td>{User.id}</td>
              <td>{User.name}</td>
              <td>{User.dateOfBirth}</td>
              <td>{User.gender}</td>
              <td>{User.address}</td>
              <td>
                <button>Sửa</button>
                <button>Xoá</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
