import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class Page1Component implements OnInit {
  @Input('param') private param:any;
  
  dataList: any = [1];

  constructor() { }

  ngOnChanges() {
    console.log('page-1-component, ngOnChanges');
  }
  ngOnInit() {
    console.log('page-1-component, ngOnInit');
  }
  ngDoCheck() {
    console.log('page-1-component, ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('page-1-component, ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('page-1-component, ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('page-1-component, ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('page-1-component, ngAfterViewChecked');
  }
  ngDestroy() {
    console.log('page-1-component, ngDestroy');
  }
  add() {
    this.dataList.push(this.dataList.length + 1);
  }

}
