import playerData from './playerData';

// The positions we want to have in our app
const validPositions = ['QB', 'RB', 'WR', 'TE'];

// Simulate a relatively slow API call
const fetchPlayersPromise = new Promise(resolve => {
  setTimeout(() => {
    resolve(playerData);
  }, 1000);
});


export const fetchPlayers = async () => {
  const rawPlayers = await fetchPlayersPromise;
  return rawPlayers.filter(player => (
    validPositions.includes(player.position) &&
    player.team !== 'FA'
  ));
}
