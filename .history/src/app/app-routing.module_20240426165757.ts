import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { authGuard } from "./auth/auth.guard";
import { LayoutContainerComponent } from './layout/layout-container.component';


const routes: Routes = [
  {
    path: "",
    component: LayoutContainerComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: '/main/login', pathMatch: 'full' },
      {
        path: "main",
        loadChildren: () =>
          import("./main/main.module").then((m) => m.MainModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
