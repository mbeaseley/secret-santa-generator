import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CreateBaseComponent } from './components/create-base/create-base.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [{ path: '', component: CreateBaseComponent }];

@NgModule({
  declarations: [CreateBaseComponent],
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
})
export class CreateModule {}
