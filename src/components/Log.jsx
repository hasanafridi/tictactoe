export default function Log({ gameHistory }) {
  return (
    <ol id="log">
      {gameHistory.map((move) => (
        <li key={`${move.square.rowIndex}-${move.square.colIndex}`}>
          {move.player} selected {move.square.rowIndex}, {move.square.colIndex}
        </li>
      ))}
    </ol>
  );
}
