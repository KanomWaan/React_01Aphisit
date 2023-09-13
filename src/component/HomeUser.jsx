import React, { useEffect, useState } from "react";
import axios from "axios";
import '../App.css';
import Home from './Home';

const HomeUser = () => {
  const [members, setMembers] = useState([]);

//  แสดงผลด้วย useEffect ซึ่งรับค่ามาจาก API 
  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(
        "https://jsd5-mock-backend.onrender.com/members"
      );
      setMembers(response.data);
    };

    getData();
  }, []);

  
  return (
    <>
      <Home />
      <div className="home-user">
        <h1>Members Data</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Last Name</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.lastname}</td>
                <td>{member.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default HomeUser;
