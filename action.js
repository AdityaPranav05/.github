import core from "@actions/core";

import addAllToTeam from "./scripts/addAllToTeam.js";
import inviteUser from "./scripts/inviteUser.js";

// main action function
(async () => {
  try {
    console.log("Hii there !!!");

    // get action default data
    const OWNER = await core.getInput("OWNER");
    const REPO = await core.getInput("REPO");

    const TOKEN = await core.getInput("TOKEN");

    const ADD_ALL_TO_TEAM = await core.getInput("ADD_ALL_TO_TEAM");

    const INVITE_USER = await core.getInput("INVITE_USER");
    const USERNAME = await core.getInput("USERNAME");
    const ISSUE_NUMBER = await core.getInput("ISSUE_NUMBER");

    if (ADD_ALL_TO_TEAM === "true") {
      await addAllToTeam(OWNER, TOKEN);
    }

    if (INVITE_USER === "true") {
      await inviteUser(OWNER, REPO, TOKEN, USERNAME, ISSUE_NUMBER);
    }

    // end of main function
  } catch (e) {
    core.setFailed(`Action failed with "${e.message}"`);
  }
})();
