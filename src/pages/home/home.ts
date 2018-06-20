import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { PusherProvider } from '../../providers/pusher/pusher';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements OnInit {
  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    private pusher: PusherProvider
  ) {}

  options = {
    germany: { name: 'Germany', votes: 0 },
    spain: { name: 'Spain', votes: 0 },
    france: { name: 'France', votes: 0 },
    nigeria: { name: 'Nigeria', votes: 0 },
  };
  optionsArray = Object.keys(this.options);
  chartData = this.optionsArray.map((val) => this.options[val].votes);
  selectedOption = '';
  chartType = 'doughnut';
  voted = false;

  selectOption(option) {
    this.selectedOption = option;
  }

  computeData(option) {
    this.options = {
      ...this.options,
      [option]: {
        ...this.options[option],
        votes: ++this.options[option].votes,
      },
    };
    this.chartData = this.optionsArray.map((val) => this.options[val].votes);
  }

  vote() {
    if (this.selectedOption) {
      this.http
        .post('http://localhost:4000/vote', { option: this.selectedOption })
        .subscribe((res) => {
          this.voted = true;
        });
    }
  }

  ngOnInit() {
    const channel = this.pusher.init();
    channel.bind('new-entry', (data) => {
      this.computeData(data.option);
    });
  }
}
