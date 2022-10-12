import core from "@actions/core";

// main action function
(async () => {
  try {
    console.log("Hii there !!!");

    // get action default data
    const OWNER = await core.getInput("OWNER");
    const REPO = await core.getInput("REPO");

    const TOKEN = await core.getInput("TOKEN");

    const ADD_ALL_TO_TEAM = await core.getInput("ADD_ALL_TO_TEAM");

    if (ADD_ALL_TO_TEAM === "true") {
      console.log("Adding all to team");
    }

    // end of main function
  } catch (e) {
    core.setFailed(`Action failed with "${e.message}"`);
  }
})();
