<template>
	<div class="posts-page">
		<PostList :posts="loadedPosts"/>
	</div>
</template>

<script>
export default {
	components: {
	},
	computed: {
		loadedPosts() {
			return this.$store.getters.loadedPosts
		}
	}
}
</script>

<style>
.posts-page {
	display: flex;
	justify-content: center;
	align-items: center;

}

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>