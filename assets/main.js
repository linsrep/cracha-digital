const LinksSocialMedia = {
  github: 'iwasrep',
  youtube: '',
  facebook: '',
  instagram: '',
  twitter: '',
  linkedin: '',
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
  const size = Object.keys(LinksSocialMedia).length
  const obj = Object.keys(LinksSocialMedia)
  const lista = document.querySelector('#socialLinks')

  for (let i = 0; i < size; i++) {
    let social = `<li class="social-icons-${obj[i]}"><a href="https://${obj[i]}.com/${LinksSocialMedia[obj[i]]}" target="_blank"><i class="icon-social-${obj[i]}"></i></a></li>`;
    lista.innerHTML += social
  }
}

changeSocialMediaLinks()