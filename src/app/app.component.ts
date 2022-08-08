import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'cooking-map';

  ngOnInit(): void {
    let loader = new Loader({
      apiKey: 'AIzaSyBvzomIKwgvGfO5E0ulL-XgExoAta1MjpI'
    })

    loader.load().then(() => {
      const location = { lat: 51.233334, lng: 	6.783333 }

      new google.maps.Map(document.getElementById("map")!, {
        center: location,
        zoom: 6
      })
    })
  }

}
