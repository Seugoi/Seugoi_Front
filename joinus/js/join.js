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

        // axios.post("http://localhost:3008/join", userData)
        // .then(response => {
        //     console.log('Registration successful:', response.data);
        //     window.open('/login/', '_top');
        // })
        // .catch(error => {
        //     console.error('Registration failed:', error);
        // });
    };
}