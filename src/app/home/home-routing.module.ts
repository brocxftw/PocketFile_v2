import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  // {
  //   path: '',
  //   component: HomePage,
  // },
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'schedule',
        loadChildren: () => import('../pages/schedule/schedule.module').then( m => m.SchedulePageModule),
        pathMatch: 'full',
      },
      {
        path: 'contacts',
        loadChildren: () => import('../pages/contacts/contacts.module').then( m => m.ContactsPageModule),
        pathMatch: 'full',
      },
      {
        path: 'references',
        loadChildren: () => import('../pages/references/references.module').then( m => m.ReferencesPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../pages/settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
      },
      
      {
        path: '',
        redirectTo: '/home/schedule',
        // pathMatch: 'full',
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
