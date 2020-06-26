import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsageRoutingModule } from './usage-routing.module';
import { UsagePageComponent } from './components/usage-page/usage-page.component';
import { DeviceUsageComponent } from './components/device-usage/device-usage.component';


@NgModule({
  declarations: [UsagePageComponent, DeviceUsageComponent],
  imports: [
    CommonModule,
    UsageRoutingModule
  ]
})
export class UsageModule { }
