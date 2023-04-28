import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FriendService {
    names = [
    ];
    descriptions = [
    ];
    images = [
    ];

    constructor() { }

    // addFriend ('Peter', 'Hallo', '/assets/img/hamsters/pic1.jpg')
    addFriend(name: string, description: string, image: string): void {
        this.names.push(name);
        this.descriptions.push(description);
        this.images.push(image);
    }
}
