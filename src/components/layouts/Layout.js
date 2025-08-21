import Header from "./Header";

function Layout({ children }) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />

            <main className="flex-grow overflow-y-auto">
                <div className="container mx-auto px-4 py-8">
                    {children}
                </div>
            </main>

            
        </div>
    );
};

export default Layout;