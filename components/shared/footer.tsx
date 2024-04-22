export default function Foot() {
  return (
     <footer className="bg-gray-800 text-white py-6 px-4">
       <div className="container mx-auto">
         <div className="flex justify-between items-center">
           <div className="text-sm">
             &copy; {new Date().getFullYear()} GenerationsRecipes. כל הזכויות שמורות.
           </div>
           <nav className="space-x-4">
             <a href="/termsOfService" className="hover:underline text-sm ml-4">
             תנאי שירות
             </a>
             <a href="#" className="hover:underline text-sm">
             מדיניות פרטיות
             </a>
           </nav>
         </div>
       </div>
     </footer>
  );
 }