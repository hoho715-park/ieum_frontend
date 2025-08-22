import Header from "./Header";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="overflow-y-auto">
                <div className="container mx-auto px-4 py-8 mb-8">
                    {children}
                </div>
            </main>

           <Footer /> 
        </div>
    );
};

export default Layout;