const LinksSocialMedia = {
  github: "RogerRG171",
  linkedin: "roger-goulart-do-nascimento-54b3845a",
  gmail: "roger.goulart.nascimento@gmail.com",
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute("class");
    if (social === "gmail") {
      li.children[0].href = `mailto:${LinksSocialMedia[social]}`;
    } else {
      li.children[0].href = `https://${social}.com/in/${LinksSocialMedia[social]}`;
    }
  }
}

changeSocialMediaLinks();

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      userName.textContent = data.name;
      userBio.textContent = data.bio;
      userLink.href = data.html_url;
      userImage.src = "images/me.png";
      userLogin.textContent = "@roger";
    })
    .catch((err) => alert(err));
}

getGitHubProfileInfos();
