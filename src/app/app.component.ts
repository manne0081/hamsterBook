import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
    hamstersImages = [
        'assets/img/hamsters/pic1.jpg',
        'assets/img/hamsters/pic2.jpg',
        'assets/img/hamsters/pic3.jpg',
        'assets/img/hamsters/pic4.jpg'
    ];

    hamstersText = [
        'Hallo, mein Name ist Frederik! Ich bin hier, um neue Freunde zu treffen!',
        'Hallo zusammen. Freut mich, dass ihr hier seid!!',
        'Hey, mein Name ist Susanne. Ich bin 2 Jahre alt.',
        'Ich esse gerne Kekse.'
    ];

    buttonClicked():void {
        alert("Geklickt...");
    }
}
