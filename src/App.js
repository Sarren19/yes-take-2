import logo from "./logo.svg";
import "./App.css";
import CustomButton from "./CustomButton";
import { useState } from "react";

function App() {
  const [confirmText, setConfirmText] = useState("");
  const [yesPressed, setYesPressed] = useState(false);
  const [addedText, setAddedText] = useState({
    very: "",
    sure: "",
  });

  return (
    <div
      className="App"
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      <p
        style={{
          padding: "0",
          margin: "0",
          textAlign: "center",
          alignSelf: "center",
          fontSize: "3rem",
        }}
      >
        WILL YOU BE MY VALENTINE?
      </p>
      <div
        style={{
          width: "200px",
          display: "flex",
          alignSelf: "center",
          justifyContent: "center",
        }}
      >
        <div className="heart-style">
          <div
            style={{
              borderRadius: "10px",
              boxShadow: "2px 2px lightgray",
              padding: "10px",
              margin: "0",
              backgroundColor: "#E9E2E9",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="filter-heart-pink"
              style={{
                width: "100%",
              }}
            >
              <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
            </svg>
          </div>
          {yesPressed ? (
            <img
              className="img-style"
              width={"80%"}
              src={require("./assets/toothless.png")}
            />
          ) : null}
        </div>
        <div style={{ position: "absolute", bottom: "40px" }}>
          <p>{confirmText}</p>
          {!yesPressed ? (
            <div className="centered-style">
              <CustomButton
                buttonText="Yes"
                onClick={() => {
                  setConfirmText("");
                  setYesPressed(true);
                }}
              />
              <p
                style={{
                  padding: "0",
                  margin: "0",
                  textAlign: "center",
                  alignSelf: "center",
                }}
              >
                or
              </p>
              <CustomButton
                buttonText="No"
                onClick={() => {
                  if (Math.random() < 0.5) {
                    setAddedText({
                      very: addedText.very + " very",
                      sure: addedText.sure,
                    });
                  } else {
                    setAddedText({
                      very: addedText.very,
                      sure: addedText.sure + " sure",
                    });
                  }
                  if (!confirmText) setConfirmText("Are you sure?");
                  else
                    setConfirmText(
                      `Are you${addedText.very} sure${addedText.sure}?`
                    );
                }}
              />
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
