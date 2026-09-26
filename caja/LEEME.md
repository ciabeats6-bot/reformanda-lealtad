# Pantalla de caja · Reformanda

Página web para que el barista ponga sellos y canjee premios. Funciona en iPad, iPhone o Android desde el navegador.

## Flujo
1. El barista entra con su correo y contraseña (tiene que estar en la tabla `personal`).
2. Escanea el QR del pase con la cámara (o escribe el número, ej. `12` → `RFM-000012`).
3. Ve el nombre y los sellos del cliente → **Poner sello**.
4. Con la tarjeta llena aparece **Canjear premio** (pide confirmación).
5. A los 6 segundos vuelve sola al escáner.

## Probar en la Mac
```bash
python3 -m http.server 5173 --directory "/Users/jorgegarcia/Documents/reformanda pass/sitio"
```
y abre http://localhost:5173/caja/

## Para usarla en la cafetería
La cámara solo funciona con **HTTPS**, así que hay que publicar la carpeta `caja/` (Netlify, Vercel o GitHub Pages, todos gratis). En el iPad: Compartir → "Agregar a pantalla de inicio" para que se abra como app.

La llave de Supabase que está en `index.html` es la pública: es segura porque la base solo deja hacer algo a personal con sesión iniciada.
