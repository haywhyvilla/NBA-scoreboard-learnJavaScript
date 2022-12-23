const warriorsGames = [
  {
    awayTeam: {
      team: "Golden State",
      points: 119,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 106,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 105,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 127,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 126,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 85,
      isWinner: false,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 92,
      isWinner: false,
    },
    awayTeam: {
      team: "Houston",
      points: 95,
      isWinner: true,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 94,
      isWinner: false,
    },
    homeTeam: {
      team: "Houston",
      points: 98,
      isWinner: true,
    },
  },
  {
    homeTeam: {
      team: "Golden State",
      points: 115,
      isWinner: true,
    },
    awayTeam: {
      team: "Houston",
      points: 86,
      isWinner: false,
    },
  },
  {
    awayTeam: {
      team: "Golden State",
      points: 101,
      isWinner: true,
    },
    homeTeam: {
      team: "Houston",
      points: 92,
      isWinner: false,
    },
  },
];

const makeChart = (games) => {
  const ulParent = document.createElement("ul");
  for (let game of games) {
    const { homeTeam, awayTeam } = game;
    const gameLi = document.createElement("li");
    const { team: hTeam, points: hPoints } = homeTeam;
    const { team: aTeam, points: aPoints } = awayTeam;

    const teamName = `${aTeam} @ ${hTeam}`;
    let teamScore;
    if (aPoints > hPoints) {
      teamScore = `<b>${aPoints}</b>- ${hPoints}`;
    } else {
      teamScore = `${aPoints}- <b>${hPoints}</b>`;
    }

    const warriors = hTeam === "Golden State" ? homeTeam : awayTeam;
    gameLi.classList.add(warriors.isWinner ? "win" : "loss");

    gameLi.innerHTML = `${teamName} ${teamScore}`;
    ulParent.append(gameLi);
  }
  return ulParent;
};

const chart1 = makeChart(warriorsGames);
document.body.append(chart1);

const chart2 = makeChart(warriorsGames);
document.body.append(chart2);

axios
  .get("https://v2.nba.api-sports.io/status/")
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
