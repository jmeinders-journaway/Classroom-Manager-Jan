# Fokus-Styleguide

Gilt für alle bedienbaren Elemente im Classroom-Manager. Umgesetzt im Prototyp
`frontend/prototypes/register/styles.css`.

## Die Regel

```css
:focus-visible {
  outline: 3px solid var(--cm-primary);
  outline-offset: 2px;
  border-radius: 2px;
}
```

Eine einzige Regel für alles: Eingabefelder, Radiobuttons, Buttons, Links. Kein
Element bekommt eine Sonderbehandlung, damit der Fokus überall gleich aussieht und
wiedererkennbar bleibt.

## Warum genau so

| Entscheidung | Begründung |
| --- | --- |
| `:focus-visible` statt `:focus` | `:focus` zeigt den Ring auch nach einem Mausklick. Das wirkt wie ein Fehler und verleitet Entwickler dazu, ihn ganz abzuschalten. `:focus-visible` zeigt ihn nur, wenn die Tastatur benutzt wird. |
| `outline` statt `border` oder `box-shadow` | `outline` belegt keinen Platz im Layout. Ein Rahmenwechsel würde die Seite bei jedem Tabben um ein bis zwei Pixel verschieben. |
| `3px` Dicke | 1px ist auf hochauflösenden Displays kaum sichtbar. 3px bleibt auch bei starker Helligkeit erkennbar. |
| `outline-offset: 2px` | Ohne Abstand verschmilzt der Ring mit dem Rahmen des Eingabefelds, besonders wenn beide farbig sind. Der Abstand trennt beides sichtbar. |
| Farbe `--cm-primary` | Bereits die Akzentfarbe des Produkts, dadurch keine zusätzliche Farbe im System. In beiden Themes definiert: `#1d4ed8` hell, `#7aa2ff` dunkel. |

## Was ausdrücklich verboten ist

`outline: none` ohne gleichwertigen Ersatz. Das ist der häufigste
Barrierefreiheits-Fehler überhaupt: Die Seite sieht für Maus-Nutzer aufgeräumter
aus, und wer ausschließlich mit der Tastatur arbeitet, sieht schlagartig nicht
mehr, wo er sich befindet. Wenn der Standard-Ring optisch nicht passt, wird er
ersetzt, nicht entfernt.

## Kontrastanforderung

WCAG 2.2 verlangt in Kriterium 1.4.11 (Non-text Contrast) mindestens **3:1**
zwischen dem Fokus-Indikator und dem angrenzenden Hintergrund.

| Theme | Fokusfarbe | Hintergrund | Kontrast |
| --- | --- | --- | --- |
| Hell | `#1d4ed8` | `#ffffff` | 6.70:1 |
| Dunkel | `#7aa2ff` | `#1a1f27` | 6.65:1 |

Beide Werte liegen mit dem Faktor gut zwei über der Anforderung von 3:1. Die
Zahlen sind nach der WCAG-Formel aus den relativen Luminanzen berechnet, nicht im
Browser gemessen.

## Fehler-Zustände

Ein ungültiges Feld bekommt zusätzlich einen roten Rahmen und einen Fehlertext,
aber der Fokus-Ring bleibt unverändert blau. Beides sind unterschiedliche
Informationen: Der Ring sagt „hier bist du gerade", der rote Rahmen sagt „hier
stimmt etwas nicht". Sie dürfen sich nicht gegenseitig überschreiben.

Die Fehlertexte werden mit `:user-invalid` eingeblendet, nicht mit `:invalid`.
`:invalid` würde jedes leere Pflichtfeld schon beim Laden der Seite rot markieren,
bevor überhaupt jemand etwas eingegeben hat.

## Mindestgrößen

| Element | Größe | Anforderung |
| --- | --- | --- |
| Button | mindestens 44px Höhe | WCAG 2.5.5 empfiehlt 44x44px |
| Radiobutton | 20px Steuerelement, Klickfläche durch das Label vergrößert | WCAG 2.5.8 verlangt mindestens 24x24px |

Das Label ist per `for`/`id` mit dem Radiobutton verknüpft und damit selbst
klickbar. Dadurch ist die tatsächliche Trefferfläche deutlich größer als das
Steuerelement.
