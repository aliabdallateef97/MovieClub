import { APPProvider } from "./providers";
import Router from "./router";

const App=()=> {
  return (
    <APPProvider>
      <Router />
    </APPProvider>
  );
}

export default App;
