# 🐣 App de búsqueda de huevos de Pascua (16 códigos)

Aplicación web estática, pensada para usar en el celular, con una dinámica interactiva:

- La niña encuentra un huevo físico.
- Ingresa o escanea el código (`1` a `16`).
- La app muestra:
  - Mensaje de Pascua
  - Referencia bíblica
  - Pista para el siguiente huevo
  - Premio visual (emoji o imagen)
- Se va completando un álbum y un mapa aproximado por ubicaciones.

## Ejecutar localmente

Como es una app HTML/CSS/JS simple, podés abrir `index.html` directo.  
Si preferís servidor local:

```bash
python3 -m http.server 8080
```

Luego abrí: <http://localhost:8080>

## Personalizar pistas y mensajes

Dentro de la app hay un bloque **"Modo organizador"** donde podés editar los 16 huevos:

- Pista
- Ubicación (living, cocina, patio, etc.)
- Referencia bíblica
- Mensaje
- Emoji premio
- URL de imagen premio

La configuración y el progreso se guardan en `localStorage` del navegador.

## Publicación recomendada (simple)

Como esta app es estática, lo más fácil para publicarla es:

1. **GitHub Pages** (gratis, muy fácil)
2. **Netlify / Vercel** (arrastrás carpeta y listo)

### ¿APK sí o no?

- Para empezar: **no hace falta APK**.
- Si luego querés APK, podés envolver esta web como app usando **Capacitor** (Android Studio), manteniendo casi todo el código igual.

## Escaneo QR

El botón **Escanear QR** usa APIs del navegador (`BarcodeDetector` + cámara).  
Si el navegador no lo soporta, simplemente ingresá el número manualmente.

---

Si querés, en un siguiente paso te lo puedo dejar listo para:

- modo "solo juego" protegido por PIN para que no toquen configuración,
- ordenar una secuencia obligatoria (ej. no permitir 7 si no encontró 6),
- tema visual personalizado con nombre de tu hija y colores/fotos familiares.
