import axios from 'axios';

const register = (username, email, password) => {
    const auth = { username: username, email: email, password: password }

    var config = {
        method: 'post',
        url: `${process.env.REACT_APP_URL}/auth`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: auth
    };

    axios(config)
        .then((res) => {
            return res.data
        })
        .catch((e) => {
            console.log(e)
        })
}

const login = (username, password) => {
    const auth = { username: username, password: password }

    var config = {
        method: 'post',
        url: `${process.env.REACT_APP_URL}/auth`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: auth
    };

    axios(config)
        .then((res) => {
            return res.data
        })
        .catch((e) => {
            console.log(e)
        })
}


const logout = () => {
    console.log('logout')
}

const AuthService = {
    register: register,
    login: login,
    logout: logout
}

export { AuthService };