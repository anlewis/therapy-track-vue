import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import SignIn from '@/components/SignIn';
import SignOut from '@/components/SignOut';

import Appointments from '@/components/Appointments';
import Appointment from '@/components/Appointment';
import AppointmentNew from '@/components/AppointmentNew';
import AppointmentUpdate from '@/components/AppointmentUpdate';
import AppointmentDelete from '@/components/AppointmentDelete';

import Report from '@/components/Report';
import ReportNew from '@/components/ReportNew';
import ReportBasicNew from '@/components/ReportBasicNew';
import ReportWellnessNew from '@/components/ReportWellnessNew';
import ReportAnxietyNew from '@/components/ReportAnxietyNew';
import ReportDepressionNew from '@/components/ReportDepressionNew';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: SignIn,
    },
    {
      path: '/sign-out',
      name: 'SignOut',
      component: SignOut,
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
    {
      path: '/reports/new',
      name: 'ReportNew',
      component: ReportNew,
    },
    {
      path: '/reports/:report_id/basic-info',
      name: 'ReportBasicNew',
      component: ReportBasicNew,
    },
    {
      path: '/reports/:report_id/wellness-info',
      name: 'ReportWellnessNew',
      component: ReportWellnessNew,
    },
    {
      path: '/reports/:report_id/anxiety-screening',
      name: 'ReportAnxietyNew',
      component: ReportAnxietyNew,
    },
    {
      path: '/reports/:report_id/depression-screening',
      name: 'ReportDepressionNew',
      component: ReportDepressionNew,
    },
    {
      path: '/reports/:report_id',
      name: 'Report',
      component: Report,
    },
  ],
});
