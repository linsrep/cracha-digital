const LinksSocialMedia = {
  github: 'iwasrep',
  youtube: '',
  facebook: 'iwasrep',
  instagram: 'iwasrep_',
  twitter: 'diogolins018',
  linkedin: 'iwasbr'
}

/** MOSTRANDO CARD DO GITHUB */
function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

if (LinksSocialMedia.github)
  getGitHubProfileInfos()

/** CARREGAR REDES SOCIAIS */
function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    const url = social;

    li.children[0].href = `https://${url}.com/${LinksSocialMedia[social]}`
  }

  console.log(LinksSocialMedia)

  /* const social = `<li class="social-icons-youtube"><a href="https://youtube.com/iwasrep" target="_blank"><i class="icon-social-youtube"></i></a></li>`;

  socialLinks.textContent = social; */
}

changeSocialMediaLinks()