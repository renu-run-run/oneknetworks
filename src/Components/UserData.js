import { useState } from 'react'
import customers from './.././customers.json'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import CodeIcon from '@mui/icons-material/Code';
import GradingIcon from '@mui/icons-material/Grading';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import VideocamOutlinedIcon from '@mui/icons-material/VideocamOutlined';
import KeyboardVoiceOutlinedIcon from '@mui/icons-material/KeyboardVoiceOutlined';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import Avatar from '@mui/material/Avatar';
import moment from 'moment';

const UserData = () => {
  const [data, setData] = useState(customers.data);
  const [search, setSearch] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [boolName, setBoolName] = useState(false);
  const [popup, setPopup] = useState(false);
  const [items, setItems] = useState([]);
  const [acolor, setAColor] = useState(["DarkSlateBlue", "LightCoral", "DodgerBlue", "pink", "MediumAquaMarine", "MediumOrchid", "DarkSeaGreen", "GoldenRod"])

  // const setDataToInput = (e) => {
  //     setInputValue(e.target.textContent);
  //     console.log(e.target.textContent)

  // }

  function addItem() {
    if (inputValue === "") {
      return
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: inputValue,
      time: moment().format("h:mm:ss a"),
      color: acolor
    };
    setItems(oldList => [...oldList, item]);
    setInputValue("");
  }
  function deleteData(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  }
  console.log(customers.data)

  return (
    <>
      <div className='sent-user-data' onClick={() => setPopup(false)}>
        {
          items.map((ele, idx) => {
            return (
              <div className='show-user-data'>
                <div className='show-user-data-list'><Avatar sx={{ width: 24, height: 24, bgcolor: acolor[idx % 8] }} variant="rounded"> {ele.value.slice(0, 1)}</Avatar> &nbsp;&nbsp; <h4 style={{ float: "left" }} key={idx}>{ele.value}</h4> &nbsp;&nbsp; {ele.time} </div>
                <div > <button onClick={() => deleteData(ele.id)}><DeleteOutlineIcon /></button></div>
              </div>
            )
          })
        }
      </div>
      <div onClick={() => setPopup(false)} className='main-container'>
        <div className={popup ? "filter-data-div" : "display-none"} >
          {
            data.filter((ele) => {
              if (search === "") {
                return ele
              } else if (ele.name.toLowerCase().includes(search)) {
                return ele
              }
            }).map((ele, idx) => {
              return (
                <h4 onClick={(e) => {
                  setBoolName(false)
                  setInputValue(e.target.textContent)
                  setPopup(false)
                }}>
                  <div className='filter-data'>
                    <div><Avatar sx={{ width: 24, height: 24, bgcolor: acolor[idx % 8] }} variant="rounded">{ele.name.slice(0, 1)}</Avatar></div>
                    <div>{ele.name}</div>
                  </div>
                </h4>
              )
            })
          }
        </div>


        <div className='input-div'>
          <div className='input-div-one'>
            <div><FormatBoldIcon /></div>
            <div><FormatItalicIcon /></div>
            <div><FormatUnderlinedIcon /></div>
            <div><InsertLinkIcon /></div>
            <div><FormatAlignLeftIcon /></div>
            <div><GradingIcon /></div>
            <div><FormatAlignRightIcon /></div>
            <div><CodeIcon /></div>

          </div>
          <div>
            <input
              className="userdata-input"
              value={boolName ? search : inputValue}
              placeholder='Jot somthing down'
              type='text'
              onChange={(e) => {
                setBoolName(true);
                setSearch(e.target.value)
                setPopup(true)
              }}
            />
          </div>

          <div className='input-div-three'>
            <div><ControlPointIcon /></div>
            <div><AlternateEmailIcon /></div>
            <div><SentimentSatisfiedAltIcon /></div>
            <div><VideocamOutlinedIcon /></div>
            <div><KeyboardVoiceOutlinedIcon /></div>
            <button className='send-button' onClick={() => { addItem(); setPopup(false) }}>{inputValue !== "" ? <SendRoundedIcon style={{ backgroundColor: "green", padding: "3px", width: "3rem", height: "2rem", color: "white", borderRadius: "3px" }} /> : <SendRoundedIcon style={{ width: "3rem", height: "2rem" }} />}</button></div>

        </div>

      </div>





    </>
  )
}
export default UserData