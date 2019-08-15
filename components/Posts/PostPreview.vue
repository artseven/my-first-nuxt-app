<template>
	<nuxt-link v-bind:to="'/posts/' + 1" class="post-preview">
		<article>
			<div class="post-thumbnail" style="background-image: url(https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg)"></div>
			<div class="post-content">
			<h1>Post Title</h1>
			<p>Preview Text</p>
			</div>
		</article>
	</nuxt-link>
</template>

<style>
.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
}

a {
  text-decoration: none;
  color: black;
}

@media (min-width: 850px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
}

.post-content {
  padding: 10px;
  text-align: center;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}
</style>