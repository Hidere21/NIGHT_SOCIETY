import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NIGHT_SOCIETY';

  ngOnInit(){
    this.nav()
  }

  nav(){
    let l: any = window.location.href
    l = l.split('/')
    console.log(l)
    return l[3] === "laddig" || l[3] === "Login" || l[3] === "register"  ? false : true
  }
}
