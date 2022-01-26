import { getAcceptedLaw, LawId, LawReference } from "../laws"
import { computed, Ref, ref } from "@vue/runtime-core"
import { Game, GameYear, gameYears, newGame } from "../game"
import { calculateNextYearWithLaws } from "../Calculator"

type Preset = { name: string; laws: LawReference[] }

const staticPresets: Preset[] = [
  {
    name: "Clear",
    laws: [],
  },
  {
    name: "Happy Path",
    laws: [
      /*  1   */ { lawId: "NetzausbauErleichtern", effectiveSince: 2021 },
      /*  1.3 */ { lawId: "WindkraftVereinfachen", effectiveSince: 2021 },
      /*  1.7 */ { lawId: "StromspeicherungErleichtern", effectiveSince: 2021 },
      /*  2   */ { lawId: "AbstandsregelnFuerWindkraftLockern", effectiveSince: 2021 },
      /*  3   */ { lawId: "AusschreibungsverfahrenfuerWindkraftVervierfachen", effectiveSince: 2021 },
      /*  4   */ { lawId: "ForschungUndEntwicklungStromspeicherung", effectiveSince: 2022 },
      /*  4.5 */ { lawId: "ForschungDezentraleStromerzeugung", effectiveSince: 2022 },
      /*  5   */ { lawId: "KohleverstromungEinstellen", effectiveSince: 2022 },
      /*  5.5 */ { lawId: "WirksamerCO2Preis", effectiveSince: 2022 },
      // /*  6   */ { lawId: "DaemmungAltbau4Percent", effectiveSince: 2022 },
      // /*  7   */ { lawId: "ForschungEmissionsfreieZementproduktion", effectiveSince: 2023 },
      /*  8   */ { lawId: "NetzausbauFoerdern", effectiveSince: 2023 },
      /*  8.5 */ { lawId: "StromspeicherungFoerdern", effectiveSince: 2023 },
      /*  9   */ { lawId: "WasserstofftechnologieFoerdern", effectiveSince: 2023 },
      /* 10   */ { lawId: "SolarstromFoerdernx4", effectiveSince: 2024 },
      /* 11   */ { lawId: "SolarAufAllenDaechernVerpflichtend", effectiveSince: 2024 },
      // /* 12   */ { lawId: "ForschungEmissionsfreieStahlproduktion", effectiveSince: 2024 },
      /* 13   */
      /* 14   */
      // /* 15   */ { lawId: "FernverkehrModernisieren", effectiveSince: 2025 },
      // /* 16   */ { lawId: "NahverkehrModernisieren", effectiveSince: 2026 },
      // /* 17   */ { lawId: "FernverkehrVerbindungenAusbauen", effectiveSince: 2026 },
      // /* 18   */ { lawId: "NahverkehrAusbauen", effectiveSince: 2026 },
      // /* 18.5 */ { lawId: "LadeinfrastrukturAusbauen", effectiveSince: 2026 },
      // /* 19   */ { lawId: "NahverkehrKostenlos", effectiveSince: 2027 },
      // /* 20   */ { lawId: "DienstwagenPrivilegAbgeschaffen", effectiveSince: 2027 },
      // /* 20.5 */ { lawId: "ElektromobilitaetFoerdern", effectiveSince: 2027 },
      // /* 21   */ { lawId: "WasserstoffmobilitaetFoerdern", effectiveSince: 2027 },
    ],
  },
]

type SimLaw = LawReference & { sortId: number }

const equal = (a: SimLaw, b: SimLaw): boolean => a.lawId === b.lawId && a.effectiveSince === b.effectiveSince

const toSimLaws = (laws: LawReference[]): SimLaw[] => laws.map((l, i) => ({ ...l, sortId: i }))

function newSortId(...sortedLists: SimLaw[][]): number {
  const candIds = sortedLists.map((list) => (list.length === 0 ? 0 : list[list.length - 1].sortId + 1))
  return candIds.length === 0 ? 0 : Math.max.apply(Math, candIds)
}

export function vueSimulationObjects(game: Ref<Game | undefined>) {
  const laws = ref<SimLaw[]>([])
  const savedLaws = ref<SimLaw[]>([])
  const compareActive = ref<boolean>(false)

  function addToSimulation(lawId: LawId, year: GameYear) {
    const lws = laws.value
    const newEntry: SimLaw = { lawId, effectiveSince: year, sortId: 0 }
    const savedId = savedLaws.value.find((s) => equal(newEntry, s))?.sortId
    newEntry.sortId = savedId != undefined ? savedId : newSortId(lws, savedLaws.value)
    laws.value = lws
      .filter((l) => l.lawId != lawId)
      .concat(newEntry)
      .sort((a, b) => a.sortId - b.sortId)
  }

  function removeFromSimulation(lawId: LawId) {
    laws.value = laws.value.filter((l) => l.lawId != lawId)
  }

  function toggleInSimulation(lawId: LawId, year: GameYear) {
    const compare: SimLaw = { lawId, effectiveSince: year, sortId: 0 }
    if (laws.value.some((l) => equal(l, compare))) {
      removeFromSimulation(lawId)
    } else {
      addToSimulation(lawId, year)
    }
  }

  function loadPreset(preset: Preset) {
    laws.value = toSimLaws(preset.laws)
  }

  function toggleCompare() {
    compareActive.value = !compareActive.value
    if (compareActive.value) {
      savedLaws.value = laws.value
    } else {
      savedLaws.value = []
    }
  }

  const currentGame = computed<Preset>(() => ({
    name: "Current Game",
    laws: game.value?.acceptedLaws || [],
  }))

  const presets = computed<Preset[]>(() => [currentGame.value, ...staticPresets])

  const simulatedLaws = computed<(LawReference & { cls: string })[]>(() => {
    const bothAndNew = laws.value.map((l) => ({ ...l, cls: savedLaws.value.some((s) => equal(l, s)) ? "both" : "new" }))
    const onlySaved = savedLaws.value
      .filter((s) => !laws.value.some((l) => equal(l, s)))
      .map((s) => ({ ...s, cls: "saved" }))
    return [...bothAndNew, ...onlySaved].sort((a, b) => a.sortId - b.sortId)
  })

  const simulation = createSimulation(laws)
  const secondSimulation = createSimulation(savedLaws)

  return {
    addToSimulation,
    removeFromSimulation,
    toggleInSimulation,
    loadPreset,
    compareActive,
    toggleCompare,
    presets,
    simulatedLaws,
    simulation,
    secondSimulation,
  }
}

function createSimulation(laws: Ref<LawReference[]>) {
  return computed(() => {
    const g: Game = newGame()
    g.acceptedLaws = [...laws.value]

    const res = gameYears.map((y) => {
      while (y > g.currentYear) {
        g.currentYear++
        g.acceptedLaws = performRemoveLawsWithLabels(g.acceptedLaws, g.currentYear)
        const accLaws = g.acceptedLaws.map((l) => getAcceptedLaw(l))
        const { values, effectsOfLaws } = calculateNextYearWithLaws(g, accLaws, g.currentYear)
        g.values = values
        if (y === g.currentYear) {
          return { values, effectsOfLaws }
        }
      }
      return { values: g.values, effectsOfLaws: {} }
    })
    return res
  })
}

function performRemoveLawsWithLabels(lawRefs: LawReference[], year: number): LawReference[] {
  const accLaws = lawRefs.map((l) => getAcceptedLaw(l))
  const labelsToRemove = accLaws.filter((l) => l.effectiveSince === year).flatMap((l) => l.removeLawsWithLabels || [])
  return accLaws
    .filter((l) => l.effectiveSince >= year || !labelsToRemove.some((label) => l.labels?.includes(label)))
    .map((l) => ({ lawId: l.id, effectiveSince: l.effectiveSince }))
}
