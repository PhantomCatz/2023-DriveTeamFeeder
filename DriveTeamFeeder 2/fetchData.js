

fetch('http://localhost:8000/getData')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getData');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getTestingData')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getTestingData');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getMatchNum')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getMatchNum');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getMatchLvl')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getMatchLvl');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getRobotAllianceNum')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getRobot');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAutoMobility')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAutoMobility');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAutoDocked')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAutoDocked');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAutoEngaged')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAutoEngaged');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAutoEngagedTime')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAutoEngagedTime');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAutoConesScored')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAutoConesScored');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAutoCubesScored')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAutoCubesScored');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAutonTotalPoints')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAutonTotalPoints');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getCycleTime')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getCycleTime');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getTconesScored')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getTconesScored');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getTeloptotalPoints')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getTelopTotalPts');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getTdocked')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getTdocked');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getTengaged')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getTengaged');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getTengagedTime')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getTengagedTime');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getTelopIndOrDepend')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getTelopIndOrDepend');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getParked')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getParked');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getDroppedPieces')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getDroppedPieces');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getNumPenalties')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getNumPenalties');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getRobotDied')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getRobotDied');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getDefense')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getDefense');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getOverChargeStation')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getOverChargeStation');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getPenaltiesIncurred')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getPenaltiesIncurred');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getPushingCapability')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getPushingCapability');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getCounterDefense')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getCounterDefense');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getOffensiveManeuverability')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getOffensiveManeuverability');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));


fetch('http://localhost:8000/getDefensiveLocation')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getDefensiveLocation');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAutoStartLocation')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAutoStartLocation');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAutoEndLocation')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAutoEndLocation');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getIntakeSpeed')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getIntakeSpeed');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));


fetch('http://localhost:8000/getComments')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getComments');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/get')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getALL');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getPeakTeleop')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getPeakTeleop');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getPeakAuton')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getPeakAuton');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAvgTeleop')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAvgTeleop');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAvgAuton')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAvgAuton');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAvgDockingTime')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAvgDockingTime');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAvgEngagedTime')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAvgEngagedTime');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAvgNumDocks')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAvgNumDocks');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAvgNumEngaged')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAvgNumEngaged');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getPeakDockTime')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getPeakDockTime');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAvgConesScored')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAvgConesScored');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAvgCubesScored')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAvgCubesScored');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAvgTotalPoints')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAvgTotalPoints');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getDriveTrain')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getDriveTrain');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getnumWheels')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getnumWheels');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getwheelType')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getwheelType');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getdriveTrainMotorType')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getdriveTrainMotorType');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getnumMotors')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getnumMotors');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getDriveTrainFunctional')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getDriveTrainFunctional');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getPossessionMech')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getPosessionMech');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getScoringMech')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getScoringMech');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getScoringMechFunc')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getScoringMechFunc');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getPossessionMechFunc')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getPossessionMechFunc');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/gethasIndexer')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAvgTotalPoints');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getIndexerJamming')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getIndexerJamming');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getNeedsAlignment')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getNeedsAlignment');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/gethasAimingSystem')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('gethasAimingSystem');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getAimingSystemFunction')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getAimingSystemFunction');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getHasBalancing')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getHasBalancing');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getBalancingTime')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getBalancingTime');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getNodeLevelsCapable')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getNodeLevelsCapable');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getCapableGamePiece')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getCapableGamePiece');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getPreferredGrid')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getPreferredGrid');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getNumPiecesScoredAuton')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getNumPiecesScoredAuton');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getautonPath')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getautonPath');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getnumBatteries')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getnumBatteries');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getnumChargers')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getnumChargers');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getpitOrg')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getpitOrg');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getTeamSafe')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getTeamSafe');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getGP')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getGP');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getCycleTIme')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getCycleTime');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));

fetch('http://localhost:8000/getPitComments')
    .then(response => response.json())
    .then(data => {
        const dataContainer = document.getElementById('getPitComments');
        dataContainer.innerHTML = JSON.stringify(data);
    })
    .catch(error => console.error(error));