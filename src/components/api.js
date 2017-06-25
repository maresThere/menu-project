const API = 'https://api.graph.cool/simple/v1/cj2ic1lk3o6v60187a899o3gm'

const query = (body) => {
  return window.fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: `query { ${body} }` })
  }).then(r => r.json())
}
window.query = query

export { query }
