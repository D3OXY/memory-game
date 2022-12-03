import { useEffect } from 'react';

const Header = ({ handleNewGame, wins }) => {
  useEffect(() => {
    document.title = `${wins} wins`
  }, [wins]);

  return (
    <div className='newgame'>
      <p className='newgamebtn' onClick={handleNewGame}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      New Game
    </p>
    </div>
  );
};

export default Header;
