// Wow cool!
// You can write API routes right inside a Next.js app
// Docs - https://nextjs.org/docs/api-routes/introduction
// Dynamic API Routes - https://nextjs.org/docs/api-routes/dynamic-api-routes

export default (req, res) => {
  res.status(200).json({ text: 'Hello' });
};
