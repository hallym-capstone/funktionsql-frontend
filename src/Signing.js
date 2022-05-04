import axios from "axios";

function Signing(){
    const username = document.getElementById("username");
    const password = document.getElementById('password')
    const confirm_password =document.getElementById('confirm_password')
    axios({
        method:"POST",
        url: process.env.REACT_APP_AUTH_SIGNUP_BASIC,
        //REACT_APP_AUTH_SIGNUP_BASIC='http://15.164.99.115/auth/signup/basic';
        data:{
            "username": username?.value,
            "password": password?.value,
            "confirm_password":confirm_password?.value
        }
    }).then((res)=>{
        console.log(res);
        window.alert(JSON.stringify(res.data.username).replace(/\"/gi, "")+"계정 만들기 성공");
        document.location.href = '/Login';
    }).catch(error=>{
        console.log(error);
        window.alert("계정만들기 실패.");
    });
}

export default Signing;