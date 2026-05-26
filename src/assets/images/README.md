# Assets — Lerobotica

Coloca aquí las imágenes finales. Los componentes ya tienen comentarios con las rutas de importación.

## Estructura

```
images/
├── logo/
│   ├── logo-full.png      # Logo completo (reemplaza texto en Navbar)
│   └── robot-icon.svg     # Icono del robot (opcional, ya hay SVG en código)
├── navbar/
│   └── (capturas o assets específicos del navbar)
└── header/
    ├── hero-main.png      # Ilustración principal del hero
    └── hero-bg.png        # Fondo del header (opcional)
```

## Cómo sustituir

1. **Logo**: en `Navbar.jsx`, importa `logo-full.png` y descomenta el `<img>`.
2. **Hero**: en `Header.jsx`, importa `hero-main.png` y reemplaza el placeholder.
3. **Fondo**: importa `hero-bg.png` y úsalo como `background-image` en la sección.
