<!-- ELUCENIA technical documentation · escore-de-villalta · it · no clinical/professional/rights approval -->

# Punteggio di Villalta

[condizioni, fonti e autorizzazioni](https://elucenia.org/it/strumenti/escore-de-villalta)

## Come usare

Usi lo strumento nel portale oppure apra index.html tramite un server HTTP locale. Selezioni la lingua, compili i campi ed esegua il calcolo.

## Dati di ingresso e unità

### Sintomo: dolore

`dor`

- `0` — Assente
- `1` — Lieve
- `2` — Moderato
- `3` — Grave

### Sintomo: crampi

`caibras`

- `0` — Assente
- `1` — Lieve
- `2` — Moderato
- `3` — Grave

### Sintomo: pesantezza della gamba

`peso`

- `0` — Assente
- `1` — Lieve
- `2` — Moderato
- `3` — Grave

### Sintomo: parestesia

`parestesia`

- `0` — Assente
- `1` — Lieve
- `2` — Moderato
- `3` — Grave

### Sintomo: prurito

`prurido`

- `0` — Assente
- `1` — Lieve
- `2` — Moderato
- `3` — Grave

### Segno: edema pretibiale

`edema`

- `0` — Assente
- `1` — Lieve
- `2` — Moderato
- `3` — Grave

### Segno: indurimento cutaneo

`induracao`

- `0` — Assente
- `1` — Lieve
- `2` — Moderato
- `3` — Grave

### Segno: iperpigmentazione

`hiperpig`

- `0` — Assente
- `1` — Lieve
- `2` — Moderato
- `3` — Grave

### Segno: arrossamento

`rubor`

- `0` — Assente
- `1` — Lieve
- `2` — Moderato
- `3` — Grave

### Segno: ectasia venosa

`ectasia`

- `0` — Assente
- `1` — Lieve
- `2` — Moderato
- `3` — Grave

### Segno: dolore alla compressione del polpaccio

`dor_compr`

- `0` — Assente
- `1` — Lieve
- `2` — Moderato
- `3` — Grave

### Ulcera venosa sulla gamba interessata

`ulcera`

- `0` — No
- `1` — Sì

## Edizione del metodo

Villalta/definizione ISTH 2009: 5 sintomi + 6 segni da 0–3, totale 0–33; ulcera aggravante

## Formula documentata

Ciascuno dei 5 sintomi e 6 segni riceve 0 (assente), 1 (lieve), 2 (moderato) o 3 (grave). Somma da 0 a 33.

Sindrome post-trombotica se ≥ 5 punti o ulcera venosa. Gravità: 5–9 lieve; 10–14 moderata; ≥ 15 o ulcera = grave.

## Limiti e popolazione

La valutazione della sindrome post-trombotica raccomandata dall’ISTH considera segni e sintomi in un arto precedentemente interessato da TVP e riconosce l’assenza di un unico test obiettivo di riferimento. Occorrono il momento della valutazione, le cause alternative e i criteri della versione; il totale da solo non conferma l’eziologia dell’edema o del dolore.

## Riferimenti

- [Kahn SR et al. Definition of post-thrombotic syndrome of the leg for use in clinical investigations: a recommendation for standardization. J Thromb Haemost, 2009.](https://doi.org/10.1111/j.1538-7836.2009.03294.x)

## Riprodurre i test tecnici

Esegua node test.cjs nella cartella principale di questo repository per ripetere i casi sintetici registrati. Gli input, i risultati attesi e le tolleranze originali sono conservati. I test tecnici non costituiscono validazione clinica.

```sh
node test.cjs
```

tool.json contiene le fonti, l’edizione e l’ambito della revisione. examples.json conserva gli input e i risultati attesi dei casi sintetici; results.json registra i risultati ottenuti.

[Scheda e riferimenti](../tool.json) · [Codice JavaScript](../calculator.js) · [Casi di riferimento](../examples.json) · [results.json](../results.json)

## Revisione e condizioni d’uso

Non è stata effettuata una revisione clinica indipendente.

Questa interfaccia è una traduzione realizzata dagli autori, non un’edizione ufficiale o certificata. Non sono state eseguite la revisione clinica indipendente, la revisione linguistica professionale né la verifica delle autorizzazioni relative ai diritti sugli strumenti.

Risultato della formula o classificazione. Interpretazione, condotta e applicabilità dipendono dalla valutazione professionale e dalla fonte selezionata.

## Licenza e attribuzione

Apache-2.0 si applica solo al codice di ELUCENIA. I diritti su strumenti, pubblicazioni, traduzioni e dati restano ai rispettivi titolari. Conservi LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Risultati documentati

Le informazioni seguenti conservano gli output del metodo per esempi sintetici. Non costituiscono una validazione clinica indipendente.

### 1

Nessuna sindrome post-trombotica


### 2

Sindrome post-trombotica lieve


### 3

Sindrome post-trombotica moderata


### 4

Sindrome post-trombotica grave (presenza di ulcera venosa)

