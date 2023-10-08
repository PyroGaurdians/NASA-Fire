import { useRef, useState } from "react";
import "./login.css"
import unprotectedAxios from "../../api/unprotectedAxios"
import ourAxios from "../../api/ourAxios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
	const [username, setUserName] = useState("")
	const loginNotify = () => toast.success("You are login successfully");
	const RegisterNotify = () => toast.success("You are register successfully");
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const loginRef = useRef(null);
	const handleLogin = (e) => {
		e.preventDefault()

		const sendobject =  {
			username,
			password,
			
		}

		unprotectedAxios.post("/api/auth/token/", sendobject)
		.then(response =>{
			localStorage.setItem("accessToken",response.data.access)
			localStorage.setItem("refreshToken",response.data.refresh)
			return ourAxios.get(`/api/auth/users/me/`)
		}).then(meResponse=> {
			localStorage.setItem("user", JSON.stringify(meResponse.data))
			location.href = "/"
		})
		.catch(error => console.log(error))
	}

	const handleRegister = (e) => {
		e.preventDefault()
		const sendedObject = {
			username,
			password,
			email,
			re_password: password,
		}
		unprotectedAxios.post("/api/auth/users/", sendedObject).
		then(() => {
			loginRef.current.click()
			RegisterNotify();
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
					<form className="formsd" onSubmit={handleLogin} >
						<label className="label" htmlFor="chk" aria-hidden="true" ref={loginRef}>Log in</label>
						<label style={{color:"#eee"}}>
							Username
						</label>
						<input className="input" type="text" value={username} name="username" placeholder="username" required="" onChange={handleUsernameChange}/>
						<label style={{color:"#eee"}}>
							Password
						</label>
						<input className="input" type="password" value = {password} name="pswd" placeholder="Password" required="" onChange={handlePasswordChange}/>
						<button>Log in</button>
					</form>
				</div>

		<div className="register">
					<form className="formsd" onSubmit={handleRegister}>
						<label className="label" htmlFor="chk" aria-hidden="true">Register</label>
						<label>
							Username
						</label>
						<input className="input" value={username} type="text" name="txt" placeholder="Username" required="" onChange={handleUsernameChange}/>
						<label>
							Email
						</label>
						<input className="input" value={email} type="email" name="email" placeholder="Email" required="" onChange={handleEmailChange}/>
						<label>
							Password
						</label>
						<input className="input" value={password} type="password" name="pswd" placeholder="Password" required=""  onChange={handlePasswordChange}/>
						<button>Register</button>
					</form>
				</div>
		</div>
	</div>
)
}

export default Login