<template>
  <div> 
    <h2>Therapy Track</h2> 
    <nav> 
      <router-link :to="{ name: 'Home' }">About</router-link>
      <router-link :to="{ name: 'Appointments' }">Appointments</router-link>
      <router-link :to="{ name: 'Home' }">Reports</router-link>
      <router-link :to="{ name: 'SignOut' }">Sign Out</router-link>
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