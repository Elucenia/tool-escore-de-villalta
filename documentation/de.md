<!-- ELUCENIA technical documentation · escore-de-villalta · de · no clinical/professional/rights approval -->

# Villalta-Score

[Bedingungen, Quellen und Berechtigungen](https://elucenia.org/de/werkzeuge/escore-de-villalta)

## Verwendung

Verwenden Sie das Werkzeug im Portal oder öffnen Sie index.html über einen lokalen HTTP-Server. Wählen Sie die Sprache, füllen Sie die Felder aus und berechnen Sie das Ergebnis.

## Eingaben und Einheiten

### Symptom: Schmerz

`dor`

- `0` — Nicht vorhanden
- `1` — Leicht
- `2` — Mäßig
- `3` — Schwer

### Symptom: Krämpfe

`caibras`

- `0` — Nicht vorhanden
- `1` — Leicht
- `2` — Mäßig
- `3` — Schwer

### Symptom: Schweregefühl im Bein

`peso`

- `0` — Nicht vorhanden
- `1` — Leicht
- `2` — Mäßig
- `3` — Schwer

### Symptom: Parästhesie

`parestesia`

- `0` — Nicht vorhanden
- `1` — Leicht
- `2` — Mäßig
- `3` — Schwer

### Symptom: Juckreiz

`prurido`

- `0` — Nicht vorhanden
- `1` — Leicht
- `2` — Mäßig
- `3` — Schwer

### Zeichen: prätibiales Ödem

`edema`

- `0` — Nicht vorhanden
- `1` — Leicht
- `2` — Mäßig
- `3` — Schwer

### Zeichen: Hautverhärtung

`induracao`

- `0` — Nicht vorhanden
- `1` — Leicht
- `2` — Mäßig
- `3` — Schwer

### Zeichen: Hyperpigmentierung

`hiperpig`

- `0` — Nicht vorhanden
- `1` — Leicht
- `2` — Mäßig
- `3` — Schwer

### Zeichen: Rötung

`rubor`

- `0` — Nicht vorhanden
- `1` — Leicht
- `2` — Mäßig
- `3` — Schwer

### Zeichen: Venenektasie

`ectasia`

- `0` — Nicht vorhanden
- `1` — Leicht
- `2` — Mäßig
- `3` — Schwer

### Zeichen: Schmerz bei Wadenkompression

`dor_compr`

- `0` — Nicht vorhanden
- `1` — Leicht
- `2` — Mäßig
- `3` — Schwer

### Venöses Ulkus am betroffenen Bein

`ulcera`

- `0` — Nein
- `1` — Ja

## Fassung der Methode

Villalta/ISTH-Definition 2009: 5 Symptome + 6 Zeichen mit 0–3, Gesamt 0–33; Ulkus erhöht Schwere

## Dokumentierte Formel

Jedes der 5 Symptome und 6 Zeichen erhält 0 (fehlend), 1 (leicht), 2 (mäßig) oder 3 (schwer). Summe 0 bis 33.

Postthrombotisches Syndrom bei ≥ 5 Punkten oder venösem Ulkus. Schwere: 5–9 leicht; 10–14 mäßig; ≥ 15 oder Ulkus = schwer.

## Grenzen und Population

Die von ISTH empfohlene Bewertung des postthrombotischen Syndroms berücksichtigt Zeichen und Symptome an einer zuvor von TVT betroffenen Extremität und erkennt an, dass kein einzelner objektiver Referenztest existiert. Bewertungszeitpunkt, alternative Ursachen und Versionskriterien sind erforderlich; die Summe allein bestätigt nicht die Ursache von Ödem oder Schmerz.

## Referenzen

- [Kahn SR et al. Definition of post-thrombotic syndrome of the leg for use in clinical investigations: a recommendation for standardization. J Thromb Haemost, 2009.](https://doi.org/10.1111/j.1538-7836.2009.03294.x)

## Technische Tests reproduzieren

Führen Sie node test.cjs im Stammverzeichnis dieses Repositorys aus, um die dokumentierten synthetischen Fälle zu wiederholen. Ursprüngliche Eingaben, erwartete Ergebnisse und Toleranzen bleiben erhalten. Technische Tests stellen keine klinische Validierung dar.

```sh
node test.cjs
```

tool.json enthält Quellen, Ausgabe und Umfang der Überprüfung. examples.json bewahrt die synthetischen Eingaben und erwarteten Ergebnisse; results.json dokumentiert die tatsächlich erhaltenen Ergebnisse.

[Eintrag und Referenzen](../tool.json) · [JavaScript-Code](../calculator.js) · [Referenzfälle](../examples.json) · [results.json](../results.json)

## Überprüfung und Nutzungsbedingungen

Eine unabhängige klinische Prüfung wurde nicht durchgeführt.

Diese Benutzeroberfläche ist eine selbst erstellte Übersetzung und keine offizielle oder zertifizierte Ausgabe. Eine unabhängige klinische Überprüfung, eine professionelle sprachliche Prüfung und eine Klärung der Rechte an den Instrumenten wurden nicht durchgeführt.

Ergebnis der Formel oder Klassifikation. Interpretation, Vorgehen und Anwendbarkeit hängen von der fachlichen Beurteilung und der ausgewählten Quelle ab.

## Lizenz und Urheberangaben

Apache-2.0 gilt nur für den ELUCENIA-Code. Die Rechte an Instrumenten, Veröffentlichungen, Übersetzungen und Daten verbleiben bei den jeweiligen Rechteinhabern. Bewahren Sie LICENSE und NOTICE auf.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Dokumentierte Ergebnisse

Die folgenden Angaben bewahren die Ausgaben der Methode für synthetische Beispiele. Sie stellen keine unabhängige klinische Validierung dar.

### 1

Kein postthrombotisches Syndrom


### 2

Leichtes postthrombotisches Syndrom


### 3

Mäßiges postthrombotisches Syndrom


### 4

Schweres postthrombotisches Syndrom (Vorliegen eines venösen Ulkus)

