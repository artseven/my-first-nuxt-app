<template>
	<div class="single-post">
		<section class="post">
			<h1 class="post-title">{{ loadedPost.title }}</h1>
			<div class="post-details">
				<div class="post-detail">Last updated on {{ loadedPost.updatedDate }}</div>
				<div class="post-detail">Written by {{ loadedPost.author }}</div>
			</div>
			<p class="post-content">{{ loadedPost.content }}</p>
		</section>
		<section class="post-feedback">
			<p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@feedback.com">feedback@feedback.com</a></p>
		</section>
	</div>
</template>

<script>
export default {
  asyncData(context, callback) {
    setTimeout(() => {
      callback(null, {
        loadedPost: {
          id: "5",
          title: "Bearrusia (ID: " + context.params.id  + ")",
          previewText: 'Tfw your bear is waiting at home',
          author: 'Art',
          updatedDate: new Date(),
          content: 'Some dummy text',
          thumbnail: 'https://media.giphy.com/media/Zd11ZERqDyA6CA8vxO/giphy.gif',
		  	}
      })
    },1000)
  }
}
</script>

<style>
.single-post-page {
  padding: 30px;
  text-align: center;
  box-sizing: border-box;
}

.post {
  width: 100%;
}

@media (min-width: 768px) {
  .post {
    width: 600px;
    margin: auto;
  }
}

.post-title {
  margin: 0;
  text-align: center;
}

.post-details {
  padding: 10px;
  box-sizing: border-box;
  border-bottom: 3px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 768px) {
  .post-details {
    flex-direction: row;
  }
}

.post-detail {
  color: rgb(88, 88, 88);
  margin: 0 10px;
}

.post-feedback {
	text-align: center;
}

.post-feedback a {
  color: red;
  text-decoration: none;
}

.post-feedback a:hover,
.post-feedback a:active {
  color: salmon;
}
</style>