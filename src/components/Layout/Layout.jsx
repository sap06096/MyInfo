import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
  // const location = useLocation();
  // const isTermsPage = location.pathname.startsWith("/terms/");

  // const handleKvSectionVisibilityChange = useCallback((isVisible) => {
  //   setIsKvSectionVisible(isVisible);
  // }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {/* {!isTermsPage && (
        <KvSection onVisibilityChange={handleKvSectionVisibilityChange} />
      )} */}
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
