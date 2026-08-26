"use client";

// Der Grund hinter der Seite.
//
// Loest die Wortwand ab (`wordmark-field.tsx`, 2026-08-16 bis 2026-08-26). Die war der Port des
// Auth-Screens der App und auf dem Telefon so gross, dass sie vor dem Fliesstext stand statt
// hinter ihm: #9C9CA1-Text auf gemustertem Grau liest sich matschig, und eine Marketingseite,
// deren Absatz man zusammenkneifen muss, wirkt unfertig.
//
// Statt dessen ein Shader aus `@paper-design/shaders-react`. Vier Kandidaten wurden am
// 2026-08-26 gegeneinander gerastert (Dithering warp / simplex / sphere, GrainGradient); die
// drei Dithering-Fassungen machten denselben Fehler wie die Wortwand, weil ein Rasterpunkt in
// Textgroesse mit den Buchstaben um dieselbe Frequenz kaempft. GrainGradient hat kein Raster,
// nur einen weichen Verlauf mit Korn, und ist der einzige, unter dem der Absatz sauber bleibt.
//
// ⚠️ Zwei Schichten, und die zweite ist nicht Deko. Der Shader allein ist auch als Verlauf
// noch zu praesent unter Text. Darueber liegt deshalb ein Schleier aus `--paper`, der links
// (auf dem Telefon: oben) deckend ist und nach rechts unten aufmacht — die Textspalte steht
// auf reinem Papier, die Textur sammelt sich dort, wo das Telefon steht.
//
// ⚠️ Kein Fallback noetig, aber einer da: ohne WebGL zeichnet ShaderMount nichts, und die
// Seite steht auf weissem Grund. Das ist die Seite ohne Textur, nicht die Seite kaputt.

import { GrainGradient } from "@paper-design/shaders-react";
import { useReducedMotion } from "framer-motion";

export function ShaderGround() {
  // `useReducedMotion` liest dieselbe Systemeinstellung, mit der die Wortwand ihre Schwingung
  // abgeschaltet hat. speed 0 haelt das Bild an, statt es zu entfernen.
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-0" aria-hidden>
      <GrainGradient
        // Basalts Graustufen, nichts Buntes: die App hat seit v3 keine Akzentfarbe.
        colorBack="#FFFFFF"
        colors={["#E6E6EA", "#CFCFD6", "#F4F4F6", "#DCDCE2"]}
        softness={0.92}
        intensity={0.18}
        noise={0.34}
        shape="corners"
        speed={reduced ? 0 : 0.18}
        scale={1.15}
        // Ein Vollbild-Shader auf einem Telefon mit 3x-Raster waere sonst ein 4-Megapixel-
        // Canvas pro Frame fuer eine Textur, die man kaum sieht.
        maxPixelCount={1920 * 1080}
        minPixelRatio={1}
        style={{ width: "100%", height: "100%" }}
      />
      <div className="ground-scrim" />
    </div>
  );
}
