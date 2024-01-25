import StateCounter from "../components/counter-with-state";
import NoStateCounter from "../components/counter-without-state";


function UseStatepage() {
  return (
    <div className="App">
      <div>
        <h1>Understanding State</h1>
        <NoStateCounter/>
        <StateCounter/>
      </div>
    </div>
  );
}

export default UseStatepage;
