import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
  path: '',
  // component: LayoutContainerComponent,
  canActivate: [AuthGuard],
  children: [
     
    { path: '', redirectTo: '/auth/login', pathMatch: 'full' },

   
    {
      path: 'main',
      loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    }, 
    {
      path: 'yahad',
      loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    }, 
    {
      path: 'pages',
      loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    },
    {
      path: 'apps',
      loadChildren: () => import('./apps/apps.module').then(m => m.AppsModule),
    },
   
  ]
  },
   {
      path: 'auth',
      loadChildren: () => import('./main/auth/auth.module').then(m => m.AuthModule)
},




{ path: 'operator', loadChildren: () => import('./main/operator/operator.module').then(m => m.OperatorModule) },
{ path: 'member', loadChildren: () => import('./main/member/member.module').then(m => m.MemberModule) },
{ path: 'maintenance', loadChildren: () => import('./pages/extra-pages/maintenance/maintenance.module').then(m => m.MaintenanceModule) },
{ path: 'upcoming', loadChildren: () => import('./pages/extra-pages/upcoming/upcoming.module').then(m => m.UpcomingModule) },
{ path: 'error-404', loadChildren: () => import('./pages/extra-pages/error404/error404.module').then(m => m.Error404Module) },
{ path: 'error-404-two', loadChildren: () => import('./pages/extra-pages/error404two/error404two.module').then(m => m.Error404twoModule) },
{ path: 'error-500-two', loadChildren: () => import('./pages/extra-pages/error500two/error500two.module').then(m => m.Error500twoModule) },
{ path: 'error-500', loadChildren: () => import('./pages/extra-pages/error500/error500.module').then(m => m.Error500Module) },
{ path: 'landing', loadChildren: () => import('./pages/landing/landing.module').then(m => m.LandingModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
