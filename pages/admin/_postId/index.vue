<template>
	<div class="admin-post-page">
		<section class="update-form">
			<AdminPostForm :post="loadedPost"/>
		</section>
	</div>
</template>

<script>
import AdminPostForm from '@/components/Admin/AdminPostForm'

export default {
	components: {
		AdminPostForm
	},
	data() {
		return {
			loadedPost: {
				author: 'Art',
				title: 'My awesome post',
				content: 'Super amazing',
				thumbnailLink: 'https://www.maketecheasier.com/assets/uploads/2019/01/intermediate-tech-feature.jpg'
			}
		}
	}
}
</script>