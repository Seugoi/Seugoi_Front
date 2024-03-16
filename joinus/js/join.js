const idInput = document.getElementById("input-id");
const emailInput = document.getElementById("input-email");
const pwInput = document.getElementById("input-pw");
const domainSe = document.getElementById("domain-select");
const emailSeBox = document.getElementById("emailSeBox");
const jobSe = document.getElementById("job-select");
const jobSeBox = document.getElementById("jobSeBox");
const joinBtn = document.getElementById('joinBtn');

if(joinBtn) {
    joinBtn.onclick = () => {
        let id = idInput.value;
        let pw = pwInput.value;
        let email = emailInput.value + '@';
        let job = "";
        // 이메일 값 추출
        if (domainSe.value === 'direct') {
            email += emailSeBox.value;
        } else {
            email += domainSe.value;
        }
    
        // 학생 값 추출
        if (jobSe.value === 'direct') {
            job = jobSeBox.value;
        } else {
            job = jobSe.value;
        }
    
        const userData = {
            user_id: id,
            user_pw: pw,
            user_email: email,
            user_job: job
        };
        console.log(userData);

        // 백엔드 서버로 POST 요청 보내기
        axios.post("http://localhost:3008/user/join", userData)
            .then(response => {
                console.log("회원가입 성공");
                window.location.href = "../login/index.html";
            })
            .catch(error => {
                console.error("회원가입 실패 : " + error);
            });
    };
}