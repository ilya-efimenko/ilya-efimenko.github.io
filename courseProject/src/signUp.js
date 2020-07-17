
const sha256 = require('sha256')
export default function() {
    let userData = {
        name: '',
        email: '',
        password: '',
        image: ''
    }
    
    
   
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
        width:70%;
        min-height:80%;
        background-color:#ffffff;
        position:fixed;
        top:15%;
        left:15%;
        animation-name: animated_links2;
        animation-duration: .7s;
    `
   
    let exitSignUp = section.appendChild(document.createElement('p'))
    exitSignUp.style = `
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
   exitSignUp.innerText = 'X'
   exitSignUp.onclick = function(event) {
       shadow.style.display = 'none'
       pSignIn.innerText = ''
   }

    let h2SignUp = section.appendChild(document.createElement('h2'))
    h2SignUp.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        font-size: 34px;
        font-family: HelveticaNeue;
        color: #000000;
        letter-spacing: 1px;
        margin-top:20px;
    `
   h2SignUp.innerText = 'Sign Up Form'
   
   let pChooseImg = section.appendChild(document.createElement('span'))
   pChooseImg.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        font-size: 19px;
        text-align: center;
        margin-top: 20px;
        font-family:HelveticaNeue;
        color: #000000;
   `
   pChooseImg.innerText = 'Choose your avatar image...'
   
   let avatar = section.appendChild(document.createElement('input')) 
    avatar.type = 'file'
    avatar.style = `
        display:flex;
        flex-direction:column;
        align-items:center;
        margin-top:20px;
        margin-left:8%;
        text-align:center;
    `
    let nameInput = section.appendChild(document.createElement('input'))
    nameInput.type = 'text'
    nameInput.placeholder = 'Full name'
    nameInput.style = `
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
    let emailInput = section.appendChild(document.createElement('input'))
    emailInput.type = 'email'
    emailInput.placeholder = 'Email'
    emailInput.style = `
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
    let passwordInput = section.appendChild(document.createElement('input'))
    passwordInput.type = 'password'
    passwordInput.placeholder = 'Password'
    passwordInput.style = `
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
    let submitInput = section.appendChild(document.createElement('input'))
    submitInput.type = 'submit'
    submitInput.value = 'Submit'
    submitInput.style = `
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
    submitInput.className = 'submitDataSignUp'
    let users
    const getData = async () => {
        return await (await fetch ('http://localhost:3000/users')).json()
    }
    getData().then(response => {
        users = response
    })
    nameInput.onchange = function(event) {
        if(users.filter(user => user.name === event.target.value).length !== 0) {
            event.target.style.border = `2px solid #ff0000`
            pSignIn.innerText = 'This user already exsists'
            return
        } else {
            pSignIn.innerText = ''
            event.target.style.border = ''
        }
        userData.name = event.target.value
        localStorage.setItem('name', userData.name)   
    }

    emailInput.onchange = function(event) {
        if(users.filter(user => user.email === event.target.value).length !== 0) {
            event.target.style.border = `2px solid #ff0000`
            pSignIn.innerText = 'User with this email already exists!'
            return
        } else if (!event.target.value.match(/[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+/)) {
            event.target.style.border = `2px solid #ff0000`
            pSignIn.innerText = 'Email should contain @ symbol,letters and numbers!'
        } else {
            pSignIn.innerText = ''
            event.target.style.border = ''
        }
        userData.email = event.target.value
        localStorage.setItem('email', userData.email) 
    }

    passwordInput.onchange = function(event) {
        if(!event.target.value.match(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/)) {
            pSignIn.innerText = 'Password should contain at least 8 symbols,2 big letters and numbers!'
            return
        } 
        userData.password = sha256(event.target.value) 
        localStorage.setItem('password', userData.password)   
    }

    avatar.onchange = function(event) {
        const file = event.target.files[0]  
        if(!file.type.match(/image/)) {
            pSignIn.innerText = 'Choose .jpg .png or .gif file'
            return
        } else {
            pSignIn.innerText = ''
        }
        if(file.size > 100000) {
            pSignIn.innerText = 'File is too much!'
            return
        } 
        const reader = new FileReader()
        reader.onload = function(ev) {  
            const p = pChooseImg.appendChild(document.createElement('p'))
            p.style =  `
                display:flex;
                flex-direction:column;
            `
            const img = p.appendChild(document.createElement('img'))
            img.src = ev.target.result
            img.style = `
                display:none;
            `
            userData.image = ev.target.result
        }
        reader.readAsDataURL(file)  
    } 
    submitInput.addEventListener('click', function sub (event) {
        
        if(userData.name && userData.image && userData.password && userData.email) {
            fetch('http://localhost:3000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            }) 
            pSignIn.innerText = 'Everything is correct!'
            pSignIn.style.color = '#07d307'
        } 
        else if(!userData.name && !userData.image && !userData.password  && !userData.email) {
            pSignIn.innerText = 'Enter your data!'
        }
        else if(!userData.name && !userData.image  && !userData.password  && userData.email) {
            pSignIn.innerText = 'Enter your image, name and password!'
        }
        else if(!userData.name && !userData.image  && userData.password  && !userData.email) {
            pSignIn.innerText = 'Enter your image, name and email!'
        }
        else if(userData.name && !userData.image  && !userData.password  && !userData.email) {
            pSignIn.innerText = 'Enter your image, password and email!'
        }
        else if(!userData.name && userData.image  && !userData.password  && !userData.email) {
            pSignIn.innerText = 'Enter your email, password and name!'
        }
        else if(userData.name && !userData.image && !userData.password && userData.email) {
            pSignIn.innerText = 'Enter your image and password!'
        }
        else if(!userData.name && !userData.image && userData.password && userData.email) {
            pSignIn.innerText = 'Enter your image and name!'
        }
        else if(userData.name && !userData.image && userData.password && !userData.email) {
            pSignIn.innerText = 'Enter your image and email!'
        }
        else if(userData.name && userData.image && !userData.password && !userData.email) {
            pSignIn.innerText = 'Enter your password and email!'
        }
        else if(!userData.name && userData.image && !userData.password && userData.email) {
            pSignIn.innerText = 'Enter your password and name!'
        }
        else if(!userData.name && userData.image && userData.password && !userData.email) {
            pSignIn.innerText = 'Enter your email and name!'
        }
        else if(!userData.name && userData.image && userData.password && userData.email) {
            pSignIn.innerText = 'Enter your name!'
        }
        else if(userData.name && !userData.image && userData.password && userData.email) {
            pSignIn.innerText = 'Enter your image!'
        }
        else if(userData.name && userData.image && !userData.password && userData.email) {
            pSignIn.innerText = 'Enter your password!'
        }
        else if(userData.name && userData.image && userData.password && !userData.email) {
            pSignIn.innerText = 'Enter your email!'
        }

    })
}