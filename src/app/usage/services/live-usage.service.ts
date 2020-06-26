import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';
import { UsageHistory } from '../shared/models/usage/UsageHistory';
import { Subject, Observable } from 'rxjs';
import { Device } from '../shared/models/Device';
import { UsageUpdate } from '../shared/models/usage/UsageUpdate';

@Injectable({
  providedIn: 'root'
})
export class LiveUsageService {

  private socket = io('http://localhost:8000', {
    path: '/api/live-usage'
  });
  private initData = new Subject<UsageHistory[]>();
  private connects = new Subject<Device>();
  private disconnects = new Subject<Device>();
  private updates = new Subject<UsageUpdate[]>();

  constructor() { 
    this.socket.on('usage-init-data', (data: UsageHistory[]) => {
      this.initData.next(data);
    });
    this.socket.on('usage-connect', (device: Device) => {
      this.connects.next(device);
    });
    this.socket.on('usage-disconnect', (device: Device) => {
      this.disconnects.next(device);
    });
    this.socket.on('usage-data', (usageData: UsageUpdate[]) => {
      this.updates.next(usageData);
    });
  }

  getInitialData(): Observable<UsageHistory[]> {
    return this.initData.asObservable();
  }

  getNewlyConnectedDevices(): Observable<Device> {
    return this.connects.asObservable();
  }

  getDisconnectedDevices(): Observable<Device> {
    return this.disconnects.asObservable();
  }

  getUpdatedUsage(): Observable<UsageUpdate[]> {
    return this.updates.asObservable();
  }


}