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

        <button @click="postSubmit" class="btn btn-success mt-3">Submit</button>
    </div>
</template>

<script>
import PostService from '../../services/PostService.js'

export default {
    name: 'post-add',

    data() {
        return {
            post: {
                id : null,
                title: "",
                description: "",
                publisher: "",
                published: false
            }
        }
    },

    methods: {
        postSubmit() {
            let data = {
                title : this.post.title,
                description: this.post.description,
                publisher : this.post.publisher
            }

            //console.log(data)
            PostService.createPost(data)
                .then((result) => {
                    this.post.id = result.data.id
                    this.$router.push({ name: 'view-list' }) // Redirect to route /list
                    console.log(result)
                }).catch((err) => {
                    console.log(err)
                })


        }
    }
}
</script>