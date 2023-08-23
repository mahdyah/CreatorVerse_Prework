import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import 'font-awesome/css/font-awesome.min.css';
import { useState } from 'react';
import supabase  from '../client';
import { useNavigate } from 'react-router-dom';
const AddCreator =({setCreators})=>{
  const navigate=useNavigate();
let [input, setInput]=useState({
    id: '',
    name:'',
    image:'',
    description:'',
    youtube:'',
    twitter:'',
    instagram:''
}); 

const handleChange=(event)=>{
    const {name, value}=event.target;
setInput((prev)=>{
    return{
        ...prev,
        [name]:value
     }
    })

}
console.log(input)

const handleSubmit= async(event)=>{
event.preventDefault()

 await supabase
.from('creators')
.insert([
    {name:input.name, image:input.image, description:input.description, youtube:input.youtube, instagram:input.instagram, twitter:input.twitter}
])

console.log("This is the input",input.name)
navigate('/');

}


return(
    
<div className="AddEditCreator">
    <form id="addCreatorForm" onSubmit={handleSubmit}>
<label >Name</label>
<input type="text" id="name" name="name" onChange={handleChange} required={true} />

<label >Image
<p>Provide a link to an image of your creator. Be sure to include the http://</p>
</label>
<input type="text" id="image" name="image" onChange={handleChange} required={true}  />

<label >Description
<p>Provide a description of the creator. Who are they? What makes them intersting? </p>
</label>
<textarea name="description" id="description" cols="50" rows="3" onChange={handleChange} required={true} ></textarea>
   
   <h3>Social Media Links</h3>
   <p>Provide at least one of the creator's social media links.</p>

   <label htmlFor="#">
<span className="fa-brands fa-youtube"></span>
YouTube
<p>The creator's YouTube handle (without the @)</p>
   </label>
   <input type="text" name="youtube" id="youtube" onChange={handleChange} />

   <label htmlFor="#">
<span className="fa-brands fa-twitter"></span>
Twitter
<p>The creator's twitter handle (without the @)</p>
   </label>
   <input type="text" name="twitter" id="twitter" onChange={handleChange} />

   <label htmlFor="#">
<span className="fa-brands fa-instagram"></span>
Instagram
<p>The creator's instagram handle (without the @)</p>
   </label>
   <input type="text" name="instagram" id="instagram" onChange={handleChange}/>
<button type="submit" name='submit' >Submit</button>
    </form>
</div>
)




}
export default AddCreator;