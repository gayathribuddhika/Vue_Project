<template>
    <div>
        <h1><center>Contact Information</center></h1>
        <div>
            <h3>Address</h3>
            
            <hr>
            <div class="post" 
            v-for="post in posts" 
            v-bind:item="post"
            v-bind:key="post._id"
            >
                <p class="text">{{ post.Address }}</p>
            </div>
        </div>
        <div>
            <h3>Location</h3>
            
            <hr>
            <div class="post" 
            v-for="post in posts" 
            v-bind:item="post"
            v-bind:key="post._id"
            >
                <p class="text">{{ post.Location }}</p>
            </div>
            
        </div>
        <div>
            <h3>Telephone</h3>
            
            <hr>
            <div class="post" 
            v-for="post in posts" 
            v-bind:item="post"
            v-bind:key="post._id"
            >
                <p class="text">{{ post.number }}</p>
            </div>
            
        </div>
    </div>
   

</template>

<script>
import PostService from '../PostService';

export default {
  name: 'Contacts',
  data() {
    return {
      posts: [],
      Address: ''
    }
  },
  async created() {
      this.posts = await PostService.getPosts();
  },
  
  methods: {
    async createPost() {
      await PostService.insertPost(this.text);
      this.posts = await  PostService.getPosts();
    },
    async deletePost(id) {
      await PostService.deletePost(id);
      this.posts = await  PostService.getPosts();
    }
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.post {
  margin-left: 100px;
}

p.text {
  font-size: 18px;
  font-weight: 100;
  
}

h3 {
    margin-left: 50px;
}
</style>