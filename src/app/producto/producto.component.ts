import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
  // Aquí puedes añadir lógica como recibir datos desde el router o un servicio
  producto = {
    nombre: 'Bruschetta',
    precio: 5.00,
    descripcion: 'Pan tostado con tomate fresco, albahaca y aceite de oliva.',
    imagen: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600'
  };

  agregarAlCarrito() {
    console.log(`${this.producto.nombre} agregado al carrito`);
  }
}
