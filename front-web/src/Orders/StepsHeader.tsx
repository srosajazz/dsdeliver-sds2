function StepsHeader() {
  return (
    <header className="orders-steps-container">
      <div className="orders-steps-content">
        <h1 className="steps-title">
          FOLLOW THE <br /> STEPS
        </h1>
        <ul className="steps-items">
          <li>
            <span className="steps-number">1</span>
            Select products and location.
          </li>
          <li>
            <span className="steps-number">2</span>
            After click on <strong> "SEND ORDER"</strong>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default StepsHeader;
