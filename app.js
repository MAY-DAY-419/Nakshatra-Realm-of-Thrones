	document.body.classList.add("js-enabled");

	const babyDragon = document.getElementById("baby-dragon");
	const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			});
		},
		{ threshold: 0.2 }
	);

	document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

	const houseObserver = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("slide-in");
				} else {
					entry.target.classList.remove("slide-in");
				}
			});
		},
		{ threshold: 0.4 }
	);

	const progressBars = document.querySelectorAll(".progress-bar");
	const statusDots = document.querySelectorAll(".status span");
	const houseFlags = document.querySelectorAll(".house-flag");
	const houseLines = document.querySelectorAll(".house-line");
	const sigils = document.querySelectorAll(".sigil");
	const heroBanner = document.querySelector(".hero-banner");
	const topTeamRow = document.querySelector(".top-team");
	const flameBurst = document.querySelector(".flame-burst");
	const sportsGrid = document.getElementById("sports-grid");
	const sportsLastUpdated = document.getElementById("sports-last-updated");
	const sportModal = document.getElementById("sport-modal");
	const sportPanelTitle = document.getElementById("sport-panel-title");
	const sportPanelBadges = document.getElementById("sport-panel-badges");
	const sportUpcomingTabs = document.getElementById("sport-upcoming-tabs");
	const sportUpcomingPanels = document.getElementById("sport-upcoming-panels");
	const sportWinners = document.getElementById("sport-winners");
	const sportBracketTabs = document.getElementById("sport-bracket-tabs");
	const sportBracketPanels = document.getElementById("sport-bracket-panels");
	const leaderboardModal = document.getElementById("leaderboard-modal");
	const leaderboardTitle = document.getElementById("leaderboard-title");
	const leaderboardWins = document.getElementById("leaderboard-wins");
	const leaderboardWinsList = document.getElementById("leaderboard-wins-list");
	const leaderboardRows = document.querySelectorAll(".leaderboard-row");
	const animateBars = () => {
		progressBars.forEach((bar) => {
			const value = bar.getAttribute("data-progress");
			bar.style.width = `${value}%`;
		});
	};

	houseLines.forEach((item) => houseObserver.observe(item));

	const sportsData = [
		{
			name: "Volleyball",
			subtitle: "Volleyball",
			icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"8.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M12 3.5c2.4 1.6 4 4.2 4.2 7.1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M4.6 9.5c2.1 0.3 4.2 1.3 5.6 2.9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M9.2 19c1.8-1.6 4.2-2.4 6.6-2.4\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/></svg>",
			roundStatus: "Volleyball",
			teams: ["ENTC", "Allied", "Comp", "Design", "Chem", "Mech", "FY", "Civil"],
			upcomingGroups: [
				{
					label: "Boys",
					matches: [
						{ a: "ENTC", b: "Allied", time: "<span class=\"winner-tag\">Allied won</span>", winner: "Allied" },
						{ a: "Comp", b: "Design", time: "<span class=\"winner-tag\">Design won</span>", winner: "Design" },
						{ a: "Chem", b: "Mech", time: "<span class=\"winner-tag\">Mech won</span>", winner: "Mech" },
						{ a: "FY", b: "Civil", time: "<span class=\"winner-tag\">Civil won</span>", winner: "Civil" },
					],
				},
			],
			completed: [],
			winners: ["Allied", "Design", "Mech", "Civil"],
			semiFinals: [
				{ label: "Semi 1", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
				{ label: "Semi 2", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			finals: [
				{ label: "Final", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			lastUpdated: "14 Feb 2026, 3:20 PM",
		},
		{
			name: "Football",
			subtitle: "Football",
			icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><polygon points=\"12,7 15,10 13.5,14 10.5,14 9,10\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/></svg>",
			roundStatus: "Football",
			teams: ["ENTC", "Civil", "Design", "FY", "Mech", "Comp", "Chem", "Allied"],
			upcomingGroups: [
				{
					label: "Boys",
					matches: [
						{ a: "ENTC", b: "Civil", time: "TBD" },
						{ a: "Design", b: "FY", time: "TBD" },
						{ a: "Mech", b: "Comp", time: "TBD" },
						{ a: "Chem", b: "Allied", time: "TBD" },
					],
				},
			],
			completed: [],
			winners: [],
			semiFinals: [
				{ label: "Semi 1", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
				{ label: "Semi 2", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			finals: [
				{ label: "Final", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			lastUpdated: "14 Feb 2026, 8:10 PM",
		},
		{
			name: "Badminton",
			subtitle: "Badminton",
			icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M7 4l4 4-3 3-4-4 3-3z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.4\"/><path d=\"M11 8l7 7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/><path d=\"M17.5 16.5l2.5 2.5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\" stroke-linecap=\"round\"/></svg>",
			roundStatus: "Badminton",
			teams: ["Design", "Mech", "Civil", "FY", "Chem", "Comp", "ENTC", "Allied"],
			upcomingGroups: [
				{
					label: "Boys",
					matches: [
						{ a: "Design", b: "Mech", time: "TBD" },
						{ a: "Civil", b: "FY", time: "TBD" },
						{ a: "Chem", b: "Comp", time: "TBD" },
						{ a: "ENTC", b: "Allied", time: "TBD" },
					],
				},
				{
					label: "Girls",
					matches: [
						{ a: "Allied", b: "ENTC", time: "TBD" },
						{ a: "Comp", b: "FY", time: "TBD" },
						{ a: "Civil", b: "Chem", time: "TBD" },
						{ a: "Design", b: "Mech", time: "TBD" },
					],
				},
			],
			completed: [],
			winners: [],
			semiFinals: [
				{ label: "Semi 1", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
				{ label: "Semi 2", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			finals: [
				{ label: "Final", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			lastUpdated: "14 Feb 2026, 4:50 PM",
		},
		{
			name: "Basketball",
			subtitle: "Basketball",
			icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"9\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M12 3v18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><path d=\"M3 12h18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><path d=\"M5.5 6.5c4 2.4 9 2.4 13 0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><path d=\"M5.5 17.5c4-2.4 9-2.4 13 0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/></svg>",
			roundStatus: "Basketball",
			teams: ["Mech", "Civil", "Design", "Chem", "FY", "Allied", "Comp", "ENTC"],
			upcomingGroups: [
				{
					label: "Boys",
					matches: [
						{ a: "Mech", b: "Civil", time: "TBD" },
						{ a: "Design", b: "Chem", time: "TBD" },
						{ a: "FY", b: "Allied", time: "TBD" },
						{ a: "Comp", b: "ENTC", time: "TBD" },
					],
				},
				{
					label: "Girls",
					matches: [
						{ a: "Mech", b: "Design", time: "TBD" },
						{ a: "Civil", b: "Comp", time: "TBD" },
						{ a: "ENTC", b: "Chem", time: "TBD" },
						{ a: "FY", b: "Allied", time: "TBD" },
					],
				},
			],
			completed: [],
			winners: [],
			semiFinals: [
				{ label: "Semi 1", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
				{ label: "Semi 2", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			finals: [
				{ label: "Final", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			lastUpdated: "14 Feb 2026, 5:40 PM",
		},
		{
			name: "Cricket",
			subtitle: "Cricket",
			icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><rect x=\"4\" y=\"3\" width=\"5\" height=\"14\" rx=\"1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"6\" y=\"16\" width=\"2\" height=\"5\" rx=\"1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><circle cx=\"17\" cy=\"12\" r=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>",
			roundStatus: "Cricket",
			teams: ["FY", "Civil", "Allied", "Mech", "ENTC", "Design", "Chem", "Comp"],
			upcomingGroups: [
				{
					label: "Fixtures",
					matches: [
						{ a: "FY", b: "Civil", time: "TBD" },
						{ a: "Allied", b: "Mech", time: "TBD" },
						{ a: "ENTC", b: "Design", time: "TBD" },
						{ a: "Chem", b: "Comp", time: "TBD" },
					],
				},
			],
			completed: [],
			winners: [],
			semiFinals: [
				{ label: "Semi 1", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
				{ label: "Semi 2", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			finals: [
				{ label: "Final", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			lastUpdated: "14 Feb 2026, 7:45 PM",
		},
		{
			name: "Kho-Kho",
			subtitle: "Kho-Kho",
			icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"9\" cy=\"6\" r=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M9 8l2 4 5 1\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M7 16l2-4 4 1 2 5\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg>",
			roundStatus: "Kho-Kho",
			teams: ["Allied", "ENTC", "Design", "Comp", "FY", "Mech", "Civil", "Chem"],
			upcomingGroups: [
				{
					label: "Boys",
					matches: [
						{ a: "Allied", b: "ENTC", time: "TBD" },
						{ a: "Design", b: "Comp", time: "TBD" },
						{ a: "FY", b: "Mech", time: "TBD" },
						{ a: "Civil", b: "Chem", time: "TBD" },
					],
				},
				{
					label: "Girls",
					matches: [
						{ a: "Civil", b: "FY", time: "TBD" },
						{ a: "Design", b: "ENTC", time: "TBD" },
						{ a: "Mech", b: "Comp", time: "TBD" },
						{ a: "Allied", b: "Civil", time: "TBD" },
					],
				},
			],
			completed: [],
			winners: [],
			semiFinals: [
				{ label: "Semi 1", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
				{ label: "Semi 2", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			finals: [
				{ label: "Final", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			lastUpdated: "14 Feb 2026, 3:05 PM",
		},
		{
			name: "Kabaddi",
			subtitle: "Kabaddi",
			icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><path d=\"M12 3l7 3v5c0 4-3 7-7 9-4-2-7-5-7-9V6l7-3z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M9 9h6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>",
			roundStatus: "Kabaddi",
			teams: ["ENTC", "Design", "Allied", "Mech", "Chem", "Comp", "Civil", "FY"],
			upcomingGroups: [
				{
					label: "Fixtures",
					matches: [
						{ a: "ENTC", b: "Design", time: "TBD" },
						{ a: "Allied", b: "Mech", time: "TBD" },
						{ a: "Chem", b: "Comp", time: "TBD" },
						{ a: "Civil", b: "FY", time: "TBD" },
					],
				},
			],
			completed: [],
			winners: [],
			semiFinals: [
				{ label: "Semi 1", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
				{ label: "Semi 2", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			finals: [
				{ label: "Final", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			lastUpdated: "14 Feb 2026, 2:30 PM",
		},
		{
			name: "Throwball",
			subtitle: "Throwball",
			icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"11\" cy=\"11\" r=\"6\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M16 6l4-2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/></svg>",
			roundStatus: "Throwball",
			teams: ["Design", "Comp", "Mech", "Chem", "FY", "Allied", "ENTC", "Civil"],
			upcomingGroups: [
				{
					label: "Girls",
					matches: [
						{ a: "Design", b: "Comp", time: "TBD" },
						{ a: "Mech", b: "Chem", time: "TBD" },
						{ a: "FY", b: "Allied", time: "TBD" },
						{ a: "ENTC", b: "Civil", time: "TBD" },
					],
				},
			],
			completed: [],
			winners: [],
			semiFinals: [
				{ label: "Semi 1", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
				{ label: "Semi 2", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			finals: [
				{ label: "Final", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			lastUpdated: "14 Feb 2026, 1:40 PM",
		},
		{
			name: "Chess",
			subtitle: "Chess",
			icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"7\" r=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><rect x=\"8\" y=\"13\" width=\"8\" height=\"2\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M9 20h6l-1-5H10l-1 5z\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/></svg>",
			roundStatus: "Chess",
			teams: ["Chem", "Civil", "Mech", "FY", "ENTC", "Comp", "Allied", "Design"],
			upcomingGroups: [
				{
					label: "Boys",
					matches: [
						{ a: "Chem", b: "Civil", time: "TBD" },
						{ a: "Mech", b: "FY", time: "TBD" },
						{ a: "ENTC", b: "Comp", time: "TBD" },
						{ a: "Allied", b: "Design", time: "TBD" },
					],
				},
				{
					label: "Girls",
					matches: [
						{ a: "Mech", b: "Comp", time: "TBD" },
						{ a: "Civil", b: "Design", time: "TBD" },
						{ a: "Chem", b: "Allied", time: "TBD" },
						{ a: "FY", b: "ENTC", time: "TBD" },
					],
				},
			],
			completed: [],
			winners: [],
			semiFinals: [
				{ label: "Semi 1", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
				{ label: "Semi 2", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			finals: [
				{ label: "Final", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			lastUpdated: "14 Feb 2026, 12:15 PM",
		},
		{
			name: "Shot Put",
			subtitle: "Shot Put",
			icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"7\" cy=\"7\" r=\"3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\"/><path d=\"M7 10l4 4 5-3\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" stroke-linecap=\"round\"/><path d=\"M3 20h18\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/></svg>",
			roundStatus: "Shot Put",
			teams: ["ENTC", "Comp", "Design", "Mech", "Civil", "Chem", "Allied", "FY"],
			upcomingGroups: [
				{ label: "To Be Announced", matches: [] },
			],
			completed: [],
			winners: [],
			semiFinals: [
				{ label: "Semi 1", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
				{ label: "Semi 2", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			finals: [
				{ label: "Final", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			lastUpdated: "14 Feb 2026, 6:15 PM",
		},
		{
			name: "Discus Throw",
			subtitle: "Discus Throw",
			icon: "<svg viewBox=\"0 0 24 24\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"12\" r=\"7\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.6\"/><path d=\"M6 12a6 6 0 0 0 12 0\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/><path d=\"M9 8l6 8\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.2\"/></svg>",
			roundStatus: "Discus Throw",
			teams: ["ENTC", "Comp", "Design", "Mech", "Civil", "Chem", "Allied", "FY"],
			upcomingGroups: [
				{ label: "To Be Announced", matches: [] },
			],
			completed: [],
			winners: [],
			semiFinals: [
				{ label: "Semi 1", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
				{ label: "Semi 2", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			finals: [
				{ label: "Final", a: "TBD", b: "TBD", time: "TBD", winner: "-" },
			],
			lastUpdated: "14 Feb 2026, 6:35 PM",
		},
	];

	// Team to House mapping
	const teamHouseMap = {
		"Lannister": { department: "Design", sigil: "DN" },
		"Tyrell": { department: "Allied", sigil: "AL" },
		"Targaryen": { department: "Mech", sigil: "MH" },
		"Stark": { department: "Civil", sigil: "CV" },
		"Baratheon": { department: "Chem", sigil: "CH" },
		"Martell": { department: "FY", sigil: "FY" },
		"Arryn": { department: "Comp", sigil: "CO" },
		"Greyjoy": { department: "ENTC", sigil: "ET" },
	};

	const teamDepartmentMap = {
		"Design": { house: "Lannister", sigil: "DN" },
		"Allied": { house: "Tyrell", sigil: "AL" },
		"Mech": { house: "Targaryen", sigil: "MH" },
		"Civil": { house: "Stark", sigil: "CV" },
		"Chem": { house: "Baratheon", sigil: "CH" },
		"FY": { house: "Martell", sigil: "FY" },
		"Comp": { house: "Arryn", sigil: "CO" },
		"ENTC": { house: "Greyjoy", sigil: "ET" },
	};

	const teamDisplayNameMap = {
		"FY": "First Year",
		"Mech": "Mechanical",
		"Comp": "Computer",
		"Chem": "Chemical",
	};

	const houseFlagMap = {
		"Lannister": "house%20lannister.jpg",
		"Tyrell": "House%20Tyrell.jpg",
		"Stark": "House%20Stark.jpg",
		"Targaryen": "HOUSE%20TARGARYEN.jpg",
		"Baratheon": "House%20Baratheon.jpg",
		"Martell": "House%20Martell.jpg",
		"Arryn": "House%20Arryn.jpg",
		"Greyjoy": "House%20Greyjoy.jpg",
	};

	// Points by sport: { team: { sport: points } }
	const sportPointsMap = {
		"Allied": {
			"Volleyball": 10,
			"Football": 5,

		},
		"Design": {
			"Badminton (Girls)": 10,
		},
		"Chem": {
			"Shot Put (Girls)": 10,
		},
		"ENTC": {
			"Shot Put (Girls)": 7,
			"Shot Put (Boys)": 5,
			"Football": 7,
			"Badminton (Boys)": 7,
			"Badminton (Girls)": 7,
		},
		"Mech": {
			"Volleyball": 5,
			"Shot Put (Girls)": 5,
			"Badminton (Boys)": 5,
		},
		"FY": {
			"Volleyball": 7,
			"Shot Put (Boys)": 10,
			"Football": 5,
			"Badminton (Girls)": 5,
		},
		"Civil": {
			"Shot Put (Boys)": 7,
			"Badminton (Boys)": 10,
			"Badminton (Girls)": 5,
		},
		"Comp": {
			"Volleyball": 5,
			"Football": 10,
			"Badminton (Boys)": 5,
		},
	};

	const generateLeaderboard = () => {
		const rankingsTable = document.querySelector(".rankings table tbody");
		if (!rankingsTable) {
			return;
		}

		const stats = buildTeamStats();
		const teamList = [];
		
		// Collect all teams from sportsData
		const allTeamsSet = new Set();
		sportsData.forEach((sport) => {
			if (sport.teams && Array.isArray(sport.teams)) {
				sport.teams.forEach((team) => allTeamsSet.add(team));
			}
		});
		
		// Map teams to departments and calculate points
		const teams = Array.from(allTeamsSet).map((team) => {
			const map = teamDepartmentMap[team];
			const record = stats.get(team) || { wins: [], losses: [] };
			
			// Get points from sportPointsMap (sum all sports)
			const sportsPoints = sportPointsMap[team] || {};
			let points = 0;
			Object.keys(sportsPoints).forEach(sport => {
				points += sportsPoints[sport];
			});
			
			const displayName = teamDisplayNameMap[team] || team;
			const houseName = map ? map.house : team;
			
			return {
				team: team,
				house: `House ${houseName}`,
				houseName: houseName,
				department: team,
				displayDepartment: displayName,
				sigil: map ? map.sigil : team.substring(0, 2).toUpperCase(),
				points: points,
				sportBreakdown: sportsPoints,
				status: record.wins.length > 0 ? "Active" : "Standby",
			};
		});
		
		// Sort by points (descending)
		teams.sort((a, b) => b.points - a.points);
		
		// Generate table rows
		const rows = teams.map((team, index) => {
			const rank = index + 1;
			// Only apply rank styling if team has points > 0
			const rankClass = team.points > 0 && rank <= 3 ? ` rank-${rank}` : "";
			const flagImg = houseFlagMap[team.houseName] || "";
			
			return `
				<tr class="row-hover leaderboard-row${rankClass}" data-team="${team.department}" data-house="${team.house}" data-department="${team.department}" data-sport-breakdown='${JSON.stringify(team.sportBreakdown)}'>
					<td class="rank-num${rankClass}">${rank}</td>
					<td class="rank-flag"><img src="${flagImg}" alt="${team.houseName} flag" loading="lazy" style="max-width: 40px; height: auto;" /></td>
					<td class="rank-house${rankClass}">${team.house} (${team.displayDepartment})</td>
					<td class="rank-points${rankClass}">${team.points}</td>
				</tr>
			`;
		}).join("");
		
		rankingsTable.innerHTML = rows;
		
		// Re-bind leaderboard events after updating
		setTimeout(() => {
			bindLeaderboardEvents();
		}, 0);
	};

	const buildTeamStats = () => {
		const stats = new Map();
		const ensure = (team) => {
			if (!stats.has(team)) {
				stats.set(team, { wins: [], losses: [] });
			}
			return stats.get(team);
		};
		const handleMatch = (sportName, match) => {
			const winner = match.winner
				|| (typeof match.score === "string" ? match.score.match(/^(.*) won$/i)?.[1] : null);
			if (!winner) {
				return;
			}
			const loser = winner === match.a ? match.b : winner === match.b ? match.a : null;
			if (!loser) {
				return;
			}
			ensure(winner).wins.push({ opponent: loser, sport: sportName });
			ensure(loser).losses.push({ opponent: winner, sport: sportName });
		};

		sportsData.forEach((sport) => {
			(sport.completed || []).forEach((match) => handleMatch(sport.name, match));
			(sport.upcomingGroups || []).forEach((group) => {
				(group.matches || []).forEach((match) => handleMatch(sport.name, match));
			});
		});

		return stats;
	};

	const renderSports = () => {
		if (!sportsGrid) {
			return;
		}

		sportsGrid.innerHTML = sportsData
			.map(
				(sport, index) => `
					<div class="sport-card" data-sport-index="${index}">
						<div class="sport-icon">${sport.icon}</div>
						<div class="sport-name">${sport.name}</div>
					</div>
				`
			)
			.join("");
	};

	const updateLastUpdated = () => {
		if (!sportsLastUpdated) {
			return;
		}
		const latest = sportsData
			.map((sport) => new Date(sport.lastUpdated.replace(",", "")))
			.sort((a, b) => b - a)[0];
		sportsLastUpdated.textContent = latest ? latest.toLocaleString() : "--";
	};

	const openSportModal = (sport, card) => {
		if (!sportModal || !sportPanelTitle || !sportPanelBadges || !sportUpcomingTabs || !sportUpcomingPanels || !sportWinners || !sportBracketTabs || !sportBracketPanels) {
			return;
		}

		document.querySelectorAll(".sport-card").forEach((btn) => btn.classList.remove("active"));
		if (card) {
			card.classList.add("active");
		}

		sportPanelTitle.textContent = sport.name;
		sportPanelBadges.innerHTML = `
			<span class="badge">${sport.roundStatus}</span>
			<span class="badge">Next Update: 9:00 PM</span>
			<span class="badge">Last Updated: ${sport.lastUpdated}</span>
		`;
		const upcomingGroups = sport.upcomingGroups || [
			{ label: "Upcoming", matches: sport.upcoming || [] },
		];
		const renderMatchList = (matches) => {
			if (!matches || matches.length === 0) {
				return "<div class=\"match-item\"><strong>No matches listed</strong><span>--</span></div>";
			}
			return matches
				.map(
					(match) => `<div class=\"match-item\"><strong>${match.a} vs ${match.b}</strong><span>${match.time}</span></div>`
				)
				.join("");
		};

		const renderUpcomingTabs = (groups) => {
			if (!sportUpcomingTabs || !sportUpcomingPanels) {
				return;
			}
			if (!groups || groups.length === 0) {
				sportUpcomingTabs.innerHTML = "";
				sportUpcomingPanels.innerHTML = "<div class=\"match-item\"><strong>No upcoming matches</strong><span>--</span></div>";
				return;
			}

			if (groups.length === 1) {
				sportUpcomingTabs.innerHTML = "";
				sportUpcomingPanels.innerHTML = `
					<div class=\"tab-panel active\">
						<div class=\"match-list\">${renderMatchList(groups[0].matches)}</div>
					</div>
				`;
				return;
			}

			sportUpcomingTabs.innerHTML = groups
				.map(
					(group, index) => `
						<button class=\"tab-button${index === 0 ? " active" : ""}\" type=\"button\" data-tab-index=\"${index}\">${group.label}</button>
					`
				)
				.join("");
			sportUpcomingPanels.innerHTML = groups
				.map(
					(group, index) => `
						<div class=\"tab-panel${index === 0 ? " active" : ""}\" data-tab-panel=\"${index}\">
							<div class=\"match-list\">${renderMatchList(group.matches)}</div>
						</div>
					`
				)
				.join("");

			sportUpcomingTabs.querySelectorAll(".tab-button").forEach((button) => {
				button.addEventListener("click", () => {
					const index = button.dataset.tabIndex;
					sportUpcomingTabs.querySelectorAll(".tab-button").forEach((btn) => btn.classList.remove("active"));
					sportUpcomingPanels.querySelectorAll(".tab-panel").forEach((panel) => panel.classList.remove("active"));
					button.classList.add("active");
					const activePanel = sportUpcomingPanels.querySelector(`.tab-panel[data-tab-panel=\"${index}\"]`);
					if (activePanel) {
						activePanel.classList.add("active");
					}
				});
			});
		};

		renderUpcomingTabs(upcomingGroups);
		sportBracketTabs.innerHTML = "";
		sportBracketPanels.innerHTML = "<div class=\"match-item\"><strong>Bracket to be announced</strong><span>--</span></div>";
		sportWinners.innerHTML = sport.winners
			.map((winner) => `<div class="match-item"><strong>${winner}</strong><span>Advances</span></div>`)
			.join("");

		sportModal.classList.add("is-open");
		sportModal.setAttribute("aria-hidden", "false");
	};

	const closeSportModal = () => {
		if (!sportModal) {
			return;
		}
		sportModal.classList.remove("is-open");
		sportModal.setAttribute("aria-hidden", "true");
		document.querySelectorAll(".sport-card").forEach((btn) => btn.classList.remove("active"));
	};

	const openLeaderboardModal = (row) => {
		if (!leaderboardModal || !leaderboardTitle || !leaderboardWins || !leaderboardWinsList) {
			return;
		}
		const team = row.dataset.team;
		const house = row.dataset.house || team;
		const department = row.dataset.department || team;
		
		// Get sport breakdown from data attribute
		let sportBreakdown = {};
		try {
			sportBreakdown = JSON.parse(row.dataset.sportBreakdown || '{}');
		} catch (e) {
			sportBreakdown = {};
		}

		leaderboardTitle.textContent = `${house} (${department})`;
		
		// Calculate total points from sports
		let totalPoints = 0;
		Object.keys(sportBreakdown).forEach(sport => {
			totalPoints += sportBreakdown[sport];
		});
		
		leaderboardWins.textContent = totalPoints;

		// Display sport points breakdown
		leaderboardWinsList.innerHTML = Object.keys(sportBreakdown).length > 0
			? Object.keys(sportBreakdown)
				.map(
					(sport) => `<div class="match-item"><strong>${sport}</strong><span>${sportBreakdown[sport]} points</span></div>`
				)
				.join("")
			: "<div class=\"match-item\"><strong>No points yet</strong><span>--</span></div>";

		leaderboardModal.classList.add("is-open");
		leaderboardModal.setAttribute("aria-hidden", "false");
	};

	const closeLeaderboardModal = () => {
		if (!leaderboardModal) {
			return;
		}
		leaderboardModal.classList.remove("is-open");
		leaderboardModal.setAttribute("aria-hidden", "true");
	};

	const bindSportsEvents = () => {
		if (!sportsGrid) {
			return;
		}
		// Sports are display-only now; no modal or click actions.
	};

	const bindLeaderboardEvents = () => {
		if (!leaderboardModal) {
			return;
		}

		// Query for current rows in the DOM (not static list)
		const currentRows = document.querySelectorAll(".leaderboard-row");
		if (currentRows.length === 0) {
			return;
		}

		currentRows.forEach((row) => {
			row.addEventListener("click", () => {
				openLeaderboardModal(row);
			});
		});

		leaderboardModal.addEventListener("click", (event) => {
			if (event.target.dataset.close === "true") {
				closeLeaderboardModal();
			}
		});
	};

	const scheduleSportsUpdate = () => {
		// Placeholder: hook this to a real update endpoint later.
	};

	const initGsapAnimations = () => {
		if (!window.gsap || prefersReducedMotion) {
			return;
		}

		if (heroBanner) {
			gsap.fromTo(
				heroBanner,
				{ scaleX: 0, transformOrigin: "left center", opacity: 0 },
				{ duration: 0.9, scaleX: 1, opacity: 1, ease: "power3.out" }
			);
		}

		gsap.fromTo(
			houseFlags,
			{ scaleX: 0, transformOrigin: "left center", opacity: 0 },
			{ duration: 0.8, scaleX: 1, opacity: 1, stagger: 0.08, ease: "power3.out" }
		);

		gsap.fromTo(
			houseLines,
			{ opacity: 0, y: 12 },
			{ duration: 0.8, opacity: 1, y: 0, stagger: 0.06, ease: "power2.out" }
		);

		gsap.fromTo(
			sigils,
			{ opacity: 0, y: 8 },
			{ duration: 0.7, opacity: 1, y: 0, stagger: 0.05, ease: "power2.out" }
		);

		gsap.to(statusDots, {
			duration: 1.1,
			scale: 1.3,
			opacity: 0.6,
			repeat: -1,
			yoyo: true,
			ease: "sine.inOut",
			stagger: 0.12,
		});
	};

	const initTopTeamFlames = () => {
		if (!window.gsap || prefersReducedMotion || !topTeamRow || !flameBurst) {
			return;
		}

		let flameTimer = null;

		const spawnFlame = () => {
			const particle = document.createElement("span");
			particle.className = "flame-particle";
			particle.style.left = `${gsap.utils.random(10, 70)}px`;
			particle.style.top = `${gsap.utils.random(28, 42)}px`;
			flameBurst.appendChild(particle);

			gsap.to(particle, {
				duration: gsap.utils.random(0.6, 1.1),
				y: gsap.utils.random(-30, -45),
				x: gsap.utils.random(-12, 12),
				scale: gsap.utils.random(0.6, 1.2),
				opacity: 0,
				ease: "power2.out",
				onComplete: () => particle.remove(),
			});
		};

		const startFlames = () => {
			if (flameTimer) {
				return;
			}
			spawnFlame();
			flameTimer = window.setInterval(spawnFlame, 160);
		};

		const stopFlames = () => {
			if (flameTimer) {
				window.clearInterval(flameTimer);
				flameTimer = null;
			}
			flameBurst.innerHTML = "";
		};

		topTeamRow.addEventListener("mouseenter", startFlames);
		topTeamRow.addEventListener("mouseleave", stopFlames);
	};

	const initBabyDragon = () => {
		const isMobile = window.matchMedia("(max-width: 760px)").matches || window.matchMedia("(pointer: coarse)").matches;
		if (!window.gsap || prefersReducedMotion || !babyDragon || isMobile) {
			return;
		}

		const setX = gsap.quickTo(babyDragon, "x", { duration: 0.6, ease: "power3.out" });
		const setY = gsap.quickTo(babyDragon, "y", { duration: 0.6, ease: "power3.out" });
		const setR = gsap.quickTo(babyDragon, "rotation", { duration: 0.5, ease: "power2.out" });

		let lastX = window.innerWidth / 2;
		let lastY = window.innerHeight / 2;

		const handlePointer = (event) => {
			const { clientX, clientY } = event;
			const dx = clientX - lastX;
			const dy = clientY - lastY;
			const angle = Math.atan2(dy, dx) * (180 / Math.PI);
			setX(clientX - 20);
			setY(clientY - 20);
			setR(angle);
			lastX = clientX;
			lastY = clientY;
		};

		window.addEventListener("pointermove", handlePointer);
	};

	window.addEventListener("load", () => {
		animateBars();
		initGsapAnimations();
		initTopTeamFlames();
		initBabyDragon();
		renderSports();
		updateLastUpdated();
		generateLeaderboard();
		bindSportsEvents();
		bindLeaderboardEvents();
		scheduleSportsUpdate();
	});
