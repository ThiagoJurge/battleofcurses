import "./fonts/Fonts.css";
import "./App.css";
import AppLayout from "./layout/AppLayout/AppLayout";
import { useEffect, useState } from "react";
import LoadingPage from "./components/LoadingPage";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating an asynchronous task
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    // Render a loading indicator or any other content while waiting for the page to load
    return <LoadingPage/>
  }

  // Render the component content after the page has finished loading
  return <AppLayout />;
};

export default App;
