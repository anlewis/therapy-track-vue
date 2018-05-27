<template>
 <div id="appointments">
  <div v-for="(appointment, index) in appointments" :key="appointment.id">
   <p>My Appointment: {{appointment.summary}}</p>
  </div>
 </div>
</template>