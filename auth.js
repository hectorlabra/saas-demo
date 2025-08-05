import NextAuth from "next-auth";

// Configuración mínima (agrega tus providers aquí)
const handler = NextAuth({
  providers: [],
});

// Exporta los handlers GET y POST
export const handlers = { GET: handler, POST: handler };
