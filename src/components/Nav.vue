<template>
  <div> 
    <!-- <h2>Therapy Track</h2> 
    <nav> 
      <router-link :to="{ name: 'Home' }">About</router-link>
      <router-link :to="{ name: 'Appointments' }">Appointments</router-link>
      <router-link :to="{ name: 'Home' }">Reports</router-link>
      <router-link :to="{ name: 'SignOut' }">Sign Out</router-link>
    </nav>  -->

    <b-navbar toggleable="md" type="dark" variant="info">

      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

      <b-navbar-brand href="/">Therapy Track</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item href="/about">About</b-nav-item>

        <b-nav-item-dropdown text="Appointments" right>
          <b-dropdown-item href="appointments/new">New Appointment</b-dropdown-item>
          <b-dropdown-item href="/appointments">All Appointments</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown text="Reports" right>
          <b-dropdown-item href="reports/new">New Report</b-dropdown-item>
          <b-dropdown-item href="/reports">Report History</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item href="/sign-out">Sign Out</b-nav-item>

      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

  </div>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style>
</style>