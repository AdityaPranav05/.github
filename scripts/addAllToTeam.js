import fetch from "node-fetch";

export default async function addAllToTeam(OWNER, TOKEN) {
  await console.log("Adding all to team");

  // get all team members
  const teamMembers = await fetch(`https://api.codinasion.org/members`).then(
    (res) => res.json()
  );

  // invite all members to the team
  for (const member of teamMembers) {
    await console.log(`Inviting ${member.username} to the team :)`);
    await fetch(
      `https://api.github.com/orgs/${OWNER}/teams/everyone/memberships/${member.username}`,
      {
        method: "PUT",
        headers: {
          Authorization: `token ${TOKEN}`,
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
  }
}
