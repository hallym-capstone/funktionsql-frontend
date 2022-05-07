import axios from "axios";

function MakeDB() {
    const database_name = document.getElementById("database_name");
    const Bearer="Bearer "
    axios({
        method: "POST",
        headers:{
            Authorization: Bearer+localStorage.getItem("ac-token")
        },
        url: "http://3.39.83.176:8000/query/databases",
        data: {
            "database_name": database_name.value
        }
    }).then((res) => {
        console.log(res); 
    }).catch(error => {
        console.log(error); 
    });
  }
  export default  MakeDB;