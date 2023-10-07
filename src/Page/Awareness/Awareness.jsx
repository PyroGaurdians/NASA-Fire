import { AiFillFire, AiFillSave, AiFillFlag } from 'react-icons/ai';
import {BiMessageDetail} from "react-icons/bi"
import "./Awareness.css"
const Awareness = () =>{

  return (
    <>
    <main className="container">

      <section className="top">
          <h1>Awareness</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nulla iste culpa sint porro dolorem fugiat deserunt quaerat animi, velit ullam, eveniet cum perspiciatis ipsa consectetur fugit corrupti nobis adipisci quisquam quia sunt temporibus non. Asperiores neque ad ut atque, nihil at magnam nostrum eaque laudantium quisquam aliquid animi a aliquam?</p>
      </section>
      <section className="main-content">
            <div className="card-1">
                <AiFillFire />
                <p>how to deal with fire</p>
            </div>
            <div className="card-2">
                <AiFillSave/>
                <p>How to Evactuate from fire</p>
            </div>
            <div className="card-3">
              <AiFillFlag/>
              <p>How to use the app to confire a fire</p>
            </div>
            <div className="card-4">
              <BiMessageDetail/>
              <p>Different Fire situtation</p>
            </div>
      </section>
    </main>

  </>

  )
}

export default Awareness
