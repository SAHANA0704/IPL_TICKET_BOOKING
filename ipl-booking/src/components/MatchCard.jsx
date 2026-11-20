import { useState } from "react";

function MatchCard(props) {

  const [count, setCount] = useState(0);

  return (
    <div className="match-card">

      <h2>{props.team1} vs {props.team2}</h2>

      <p>Date: {props.date}</p>

      <p>Venue: {props.venue}</p>

      <p>Tickets Selected: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Select Ticket
      </button>

    </div>
  );
}

export default MatchCard;