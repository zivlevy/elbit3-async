let btn = document.getElementById('myButton');
let output = document.querySelector('#myOutput');

const checkAuth = () => {
    return new Promise((resolve,reject) => {
        // In reality, you of course don't have a timer but will probably reach out to a server
        output.innerText = 'Authenticating ....'
        setTimeout(() => {
            if (Math.random() > 0.5) resolve(true)
            else reject ('could not authenticate')
        }, 2000);
    })
}

const getUser = () => {
    return new Promise((resolve,reject) => {
        output.innerText = 'Getting User ....'
        setTimeout(() => {
            resolve('Ziv');
        }, 2000);
    })
}


const getUserInfo = (user) => {
        return new Promise((resolve, reject) => {
            output.innerText = 'Getting User Info....'
            setTimeout(() => {
                if (user === "Ziv") resolve('User name: Ziv\nFamily name: Levy');
                else reject('User has no info')
            }, 2000);
        })
    }
;

btn.addEventListener('click', () => {
    checkAuth()
        .then((isAuth) => {if (isAuth) return getUser()})
        .then(user => getUserInfo(user))
        .then(userInfo => {output.innerText = userInfo})
        .catch(err => {output.innerText = 'We have an error: ' + err;})
})