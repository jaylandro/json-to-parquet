export async function handleRequest(request: Request): Promise<Response> {
  return new Response(`request method: YOYOYO ${request.method}`)
}
