import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './views/Dashboard/Dashboard';

function App() {
  return (
    <div className="app-layout">
      {/* Hier könnte später eine globale Navigationsleiste stehen (<Navigation />) */}
      
      <main>
        <Dashboard />
      </main>

      {/* Hier könnte später ein globaler Footer stehen */}
    </div>
  );
}

export default App;