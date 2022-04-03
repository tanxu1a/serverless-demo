

addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request))
  })
  
  async function handleRequest(request) {
    let value = await KV.get('data');
  
    const data = {
      hello: 'world',
      data: value,
    };
  
    const json = JSON.stringify(data, null, 2);
  
    return new Response(json, {
        headers: {
          'content-type': 'application/json;charset=UTF-8',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': '*',
        },
      })
  }
  
  addEventListener('scheduled', event => {
    event.waitUntil(handleScheduled(event));
  });
  
  async function handleScheduled(event) {
    let value = await KV.get('data');
    await KV.put('data', ++value);
  }
  