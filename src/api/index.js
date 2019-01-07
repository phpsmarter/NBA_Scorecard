import axios from "axios";

export const getGameScores = async () => { 
	try {
		const res = await axios.get("http://data.nba.net/10s/prod/v1/20190105/scoreboard.json");
		console.log(res);
	} catch (e) {
		console.log(e)
	}
} 

