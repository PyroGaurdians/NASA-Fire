import "./DealFire.css"
import one from "../../Images/OneO.jfif"
import Two from "../../Images/Two.jfif"
import Three from "../../Images/Three.jfif"
import Four from "../../Images/Four.jfif"

const DealFire = () => {
  return (
      <div className="container">
          <section className="">
            <img src={one} alt="imag"/>
            <div className="txt">
              <h3>Listen to emergency officials.</h3>
              <p>If they say evacuate, leave your home immediately.</p>
            </div>
          </section>

          <section className="">
            <img src={Two} alt="imag"/>
            <div className="txt">
              <h3>Shut off the gas.</h3>
              <p>Turn off propane at the tank or natural gas at the meter, and turn off all pilot lights.</p>
            </div>
          </section>

          <section className="">
            <img src={Three} alt="imag"/>
            <div className="txt">
              <h3>Make it easy for firefighters.</h3>
              <p>If your home is gated, leave the gate propped open to allow fire fighters easy access to your property. Connect garden hoses to outside taps. Fill buckets with water and place them around the house. Put a ladder against a corner of your house, so firefighters have easy access to your roof.
.</p>
            </div>
          </section>

          <section className="">
            <img src={Four} alt="imag"/>
            <div className="txt">
              <h3>Check for embers.</h3>
              <p>Even the smallest ember can start a fire, so continually check your roof and attic for embers, smoke, or fire.</p>
            </div>
          </section>

      </div>
  )
}

export default DealFire