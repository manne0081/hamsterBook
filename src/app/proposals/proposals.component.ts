import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proposals',
  templateUrl: './proposals.component.html',
  styleUrls: ['./proposals.component.scss']
})
export class ProposalsComponent implements OnInit {
    names = [
        'Marius',
        'Franziska',
        'Josefine',
        'Patrick',
        'Franziska',
        'Josefine',
    ];
    descriptions = [
        '2 Jahre alt',
        'Gräbt gerne',
        'Spielt gerne',
        'Hamsterrad-Freak',
        'Gräbt gerne',
        'Spielt gerne',
    ];
    images = [
        'assets/img/hamsters/pic1.jpg',
        'assets/img/hamsters/pic2.jpg',
        'assets/img/hamsters/pic3.jpg',
        'assets/img/hamsters/pic4.jpg',
        'assets/img/hamsters/pic2.jpg',
        'assets/img/hamsters/pic3.jpg',
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
