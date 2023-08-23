import Card from '../components/Card';

const ShowCreators =({creators})=>{



return(

<div className="container">


<main>
<section className="ShowCreators"> 

<div className='gird-container'>
    {creators.map((creator)=>(
         <Card key={creator.id} creator={creator}/>
    )
       
    )}
</div>


</section>

</main>      



</div>


)





}
export default ShowCreators;