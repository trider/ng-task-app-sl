import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [

  {
  path: '',
  // component: LayoutContainerComponent,
  // canActivate: [AuthGuard],
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






];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
