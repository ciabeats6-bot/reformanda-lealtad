# Sitio web · Reformanda

Todo lo que se publica en internet vive aquí (se puede subir tal cual a Netlify, Vercel o GitHub Pages).

| Página | Quién la usa | Qué hace |
|---|---|---|
| `registro/` | Cliente (escanea el QR de la barra) | Formulario: nombre, celular, correo y cumpleaños opcionales → crea su tarjeta |
| `tarjeta/` | Cliente | Su tarjeta con sellos y el QR para caja. Se actualiza sola cada 8 s mientras está abierta |
| `caja/` | Barista | Escanea el QR, pone sellos y canjea premios (ver `caja/LEEME.md`) |

- `config.js`: dirección de Supabase y llave pública.
- `comun.css`: estilos del registro y la tarjeta.
- `img/`: logo y banderines de 0 a 6 sellos.

## Cómo funciona la tarjeta sin Apple ni Google Wallet
Al registrarse, el cliente recibe un link privado (`tarjeta/?t=...`) que queda guardado en su teléfono.
Si la agrega a su pantalla de inicio, se abre como una app. Más adelante, cuando haya cuenta de
Apple Developer y de Google Wallet, se agregan los botones "Agregar a Wallet" en esta misma página.

## Probar en la Mac
```bash
python3 -m http.server 5173 --directory "/Users/jorgegarcia/Documents/reformanda pass/sitio"
```
- Registro: http://localhost:5173/registro/
- Caja: http://localhost:5173/caja/

## Pendiente
- Aviso de privacidad completo (lo pide la ley en México cuando se guardan datos personales).
- Límite de registros por minuto si alguien intenta llenar la base con basura.
