import type { Locale } from "@/lib/i18n";

export default function PrivacyContent({ locale }: { locale: Locale }) {
  if (locale === "de") {
    return (
      <>
        <section>
          <h2>1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website und im
            Zusammenhang mit der App Elixa ist:
          </p>
          <p>
            Kimi Kempe
            <br />
            Schlickelder Straße 294
            <br />
            49479 Ibbenbüren
            <br />
            Deutschland
          </p>
          <p>E-Mail: info.klexstudios@gmail.com</p>
        </section>

        <section>
          <h2>2. Allgemeine Hinweise zur Datenverarbeitung</h2>
          <p>
            Diese Datenschutzerklärung informiert darüber, welche personenbezogenen
            Daten beim Besuch der Website von Klex Studios und bei der Nutzung der App
            Elixa verarbeitet werden.
          </p>
          <p>
            Elixa kann grundsätzlich ohne eigenes Benutzerkonto verwendet werden. Eine
            Registrierung bei Klex Studios ist nicht erforderlich.
          </p>
          <p>
            Klex Studios verkauft keine personenbezogenen Daten und verwendet die in
            Elixa verarbeiteten Daten nicht für personalisierte Werbung.
          </p>
        </section>

        <section>
          <h2>3. Hosting und Server-Logfiles der Website</h2>
          <p>Diese Website wird bei Vercel gehostet.</p>
          <p>
            Anbieter ist Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723,
            United States.
          </p>
          <p>
            Beim Aufruf dieser Website kann Vercel automatisch technische Zugriffsdaten
            in Server-Logfiles verarbeiten. Dazu können insbesondere IP-Adresse, Datum
            und Uhrzeit des Zugriffs, aufgerufene Seite, Browser, Betriebssystem und
            technische Diagnoseinformationen gehören.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Das berechtigte Interesse
            liegt in der sicheren, stabilen und zuverlässigen Bereitstellung der Website.
          </p>
        </section>

        <section>
          <h2>4. Kontaktaufnahme per E-Mail</h2>
          <p>
            Wenn du per E-Mail Kontakt aufnimmst, werden die von dir übermittelten Daten
            verarbeitet, um deine Anfrage zu bearbeiten.
          </p>
          <p>
            Rechtsgrundlage ist abhängig vom Inhalt der Anfrage Art. 6 Abs. 1 lit. b
            DSGVO oder Art. 6 Abs. 1 lit. f DSGVO.
          </p>
        </section>

        <section>
          <h2>5. Cookies, Analyse und Werbung auf der Website</h2>
          <p>
            Diese Website verwendet derzeit keine Analyse-, Marketing- oder
            Tracking-Cookies und keine externen Trackingdienste wie Google Analytics
            oder Meta Pixel.
          </p>
        </section>

        <section>
          <h2>6. Elixa – lokal gespeicherte App-Daten</h2>
          <p>
            Für die Nutzung bestimmter Funktionen speichert Elixa Daten lokal auf deinem
            Gerät. Dazu können insbesondere gehören:
          </p>
          <ul>
            <li>eingegebene Spielernamen,</li>
            <li>optional ausgewählte Geschlechtsangaben von Spielern,</li>
            <li>ausgewählte Kartendecks,</li>
            <li>Spielstände und Spielfortschritt,</li>
            <li>die Auswahl des Hell- oder Dunkelmodus,</li>
            <li>Einstellungen für haptisches Feedback.</li>
          </ul>
          <p>
            Diese Daten werden für die genannten Spielfunktionen lokal auf deinem Gerät
            gespeichert und von Klex Studios nicht an einen eigenen Server übertragen.
          </p>
          <p>
            Lokal gespeicherte Daten können innerhalb der App geändert oder gelöscht
            werden. Sie werden grundsätzlich auch entfernt, wenn die App einschließlich
            ihrer lokalen App-Daten vom Gerät gelöscht wird.
          </p>
        </section>

        <section>
          <h2>7. Elixa Plus und In-App-Käufe</h2>
          <p>
            Elixa kann kostenpflichtige Funktionen oder Abonnements unter der
            Bezeichnung „Elixa Plus“ anbieten. Die Zahlungsabwicklung erfolgt über
            Google Play. Klex Studios erhält dabei keinen Zugriff auf vollständige
            Kreditkarten- oder Bankdaten.
          </p>
          <p>
            Zur Verwaltung, Prüfung und Wiederherstellung von Käufen wird RevenueCat
            eingesetzt. Anbieter ist RevenueCat, Inc., USA.
          </p>
          <p>
            Im Zusammenhang mit Elixa Plus können insbesondere Kauf- und
            Abonnementinformationen, der Status einer Berechtigung, technische
            Plattform- und Geräteinformationen sowie pseudonyme Kennungen verarbeitet
            werden. Diese Verarbeitung ist erforderlich, damit Elixa erkennen kann, ob
            ein Nutzer Zugriff auf Elixa Plus besitzt und damit Käufe wiederhergestellt
            werden können.
          </p>
          <p>
            Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, soweit die Verarbeitung zur
            Bereitstellung und Verwaltung gekaufter Funktionen erforderlich ist.
          </p>
        </section>

        <section>
          <h2>8. RevenueCat</h2>
          <p>
            RevenueCat verarbeitet Daten im Zusammenhang mit In-App-Käufen und
            Abonnements im Auftrag von Klex Studios. Dabei kann eine Verarbeitung in
            Staaten außerhalb der Europäischen Union, insbesondere in den USA,
            stattfinden.
          </p>
          <p>
            Für internationale Datenübermittlungen werden die jeweils anwendbaren
            rechtlichen Schutzmechanismen eingesetzt. Weitere Informationen findest du
            in den Datenschutzinformationen von RevenueCat.
          </p>
        </section>

        <section>
          <h2>9. Google Play</h2>
          <p>
            Beim Herunterladen von Elixa sowie bei In-App-Käufen oder Abonnements
            verarbeitet Google Daten in eigener Verantwortung. Dazu können insbesondere
            Google-Kontoinformationen, Geräteinformationen, Zahlungsinformationen sowie
            Kauf- und Transaktionsinformationen gehören.
          </p>
          <p>
            Umfang und Dauer dieser Verarbeitung richten sich nach den
            Datenschutzbestimmungen von Google und den Einstellungen des jeweiligen
            Google-Kontos.
          </p>
        </section>

        <section>
          <h2>10. Werbung und Tracking in Elixa</h2>
          <p>
            Elixa verwendet derzeit keine Werbenetzwerke und zeigt keine personalisierte
            Werbung an.
          </p>
          <p>
            Es werden derzeit keine zusätzlichen Analyse- oder Werbetracking-Dienste wie
            Google Analytics, Firebase Analytics oder Meta SDK eingesetzt.
          </p>
          <p>
            Sollten künftig entsprechende Dienste integriert werden, wird diese
            Datenschutzerklärung vor deren Einsatz entsprechend angepasst.
          </p>
        </section>

        <section>
          <h2>11. Geräteberechtigungen</h2>
          <p>
            Elixa benötigt für die grundlegenden Spielfunktionen derzeit keinen Zugriff
            auf Standort, Kontakte, Kamera, Mikrofon oder persönliche Fotos und Dateien.
          </p>
          <p>
            Für haptisches Feedback kann die Vibrationsfunktion des Geräts verwendet
            werden.
          </p>
        </section>

        <section>
          <h2>12. Speicherdauer</h2>
          <p>
            Lokal gespeicherte App-Daten verbleiben grundsätzlich auf deinem Gerät, bis
            du sie innerhalb der App löschst, die App-Daten zurücksetzt oder die App
            deinstallierst.
          </p>
          <p>
            Daten im Zusammenhang mit Käufen und Elixa Plus werden nur so lange
            verarbeitet, wie dies zur Verwaltung von Käufen und Abonnements, zur
            Wiederherstellung von Käufen oder zur Erfüllung gesetzlicher Pflichten
            erforderlich ist.
          </p>
        </section>

        <section>
          <h2>13. Empfänger von Daten</h2>
          <p>
            Eine Weitergabe personenbezogener Daten erfolgt nur, soweit dies für die
            Bereitstellung der Website oder der App-Funktionen erforderlich ist.
          </p>
          <p>Hierzu können insbesondere folgende Dienstleister gehören:</p>
          <ul>
            <li>Vercel für das Hosting der Website,</li>
            <li>Google Play für App-Verteilung und Zahlungsabwicklung,</li>
            <li>RevenueCat für die Verwaltung und Validierung von Käufen und Abonnements.</li>
          </ul>
          <p>Eine Weitergabe personenbezogener Daten zu Werbezwecken erfolgt nicht.</p>
        </section>

        <section>
          <h2>14. Datensicherheit</h2>
          <p>
            Klex Studios trifft angemessene technische und organisatorische Maßnahmen,
            um personenbezogene Daten vor Verlust, Missbrauch und unbefugtem Zugriff zu
            schützen. Verbindungen zu eingesetzten Onlinediensten erfolgen grundsätzlich
            verschlüsselt.
          </p>
        </section>

        <section>
          <h2>15. Deine Rechte</h2>
          <p>
            Du hast im Rahmen der geltenden gesetzlichen Bestimmungen insbesondere das
            Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
            Datenübertragbarkeit und Widerspruch.
          </p>
          <p>Zur Ausübung deiner Rechte: info.klexstudios@gmail.com</p>
        </section>

        <section>
          <h2>16. Beschwerderecht</h2>
          <p>
            Du hast das Recht, dich bei einer zuständigen Datenschutzaufsichtsbehörde zu
            beschweren, wenn du der Ansicht bist, dass die Verarbeitung deiner
            personenbezogenen Daten gegen geltendes Datenschutzrecht verstößt.
          </p>
        </section>

        <section>
          <h2>17. Minderjährige</h2>
          <p>
            Elixa ist als Partyspiel für volljährige Nutzer vorgesehen und richtet sich
            nicht gezielt an Kinder.
          </p>
        </section>

        <section>
          <h2>18. Änderungen dieser Datenschutzerklärung</h2>
          <p>
            Diese Datenschutzerklärung kann angepasst werden, wenn Funktionen von Elixa
            oder der Website geändert, neue Dienste eingebunden oder gesetzliche
            Anforderungen aktualisiert werden.
          </p>
          <p>Stand: Oktober 2026</p>
        </section>
      </>
    );
  }

  return (
    <>
      <section>
        <h2>1. Controller</h2>
        <p>
          The controller responsible for processing personal data on this website and in
          connection with the Elixa app is:
        </p>
        <p>
          Kimi Kempe
          <br />
          Schlickelder Straße 294
          <br />
          49479 Ibbenbüren
          <br />
          Germany
        </p>
        <p>E-mail: info.klexstudios@gmail.com</p>
      </section>

      <section>
        <h2>2. General Information</h2>
        <p>
          This privacy policy explains how personal data is processed when visiting the
          Klex Studios website and using the Elixa app.
        </p>
        <p>
          Elixa can generally be used without a Klex Studios user account or registration.
        </p>
        <p>
          Klex Studios does not sell personal data and does not use Elixa data for
          personalized advertising.
        </p>
      </section>

      <section>
        <h2>3. Website Hosting and Server Log Files</h2>
        <p>This website is hosted by Vercel.</p>
        <p>
          Provider: Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723,
          United States.
        </p>
        <p>
          When this website is accessed, Vercel may automatically process technical
          access data such as IP address, date and time, requested page, browser,
          operating system and diagnostic information.
        </p>
      </section>

      <section>
        <h2>4. Contact by E-mail</h2>
        <p>
          If you contact us by e-mail, the information you provide is processed in order
          to respond to your request.
        </p>
      </section>

      <section>
        <h2>5. Cookies, Analytics and Advertising on the Website</h2>
        <p>
          This website currently does not use analytics, marketing or tracking cookies,
          and does not use tracking services such as Google Analytics or Meta Pixel.
        </p>
      </section>

      <section>
        <h2>6. Elixa – Data Stored Locally on the Device</h2>
        <p>
          Elixa stores certain information locally on the device in order to provide its
          game features. This can include player names, optional player gender settings,
          selected card decks, game progress, theme selection and haptic feedback settings.
        </p>
        <p>
          These data are stored locally on the device and are not transmitted to a server
          operated by Klex Studios.
        </p>
      </section>

      <section>
        <h2>7. Elixa Plus and In-App Purchases</h2>
        <p>
          Elixa may offer paid features or subscriptions under the name “Elixa Plus”.
          Payments are processed through Google Play. Klex Studios does not receive full
          credit card or bank account details.
        </p>
        <p>
          RevenueCat, Inc. is used to manage, validate and restore purchases. In this
          context, purchase and subscription information, entitlement status, technical
          platform/device information and pseudonymous identifiers may be processed.
        </p>
      </section>

      <section>
        <h2>8. RevenueCat</h2>
        <p>
          RevenueCat processes information related to in-app purchases and subscriptions
          on behalf of Klex Studios. Data may be processed outside the European Union,
          including in the United States, subject to the applicable legal safeguards.
        </p>
      </section>

      <section>
        <h2>9. Google Play</h2>
        <p>
          Google processes data under its own responsibility when Elixa is downloaded or
          when in-app purchases or subscriptions are made. This may include Google account
          information, device information, payment information and transaction data.
        </p>
      </section>

      <section>
        <h2>10. Advertising and Tracking in Elixa</h2>
        <p>
          Elixa currently does not use advertising networks, personalized advertising,
          or additional analytics/advertising tracking services such as Google Analytics,
          Firebase Analytics or the Meta SDK.
        </p>
      </section>

      <section>
        <h2>11. Device Permissions</h2>
        <p>
          The core Elixa game experience currently does not require access to location,
          contacts, camera, microphone, or personal photos/files. The device vibration
          feature may be used for haptic feedback.
        </p>
      </section>

      <section>
        <h2>12. Retention</h2>
        <p>
          Locally stored app data generally remain on the device until deleted in the
          app, the app data are reset, or the app is uninstalled. Purchase-related data
          are processed only as long as necessary to manage purchases, subscriptions,
          restore purchases, or comply with legal obligations.
        </p>
      </section>

      <section>
        <h2>13. Recipients</h2>
        <p>Service providers may include:</p>
        <ul>
          <li>Vercel for website hosting,</li>
          <li>Google Play for app distribution and payment processing,</li>
          <li>RevenueCat for purchase and subscription management.</li>
        </ul>
        <p>Personal data are not disclosed for advertising purposes.</p>
      </section>

      <section>
        <h2>14. Security</h2>
        <p>
          Klex Studios uses appropriate technical and organizational measures to protect
          personal data against loss, misuse and unauthorized access.
        </p>
      </section>

      <section>
        <h2>15. Your Rights</h2>
        <p>
          Subject to applicable law, you may have rights of access, rectification,
          erasure, restriction of processing, data portability and objection.
        </p>
        <p>To exercise your rights, contact: info.klexstudios@gmail.com</p>
      </section>

      <section>
        <h2>16. Right to Lodge a Complaint</h2>
        <p>
          You have the right to lodge a complaint with a competent data protection
          authority if you believe that the processing of your personal data violates
          applicable data protection law.
        </p>
      </section>

      <section>
        <h2>17. Minors</h2>
        <p>
          Elixa is intended as a party game for adults and is not specifically directed
          at children.
        </p>
      </section>

      <section>
        <h2>18. Changes to this Privacy Policy</h2>
        <p>
          This privacy policy may be updated when the website or Elixa changes, new
          services are integrated, or legal requirements change.
        </p>
        <p>Last updated: October 2026</p>
      </section>
    </>
  );
}
