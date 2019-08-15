<template>
	<div class="posts-page">
		<PostList :posts="preloadedPosts"/>
	</div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
	components: {
		PostList
	},
	asyncData(context) {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve({
					preloadedPosts: [
						{
							id: "5",
							title: 'Bearrusia',
							thumbnail: 'https://media.giphy.com/media/Zd11ZERqDyA6CA8vxO/giphy.gif',
							previewText: 'Tfw your bear is waiting at home'
						}
					]
				});
			}, 2000);
		})
		.then(data => {
			return data;
		})
		.catch(e => {
			context.error(new Error())
		})
		
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