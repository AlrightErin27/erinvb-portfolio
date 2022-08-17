function BoardCell({ cell }) {
  return (
    <div className={`board-cell ${cell.className}`}>
      <div className="sparkle">sparkle</div>
    </div>
  );
}

export default BoardCell;
