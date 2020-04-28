import Blog from '../../blog'

export async function listarPublicaciones ({ commit }, query = {}) {
  try {
    let post = await Blog.posts.browse(query)
    commit('SETEAR_PUBLICACIONES', post)
  } catch (error) {
    throw (error)
  }
}
