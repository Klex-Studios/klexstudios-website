# Klex Studios – Navigation und Animationen

## Einbauen

Dieses Update baut auf dem letzten Paket „Startseite + Elixa – mehr Inhalt“ auf.
Die vorhandenen Logos und Bilder werden weiterverwendet.

1. Falls `npm run dev` läuft: im Terminal mit Strg+C stoppen.
2. Die ZIP entpacken.
3. Die enthaltenen Ordner `app`, `components` und `lib` in die Wurzel von
   `Klexstudios-website` kopieren – dorthin, wo deine `package.json` liegt.
4. Ordner zusammenführen und gleichnamige Dateien ersetzen. Vorhandene
   Ordner nicht vorher löschen. `components` und `lib` liegen neben `app`.
5. Im Projektterminal `npm run build` ausführen.
6. Anschließend `npm run dev` starten und `/de` sowie `/de/elixa` öffnen.

Es sind keine neuen Pakete und keine Änderungen an der package.json nötig.
`public`, Übersetzungen, Texte, Links und die Entwicklungsstände bleiben erhalten.
Die mitgelieferten CSS- und FAQ-Dateien entsprechen dem vorhandenen Inhaltsstand.

## Was neu ist

- Einheitliche schwebende Navigation mit Glasoptik und aktiver Seitenmarkierung.
- Beim Scrollen verdichtet sich der Header; eine dünne Linie zeigt den Lesefortschritt.
- DE/EN als kompakter Schalter. Beim Wechsel bleibt die gewählte Unterseite erhalten.
- Auf Handy und Tablet: aufklappbares Menü mit allen sieben Navigationszielen.
- Escape schließt das Menü; der Fokus kehrt zum Menüschalter zurück.
- Startseite: leicht schwebender Hero, sanfter Einstieg und atmosphärische Farblichter.
- Startseite und Elixa: Abschnitte blenden beim Scrollen einmal ein.
- Karten reagieren auf die Maus mit Licht und leichter Neigung; Buttons mit einem Glanzlauf.
- Elixas vorhandene Logo-Vorschau bekommt eine sanfte Bewegung im äußeren Ring.
- Bei „Bewegung reduzieren“ entfallen die Animationen. Auf Touch-Geräten gibt es
  keine Maus-Neigung; Inhalte und das native Handy-Menü funktionieren auch ohne JavaScript.

Die gemeinsame Navigation gilt auch für Noxa, Reson und die rechtlichen Seiten.
Die stärkeren Effekte bleiben auf Startseite und Elixa beschränkt.
Die Inhalte von Noxa, Reson, Impressum und Datenschutz wurden nicht geändert.
Es werden keine neuen Funktionen oder Veröffentlichungsdaten behauptet.

## Prüfung

Die Dateien wurden in einer isolierten Next.js-16-Prüfumgebung mit TypeScript
gebaut und im Browser geprüft. Das ist kein Build deines vollständigen lokalen
Projekts; dessen package.json, Konfiguration und weitere Komponenten liegen
hier nicht vollständig vor. Der ungenutzte ursprüngliche SiteHeader mit dem
nicht mitgelieferten language-switcher wurde nur aus der Prüfumgebung entfernt.
Er wird in deinem Projekt nicht ersetzt oder gelöscht.

60 Ansichten bestanden: 1440, 1001, 768, 390 und 320 Pixel, jeweils in DE/EN
für Startseite, Elixa, Noxa, Reson, Impressum und Datenschutz/Privacy.
Menü, Escape, Fokusführung, Sprach- und Produktwechsel, Ankerlinks,
Einblendungen, reduzierte Bewegung und der Betrieb ohne JavaScript wurden geprüft.
Alle bisherigen Übersetzungen und dargestellten Produkttexte sind erhalten.

Screenshots, eine kurze Animationsvorschau als MP4 und das Prüfprotokoll
liegen unter `vorschau`.
