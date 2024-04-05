// import { Component } from '@angular/core';
// declare var $: any;

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.scss'
// })
// export class AppComponent {
//   title = 'ETradeClient';
// }
// $(document).ready(()=>{
//   alert("alertt")
// })


import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ETradeClient';

  ngOnInit() {
    $(document).ready(() => {
      alert("alertt");
    });
  }
}

