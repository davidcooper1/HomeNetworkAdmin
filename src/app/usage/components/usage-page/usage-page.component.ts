import { Component, OnInit, Input } from '@angular/core';
import { UsageHistory } from '../../shared/models/usage/UsageHistory';
import { LiveUsageService } from '../../services/live-usage.service';
import { UsageUpdate } from '../../shared/models/usage/UsageUpdate';
import { Device } from '../../shared/models/Device';

@Component({
  selector: 'app-usage-page',
  templateUrl: './usage-page.component.html',
  styleUrls: ['./usage-page.component.less']
})
export class UsagePageComponent implements OnInit {

  @Input()
  public deviceUsageHistories: UsageHistory[];

  constructor(private _liveUsageService: LiveUsageService) {}

  ngOnInit(): void {
    this._liveUsageService.getInitialData().subscribe((data: UsageHistory[]) => {      
      this.deviceUsageHistories = data;

      this._liveUsageService.getNewlyConnectedDevices().subscribe((device: Device) => {
        this.deviceUsageHistories.push({
          device: device,
          intranetUsageHistory: [],
          internetUsageHistory: []
        });
      });

      this._liveUsageService.getDisconnectedDevices().subscribe((device: Device) => {
        const index = this.deviceUsageHistories.findIndex((deviceUsageHistory) => {
          return deviceUsageHistory.device === device;
        });
      });

      this._liveUsageService.getUpdatedUsage().subscribe((usageUpdates: UsageUpdate[]) => {
        usageUpdates.forEach(function (update) {
          const index = this.deviceUsageHistories.findIndex((history) => {
            return history.device.macAddress == update.macAddress;
          });
          this.deviceUsageHistories[index].intranetUsageHistory.push(update.intranetFrame);
          this.deviceUsageHistories[index].internetUsageHistory.push(update.internetFrame);

          if (this.deviceUsageHistories[index].intranetUsageHistory.length > 20) {
            this.deviceUsageHistories[index].intranetUsageHistory.splice(0, 1);
          }

          if (this.deviceUsageHistories[index].internetUsageHistory.length > 20) {
            this.deviceUsageHistories[index].internetUsageHistory.splice(0, 1);
          }
        }.bind(this));
      });
    });
  }

}
