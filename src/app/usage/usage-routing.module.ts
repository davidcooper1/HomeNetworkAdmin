import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsagePageComponent } from './components/usage-page/usage-page.component';


const routes: Routes = [
  { path: '', component: UsagePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsageRoutingModule { }
