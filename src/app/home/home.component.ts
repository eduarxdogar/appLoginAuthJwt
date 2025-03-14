import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  categories = [
    { name: 'Alimentacion' },
    { name: 'Fit' },
    { name: 'Higiene Personal' },
    { name: 'Cuidado de Mascotas' },
  ];

  products = [
    {
      title: 'Previoticos',
      subtitle: 'Cuidado Intestinal',
      description: 'Mejora la salud de tu intestino con prebioticos.',
      imageUrl: 'assets/previoticos.jpg',
    },
    {
      title: 'Proteina Vegetal',
      subtitle: 'Proteina de Soya',
      description: 'Proteina vegetal de soya para una dieta balanceada.',
      imageUrl: 'assets/verdex.jpg',
    },
    {
      title: 'Proteina En Polvo',
      subtitle: 'Crecimiento Muscular',
      description: 'Aumenta tu masa muscular con proteina de alta calidad.',
      imageUrl: 'assets/keto.jpg',
    },
  ];

  testimonials = [
    {
      message: 'Excelente servicio y productos de alta calidad.',
      author: 'Juan Pérez',
    },
    {
      message: 'Muy satisfecho con mi compra, lo recomiendo.',
      author: 'María García',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
