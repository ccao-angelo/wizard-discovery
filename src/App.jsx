import { useState } from 'react'
import './App.css'

function App() {
  // --- STATE VARIABLES ---
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [banList, setBanList] = useState([]);

  // --- API FETCH FUNCTION ---
  const fetchNewCharacter = async () => {
    try {
      // 1. Fetch data from API
      const response = await fetch("https://hp-api.onrender.com/api/characters");
      const data = await response.json();

      // 2. Ban List: Filter out character possessing a banned attribute
      let validCharacters = data.filter(char => {
        // Fallback to Unknown if the API data is an empty string
        const house = char.house || "Unknown";
        const ancestry = char.ancestry || "Unknown";
        const species = char.species || "Unknown";

        // Throw out any of the character's attributes matching the ban list
        if (
          banList.includes(house) ||
          banList.includes(ancestry) ||
          banList.includes(species)
        ) {
          return false;
        }
        return true;
      });

      // 3. Select a random character from the remaining valid ones
      if (validCharacters.length > 0) {
        const randomIndex = Math.floor(Math.random() * validCharacters.length);
        setCurrentCharacter(validCharacters[randomIndex]);
      } else {
        alert("You've banned too many attributes! Unban a few to discover more characters.");
      }

    } catch(error) {
      console.log("Error fetching data:", error);
    }
  };

  // --- BAN LIST HANDLERS ---
  const addToBanList = (attribute) => {
    const val = attribute || "Unknown";
    if (!banList.includes(val)) {
      setBanList([...banList, val]);
    }
  };

  const removeFromBanList = (attributeToRemove) => {
    setBanList(banList.filter(attr => attr !== attributeToRemove));
  };

  // --- USER INTERFACE ---
  return (
    <div className='app-container'>
      <header className='header'>
        <h1>⚡ Wizarding World Discovery ⚡</h1>
        <p>Click "Discover" to find a random character. Click their attributes to ban them from future searches!</p>
        <button onClick={fetchNewCharacter} className='discover-button'>
          Discover Next Character 🔮
        </button>
      </header>

      <div className='main-content'>
        {/* Left Side: Character Display */}
        <div className='discovery-section'>
          {currentCharacter ? (
            <div className='character-card'>
              <h2>{currentCharacter.name}</h2>
              <img
                src={currentCharacter.image ? currentCharacter.image : "https://waytoomany.games/wp-content/uploads/2023/02/Fo1hKD_aAAA8x_9.jpg"}
                alt={currentCharacter.name}
                className='character-image'
                style={{ backgroundColor: "white", padding: "10px" }}
              />

              <div className='attributes'>
                <button className='attr-button' onClick={() => addToBanList(currentCharacter.house)}>
                  House: {currentCharacter.house || "Unknown"}
                </button>
                <button className='attr-button' onClick={() => addToBanList(currentCharacter.ancestry)}>
                  Ancenstry: {currentCharacter.ancestry || "Unknown"}
                </button>
                <button className='attr-button' onClick={() => addToBanList(currentCharacter.species)}>
                  Species: {currentCharacter.species || "Unknown"}
                </button>
              </div>
            </div>      
          ) : (
            <div className='placeholder'>
              <p>No character loaded yet. Click the button above to begin your journey!</p>
            </div>  
          )}
        </div>

        {/* Right Side: Ban List SideBar */}
        <div className='ban-list-sidebar'>
          <h3>🚫 Ban List</h3>
          <p className='ban-instruction'>Click an item to unban it.</p>

          {banList.length === 0 ? (
            <p className='empty-ban-list'>Your ban list is empty.</p>
          ) : (
            <div className='banned-items-container'>
              {banList.map((bannedItem, index) => (
                <button
                key={index}
                className='banned-item-button'
                onClick={() => removeFromBanList(bannedItem)}
                >{bannedItem} ✕</button>
              ))}
            </div>  
          )}
        </div>  
      </div>
    </div>
  );
}

export default App;