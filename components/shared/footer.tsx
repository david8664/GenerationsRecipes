const Foot = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-sm">
            &copy; {new Date().getFullYear()} GenerationsRecipes. כל הזכויות
            שמורות.
          </div>
          <nav className="space-x-4 flex flex-col w-fit mr-4">
            <a href="/auth/termsOfService" className="hover:underline text-sm ml-4">
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
};
export default Foot;
