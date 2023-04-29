## Descripción

Resume, pregunta y transcribe cualquier lilbro o PDF.

## Ejecutar en local

Primero, instalar las dependencias:

```bash
npm install
# or
yarn
# or
pnpm install
```

Segundo, correr el servidor de desarrollo:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Para el API, necesitas un api_key de [https://platform.openai.com/account/api-keys](https://platform.openai.com/account/api-keys) OpenAI. Para luego crear un archivo `.env.local` en la raíz del proyecto con el siguiente contenido:

```bash
api_key=YOUR_API_KEY
```

