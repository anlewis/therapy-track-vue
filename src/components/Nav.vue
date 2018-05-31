<template>
  <div> 
    <h2>Nav Bar</h2> 
    <nav> 
      <router-link :to="{ name: 'Appointments' }">Appointments</router-link>
    </nav> 
  </div>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style>
</style>