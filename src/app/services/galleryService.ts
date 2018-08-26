
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';

@Injectable()
export class GalleryService {
    
    constructor (
        private http: Http
      ) {}

      getInfo() {
        return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
        .subscribe((res:Response) => res.json());
        
      }

    
    
      // console(){
      // var req = new Request('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo');
      // fetch(req)
      // .then(function(response) {
      //   console.log(response.json());
      // })}
    }
    
