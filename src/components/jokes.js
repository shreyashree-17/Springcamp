
function Joke({number, setup, punchline}){
    return( 
         <div className="joke">
         <h3>{number}. {setup}</h3>
         <p>{punchline}</p>
         </div>
     )
 }
 
 export default Joke