<template>
    <div>
        <div class="form-group">
            <label for="">Title</label>
            <input type="text" id="title" class="form-control" v-model="post.title">
        </div>
        <div class="form-group">
            <label for="">Publisher</label>
            <input type="text" id="publisher" class="form-control" v-model="post.publisher">
        </div>
        <div class="form-group">
            <label for="">Description</label>
            <textarea id="description" cols="10" rows="4" class="form-control" v-model="post.description"></textarea>
        </div>

        <div class="form-group">
            <label for="">Status: </label> {{ post.published }}
        </div>

        <button @click="update()" class="btn btn-success mt-3 mx-1">Update</button>

        <button 
        class="btn btn-primary mt-3 mx-1"
        v-if="post.published"
        @click="togglePublish(false)">
            Unpublish
        </button>
        <button 
        class="btn btn-primary mt-3 mx-1"
        v-else 
        @click="togglePublish(true)">Publish</button>
        <button @click="postDelete()" class="btn btn-danger mt-3 mx-1">Delete</button>
        <p>{{ message }}</p>
    </div>
</template>

<script>
    import PostService from '../../services/PostService';
    export default {
        name: 'post-update',

        data() {
            return {
                post: {
                    id : null,
                    title: "",
                    description: "",
                    publisher: "",
                    published: false
                },
                message: '',
            }
        },

        mounted() {
            this.getPost(this.$route.params.id)

        },

        methods: {
            getPost(id) {
                PostService.get(id)
                    .then((result) => {
                        this.post = result.data
                        console.log(result.data)
                    }).catch((err) => {
                        console.log(err)
                    })
            },

            update() {
                PostService.updatePost(this.post.id, this.post)
                    .then((result) => {
                        this.message = 'The post was updated!'
                        console.log(result.data)
                    }).catch((err) => {
                        console.logg(err)
                    })
            },

            togglePublish(status) {
                this.post.published = status
                this.update()
            },

            postDelete() {
                PostService.deletePost(this.post.id)
                .then((result) => {
                    console.log(result.data)
                    this.$router.push({ name: 'view-list' })
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
    }
</script>
