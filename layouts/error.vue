<template>
  <div class="error-page">
    <h1>Oops, something went wrong!</h1>
    <h2> Error type: {{ error.statusCode }}</h2>
    <p>Back to <a href="/">safety</a>!</p>

  </div>
</template>

<script>

export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  }
}

</script>
<style scoped>
.error-page {
  text-align: center;
}

.error-page a {
  text-decoration: none;
  color: red;
}

.error-page a:hover,
.error-page a:active {
  color: salmon;
}
</style>
