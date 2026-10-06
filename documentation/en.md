<!-- ELUCENIA technical documentation · escore-de-villalta · en · no clinical/professional/rights approval -->

# Villalta score

[conditions, sources and permissions](https://elucenia.org/en/tools/escore-de-villalta)

## How to use

Use the tool in the portal or open index.html through a local HTTP server. Select the language, complete the fields and calculate.

## Inputs and units

### Symptom: pain

`dor`

- `0` — Absent
- `1` — Mild
- `2` — Moderate
- `3` — Severe

### Symptom: cramps

`caibras`

- `0` — Absent
- `1` — Mild
- `2` — Moderate
- `3` — Severe

### Symptom: leg heaviness

`peso`

- `0` — Absent
- `1` — Mild
- `2` — Moderate
- `3` — Severe

### Symptom: paresthesia

`parestesia`

- `0` — Absent
- `1` — Mild
- `2` — Moderate
- `3` — Severe

### Symptom: itching

`prurido`

- `0` — Absent
- `1` — Mild
- `2` — Moderate
- `3` — Severe

### Sign: pretibial edema

`edema`

- `0` — Absent
- `1` — Mild
- `2` — Moderate
- `3` — Severe

### Sign: skin induration

`induracao`

- `0` — Absent
- `1` — Mild
- `2` — Moderate
- `3` — Severe

### Sign: hyperpigmentation

`hiperpig`

- `0` — Absent
- `1` — Mild
- `2` — Moderate
- `3` — Severe

### Sign: redness

`rubor`

- `0` — Absent
- `1` — Mild
- `2` — Moderate
- `3` — Severe

### Sign: venous ectasia

`ectasia`

- `0` — Absent
- `1` — Mild
- `2` — Moderate
- `3` — Severe

### Sign: pain on calf compression

`dor_compr`

- `0` — Absent
- `1` — Mild
- `2` — Moderate
- `3` — Severe

### Venous ulcer on the affected leg

`ulcera`

- `0` — No
- `1` — Yes

## Method edition

Villalta/ISTH definition 2009: 5 symptoms + 6 signs, each 0–3, total 0–33; ulcer worsens severity

## Documented formula

Each of the 5 symptoms and 6 signs scores 0 (absent), 1 (mild), 2 (moderate) or 3 (severe). Sum 0 to 33.

Post-thrombotic syndrome if ≥ 5 points or venous ulcer. Severity: 5–9 mild; 10–14 moderate; ≥ 15 or ulcer = severe.

## Limits and population

The ISTH-recommended assessment of post-thrombotic syndrome considers signs and symptoms in a limb previously affected by DVT and recognizes that no single objective reference test exists. Assessment timing, alternative causes and version criteria are needed; the total alone does not confirm the cause of swelling or pain.

## References

- [Kahn SR et al. Definition of post-thrombotic syndrome of the leg for use in clinical investigations: a recommendation for standardization. J Thromb Haemost, 2009.](https://doi.org/10.1111/j.1538-7836.2009.03294.x)

## Reproduce the technical tests

Run node test.cjs in the root directory of this repository to repeat the recorded synthetic cases. Original inputs, expectations and tolerances are preserved. Technical tests do not constitute clinical validation.

```sh
node test.cjs
```

tool.json contains sources, edition and review scope. examples.json retains synthetic inputs and expectations; results.json records the obtained results.

[Record and references](../tool.json) · [JavaScript code](../calculator.js) · [Reference cases](../examples.json) · [results.json](../results.json)

## Review and conditions of use

Independent clinical review has not been performed.

This interface is an authorial translation, not an official or certified edition. Independent clinical review, professional language review and instrument rights clearance have not been performed.

Formula or classification result. Interpretation, care and applicability depend on professional assessment and the selected source.

## License and attribution

Apache-2.0 applies only to ELUCENIA code. Rights to instruments, publications, translations and data remain with their respective holders. Preserve LICENSE and NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Documented results

The information below preserves the method outputs for synthetic examples. It does not constitute independent clinical validation.

### 1

No post-thrombotic syndrome


### 2

Mild post-thrombotic syndrome


### 3

Moderate post-thrombotic syndrome


### 4

Severe post-thrombotic syndrome (presence of venous ulcer)

