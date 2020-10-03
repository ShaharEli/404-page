import React from 'react'
import styles from './styles.module.css'
import image from "notfound.png"
import imageWithoutFace from "notfound2.png"
import space from "space-bg.jpg"


export const ExampleComponent = ({ backgroundColor , face, audio }) => {
  const checkBg = ()=>{
    switch(backgroundColor){
      case "purple":
        return ({
          backgroundColor: "#595357",
          backgroundImage: "linear-gradient(225deg, #595357 0%, #242225 50%, #404548 100%)" 
        })
      case "black":
          return ({
            backgroundColor: "#595357",
            backgroundImage: "linear-gradient(225deg, #595357 0%, #242225 50%, #404548 100%)" 
          })
      case "purple":
        return({
          backgroundColor: "A9C9FF",
          backgroundImage: "linear-gradient(180deg, #A9C9FF 0%, #FFBBEC 100%)"     
        })
      case "blue":
        return({
          backgroundColor: "#0093E9",
          backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
        })
        case "red":
          return({
            backgroundColor: "red",
          })
      default:
        return({
         backgroundImage: `url(${space})`
        })
    }
  }
  return(
    <div className={styles.main}
    style={
      checkBg()
    }
    >
    <h1>&nbsp;&nbsp;&nbsp;&nbsp;</h1>
    <h1 className={styles.title}>you are</h1>
    <h1 className={styles.title2}>so lost</h1>

      {
        audio &&  <audio src={audio} autoPlay  type="audio/mp3"/>
      }
      {
        face?
        <React.Fragment>
        <img src={imageWithoutFace} className={styles.mainImg} />
        <img src={face} className={styles.face} />
        </React.Fragment>
        :
        <img src={image} className={styles.mainImg} />
      }
       
      
    </div>
  )
}







