import User from '@/DL/models/User'
// create new ___
export async function POST(request, { params }) {
  const body = request.json() // {id, name, price}
  // connectToDB()
  // await User.create(body)

  // return response ({json})
  
  return new Response('Hello, Next.js!', {
    status: 200,
  })
  // OR
  return NextResponse.json({ name, email })
}
export async function GET(request, { params }) {

  const id = params.id // get id from the parmas
  //res =  DB connect() >> mongoose >> find by id
  return NextResponse.json({ id, title: "bla bla", body: "gagagag" })