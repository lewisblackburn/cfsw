export async function handleRequest(request: Request): Promise<Response> {
  const reqURL = new URL(request.url)
  return Response.redirect('https://paypal.me/sadzxffo/' + reqURL.pathname, 301)
}
