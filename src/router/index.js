import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Appointments from '@/components/Appointments';
import Appointment from '@/components/Appointment';
import AppointmentUpdate from '@/components/AppointmentUpdate';
import AppointmentDelete from '@/components/AppointmentDelete';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/appointments',
      name: 'Appointments',
      component: Appointments,
    },
    {
      path: '/appointments/:id',
      name: 'Appointment',
      component: Appointment,
    },
    {
      path: '/appointments/:id/edit',
      name: 'AppointmentUpdate',
      component: AppointmentUpdate,
    },
    {
      path: '/appointments/:id/delete',
      name: 'AppointmentDelete',
      component: AppointmentDelete,
    },
  ],
});
