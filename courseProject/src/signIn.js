const sha256 = require('sha256')
export default function (e) {
    e.preventDefault()
    let users
    const getData = async () => {
        return await (await fetch ('http://localhost:3000/users')).json()
    }
    getData().then(response => {
        users = response
    })
    let shadow = document.body.appendChild(document.createElement('div'))
    shadow.style = `
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        right:0;
        background: #0009;
    `


    let section = shadow.appendChild(document.createElement('section'))
    section.style = `
        width:60%;
        min-height:60%;
        background-color:#ffffff;
        position:fixed;
        top:24%;
        left:20%;
        animation-name: animated_links2;
        animation-duration: .7s;
    `
    let exitSignIn = section.appendChild(document.createElement('p'))
    exitSignIn.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        font-size: 40px;
        font-weight: bold;
        font-family: HelveticaNeue;
        color: #000000;
        letter-spacing: 1px;
        cursor:pointer;
        margin-left: 80%;
        margin-top: 30px;
    `
   exitSignIn.innerText = 'X'
   exitSignIn.onclick = function(event) {
       shadow.style.display = 'none'
   }

    let h2SignIn = section.appendChild(document.createElement('h2'))
    h2SignIn.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        font-size: 34px;
        font-family: HelveticaNeue;
        color: #000000;
        letter-spacing: 1px;
        margin-top:20px;
    `
   h2SignIn.innerText = 'Sign in Form'


    let emailSignIn = section.appendChild(document.createElement('input'))
    emailSignIn.type = 'email'
    emailSignIn.placeholder = 'Email'
    emailSignIn.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        width: 80%;
        height: 52px;
        font-size: 21px;
        text-align: center;
        margin-top: 20px;
        margin-left:8%;
        font-family:HelveticaNeue;
        color: #000000;
        cursor: pointer;
    `

    emailSignIn.onchange = function(event) {
        if(event.target.value === localStorage.getItem('email')) {
            event.target.style.border = ''
            pSignIn.style.display = 'none'
            return
        }
        else if (event.target.value !== localStorage.getItem('email') && !event.target.value.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/)) {
            event.target.style.border = `2px solid #ff0000`
            pSignIn.innerText = 'There is no such user email or incorrect email!'
        }
    }
    let passwordSignIn = section.appendChild(document.createElement('input'))
    passwordSignIn.type = 'password'
    passwordSignIn.placeholder = 'Password'
    passwordSignIn.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        width: 80%;
        height: 52px;
        font-size: 21px;
        text-align: center;
        margin-top: 20px;
        margin-left:8%;
        font-family:HelveticaNeue;
        color: #000000;
        cursor: pointer;
    `
    passwordSignIn.onchange = function(event) {
        if(sha256(event.target.value) === localStorage.getItem('password')) {
            event.target.style.border = '2px solid green'
            pSignIn.innerText = ''
        } else {
            pSignIn.innerText = 'Incorrect password'
            event.target.style.border = `2px solid #ff0000`
        }
    }
    let pSignIn = section.appendChild(document.createElement('h2'))
   pSignIn.style = `
        display:flex;
        flex-direction:column;
        align-items:left;
        font-size: 17px;
        font-family: Montserrat;
        letter-spacing: 1px;
        color: rgb(255, 0, 0);
        margin-top:10px;
        margin-left:8%;
   `

    let submitSignIn = section.appendChild(document.createElement('input'))
    submitSignIn.type = 'submit'
    submitSignIn.value = 'Submit'
    submitSignIn.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        width: 81%;
        height: 52px;
        font-size: 21px;
        letter-spacing: 1px;
        text-align: center;
        margin-left:8%;
        justify-content: center;
        font-family:HelveticaNeue;
        color: #ffffff;
        background-color: #000000;
        cursor: pointer;
    `
    
        submitSignIn.onclick = function(event) {
            if(passwordSignIn && emailSignIn)  {
                let elem = document.body.appendChild(document.createElement('div'))
                elem.style = `
                  padding : 20px;
                  border : 1px solid black;
                  width:100%;
                  height:100%;
                  position:fixed;
                  top:0;
                  left:0;
                  bottom:0;
                  right:0;
                  background-color:#000000;
                  z-index:10;
                `
                const avatar = elem.appendChild(document.createElement('img'))
                avatar.src = user.image
                const loginField = elem.appendChild(document.createElement('p'))
                loginField.innerText = user.email 
            }
        }

    } 
