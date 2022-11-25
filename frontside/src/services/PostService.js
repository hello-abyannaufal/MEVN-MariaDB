import http from "../http"

class PostService {
    getAll() {
        return http.get('/posts') // Get endpoints from backside
    }

    get(id){
        return http.get(`/posts/${id}`)
    }
    
    createPost(data) {
        return http.post('/posts', data)
    }

    updatePost(id, data) {
        return http.put(`/posts/${id}`, data)
    }

    deletePost(id) {
        return http.delete(`/posts/${id}`)
    }

    purgePosts() {
        return http.delete('/posts')
    }
}

export default new PostService