import http from "../http"

class PostService {
    getAll() {
        return http.get('/posts') // Get endpoints from backside
    }

    createPost(data) {
        return http.post('/posts', data)
    }
}

export default new PostService