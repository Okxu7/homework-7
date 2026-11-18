import { Component, OnInit } from '@angular/core';
import { AlbumsService } from './services/albums';
import { Album } from './album.class'; // Імпорт нашого класу

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  albumsList: any[] = []; // Змінна для Завдання 1
  albumsListTask2: Album[] = []; // Змінна для Завдання 2

  constructor(private albumsService: AlbumsService) {}

  ngOnInit(): void {
    // Виклик для Завдання 1
    this.albumsService.getAlbums().subscribe(data => {
      this.albumsList = data;
    });

    // Виклик для Завдання 2
    this.albumsService.getAlbumsTask2().subscribe(data => {
      console.log('✅ Завдання 2 (ПІСЛЯ перетворення, без userId):', data);
      this.albumsListTask2 = data;
    });
  }
}