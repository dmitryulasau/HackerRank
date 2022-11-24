function tournamentWinner(competitions, results) {
  // Write your code here.
  let result = "";

  let score = {};
  for (let pair of competitions) {
    score[pair[0]] = 0;
    score[pair[1]] = 0;
  }

  for (let i = 0; i < competitions.length; i++) {
    if (results[i] === 0) {
      result += `${competitions[i][1]} beats ${competitions[i][0]}, `;
      score[competitions[i][1]] += 3;
    } else if (results[i] === 1) {
      result += `${competitions[i][0]} beats ${competitions[i][1]}, `;
      score[competitions[i][0]] += 3;
    }
  }

  result = result.slice(0, -2) + ".";

  console.log(result);
  for (let team in score) {
    console.log(`${team} - ${score[team]} points`);
  }

  winner = Object.keys(score).reduce((acc, curr) =>
    score[acc] > score[curr] ? acc : curr
  );

  return winner;
}

console.log(
  tournamentWinner(
    [
      ["HTML", "C#"],
      ["C#", "Python"],
      ["Python", "HTML"],
    ],
    [0, 0, 1]
  )
);
