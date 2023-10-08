import one from "../../Images/calm.jpg"
import Two from "../../Images/crowd.jpg"
import Three from "../../Images/door.jpg"
import Four from "../../Images/inform.jpg"

const Evactuate = () => {
  return (
    <div className="container" style={{marginBottom:"30px"}}>
    <h1 style={{marginBottom:"40px", marginTop:"50px"}}>How to Evacutate from fire</h1>
      <section className="">
        <img src={one} alt="imag"/>
        <div className="txt">
          <h3>Stay Calm.</h3>
          <p>Try to remain as calm as possible. Panic can cloud your judgment and hinder your ability to make safe decisions..</p>
        </div>
      </section>

      <section className="">
        <img src={Two} alt="imag"/>
        <div className="txt">
          <h3>Alert Others.</h3>
          <p>Immediately alert anyone in your vicinity about the fire so they can begin evacuating as well..</p>
        </div>
      </section>

      <section className="">
        <img src={Three} alt="imag"/>
        <div className="txt">
          <h3>Close Doors.</h3>
          <p>Close doors behind you as you evacuate to slow the spread of the fire.
.</p>
        </div>
      </section>

      <section className="">
        <img src={Four} alt="imag"/>
        <div className="txt">
          <h3>Stay Informed.</h3>
          <p>Listen for announcements or instructions from emergency responders if you are in a public place..</p>
        </div>
      </section>

  </div>
  )
}

export default Evactuate