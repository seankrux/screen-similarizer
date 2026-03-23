export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="container mx-auto px-4 text-center text-sm">
        <p className="mb-1">&copy; {new Date().getFullYear()} Nonprofit Template. All rights reserved.</p>
        <p>Made with &#x1F49B; by Sean G</p>
      </div>
    </footer>
  );
};
