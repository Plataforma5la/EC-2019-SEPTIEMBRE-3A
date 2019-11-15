import React from 'react'


export default function loginButton({ registerUser }) {
    const facebookLogin = () => {
        if (!window.FB) return
        //hacer login
        window.FB.getLoginStatus(response => {
            if (response.status === "connected") {
                facebookLoginHandler(response)
            } else {
                // intentar inicicar sesion
                window.FB.login(facebookLoginHandler, { scope: 'public_profile, email' })
            }
        })
    }

    const facebookLoginHandler = (response) => {
        if (response.status === "connected") {
            window.FB.api('/me?fields=id,name,email', userData => {
                console.log(userData)
                const user = {
                    fbID: userData.id,
                    email: userData.email,
                    username: userData.name,
                    accessToken: response.authResponse.accessToken
                }
                registerUser({
                    username: user.username,
                    email: user.email,
                    password: user.accessToken
                })
            })
        }
    }

    return (
        <div className="fbLoginWrapper">
            <a onClick={facebookLogin} className="fbLoginButton">
                <span>Login with Facebook</span>
            </a>
        </div>
    )
}
