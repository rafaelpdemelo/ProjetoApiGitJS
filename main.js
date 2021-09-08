;(function () {
  const search = document.getElementById('search')
  const profile = document.getElementById('profile')
  const url = 'https://api.github.com/users'
  const client_id = '-'
  const client_secret = '-'

  async function pegarUsuario(user) {
    const profileResponse = await fetch(
      `${url}/${user}?client_id=${client_id}&client_secrets=${client_secret}`
    )

    const profile = profileResponse.json()

    return profile
  }

  function mostrarPerfil(user) {
    profile.innerHTML = `<div class="row">
    <div class="col-md-4">
      <div class="card" style="width: 18rem">
        <img src="${user.avatar_url}" class="card-img-top" />
        <ul class="list-group list-group-flush">
          <li class="list-group-intem">Repositórios do Usuário<span class="badge badge-success">${user.public_repos}</span></li>
          <li class="list-group-intem">Seguidores do Usuário: <span class="badge badge-primary">${user.followers}</span></li>
          <li class="list-group-intem">Usuários que ${user.login} segue: <span class="badge badge-info">${user.following}</span></li>
        </ul>
        <div class="card-body">
          <a href="${user.html_url}" target="_blank" class="btn btn-warning btn-block">Ver perfil</a>
        </div>
      </div>
    </div>
    <div class="col-md-8">
      <div id="repos"></div>
    </div>
  </div>`
  }

  search.addEventListener('keyup', e => {
    const user = e.target.value

    if (user.length > 0) {
      pegarUsuario(user).then(res => mostrarPerfil(res))
    }
  })
})()
