import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { HomeBaseComponent } from './components/home-base/home-base.component';

const routes: Routes = [{ path: '', component: HomeBaseComponent }];

@NgModule({
  declarations: [HomeBaseComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class HomeModule {}
