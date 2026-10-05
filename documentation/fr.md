<!-- ELUCENIA technical documentation · escore-de-villalta · fr · no clinical/professional/rights approval -->

# Score de Villalta

[conditions, sources et autorisations](https://elucenia.org/fr/outils/escore-de-villalta)

## Mode d’emploi

Utilisez l’outil sur le portail ou ouvrez index.html via un serveur HTTP local. Sélectionnez la langue, remplissez les champs et lancez le calcul.

## Données d’entrée et unités

### Symptôme: douleur

`dor`

- `0` — Absent
- `1` — Léger
- `2` — Modéré
- `3` — Sévère

### Symptôme: crampes

`caibras`

- `0` — Absent
- `1` — Léger
- `2` — Modéré
- `3` — Sévère

### Symptôme: lourdeur de la jambe

`peso`

- `0` — Absent
- `1` — Léger
- `2` — Modéré
- `3` — Sévère

### Symptôme : paresthésie

`parestesia`

- `0` — Absent
- `1` — Léger
- `2` — Modéré
- `3` — Sévère

### Symptôme: prurit

`prurido`

- `0` — Absent
- `1` — Léger
- `2` — Modéré
- `3` — Sévère

### Signe: œdème prétibial

`edema`

- `0` — Absent
- `1` — Léger
- `2` — Modéré
- `3` — Sévère

### Signe: induration cutanée

`induracao`

- `0` — Absent
- `1` — Léger
- `2` — Modéré
- `3` — Sévère

### Signe: hyperpigmentation

`hiperpig`

- `0` — Absent
- `1` — Léger
- `2` — Modéré
- `3` — Sévère

### Signe: rougeur

`rubor`

- `0` — Absent
- `1` — Léger
- `2` — Modéré
- `3` — Sévère

### Signe : ectasie veineuse

`ectasia`

- `0` — Absent
- `1` — Léger
- `2` — Modéré
- `3` — Sévère

### Signe: douleur à la compression du mollet

`dor_compr`

- `0` — Absent
- `1` — Léger
- `2` — Modéré
- `3` — Sévère

### Ulcère veineux de la jambe atteinte

`ulcera`

- `0` — Non
- `1` — Oui

## Édition de la méthode

Villalta/définition ISTH 2009 : 5 symptômes + 6 signes de 0–3, total 0–33 ; ulcère aggravant

## Formule documentée

Chacun des 5 symptômes et 6 signes reçoit 0 (absent), 1 (léger), 2 (modéré) ou 3 (sévère). Somme de 0 à 33.

Syndrome post-thrombotique si ≥ 5 points ou ulcère veineux. Sévérité : 5–9 légère ; 10–14 modérée ; ≥ 15 ou ulcère = sévère.

## Limites et population

L’évaluation du syndrome post-thrombotique recommandée par l’ISTH considère signes et symptômes dans un membre précédemment atteint de TVP et reconnaît l’absence d’un test objectif unique de référence. Le moment de l’évaluation, les causes alternatives et les critères de la version sont nécessaires ; la somme seule ne confirme pas l’étiologie d’un œdème ou d’une douleur.

## Références

- [Kahn SR et al. Definition of post-thrombotic syndrome of the leg for use in clinical investigations: a recommendation for standardization. J Thromb Haemost, 2009.](https://doi.org/10.1111/j.1538-7836.2009.03294.x)

## Reproduire les tests techniques

Exécutez node test.cjs dans le répertoire racine de ce dépôt pour reproduire les cas synthétiques enregistrés. Les données d’entrée, les résultats attendus et les tolérances d’origine sont conservés. Les tests techniques ne constituent pas une validation clinique.

```sh
node test.cjs
```

tool.json contient les sources, l’édition et le périmètre de la revue. examples.json conserve les données d’entrée et les résultats attendus des cas synthétiques ; results.json consigne les résultats obtenus.

[Fiche et références](../tool.json) · [Code JavaScript](../calculator.js) · [Cas de référence](../examples.json) · [results.json](../results.json)

## Revue et conditions d’utilisation

Aucune révision clinique indépendante n’a été effectuée.

Cette interface est une traduction réalisée par nos soins, et non une édition officielle ou certifiée. La revue clinique indépendante, la révision linguistique professionnelle et l’autorisation des droits sur les instruments n’ont pas été réalisées.

Résultat de la formule ou de la classification. L’interprétation, la conduite et l’applicabilité dépendent de l’évaluation professionnelle et de la source sélectionnée.

## Licence et attribution

Apache-2.0 s’applique uniquement au code d’ELUCENIA. Les droits sur les instruments, publications, traductions et données restent ceux de leurs titulaires respectifs. Conservez LICENSE et NOTICE.

ELUCENIA · Felipe Guedes · Copyright © 2026
