import { Component } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class AppNavigationComponent {
  navigationElements =[
    {
      num: '01', 
      section: 'About Natous',
    },
    {
      num: '02', 
      section: 'Your benfits',
    }, 
    {
      num: '03', 
      section: 'About Natous',
    },
    {
      num: '04', 
      section: 'Stories',
    },
    {
      num: '05', 
      section: 'Book now',
    },

  ]
}
