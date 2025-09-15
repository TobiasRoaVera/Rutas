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
  // Array de productos
  productos = [
    {
      nombre: 'Bruschetta',
      precio: 5.00,
      descripcion: 'Pan tostado con tomate fresco, albahaca y aceite de oliva. Ideal como entrada ligera.',
      imagen: 'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      nombre: 'Sopa de Tomate',
      precio: 4.50,
      descripcion: 'Una sopa cremosa de tomate con hierbas frescas.',
      imagen: 'https://images.pexels.com/photos/4106483/pexels-photo-4106483.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      nombre: 'Ensalada César',
      precio: 6.50,
      descripcion: 'Clásica ensalada con pollo, crutones y aderezo césar.',
      imagen: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      nombre: 'Pasta Alfredo',
      precio: 12.00,
      descripcion: 'Pasta cremosa con salsa Alfredo y queso parmesano.',
      imagen: 'https://images.pexels.com/photos/1279330/pexels-photo-1279330.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      nombre: 'Sushi Variado',
      precio: 15.00,
      descripcion: 'Selección de rolls, nigiris y sashimi fresco.',
      imagen: 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=600'
    }
  ];

  agregarAlCarrito(producto: any) {
    alert(`${producto.nombre} ha sido agregado al carrito.`);
  }
}

