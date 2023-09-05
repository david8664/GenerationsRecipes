import Image from "next/image";

async function getPost(){
const resulte=await fetch(`https://jsonplaceholder.typicode.com/posts`)
const post=resulte.json()
return post
}
export default async function Home() {
  
  const allPost= await getPost()
  // console.log(allPost)

return (
    <main className="flex flex-col items-center justify-between p-24">
      <div>main {allPost?.map((post:any)=>{
        return <h1 key={post.id}>{post.title}</h1>
      })}</div>
      <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          Green to blue
        </span>
      </button>
     
    </main>
  );
}
