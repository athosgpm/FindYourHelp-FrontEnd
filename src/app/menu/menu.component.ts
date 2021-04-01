import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  header_variable=false;
  @HostListener("document:scroll")
  scrollfunction(){
      if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0 ){
          this.header_variable=true;
      }
      else{
          this.header_variable=false;
      }
  }


}
