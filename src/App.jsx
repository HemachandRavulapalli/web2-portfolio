import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import { Layout } from "@/components/Layout";
import Home from "@/pages/Home";
import { Toaster } from "@/components/ui/toaster";

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Toaster />
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
