<template>
  <slot name="header">
      <div>
          <button class="logout" @click="logout">Logout</button>
      </div>
  </slot>
</template>

<script>
export default {
    name: 'main-layout'
}
</script>

<style>

</style>