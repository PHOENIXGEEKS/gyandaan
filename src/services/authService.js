import axios from 'axios';

const authService = ({ username, password }) => {
    const auth = { username: username, password: password }
    const url = 'https://61d31f73b4c10c001712b7d8.mockapi.io/auth/'
    axios
        .post(url, auth)
        .then((res) => {
            if (res)
                alert("Login Succes");
        })
        .catch((err) => alert("Login Failed", err));
}

export default authService;