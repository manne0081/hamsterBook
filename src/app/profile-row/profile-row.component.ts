import { Component, Input, OnInit } from '@angular/core';
import { FriendService } from '../friend.service';

@Component({
    selector: 'app-profile-row',
    templateUrl: './profile-row.component.html',
    styleUrls: ['./profile-row.component.scss']
})

export class ProfileRowComponent implements OnInit {
    @Input() name: string = 'Frederik';
    @Input() description: string = '3 Jahre alt';
    @Input() image: string = '/assets/img/hamsters/pic1.jpg';
    @Input() canFollow: boolean = true;

    constructor(public friendService: FriendService) { }

    ngOnInit(): void {
    }


}
