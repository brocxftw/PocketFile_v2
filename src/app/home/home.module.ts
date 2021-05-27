import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { Routes, RouterModule } from '@angular/router';


import { HomePageRoutingModule } from './home-routing.module';

// const routes: Routes = [
//   {
//     path: 'home',
//     component: HomePage,
//     children: [
//       {
//         path: 'schedule',
//         loadChildren: () => import('../pages/schedule/schedule.module').then( m => m.SchedulePageModule),
//         // pathMatch: 'full',
//       },
//       {
//         path: 'contacts',
//         loadChildren: () => import('../pages/contacts/contacts.module').then( m => m.ContactsPageModule),
//         // pathMatch: 'full',
//       },
//       {
//         path: 'references',
//         loadChildren: () => import('../pages/references/references.module').then( m => m.ReferencesPageModule)
//       },
//       {
//         path: 'settings',
//         loadChildren: () => import('../pages/settings/settings.module').then( m => m.SettingsPageModule)
//       },
//       {
//         path: 'profile',
//         loadChildren: () => import('../pages/profile/profile.module').then( m => m.ProfilePageModule)
//       },
//       {
//         path: '',
//         redirectTo: '/home/schedule',
//         // pathMatch: 'full',
//       },
      
//     ]
//   },
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
