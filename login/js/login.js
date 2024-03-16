const idInput = document.getElementById('input-id');
const pwInput = document.getElementById('input-pw');
const loginBtn = document.getElementById('loginBtn');

if(loginBtn) {
    loginBtn.onclick = () => {
        let id = idInput.value;
        let pw = pwInput.value;

        const userData = {
            user_id: id,
            user_pw: pw
        };
        console.log(userData);

        // 백엔드 서버로 POST 요청 보내기
        axios.post("http://localhost:3008/user/login", userData)
            .then(response => {
                // const user = response.data.user;
                console.log("로그인 성공");
                window.location.href = "../main/index.html";
            })
            .catch(error => {
                console.log("로그인 실패 : " + error);
                alert("로그인 실패하였습니다.");
            })
    }
}