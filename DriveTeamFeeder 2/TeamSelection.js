
function compareTeams() {
  //var teamNumber = 123;
  const authKey = '0iSKwn3ykkgDT9ToHqwBizSiiaa44pyLIK85oEdgOkzxNJS1X0vBtDFrJ24PiAWW';
  let teamNumber = document.getElementById("teamNumber").value;
  let eventcode = '2023caoc';
  // const eventCode = '2022cada';

  fetch('https://www.thebluealliance.com/api/v3/event/' +
    eventcode +
    '/teams/simple',
    {
      method: "GET",
      headers: {
        'X-TBA-Auth-Key':
          '0iSKwn3ykkgDT9ToHqwBizSiiaa44pyLIK85oEdgOkzxNJS1X0vBtDFrJ24PiAWW',
      },
    })
    .then(response => response.json())
    .then(teams => {
      let team = teams.find(team => team.team_number == teamNumber);
      if (!team) {
        document.getElementById("display").innerHTML = "No team found"
        return;
      }

      location.href = "DataPage.html?team=" + teamNumber;
      //location.href = "test.js?team=" + teamNumber;


    })

    .catch(error => console.error(error));
  return teamNumber;

}

//export { teamNumber };