# Anruf von befreundetem Unternehmer

Klaus, ein Unternehmer, den du auf einer Dienstreise kennen gelernt hast, ruft an und möchte dich in seine
Ferienvilla auf Sardinien einladen. Er verlässt sich natürlich darauf, dass du dem Gesetzentwurf zum Abbau
von Subventionen nicht zustimmen wirst.

## apply

```typescript
const game = context.state.game
if (!game) {
  return
}
const law = getFirstMatchingLaw(idsToLaws(game.proposedLaws))
if (law) {
  context.dispatch("rejectLaw", { lawId: law.id })
}
```

## probability

```typescript
const law = getFirstMatchingLaw(idsToLaws(game.proposedLaws))
return law ? Math.random() : 0
```

## functions

```typescript
// if proposed laws contain at least one with the words 'subvention' and 'abbau', this event might occur
function getFirstMatchingLaw(proposedLaws: Law[]) {
  return proposedLaws.find((law) => law.title.match(/subvention/i) && law.title.match(/abbau/i))
}
```
