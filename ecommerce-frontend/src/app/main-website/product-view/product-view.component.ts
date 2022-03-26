import { Component, OnInit , Input} from '@angular/core';
import {HomeComponent} from '../home/home.component';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss']
})
export class ProductViewComponent implements OnInit {
  images: any; 
  responsiveOptions: any;

  constructor() {
            this.responsiveOptions = [{
            breakpoint: '1024px',
            numVisible: 1,
            numScroll: 3
        }];
   }

  ngOnInit():  void {
        this.images = [
            {random: 'Random', picture: 'https://picsum.photos/id/944/900/500'},
            {random: 'Samoa', picture: 'https://picsum.photos/id/1011/900/500'},
            {random: 'Tonga', picture: 'https://picsum.photos/id/984/900/500'},
            {random: 'Cook Island', picture: 'https://picsum.photos/id/944/900/500'},
            {random: 'Niue', picture: 'https://picsum.photos/id/1011/900/500'},
            {random: 'American Samoa', picture: 'https://picsum.photos/id/984/900/500'}
        ];
    }
}
