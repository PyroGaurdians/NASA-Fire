import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./Button.css"
import "./Home.css"
// import { useContext } from "react";
// import {AuthContext}  from "../../App"
const Home = () => {
  const [unconfirmedData, setUnconfirmData] = useState([{
    "confirmed": true,
  "location": {"lng":0, "lat":0},
  "start_time": "iso-format",
  "danger": 5,
  },{
    "confirmed":  {"lng":0, "lat":0},
  "location": "Fakous",
  "start_time": "iso-format",
  "danger": 5,
  }])
  const [confirmedData, setconfirmData] = useState([{
    "confirmed": true,
  "location": {"lng":0, "lat":0},
  "start_time": "iso-format",
  "danger": 5,
  },{
    "confirmed":  {"lng":0, "lat":0},
  "location": "Fakous",
  "start_time": "iso-format",
  "danger": 5,
  }])

  
  console.log(confirmedData.length)
  return (
    <>
      <main>
        {/* Remove This */}
        {/* <div className="notification">
            <span className="close-button" >&times;</span>
            <span>This is a notification message.</span>
        </div> */}

          {unconfirmedData.length?  
          (
            <>
            <h1 style={{ color: "#222", marginBottom: "18px", textAlign: "center" }}>
              Unconfirmed Hazards
            </h1>
            {unconfirmedData.map(ele => (
              <section className="unconfirmed" key={ele.location}>
                <div className="loc">
                  <p>Location</p>
                  <p>{`${ele.location["lng"]} ${ele.location["lat"]}`}</p>
                </div>
                <div className="date">
                  <p>Date</p>
                  <p>{ele.start_time}</p>
                </div>
                <div className="danger">
                  <p>Danger</p>
                  <p>{ele.danger}</p>
                </div>
                <div className="send-data">
                  <button className="button type1">Button 1</button>
                  <button className="button type2">Button 2</button>
                </div>
              </section>
            ))}
            {/* Example of conditional rendering */}
            {unconfirmedData.length >= 2 && (
              <div className="ReadMore">
                  <NavLink to="/">Read More</NavLink>

              </div>
            )}
          </>

          ):null }

{unconfirmedData.length?  
          (
            <>
            <h1 style={{ color: "#222",marginTop:"80px", marginBottom: "18px", textAlign: "center" }}>
              confirmed Hazards
            </h1>
            {confirmedData.map(ele => (
              <section className="unconfirmed confirm" key={ele.location}>
                <div className="loc">
                  <p>Location</p>
                  <p>{`${ele.location["lng"]} ${ele.location["lat"]}`}</p>
                </div>
                <div className="date">
                  <p>Date</p>
                  <p>{ele.start_time}</p>
                </div>
                <div className="danger">
                  <p>Danger</p>
                  <p>{ele.danger}</p>
                </div>
                <div>

                </div>
              </section>
            ))}
            {/* Example of conditional rendering */}
            {unconfirmedData.length >= 2 && (
              <div className="ReadMore">
                  <NavLink to="/">Read More</NavLink>

              </div>
            )}
          </>

          ):null }

        </main>
    </>
    
  )
}

export default Home