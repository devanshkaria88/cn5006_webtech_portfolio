import "./App.css";

function GreetingElement() {
  const greeting = "Hello, let's start learning functional components!";
  return (
    <div className="App">
      <h1>{greeting}</h1>
    </div>
  );
}

export default GreetingElement;
