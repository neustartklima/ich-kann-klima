# Gesetzesinitiative zur Sanierung von Altbauten

Zur Einhaltung der Pariser Klimaschutzvereinbarung halten Experten es für unausweichlich, dass in die Sanierung von Altbauten investiert werden muss. Die konkrete Ausgestaltung wird kontrovers diskutiert.

## laws

- DaemmungAltbauAbschaffen
- AllesBleibtBeimAlten
- DaemmungAltbau1Percent
- DaemmungAltbau2Percent
- DaemmungAltbau4Percent

## probability

```typescript
const buildingsPercentage = (game.values.co2emissionsBuildings / game.values.co2emissions) * 100
return linear(15, 25, buildingsPercentage) / 100
```
