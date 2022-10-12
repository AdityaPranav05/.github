import fetch from "node-fetch";

import sleep from "./sleep.js";

export default async function addAllToTeam(OWNER, TOKEN) {
  await console.log("Adding all to team");

  // // get all team members
  // const teamMembers = await fetch(`https://api.codinasion.org/members`).then(
  //   (res) => res.json()
  // );

  // // invite all members to the team
  // for (const member of teamMembers) {
  //   await console.log(`Inviting ${member.username} to the team :)`);
  //   await fetch(
  //     `https://api.github.com/orgs/${OWNER}/teams/everyone/memberships/${member.username}`,
  //     {
  //       method: "PUT",
  //       headers: {
  //         Authorization: `token ${TOKEN}`,
  //         Accept: "application/vnd.github.v3+json",
  //       },
  //     }
  //   );
  // }

  // get all contributors
  const contributors = await fetch(
    `https://api.codinasion.org/contributors`
  ).then((res) => res.json());

  // invite all contributors to the team
  for (const contributor of contributors) {
    await console.log(`Inviting ${contributor.username} to the team :)`);
    await fetch(
      `https://api.github.com/orgs/${OWNER}/teams/everyone/memberships/${contributor.username}`,
      {
        method: "PUT",
        headers: {
          Authorization: `token ${TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );

    // wait for 2 second
    // to prevent github api secondary rate limit
    await sleep(2000);
  }
}
