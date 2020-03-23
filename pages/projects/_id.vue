<template>
  <p>page</p>
</template>
<script>
export default {
  validate({ params }) {
    return !isNaN(+params.id)
  },
  async asyncData({ params, error }) {
    try {
      console.log('PARAMS', params)
      // const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${+params.id}`)
      await 'wait'
      return
    } catch (e) {
      error({ message: 'User not found', statusCode: 404 })
    }
  }
}
</script>
