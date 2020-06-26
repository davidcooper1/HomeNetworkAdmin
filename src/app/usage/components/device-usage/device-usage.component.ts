import { Component, OnInit, Input } from '@angular/core';
import { UsageHistory } from '../../shared/models/usage/UsageHistory';

@Component({
  selector: 'app-device-usage',
  templateUrl: './device-usage.component.html',
  styleUrls: ['./device-usage.component.less']
})
export class DeviceUsageComponent implements OnInit {

  @Input()
  deviceUsageHistory: UsageHistory;

  constructor() { }

  ngOnInit(): void {
    console.log(this.deviceUsageHistory.internetUsageHistory);
  }

}
