import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import type { SwiperOptions } from 'swiper';

// 👇 Importa los módulos extra de Swiper
import SwiperCore, { Navigation, Pagination } from 'swiper';

// 👇 Registra los módulos
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-adios-mundo',
  standalone: true,
  imports: [CommonModule, SwiperModule],
  templateUrl: './adios-mundo.component.html',
  styleUrls: ['./adios-mundo.component.css']
})
export class AdiosMundoComponent {

  // 👇 Configuración del Swiper
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: true, // activa flechas
    pagination: { clickable: true }, // activa paginación
    breakpoints: {
      640: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  };
}

