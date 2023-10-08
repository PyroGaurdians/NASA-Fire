import { useState } from "react";
import "./login.css"
import ourAxios from "../../api/ourAxios"

const Login = () => {
	const [username, setUserName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const handleLogin = (e) => {
		e.preventDefault()

		const sendobject =  {
			username,
			password,
			
		}

		ourAxios.post("/api/auth/token/", sendobject)
		.then(response =>{
			localStorage.setItem("accessToken",response.data.access)
			localStorage.setItem("isLogged", true)
			console.log(localStorage.getItem("isLogged"));

		})
		.catch(error => console.log(error))

	}
	const handleRegister = (e) => {
		e.preventDefault()
		const sendedObject = {
			username,
			password,
			email,
			repassword: password,
		}
		ourAxios.post("/api/auth/token/", sendedObject).
		then(res => {
			console.log(res)
			localStorage.setItem("accessToken", res.data.access )
		})
		.catch(error => console.log(error))
	}

	// is typed
	const handleUsernameChange = (event) => {
		setUserName(event.target.value);
	};
	
	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};
	
	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

  return (
	<div className="container">
		<div className="mains">  	 
			<input type="checkbox" id="chk" aria-hidden="true"/>

				<div className="login">
					<form className="formsd" onSubmit={handleLogin}>
						<label htmlFor="chk" aria-hidden="true">Log in</label>
						<input className="input" type="text" value={username} name="username" placeholder="username" required="" onChange={handleUsernameChange}/>
						<input className="input" type="password" value = {password} name="pswd" placeholder="Password" required="" onChange={handlePasswordChange}/>
						<button>Log in</button>
					</form>
				</div>

		<div className="register">
					<form className="formsd" onSubmit={handleRegister}>
						<label htmlFor="chk" aria-hidden="true">Register</label>
						<input className="input" value={username} type="text" name="txt" placeholder="Username" required="" onChange={handleUsernameChange}/>
						<input className="input" value={email} type="email" name="email" placeholder="Email" required="" onChange={handleEmailChange}/>
						<input className="input" value={password} type="password" name="pswd" placeholder="Password" required=""  onChange={handlePasswordChange}/>
						<button>Register</button>
					</form>
				</div>
		</div>
	</div>
)
}

export default Login