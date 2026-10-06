<!-- ELUCENIA technical documentation · escore-de-villalta · pt-BR · no clinical/professional/rights approval -->

# Escore de Villalta

[condições, fontes e permissões](https://elucenia.org/pt-br/ferramentas/escore-de-villalta)

## Como usar

Use a ferramenta no portal ou abra index.html em um servidor HTTP local. Selecione o idioma, preencha os campos e calcule.

## Entradas e unidades

### Sintoma: dor

`dor`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Sintoma: câimbras

`caibras`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Sintoma: peso na perna

`peso`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Sintoma: parestesia

`parestesia`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Sintoma: prurido

`prurido`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Sinal: edema pré-tibial

`edema`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Sinal: endurecimento da pele

`induracao`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Sinal: hiperpigmentação

`hiperpig`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Sinal: vermelhidão

`rubor`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Sinal: ectasia venosa

`ectasia`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Sinal: dor à compressão da panturrilha

`dor_compr`

- `0` — Ausente
- `1` — Leve
- `2` — Moderado
- `3` — Grave

### Úlcera venosa na perna afetada

`ulcera`

- `0` — Não
- `1` — Sim

## Edição do método

Villalta/definição ISTH 2009:5 sintomas+6 sinais 0–3, total 0–33; úlcera agravante

## Fórmula documentada

Cada um dos 5 sintomas e 6 sinais recebe 0 (ausente), 1 (leve), 2 (moderado) ou 3 (grave). Soma de 0 a 33.

Síndrome pós-trombótica se ≥ 5 pontos ou úlcera venosa. Gravidade: 5–9 leve; 10–14 moderada; ≥ 15 ou úlcera = grave.

## Limites e população

A avaliação de síndrome pós-trombótica recomendada pela ISTH considera sinais e sintomas em membro previamente afetado por TVP e reconhece que não existe teste objetivo único de referência. Momento de avaliação, causas alternativas e critérios da versão são necessários; a soma isolada não confirma etiologia de edema ou dor.

## Referências

- [Kahn SR et al. Definition of post-thrombotic syndrome of the leg for use in clinical investigations: a recommendation for standardization. J Thromb Haemost, 2009.](https://doi.org/10.1111/j.1538-7836.2009.03294.x)

## Reproduzir os testes técnicos

Execute node test.cjs na pasta raiz deste repositório para repetir os casos sintéticos registrados. As entradas, expectativas e tolerâncias originais são preservadas. Testes técnicos não constituem validação clínica.

```sh
node test.cjs
```

tool.json contém fontes, edição e escopo de revisão. examples.json conserva as entradas e expectativas sintéticas; results.json registra os resultados obtidos.

[Ficha e referências](../tool.json) · [Código JavaScript](../calculator.js) · [Casos de referência](../examples.json) · [results.json](../results.json)

## Revisão e condições de uso

Revisão clínica independente não realizada.

Esta interface é uma tradução autoral, não uma edição oficial ou certificada. Revisão clínica independente, revisão linguística profissional e autorização de direitos de instrumentos não foram realizadas.

Resultado da fórmula ou classificação. Interpretação, conduta e aplicabilidade dependem da avaliação profissional e da fonte selecionada.

## Licença e atribuição

Apache-2.0 aplica-se somente ao código da ELUCENIA. Os instrumentos, publicações, traduções e dados mantêm os direitos dos respectivos titulares. Preserve LICENSE e NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026

## Resultados documentados

As informações abaixo preservam as saídas do método para exemplos sintéticos. Não constituem validação clínica independente.

### 1

Sem síndrome pós-trombótica


### 2

Síndrome pós-trombótica leve


### 3

Síndrome pós-trombótica moderada


### 4

Síndrome pós-trombótica grave (presença de úlcera venosa)

