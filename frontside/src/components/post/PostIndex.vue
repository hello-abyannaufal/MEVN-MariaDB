<template>
    <div>

        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="input-group mb-3">
                    <input type="text" class="form-control">
                    <div class="input-group-append">
                        <button class="btn btn-outline-secondary mx-2" type="button">Search</button>
                    </div>
                </div>
            </div>
        </div>

        <div class="row justify-content-center">
            <div class="col-md-8">
                <h4>Posts List</h4>
                <div 
                    class="card mb-3"
                    v-for="(post, index) in posts" :key="index"
                >
                    <div class="card-body">
                        <h5 class="card-title">{{ post.title }}</h5>
                        <h6 class="card-text mb-2 text-mute"> {{ post.published ? 'Publish' : 'Unpublished' }}</h6>
                        <p class="card-text">{{ post.description }}</p>
                        <a :href="'list/' + post.id" class="card-link">Edit</a>
                    </div>
                </div>

                                
                <a class="btn btn-sm btn-success m-3" href="/add" role="button">
                    Add Book
                </a>
                
                <button @click="deleteAll()" class="btn btn-sm btn-danger m-3">
                    Remove All
                </button>

            </div>
        </div>

    </div>
</template>

<script>
import PostService from '../../services/PostService'

export default {
    name: 'post-list',

    data () {
        return {
            posts: [],
        }
    },

    methods: {
        retrievePosts() {
            PostService.getAll()
            .then((result) => {
                this.posts = result.data
                console.log(this.posts)
            }).catch((err) => {
                console.log(err)
            })
        },

        deleteAll() {
            PostService.purgePosts()
                .then((result) => {
                    console.log(result)
                }).catch((err) => {
                    console.log(err)
                })
        }
    },

    mounted() {
        this.retrievePosts();
    }
}

</script>