import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import './Dashboard.css'; // Komponentenspezifisches Design laden

export default function Dashboard() {
  return (
    <Container className="py-5">
      {/* Header Bereich */}
      <header className="mb-5 text-center p-4 dashboard-header rounded-3 shadow-sm">
        <h1 className="display-5 fw-bold text-primary"><span aria-hidden="true">🏫 </span>Classroom-Manager</h1>
        <p className="lead text-muted">Projekt-Skeleton — Ausgangslage für FIAE Lernfelder 10a+11a</p>
        <span className="badge bg-success px-3 py-2">Status: Fullstack-Verbindung aktiv</span>
      </header>

      {/* Grid für das Mini-Dashboard */}
      <Row className="g-4">
        {/* Linke Spalte: Status & Sandbox */}
        <Col md={6}>
          <Card className="h-100 shadow-sm border-0 sandbox-card">
            <Card.Header as="h2" className="bg-primary text-white fw-bold fs-6">
              <span aria-hidden="true">🧪 </span>Live-Schnittstelle & API-Test
            </Card.Header>
            <Card.Body className="d-flex flex-column justify-content-between">
              <div>
                <Card.Text>
                  Im Hintergrund läuft bereits ein automatischer Verbindungsaufbau zum Node.js-Backend mittels <strong>Axios</strong>.
                </Card.Text>
                <div className="p-3 bg-dark text-warning rounded-2 font-monospace small mb-3">
                  // Finde diesen Code unter:<br />
                  frontend/src/sandbox/apiTest.ts
                </div>
              </div>
              <div>
                <h3 className="fw-bold text-muted fs-6 mb-2">Arbeitsauftrag für den Einstieg:</h3>
                <p className="small text-muted mb-3">
                  Öffne die Entwicklertools deines Browsers mit <strong>F12</strong> und wechsle in die <strong>Konsole (Console)</strong>. Dort siehst du die importierten Daten aus der Express-API.
                </p>
                <Button 
                  variant="outline-primary" 
                  onClick={() => window.location.reload()} 
                  className="w-100"
                >
                  API-Abfrage erneut triggern
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Rechte Spalte: Nächste Schritte */}
        <Col md={6}>
          <Card className="h-100 shadow-sm border-0 steps-card">
            <Card.Header as="h2" className="bg-secondary text-white fw-bold fs-6">
              <span aria-hidden="true">🚀 </span>Nächste Entwicklungsschritte
            </Card.Header>
            <Card.Body>
              <Card.Text>
                Nutze dieses bereinigte Skelett, um die Anwendung schrittweise im Unterricht zu erweitern:
              </Card.Text>
              <ListGroup variant="flush" className="small">
                <ListGroup.Item>
                  <strong>1. UI-Komponenten bauen:</strong> Erstelle eine Schüler-Tabelle in <code>src/components/</code> und binde sie hier ein.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>2. State Management:</strong> Nutze Reacts <code>useState</code> und <code>useEffect</code>, um die Axios-Daten direkt im Dashboard-Layout anzuzeigen.
                </ListGroup.Item>
                <ListGroup.Item>
                  <strong>3. Backend erweitern:</strong> Erstelle im Express-Backend neue POST- oder PUT-Routen, um Schüler hinzuzufügen oder zu bearbeiten.
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Footer */}
      <footer className="mt-5 pt-3 text-muted text-center border-top small">
        &copy; 2026 Classroom-Manager Skeleton • BBS 2 Leer - Smit
      </footer>
    </Container>
  );
}