<template>
	<div>
		<section class="post-list">
			<PostPreview 
				id="1"
				:is-admin="isAdmin"
				thumbnail="https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"
				title="Hello there!"
				previewText="This is my first post!" 
			/>
			<PostPreview 
				id="2"
				:is-admin="isAdmin"
				thumbnail="https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"
				title="Hello again!"
				previewText="This is my second post!" 
			/>
			<PostPreview 
				id="3"
				:is-admin="isAdmin"
				thumbnail="https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"
				title="Hi!"
				previewText="This is my third post!" 
			/>
		</section>
	</div>
</template>

<script>

import PostPreview from '@/components/Posts/PostPreview'

export default {
	components: {
		PostPreview
	},
	props: {
		isAdmin : {
			type: Boolean,
			default: false
		}
	}
}

</script>


<style scoped>

.post-list {
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>