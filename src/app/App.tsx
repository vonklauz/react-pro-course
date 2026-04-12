import "./App.css";
import { AppRouter } from "widgets/appRouter/ui/AppRouter";
import { AuthProvider } from "shared/features/authRouting";

function App() {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}

export default App;
