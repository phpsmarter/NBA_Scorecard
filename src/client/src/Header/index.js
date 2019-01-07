 import React from "react";

 

const styles = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  backgroundColor: "#F7961F",
  height: "80px",
  textAlign: "center",
  color: "#fff"
};

// const getDate = () => {
//   const today = new Date();
//   let dd = today.getDate();
//   let mm = today.getMonth() + 1; //January is 0!
//   const yyyy = today.getFullYear();
//   dd = dd < 10 ? `0${dd}` : dd;
//   mm = mm < 10 ? `0${mm}` : mm;
//   return `${mm}/${dd}/${yyyy}`;
// };

const Header = (props) =>{

  //const today=moment().format("MMMM Do YYYY");

  return(
    <div style={styles}>
    <div style={{ fontFamily: "GillSans", fontSize: "20px" }}>
      {props.times}
    </div>
    <p
      style={{ fontFamily: "LucidaGrande", fontSize: "14px", marginTop: "6px" }}
    >
      Today's Game:{props.todayGameNum}
    </p>
  </div>

  )
  
};



export default Header;
