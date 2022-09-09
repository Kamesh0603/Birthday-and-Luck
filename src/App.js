import './App.css';
import {FaDiscord, FaGithub, FaInstagram, FaInstagramSquare, FaLinkedin} from 'react-icons/fa';

function App() {
  var userDOB;
  var luckyno;
  var output;
function luckdecider(){
  userDOB = document.getElementById("dob").value;
  luckyno = document.getElementById("luckyno").value;
  output = document.getElementById("output");


  console.log(typeof(userDOB));
  var fullnewdob = userDOB.split("");
  console.log(fullnewdob);
  var sum =0;
  fullnewdob.forEach(element => {
    if(parseInt(element)){
    sum = sum+parseInt(element);
  };
});
  console.log(fullnewdob);
  console.log(sum);
  if(parseInt(luckyno)<=0){
    output.innerText=`Please stay positive!`;
  }
  else if((sum/parseInt(luckyno))%1===0){
    output.innerText=`💥 Magic 8-ball says ${luckyno} is your lucky number! 💥 `;
  }
  else{
    output.innerText="Not lucky enough to find your lucky number 💢";
  }
}

  return (
    <div className='parentContainer'>
      <h2>Is your birthday lucky? Ask the magic 8-ball 🎱 </h2>
      <div className='leftouts'>Enter your Date of Birth:</div>
      <div><input type="date"  id="dob" ></input></div>
      <div className='leftouts' >Number:</div>
      <div><input type="number" id="luckyno" placeholder='Enter a lucky number'/></div>
      <div><button type="submit" onClick={luckdecider}>Check</button></div>
      <div id="output"></div>
      <div className='footer'><span >Note: Your data will not be stored for privacy reasons.</span></div>
      {/*
      <footer>
        <div className='footer'><FaInstagramSquare/></div>
        <div className='footer'><FaLinkedin/></div>
        <div className='footer'><FaDiscord/></div>
        <div className='footer'><FaGithub/></div>
      </footer>
  */}
    </div>
  );
}

export default App;
