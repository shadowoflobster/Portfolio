import React from "react";
import "./home.css";
import image from "../../images/profile.png"
import bluetooth from "../../svg/bluetooth.svg"
import reward1 from "../../images/reward1.png"
import reward2 from "../../images/reward2.png"
import Navigation from '../../components/navigation';


const Home = () => {
  return (
    <div className="homeDiv">
      <div className="profileDiv">

<div className="profileContent">
        <div className="profileImgDiv">
            <img className="profileImage" src={image} alt="profile"></img>
        </div>

        
        <div className="infoDiv">
        <div>
          <div className="info">
            <label className="infoLabel">NAME</label>
            <span className="infoDetail">LEKSO GURASPISHVILI</span>
          </div>
          <div className="info">
            <label className="infoLabel">OCCUPATION</label>
            <span className="infoDetail">WEB DEVELOPER</span>
          </div>
          </div>
          <div className="info">
            <label className="infoLabel">AVAILABILITY</label>
            <div className="openForDiv">OPEN FOR HIRE</div>
          </div>
          <div className="info">
            <label className="infoLabel">SOCIAL</label>
            <div className="socialStatusDiv">OPEN CONNECTION <img src={bluetooth} alt="connection"></img></div>
          </div>
        </div>
      </div>
      </div>
      
      
      
      
      <div className="mainDiv">
        <p className="whaleQuote">swimming through a vast network of interconnected devices and servers, spreading joy and whimsy to users across the globe</p>
        <Navigation></Navigation>  </div>
      
      
      
      
      
      <div className="questsDiv">
        <div className="questContent">
          <div className="activeQuestHeader">ACTIVE QUEST</div>
          <div className="activeQuest">THE REACT SKILL-UP LINE</div>
          <div className="info marginInfo">
            <label className="infoLabel">QUEST NAME</label>
            <span className="infoDetail">REACT WEBSITE</span>
          </div>
          <div className="goalDiv">
            <span className="infoLabel">GOAL</span>
            <span className="goal">Build this website. Implement a full react website with multiple routers, UI elements and tricky styling. Make it all work great!</span>
          </div>
          <div className="rewardsDiv">
          <span className="infoLabel">REWARDS</span>
          <div className="allRewards">
          <div className="reward"><img  src={reward1} alt="reward"></img><span className="rewardSpan">+5</span></div>
          <div className="reward"><img  src={reward2} alt="reward" className="rewardImg"></img><span className="rewardSpan">+25</span></div>
      </div>

          </div>

        </div>
      
      </div>
    </div>
  );
};

export default Home;
