import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import supabase from "../client";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import EditCreator from "./EditCreator";


const ViewCreator =()=>{

    const [creator,setCreator]=useState([])
    const params=useParams();
    const navigate=useNavigate();
    const creatorId= params.id;

useEffect(()=>{
    const getCreator= async()=>{
  
    
        
        const {data, error}= await supabase
        .from('creators')
        .select()
        .eq('id',creatorId);

        if (error) {
            console.error('There is an :', error);
        } else {
            setCreator(data[0]);     
        }
    }
    getCreator()
  },[])


const deleteCreator=async(event)=>{
event.preventDefault()
await supabase
.from('creators')
.delete()
.eq('id',creatorId);
navigate('/');
}

    return(

        
<div className="ViewCreator">
    <section className="creator-image">
        <img src={creator.image} alt="image" />
    </section>

 <section className="creator-info">
<h2>{creator.name} </h2>
<p> {creator.description}</p>

<button className="social-button" >
<Link className="fa fa-youtube-play" to={`https://youtube.com/${creator.youtube}`}> {creator.youtube}</Link>

</button>
  
<button className="social-button">
<Link className="fa fa-twitter" to={`https://twitter.com/${creator.twitter}`}> {creator.twitter}</Link>

</button>
<button className="social-button">
<Link className="fa fa-instagram" to={`https://instagram.com/${creator.instagram}`}> {creator.instagram}</Link>

</button>
 </section>



         
            
    <section className="modify-creator">
        <a href="/edit/id">
        <button >Edit</button>
        </a>
        <button className="delete-button" onClick={deleteCreator}>Delete</button>
    </section>

   
</div>
    )
}
export default ViewCreator;