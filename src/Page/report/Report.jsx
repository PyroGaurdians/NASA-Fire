import './Report.css'
const Report = () => {
  return (
    <div className="container">
        <form className="form">
            <div >
                <label >Location</label>
                <input type="text" id="loc" />
            </div>
            <div>
                <label htmlFor="cap"> Capture Image</label>
                <input type="file" accept="image/*" capture="user" id="cap"/>
            </div>
            <div>
                <label>Fire Type</label>
                <select>
                    <option value="1">Wild Fire</option>
                    <option value="2">Human Fire</option>
                </select>
            </div>
            <div className="selected">
                <label>Danger Rate</label>
                <div className="selected-inner">
                    <div>
                        <input type="radio" name="danger" value="1"  id="one" />
                        <label htmlFor="one">1</label>

                    </div>
                    <div>
                        <input type="radio" name="danger" value="2" id="two"/>
                        <label htmlFor='two'>2</label>

                    </div>
                    <div>
                        <input type="radio" name="danger" value="3" id='three'/>
                        <label htmlFor='three'>3</label>
                    </div>
                    <div>
                        <input type="radio" name="danger" value="4" id="four"/>
                        <label htmlFor="four">4</label>

                    </div>
                    <div>
                        <input type="radio" name="danger" value="5" id="five" />
                        <label htmlFor="five">5</label>
                    </div>
    
                
                </div>
                </div>
        </form>
    </div>
  )
}

export default Report