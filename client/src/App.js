import useRoutes from "./routes";

function App() {
  const router = useRoutes();

  return <div className="App">{router}</div>;
}

export default App;
