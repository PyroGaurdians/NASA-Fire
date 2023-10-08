import { useContext } from "react"
import { UserInfo } from "../../App";
import { FiLogOut } from "react-icons/fi";
import "./Profile.css"

const Profile = () => {
    const user = useContext(UserInfo)
    console.log(user)
  return (
    <div className="profile-page">
        <div className="header" style={{marginBottom: "30px", display:"flex", "alignItems": "center",justifyContent: "space-between"}}><h1 ><span>Profile</span></h1><a href="/logout"><FiLogOut/> Logout</a></div>
        <table>
            {/* <tr>
                <td>Name</td>
                <td>{`${user.first_name} ${user.last_name}`}</td>
            </tr> */}
            <tr>
                <td>Username</td>
                <td>{user.username}</td>
            </tr>
            <tr>
                <td>Email</td>
                <td>{`${user.email}`}</td>
            </tr>
        </table>
    </div>
  )
}

export default Profile