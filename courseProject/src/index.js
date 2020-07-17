
import signUp from './signUp'
import signIn from './signIn'
//import profile from './profile'
import def from './burger'
// let email = localStorage.getItem('email')
// if(email) {
//     const getDataUser = async () => {
//         return await (await fetch ('http://localhost:3000/users')).json()
//     }
//     getDataUser().then(response => {
//         let user = response.find(item => item.email === email)
//         if(user.password === localStorage.getItem('password')) {
    

//         }
//     })
// }
//submitDataSignUp

let btnSignUp = document.querySelector('.buttonSignUp')
btnSignUp.onclick = signUp 
let btnSignIn = document.querySelector('.signIn')
btnSignIn.onclick = signIn 
// let submitDataSignUp = document.querySelector('.submitDataSignUp')
// submitDataSignUp.onclick = profile
