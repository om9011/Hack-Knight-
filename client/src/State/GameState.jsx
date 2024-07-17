import { atom, selector } from 'recoil';
import axios from 'axios';

const fetchTextData = async () => {
  try {
    const response = await axios.get('http://localhost:3000/game/start');
    return response.data; // Assuming your API response directly provides the default value
  } catch (error) {
    console.error('Error fetching initial data:', error);
    return ''; // Default value in case of an error or empty response
  }
};

const GameState = atom({
  key: 'GameState',
  default: fetchTextData(),
});

export default GameState;