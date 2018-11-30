import { Component, OnInit } from '@angular/core';
import { DataserviceService } from 'src/app/services/dataservice.service';
//import 'rxjs/Rx';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tick = 0;
  constructor(private dataService: DataserviceService, ) { }
  orders: any = [];
  ngOnInit() {

    //timer.subscribe(t => this.tick = t);
    this.dataService.getOrders().subscribe(data => {
      this.orders = data;
      console.log(this.orders);
    });
  }
}
