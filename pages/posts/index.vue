<template>
	<div class="posts-page">
		<PostList />
	</div>
</template>

<script>
import PostList from '@/components/Posts/PostList'
export default {
	components: {
		PostList
	},
	asyncData(context, callback) {
		// console.log(context);
		// setTimeout(() => {
		// 	callback(null, {
		// 		preloadedPosts: [
		// 			{
		// 				id: "5",
		// 				title: 'Bearrusia',
		// 				thumbnail: 'https://media.giphy.com/media/Zd11ZERqDyA6CA8vxO/giphy.gif',
		// 				previewText: 'Tfw your bear is waiting at home'

		// 			}
		// 		]
		// 	})
		// }, 2000);
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