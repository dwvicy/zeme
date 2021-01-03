// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import nc from 'next-connect'

const handler = nc()
  .get((res, req) => {
    req.json({message: 'okay'})
  })
  .post((res, req) => {
    req.json({message: 'posted'})
  })

export default handler
// export default (req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'application/json')
//   res.end(JSON.stringify({ message: 'hello' }))
// }
