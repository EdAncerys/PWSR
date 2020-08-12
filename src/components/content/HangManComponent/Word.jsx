import React from 'react';

export default function Word({ selectedWord, correctLetters, gameWins }) {
  return (
    <div style={styles.container}>
      <p style={styles.mainText}>Guess The Word</p>

      {selectedWord.split('').map((letter, i) => {
        return (
          <span style={styles.mainText} key={i}>
            {correctLetters.includes(letter) ? letter : '_'}
          </span>
        );
      })}
      {gameWins > 0 && (
        <p style={styles.whiteText}>{`You won ${gameWins} games`}</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    width: '100%',
    height: '30vh',
  },
  whiteText: {
    color: '#fff',
  },
  mainText: {
    color: '#546677',
    fontSize: 'large',
    fontWeight: '600',
  },
};
