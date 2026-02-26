export async function GET(req) {
   const data = {
       message: 'Nihal is soooo cool',
       status: 'success'
   }


   return Response.json(data)
}
