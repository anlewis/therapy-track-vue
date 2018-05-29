import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import SignIn from '@/components/SignIn';
import SignUp from '@/components/SignUp';
import Appointments from '@/components/Appointments';
import Appointment from '@/components/Appointment';
import AppointmentNew from '@/components/AppointmentNew';
import AppointmentUpdate from '@/components/AppointmentUpdate';
import AppointmentDelete from '@/components/AppointmentDelete';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/users/sign_in',
      name: 'SignIn',
      component: SignIn,
    },
    {
      path: '/users/sign_up',
      name: 'SignUp',
      component: SignUp,
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
      path: '/appointments/new',
      name: 'AppointmentNew',
      component: AppointmentNew,
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
