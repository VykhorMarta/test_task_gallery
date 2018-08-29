
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable()
export class GalleryService {
    
    constructor (
        private http: Http
      ) {}

      getInfo() {
        return this.http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo')
          .pipe(map((res:Response) => res.json().photos));
          
      }
        
      getRandomPrice(){
        for(let i=1; i <= 25; i++){
          let num = Math.floor((Math.random()* 1500) + 20);
          console.log(num)
          return [num];
        }
      }
        
    }
    
