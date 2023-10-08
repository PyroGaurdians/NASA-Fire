import "./FireSituation.css"

import WoodFire from "../../Images/woodFire.jpg"
const FireSitutation = () => {
  return (
    <div className="fire-situtation">
      <h1 style={{marginBottom:"30px"}}>Different Fire situtation</h1>
      {/* Class A */}
      <section className="class-a">
        <h3>Class A</h3>
        <div className="card">
          <img src={WoodFire} alt="Wood fire" />
          <div className="txt">
              <h4>
              A fires are the easiest to put out.
              </h4>
              <p>
                A fires intentionally when lighting a match or starting a bonfire. An unintentional Class A fire could result from knocking over a candle, a stray spark from a fireplace, or a lightning strike on a tree.
              </p>

          </div>

        </div>
      </section>
      {/* Class B */}
      <section className="class-a">
        <h3 style={{marginTop:"30px"}}>Class B</h3>
        <div className="card">
          <img src={WoodFire} alt="Wood fire" />
          <div className="txt">
              <h4>
              A fires involve flammable liquids.
              </h4>
              <p>
              fires involve ignitable liquids or gases like petroleum grease, alcohol, paint, propane, or gasoline. But, this classification typically does not include fires involving cooking oils or grease.               </p>

          </div>

        </div>
      </section>

       {/* Class C */}
       <section className="class-a">
        <h3 style={{marginTop:"30px"}}>Class C</h3>
        <div className="card">
          <img src={WoodFire} alt="Wood fire" />
          <div className="txt">
              <h4>
              A fires involve a source of electricity.
              </h4>
              <p>
              fires, referred to as Class E in Australia, involve electrical equipment. This type of fire might be started by old wiring in walls, frayed electrical cords, worn-out breaker boxes, or faulty appliances.
                </p>
          </div>


        </div>
      </section>


      {/* Class D */}
      <section className="class-a">
        <h3 style={{marginTop:"30px"}}>Class D</h3>
        <div className="card">
          <img src={WoodFire} alt="Wood fire" />
          <div className="txt" style={{marginBottom:"30px"}}>
              <h4>
              They fires are rare.
              </h4>
              <p>
              It takes high levels of heat to ignite most metals, which makes Class D fires pretty rare outside of laboratories and industrial settings. According to University of Massachusetts Boston's Office of Environmental Health and Safety, Class D fires are oftentimes caused by alkali metals such as potassium, magnesium, aluminum, and sodium, as these can ignite when exposed to air or water
                </p>
          </div>
        </div>
      </section>




    </div>
  )
}

export default FireSitutation