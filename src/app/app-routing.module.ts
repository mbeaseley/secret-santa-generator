import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`./home/home.module`).then((m) => m.HomeModule),
  },
  {
    path: 'create',
    loadChildren: () => import(`./create/create.module`).then((m) => m.CreateModule),
  },
  {
    path: 'view',
    loadChildren: () => import(`./view/view.module`).then((m) => m.ViewModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
