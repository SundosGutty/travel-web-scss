import { Component } from '@angular/core';

@Component({
  selector: 'company-details-section',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent {
  featuresList =[
    {
      title: 'Explore the world',
      icon: 'fa fa-globe',
      subtitle:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda soluta exercitationem'
    },
    {
      title: 'Meet nature',
      icon: 'fa fa-compass',
      subtitle:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda soluta exercitationem'
    },
    {
      title: 'Find your way',
      icon: 'fa fa-map-o',
      subtitle:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda soluta exercitationem'
    },
    {
      title: 'Live a healthier life',
      icon: 'fa fa-heart-o',
      subtitle:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda soluta exercitationem'
    }
  ]
  tours=  [
    {
      title: 'The Sea Explorer',
      details: [
        '3 day tours', 'Up to 30 people', '2 tour guides', 'Sleep in cozy hotels', 'Difficulty: easy'
      ],
      price: 256,
      frontPicClass: 'card__picture--1',
      subTitleClass: 'card__heading-span--1',
      backPiClass: 'card__side--back-1'
    },
    {
      title: 'The Forest Hiker',
      details: ['7 day tours', 'Up to 40 people', '6 tour guides', 'Sleep in provided tents', 'Difficulty: medium<'
        
      ],
      price: 497,
      frontPicClass: 'card__picture--2',
      subTitleClass: 'card__heading-span--2',
      backPiClass: 'card__side--back-2'
    },
    {
      title: 'The Snow Adventurer',
      details: ['5 day tours', 'Up to 15 people', '3 tour guides', 'Sleep in provided tents', 'Difficulty: hard'
        
      ],
      price: 894,
      frontPicClass: 'card__picture--3',
      subTitleClass: 'card__heading-span--3',
      backPiClass: 'card__side--back-3'
    }

  ]
  clientsStories =[
   { 
     clientName:'Mary Smith',
     title: "I has the best week with my family",
     paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, perferendis. Non ratione iste magnam qui nesciunt fuga maiores magni, ut dolorem temporibus a tempore. Incidunt laborum aperiam unde consequatur Labore. Incidunt laborum aperiam unde consequatur. Labore",
     img:"../../assets/img/nat-8.jpg"
  },
  { 
    clientName:'Jack Wilson',
    title: "WOW! MY LIFE IS COMPLETELY DIFFERENT NOW",
    paragraph: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi, perferendis. Non ratione iste magnam qui nesciunt fuga maiores magni, ut dolorem temporibus a tempore. Incidunt laborum aperiam unde consequatur Labore. Incidunt laborum aperiam unde consequatur. Labore",
    img:"../../assets/img/nat-9.jpg"
 },
  ]

}
