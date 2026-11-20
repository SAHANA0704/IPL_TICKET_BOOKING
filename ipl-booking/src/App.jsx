import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MatchCard from "./components/MatchCard";
import "./App.css";

function App() {

  const matches = [
    {
      team1: "CSK",
      team2: "MI",
      date: "20 April 2026",
      venue: "Chennai"
    },
    {
      team1: "RCB",
      team2: "KKR",
      date: "22 April 2026",
      venue: "Bengaluru"
    },
    {
      team1: "SRH",
      team2: "RR",
      date: "24 April 2026",
      venue: "Hyderabad"
    }
  ];

  return (
    <div>
      <Navbar />

      <Hero />

      <section id="matches">
        <h1>Upcoming IPL Matches</h1>

        <div className="matches-container">

          {matches.map((match, index) => (
            <MatchCard
              key={index}
              team1={match.team1}
              team2={match.team2}
              date={match.date}
              venue={match.venue}
            />
          ))}

        </div>
      </section>

      <section id="booking">
        <h2>Book Your IPL Tickets</h2>
        <p>Select your favourite match and enjoy the game!</p>
      </section>

    </div>
  );
}

export default App;