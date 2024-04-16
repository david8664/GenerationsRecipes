export default function Foot() {
  return (
     <footer className="bg-gray-800 text-white py-6 px-4">
       <div className="container mx-auto">
         <div className="flex justify-between items-center">
           <div className="text-sm">
             &copy; {new Date().getFullYear()} GenerationsRecipes. All rights
             reserved.
           </div>
           <nav className="space-x-4">
             <a href="#" className="hover:underline text-sm">
               Terms of Service
             </a>
             <a href="#" className="hover:underline text-sm">
               Privacy Policy
             </a>
           </nav>
         </div>
       </div>
     </footer>
  );
 }