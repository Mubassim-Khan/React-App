import Accordian from "./components/Accordian";
import AlertMsg from "./components/AlertMsg";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import React, {useState} from 'react'

function App() {
  // For Changing Theme into Dark & Light

  const [theme, setTheme] = useState("light");

  let changeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.body.style.backgroundColor = "#343a40";
      document.title = "Text Tools - Home (Dark Mode)";
    } else {
      setTheme("light");
      document.body.style.backgroundColor = "white";
      document.title = "Text Tools - Home (Light Mode)";
    }
  }

  // For Alert Mesages

  const [alert, setAlert] = useState(null);

  let showAlertMsg = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  return (
    <>
      {/* For Navbar */}
      <Navbar title="Text Tools" home="Home" about="About Us" mode={theme} changeTheme={changeTheme}/>
      {/* For Alert Messages (must be below Navbar) */}
      <AlertMsg alert={alert} />
      {/* For Text Area */}
      <div className="container my-4">
        <TextBox textBoxName="Enter your Text Below" mode={theme} showAlertMsg={showAlertMsg}/>
      </div>
      {/* For Accordian (Sample Dark Mode) */}
      <div className="container my-3">
        <Accordian/>
      </div>
    </>
  );
}

export default App;
