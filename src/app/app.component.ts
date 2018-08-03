import { Component, NgZone, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app';
  dataList: any = [1];
  param:any = {
    a:1
  }
  constructor(private zone: NgZone) {

  }
  ngOnChanges() {
    console.log('app-component, ngOnChanges');
  }
  ngOnInit() {
    this.zone.runOutsideAngular(() => {
      //this.dataList.push(this.dataList.length+1);
    });
    console.log('app-component, ngOnInit');
  }
  ngDoCheck(){
    console.log('app-component, ngDoCheck');
  }
  ngAfterContentInit() {
    console.log('app-component, ngAfterContentInit');
  }
  ngAfterContentChecked() {
    console.log('app-component, ngAfterContentChecked');
  }
  ngAfterViewInit() {
    console.log('app-component, ngAfterViewInit');
  }
  ngAfterViewChecked() {
    console.log('app-component, ngAfterViewChecked');
  }
  ngDestroy(){
    console.log('app-component, ngDestroy');
  }
  add() {
    this.dataList.push(this.dataList.length + 1);
    this.param.a = this.dataList.length;
  }
}
