// import React from "react";
// import "../../styles/Navbar.css";

// function Navbar() {
//   return (
//     <div className="navbar">
//       <div className="admin-info">
//         <span className="admin-icon">👤</span>
//         <div>
//           <h4>Ram Sharma</h4>
//           <p>Ram@gmail.com</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Navbar;

import React, { useEffect, useState } from "react";
import "../../styles/Navbar.css";

function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    if (loggedInUser) {
      setUser(loggedInUser);
    }
  }, []);

  return (
    <div className="navbar">
      {user ? (
        <div className="admin-info">
          <span className="admin-icon">👤</span>
          <div>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
          </div>
        </div>
      ) : (
        <p>Please log in to see the user details.</p>
      )}
    </div>
  );
}

export default Navbar;


