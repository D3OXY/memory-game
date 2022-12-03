import { useEffect } from 'react';

const Header = ({ handleNewGame, wins }) => {
  useEffect(() => {
    document.title = `${wins} wins`
  }, [wins]);

  return (
    <div className='newgame'>
    {/* <header className="header"> */}
      <a href="#" className='newgamebtn' onClick={handleNewGame}>
          <span></span>
      <span></span>
      <span></span>
      <span></span>
      New Game
    </a>
    {/* </header> */}
    </div>
  );
};

export default Header;
