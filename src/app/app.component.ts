import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Data1=" ";
  public Myaction()
  {
    this.Data1="MARVELLOUS INFOSYSTEMS";
  }

  public Action()
  {
    this.Data1="marvellous infosystems"
  }
}
