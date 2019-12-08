import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  weatherArray = [];
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.get().subscribe((data: any[]) => {
      console.log(data);
      this.weatherArray.push(data);
    });
  }
  reset() {
    history.go(0);
    window.location.href = window.location.href;
  }

}
