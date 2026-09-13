export const onRequest = ({ request, next }) => {
  const url = new URL(request.url);
  if (url.hostname.endsWith('.pages.dev') || url.hostname === 'www.vertniche.com') { url.hostname = 'vertniche.com'; return Response.redirect(url.toString(), 301); }
  if (url.pathname.startsWith('/go/')) return new Response(null, { status: 204 });
  return next();
};
