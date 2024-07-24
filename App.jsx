
import React, { useState } from 'react';
const App = () => {
  const [showImage, setShowImage] = useState(true);
  const [bgDiv, setBgDiv] = useState("red");
  const [input, setInput] = useState("");
  const [fontSize, setFontSize] = useState(30);
  const [color, setColor] = useState("");
  return (
    <div style={{
      minHeight: '100vh',
      background: '#ddd',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 32,
      padding: '0 48px'
    }}>
      <div style={{
        background: 'white',
        padding: '0 48px',
        width: '50%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: 32,
        alignItems: 'center'
      }}>
        <h1 style={{ padding: 0, marginBottom: 4 }}>CodingOtt</h1>
        <p style={{ padding: 0, margin: 0, color: 'gray' }}>State Management React Application</p>
        <div>
          <h2>Show and Hide Image</h2>
          {showImage && <img src="https://static.vecteezy.com/system/resources/thumbnails/017/776/853/small_2x/a-stunning-image-featuring-a-red-and-pink-rose-flower-with-a-blank-space-in-the-middle-perfect-for-adding-text-or-overlaying-graphics-this-is-ideal-for-use-on-social-media-websites-photo.jpg" width="100%" alt="flower" />}
          <button
            onClick={() => setShowImage(!showImage)}
            style={{
              background: 'dodgerblue',
              color: 'white',
              padding: '12px 24px',
              borderRadius: 4,
              border: 'none',
              marginTop: 8
            }}>
            {showImage ? 'Hide Image' : 'Show Image'}
          </button>
        </div>
        <div>
          <h2>Background Toggle</h2>
          <div style={{
            width: 300,
            height: 300,
            background: bgDiv,
            borderRadius: 16
          }} />
          <button
            onClick={() => setBgDiv(bgDiv === "red" ? "blue" : "red")}
            style={{
              background: 'dodgerblue',
              color: 'white',
              padding: '12px 24px',
              borderRadius: 4,
              border: 'none',
              marginTop: 8
            }}>
            Toggle Background: {bgDiv === "red" ? "Blue" : "Red"}
          </button>
        </div>
        <div>
          <h2>Live Input Preview</h2>
          <input
            placeholder="Type your text here"
            style={{
              border: '1px solid #ccc',
              padding: 8,
              width: 300
            }}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <h1>{input}</h1>
        </div>
        <div>
          <h2>Font Increaser</h2>
          <p style={{ fontSize }}>{input || 'CodingOtt'}</p>
          <input
            type="range"
            min="30"
            max="200"
            step="1"
            value={fontSize}
            onChange={(e) => setFontSize(Number(e.target.value))}
          />
        </div>
        <div>
          <h2>Color Value Sample</h2>
          <input
            placeholder="Enter color name"
            onChange={(e) => setColor(e.target.value)}
            value={color}
            style={{ marginBottom: 16 }}
          />
          <div style={{
            width: 150,
            height: 150,
            background: color,
            marginTop: 16
          }} />
        </div>
      </div>
    </div>
  );
};
export default App;
