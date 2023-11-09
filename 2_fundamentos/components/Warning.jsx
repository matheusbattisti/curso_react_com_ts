function Warning({ showWarning }) {
  if (!showWarning) {
    return null; // Não renderiza nada se `showWarning` é falso
  }

  return <div className="warning">Warning!</div>;
}

export default Warning;
