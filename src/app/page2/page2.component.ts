import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class Page2Component implements OnInit {
  @Input('param') private param:any;

  dataList: any = [1];

  constructor() { }

  ngOnChanges() {
    console.log('page-2-component, ngOnChanges');
  }
  ngOnInit() {
    console.log('page-2-component, ngOnInit');
  }
  ngDoCheck() {
    console.log('page-2-component, ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('page-2-component, ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('page-2-component, ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('page-2-component, ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('page-2-component, ngAfterViewChecked');
  }
  ngDestroy() {
    console.log('page-2-component, ngDestroy');
  }
  add() {
    this.dataList.push(this.dataList.length + 1);
  }

}
