import { useState } from 'react';
import supabase  from '../client';
import { useNavigate} from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
const EditCreator =()=>{
    const params=useParams();
    const navigate=useNavigate();
    const creatorId= params.id;
   
    const [creators, setCreators]=useState({}); 


   useEffect(()=>{
      const getCreator= async()=>{
       
          const {data, error}= await supabase
          .from('creators')
          .select()
          .eq('id',creatorId)
          .single();
         
          if (error) {
              console.error('There is an :', error);
          } 
          if(data){
            setCreators(data)
         
          }    
      };
      getCreator();
    },[creatorId])

    let {name, description, image,youtube,twitter,instagram}=creators || {};

    console.log(name)

    const handleChange=(event)=>{
        const {name, value}=event.target;
    setCreators((prev)=>{
        return{
            ...prev,
            [name]:value
         }
        })
    
    }

   
   const handleSubmit= async(e)=>{
     e.preventDefault()
       const {data, error}= await supabase
       .from('creators')
       .update({name,description,image,youtube,twitter,instagram})
       .eq('id',creatorId)
      .single()
      navigate('/');
       
   }

  
   
   return(
 
      <div className="AddEditCreator">
    <form id="addCreatorForm" onSubmit={handleSubmit}>
<label >Name</label>
<input  type="text" onChange={handleChange} id="name" name="name" value={name} required  />

<label >Image
<p>Provide a link to an image of your creator. Be sure to include the http://</p>
</label>
<input onChange={handleChange} type="text" value={image} id="image" name="image" required />

<label >Description
<p>Provide a description of the creator. Who are they? What makes them intersting? </p>
</label>
<textarea onChange={handleChange} name="description" value={description} id="description" cols="50" rows="3"  required></textarea>
   
   <h3>Social Media Links</h3>
   <p>Provide at least one of the creator's social media links.</p>

   <label htmlFor="#">
<span className="fa-brands fa-youtube"></span>
YouTube
<p>The creator's YouTube handle (without the @)</p> 
   </label>
   <input  onChange={handleChange} type="text" name="youtube" value={youtube} id="youtube"/> 

   <label htmlFor="#">
<span className="fa-brands fa-twitter"></span>
Twitter
<p>The creator's twitter handle (without the @)</p>
   </label>
   <input  onChange={handleChange} type="text" name="twitter" value={twitter} id="twitter" /> 

   <label htmlFor="#">
<span className="fa-brands fa-instagram"></span>
Instagram
<p>The creator's instagram handle (without the @)</p>
   </label>
   <input type="text" onChange={handleChange} name="instagram" value= {instagram} id="instagram" />
<button type="submit">Submit</button>
    </form>
</div>
   )
}
export default EditCreator;