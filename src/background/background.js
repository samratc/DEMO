import { useState } from 'react';
import './App.css';
import PopUp from '../img/PopUp.png';

const Background = () => {
  const [open, setOpen] = useState(false);
  const showAlert = () => {
    setOpen(!open);
  }
  const showAlertClose = () => {
    if (open === true)
      setOpen(false);
  }
  return (
    <div className="boxContainer" onClick={showAlertClose}>
      <div className="box1">
      </div>
      <div className="box2">
        <div className ="sideBar">
        <div> Non-Exec </div>
        <div> IT Exec</div>
        <div> IT or LOB Exec</div>
        <div> IT + LOB Exec</div>
        </div>
        <div className="box2-row1">
          <div className="box2-row1a">
          </div>
          <div className="box2-row1a">
            <div className="box2-row1a1">
              <div className="button MonthColor" onClick={showAlert}>Digital</div>
              <div className="button MonthColor" onClick={showAlert}>Cross Amazon Engagement</div>
            </div>
            <div className="box2-row1a2">
              <div className="button MonthColor" onClick={showAlert}>Ent Ti</div>
              <div className="button MonthColor" onClick={showAlert}>Executive</div>
            </div>
          </div>
          <div className="box2-row1b">
            <div className="button MonthColor" onClick={showAlert}>Date</div>
          </div>
          <div className="box2-row1c">
            <div class ="headerText">
              investment of time and effort (prep and execution)
            </div>
            <div className="boxMiniContainer">
              <div className="boxMini DayColor" onClick={showAlert} /> Days     <div className="boxMini WeekColor" onClick={showAlert} /> Weeks    <div className="boxMini MonthColor" onClick={showAlert} /> Months
            </div>
          </div>
        </div>

        <div className="box2-row2">
          <div className="boxFullRow WeekColor" onClick={showAlert} >Events</div>
          <div className="boxFullRow1 MonthColor" onClick={showAlert} >ww</div>
          <div className="boxFullRow2 DayColor" onClick={showAlert} >Executive</div>
          <div className='button2Container'>
            <div className="button button2 MonthColor" onClick={showAlert}>Executive)</div>
            <div className="Executive WeekColor" onClick={showAlert}>Executive</div>
            <div className="button button3 DayColor" onClick={showAlert}>Enterprise</div>
            <div className="Strategic WeekColor" onClick={showAlert}>Strategic</div>
          </div>
        </div>
        <div className="box2-row1 box2-row3">
          <div></div>
          <div className="box2-row1a">
            <div className="button WeekColor" onClick={showAlert}>Roadmap</div>
            <div className="button WeekColor" onClick={showAlert}>Enterprise</div>
          </div>
          <div className="box2-row1b">
            <div className="button MonthColor" onClick={showAlert}>Envis)</div>
          </div>
          <div className="box2-row1c">
            <div className="button WeekColor" onClick={showAlert}>Mation</div>

          </div>
        </div>
        <div className="box2-row1  box2-row4 ">
          <div className='displayFlex'>
            <div className="button DayColor" onClick={showAlert}>Culture</div>
            <div className="button DayColor" onClick={showAlert}>Learing</div>
          </div>
          <div className="box2-row1a">
          </div>
          <div className="box2-row4b">
            <div>
              <div className="button MonthColor" onClick={showAlert}>Dd</div>
            </div>
            <div className='displayFlex'>
              <div className="button MonthColor" onClick={showAlert}>ML</div>
              <div className="button MonthColor" onClick={showAlert}>Bb</div>
            </div>
          </div>
          <div className="box2-row1c">
            <div className="button WeekColor" onClick={showAlert}>Cs</div>
          </div>
        </div>
          <div className ="btmBar">
          <div> Inspie </div>
          <div> Envisigize</div>
          <div> Experiment and Pre</div>
          <div> Scale an</div>
          </div>
      </div>
      {open &&
        <div className='popup'>
          <img src={PopUp} />
        </div>
      }
    </div >
  );
}

export default Background;
