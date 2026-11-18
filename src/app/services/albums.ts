// import { Service } from '@angular/core';

// @Service()
// export class Albums {}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AlbumsService {
//   private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

//   constructor(private http: HttpClient) {}

//   // Метод для отримання масиву альбомів із сервера
//   getAlbums(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }
// }


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AlbumsService {
//   private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

//   constructor(private http: HttpClient) {}

//   getAlbums(): Observable<any[]> {
//     return this.http.get<any[]>(this.apiUrl);
//   }
// }





// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import { map, tap } from 'rxjs/operators';

// // Одразу зрозуміло, що ми імпортуємо звичайний клас
// import { Album } from '../album.class'; 

// @Injectable({
//   providedIn: 'root'
// })
// export class AlbumsService {
//   private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

//   constructor(private http: HttpClient) {}

//   getAlbums(): Observable<Album[]> {
//     return this.http.get<any[]>(this.apiUrl).pipe(
//       tap(rawData => console.log('Дані до перетворення (з userId):', rawData)),
//       map(albums => albums.map(item => new Album(item.id, item.title)))
//     );
//   }
// }



import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Album } from '../album.class'; // Підключаємо наш клас

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/albums';

  constructor(private http: HttpClient) {}

  // ================= ЗАВДАННЯ 1 (Не чіпаємо) =================
  getAlbums(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  // ================= ЗАВДАННЯ 2 (НОВЕ) =================
  getAlbumsTask2(): Observable<Album[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      // Виводимо в консоль масив ДО перетворення (як вимагає умова)
      tap(rawData => console.log('Завдання 2 (ДО перетворення, з userId):', rawData)),
      
      // Перетворюємо кожен елемент на об'єкт класу Album (відсіюємо userId)
      map(albums => albums.map(item => new Album(item.id, item.title)))
    );
  }
}