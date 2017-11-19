let btn = document.getElementById('myButton');
let output = document.querySelector('#myOutput');

const checkAuth = (cb, err) => {
    // In reality, you of course don't have a timer but will probably reach out to a server
    output.innerText = 'Authenticating ....'
    setTimeout(() => {
        if (Math.random() > 0.5) cb(true)
        else err('could not authenticate')
    }, 2000);
};

const getUser = (cb) => {
    output.innerText = 'Getting User ....'
    setTimeout(() => {
        cb('Ziv');
    }, 2000);
};

const getUserInfo = (user, cb, err) => {
    output.innerText = 'Getting User Info....'
    setTimeout(() => {
        if (user === "Ziv") cb('User name: Ziv\nFamily name: Levy');
        else err('User has no info')
    }, 2000);
};

btn.addEventListener('click', () => {
    checkAuth(
        (authInfo) => {
            if (authInfo) {
                getUser((user) => {
                    getUserInfo(user, (userInfo) => {
                        output.innerText = userInfo;
                    }, (err) => {
                        output.innerText = err
                    })
                });
            }
        }, (err) => {
            output.innerText = err
        }
    );
})