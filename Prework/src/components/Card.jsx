
import { faCircleInfo, faPen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import supabase from "../client";
const Card =({creator})=>{
 


 return(
    <div className="Card" style={{backgroundImage: `url(${creator.image})`, backgroundSize: 'cover'}}>
    <article>
      <div className="card-header-name">
        <h3>{creator.name}</h3>
       <a href={`https://youtube.com/${creator.youtube}`}><span className="fa fa-youtube"> </span></a>
        
          <span className="fa fa-twitter"></span>
        <span className="fa fa-instagram"></span>
      </div>
      <div className="card-header-edit">
        <a href={`/${creator.id}`}>
            <i className="fa-solid fa-circle-info">
            <FontAwesomeIcon icon={faCircleInfo} />
            </i>
        </a>
        <a href={`/edit/${creator.id}`}>
            <i className="fa-solid fa-pen">
            <FontAwesomeIcon icon={faPen} />
            </i>
        </a>
      </div>
      <div className="card-description">
        <p>{creator.description}</p>
      </div>
    </article>
  </div>
 )
  

}
export default Card;



//  This component should contain the content creator's 
//  information (name, url, description, and imageURL (optional)) 
//  so it can be displayed on the main page. For example,
// you might want to create a Card 
// file to organize a content creator's information on a card.