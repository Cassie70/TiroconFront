import { Component } from '@angular/core';
import { InfoCardSimple } from "../../components/info-card-simple/info-card-simple";
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index',
  imports: [InfoCardSimple, FormsModule, RouterLink],
  templateUrl: './index.html',
  styleUrl: './index.css'
})
export class Index {

  inputValue: string = '';
/*
  constructor(private apiSerive: TiroconApi){}

  ngOnInit(): void {
    this.apiSerive.getAllArchers().subscribe(archers => {
      console.log(archers);
    });
  }
    */
}
