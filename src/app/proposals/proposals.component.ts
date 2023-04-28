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
        'Patrick'
    ];
    descriptions = [
        '2 Jahre alt',
        'Gräbt gerne',
        'Spielt gerne',
        'Hamsterrad-Freak'
    ];
    images = [
        'assets/img/hamsters/pic1.jpg',
        'assets/img/hamsters/pic2.jpg',
        'assets/img/hamsters/pic3.jpg',
        'assets/img/hamsters/pic4.jpg',
    ];

    constructor() { }

    ngOnInit(): void {
    }

}
