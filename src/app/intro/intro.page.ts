import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@capacitor/storage';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit{

  slideOpt = {
    initialSlide: 0, //slide inicial
    slidesPerView: 1, //slide por vista
    centeredSlides: true, //que las slides esten centradas
    speed: 400 //velocidad de transicion de casa slide en milisegundo
  }

  slides = [
    {
      title: "Music dj",
      subtitle: "Luisca DJ",
      icon: "musical-notes-outline",
      img: "assets/images/slide1.jpg",
      description: "La mejor musica de los mejores Dj del mundo"
    },
    {
      title: "Music dj",
      subtitle: "Luisca DJ",
      icon: "musical-note-outline",
      img: "assets/images/slide2.jpg",
      description: "a todo volumen sigue el ritmo de nuestra app"
    },
    {
      title: "Music dj",
      subtitle: "Luisca DJ",
      icon: "play-outline",
      img: "assets/images/slide3.jpeg",
      description: "La mejor plataforma de todos los tiempos en musica"
    },
    {
      title: "Music dj",
      subtitle: "Luisca DJ",
      icon: "play-outline",
      img: "assets/images/slide4.jpeg",
      description: "Con conciertos en vivos incluidos"
    }
  ]

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  finish() {
    Storage.set({key: "isIntroShowed", value: 'true'});
    this.router.navigateByUrl("/login");
  }

}
