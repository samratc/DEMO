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
        <div className="box2-row1">
          <div className="box2-row1a">
          </div>
          <div className="box2-row1a">
            <div className="box2-row1a1">
              <div className="button" onClick={showAlert}>Digital</div>
              <div className="button" onClick={showAlert}>Cross Amazon Engagement</div>
            </div>
            <div className="box2-row1a2">
              <div className="button" onClick={showAlert}>Ent Ti</div>
              <div className="button" onClick={showAlert}>Executive</div>
            </div>
          </div>
          <div className="box2-row1b">
            <div className="button" onClick={showAlert}>Date</div>
          </div>
          <div className="box2-row1c">
            <div class ="headerText">
              investment of time and effort (prep and execution)
            </div>
            <div className="boxMiniContainer">
              <div className="boxMini DayBox" onClick={showAlert} /> Days     <div className="boxMini WeekBox" onClick={showAlert} /> Weeks    <div className="boxMini MonthBox" onClick={showAlert} /> Months
            </div>
          </div>
        </div>

        <div className="box2-row2">
          <div className="boxFullRow" onClick={showAlert} >Events</div>
          <div className="boxFullRow1" onClick={showAlert} >ww</div>
          <div className="boxFullRow2" onClick={showAlert} >Executive</div>
          <div className='button2Container'>
            <div className="button button2" onClick={showAlert}>Executive)</div>
            <div className="Executive" onClick={showAlert}>Executive</div>
            <div className="button button3" onClick={showAlert}>Enterprise</div>
            <div className="Strategic" onClick={showAlert}>Strategic</div>
          </div>
        </div>
        <div className="box2-row1 box2-row3">
          <div></div>
          <div className="box2-row1a">
            <div className="button RoadmapBox" onClick={showAlert}>Roadmap</div>
            <div className="button EnterpriseBox" onClick={showAlert}>Enterprise</div>
          </div>
          <div className="box2-row1b">
            <div className="button" onClick={showAlert}>Envis)</div>
          </div>
          <div className="box2-row1c">
            <div className="button MationBox" onClick={showAlert}>Mation</div>

          </div>
        </div>
        <div className="box2-row1  box2-row4 ">
          <div className='displayFlex'>
            <div className="button CultureBox" onClick={showAlert}>Culture</div>
            <div className="button LearningBox" onClick={showAlert}>Learing</div>
          </div>
          <div className="box2-row1a">
          </div>
          <div className="box2-row4b">
            <div>
              <div className="button" onClick={showAlert}>Dd</div>
            </div>
            <div className='displayFlex'>
              <div className="button" onClick={showAlert}>ML</div>
              <div className="button" onClick={showAlert}>Bb</div>
            </div>
          </div>
          <div className="box2-row1c">
            <div className="button CsBox" onClick={showAlert}>Cs</div>
          </div>
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
