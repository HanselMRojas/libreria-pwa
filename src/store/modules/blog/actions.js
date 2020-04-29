import Blog from '../../blog'
import { errorHandler } from '../../utils'

export async function listarPublicaciones ({ commit }, query = {}) {
  try {
    const post = await Blog.posts.browse(query)
    commit('SETEAR_PUBLICACIONES', post)
  } catch (error) {
    errorHandler(error, commit, {
      show: true,
      right: true,
      bottom: true,
      errors: {}
    })
  }
}
