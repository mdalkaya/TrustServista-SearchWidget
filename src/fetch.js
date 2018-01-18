export function execute_fetch(query, page) {





	get_token();
	var medox_access_token = localStorage.getItem("medox_access_token");

	console.log("Token : " + medox_access_token);
	var searchURL =
		"https://demo.medox.scisys.de:8443/dira6/api/v10/search/contentItems";

	return fetch(searchURL, {
		method: "POST",
		headers: {
			Authorization: "Bearer " + medox_access_token,
			Accept: "application/json",
			"Content-Type": "application/json"
		},
		body: JSON.stringify({
			query: {
				bool: {
					must: [{ index: { meta: query + " " } }],
					filter: [{ term: { status: "valid" } }]
				}
			},
			from: 1,
			size: 20,
			sort: [{ modTime: { order: "desc" } }]
		})
	})
		.then(response => response.json())
		.then(responseData => {
			console.log(responseData);
			return responseData;
		})
		.catch(error => console.warn(error));
}

function get_token() {
	var today = new Date();

	if (
		localStorage.getItem("medox_access_token") === null ||
		localStorage.getItem("medox_access_token_expiry_date") < today.getTime()
	) {
		return new_token();
	} else {
		return localStorage.getItem("medox_access_token");
	}
}




const new_token = async () => {
	var user = "annova";
	var password = "Medox124";
	var loginURL = "https://demo.medox.scisys.de:8443/dira6/auth/v10/login";
	var tok = user + ":" + password;
	var hash = btoa(tok);
	var today = new Date();

	const response = await fetch(loginURL, {
		method: "GET",
		headers: {
			Authorization: "Basic " + hash,
			Accept: "application/json"
		}
	});
	const json = await response.json();
	localStorage.setItem("medox_access_token", json.access_token);
	var expiryDateTimeMS = today.getTime() + json.expires_in * 1000;
	localStorage.setItem("medox_access_token_expiry_date", expiryDateTimeMS);
	console.log(json.access_token);
	return json.access_token;
}

