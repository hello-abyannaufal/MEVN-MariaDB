import http from "../http"

class PostService {
    getAll() {
        return http.get('/posts') // Get endpoints from backside
    }
}

export default new PostService