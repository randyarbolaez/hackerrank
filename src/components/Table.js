import React from "react";

const Table = props => (
  <div>
    <table className="table table-striped">
      <thead>
        <tr key="head">
          <th>Age</th>
          <th>Name</th>
          <th>Points</th>
          <th>Rank</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(user => {
          return (
            <tr key={user.rank}>
              <td>{user.age}</td>
              <td>{user.name}</td>
              <td>{user.points}</td>
              <td>{user.rank}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default Table;
