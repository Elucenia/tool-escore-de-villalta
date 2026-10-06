<!-- ELUCENIA technical documentation · escore-de-villalta · es · no clinical/professional/rights approval -->

# Puntuación de Villalta

[condiciones, fuentes y permisos](https://elucenia.org/es/herramientas/escore-de-villalta)

## Cómo usar

Utilice la herramienta en el portal o abra index.html mediante un servidor HTTP local. Seleccione el idioma, complete los campos y calcule.

## Entradas y unidades

### Síntoma: dolor

`dor`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Síntoma: calambres

`caibras`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Síntoma: pesadez en la pierna

`peso`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Síntoma: parestesia

`parestesia`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Síntoma: prurito

`prurido`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Signo: edema pretibial

`edema`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Signo: induración cutánea

`induracao`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Signo: hiperpigmentación

`hiperpig`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Signo: enrojecimiento

`rubor`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Signo: ectasia venosa

`ectasia`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Signo: dolor al comprimir la pantorrilla

`dor_compr`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Úlcera venosa en la pierna afectada

`ulcera`

- `0` — No
- `1` — Sí

## Edición del método

Villalta/definición ISTH 2009: 5 síntomas + 6 signos de 0–3, total 0–33; úlcera agravante

## Fórmula documentada

Cada uno de los 5 síntomas y 6 signos recibe 0 (ausente), 1 (leve), 2 (moderado) o 3 (grave). Suma de 0 a 33.

Síndrome postrombótico si ≥ 5 puntos o úlcera venosa. Gravedad: 5–9 leve; 10–14 moderada; ≥ 15 o úlcera = grave.

## Límites y población

La evaluación del síndrome postrombótico recomendada por la ISTH considera signos y síntomas en un miembro previamente afectado por TVP y reconoce que no existe una única prueba objetiva de referencia. Se necesitan el momento de evaluación, las causas alternativas y los criterios de la versión; la suma aislada no confirma la etiología del edema o del dolor.

## Referencias

- [Kahn SR et al. Definition of post-thrombotic syndrome of the leg for use in clinical investigations: a recommendation for standardization. J Thromb Haemost, 2009.](https://doi.org/10.1111/j.1538-7836.2009.03294.x)

## Reproducir las pruebas técnicas

Ejecute node test.cjs en el directorio raíz de este repositorio para repetir los casos sintéticos registrados. Se conservan las entradas, los resultados esperados y las tolerancias originales. Las pruebas técnicas no constituyen validación clínica.

```sh
node test.cjs
```

tool.json contiene las fuentes, la edición y el alcance de la revisión. examples.json conserva las entradas y los resultados esperados de los casos sintéticos; results.json registra los resultados obtenidos.

[Ficha y referencias](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referencia](../examples.json) · [results.json](../results.json)

## Revisión y condiciones de uso

No se ha realizado una revisión clínica independiente.

Esta interfaz es una traducción de elaboración propia, no una edición oficial o certificada. No se han realizado la revisión clínica independiente, la revisión lingüística profesional ni la autorización de derechos de los instrumentos.

Resultado de la fórmula o clasificación. La interpretación, la conducta y la aplicabilidad dependen de la evaluación profesional y de la fuente seleccionada.

## Licencia y atribución

Apache-2.0 se aplica únicamente al código de ELUCENIA. Los derechos de los instrumentos, publicaciones, traducciones y datos permanecen en manos de sus respectivos titulares. Conserve LICENSE y NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

La información siguiente conserva las salidas del método para ejemplos sintéticos. No constituye una validación clínica independiente.

### 1

Sin síndrome postrombótico


### 2

Síndrome postrombótico leve


### 3

Síndrome postrombótico moderado


### 4

Síndrome postrombótico grave (presencia de úlcera venosa)

