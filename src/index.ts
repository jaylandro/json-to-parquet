const handleRequest = async function (request: Request): Promise<Response> {
  return new Response(`request method: YOYOYO ${request.method}`)
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})
