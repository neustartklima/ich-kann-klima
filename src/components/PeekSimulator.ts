import { AcceptedLaw, getAcceptedLaw, LawId, LawReference, ParamsOfLaws } from "../laws"
import { computed, Ref, ref } from "@vue/runtime-core"
import { Game, GameYear, gameYears, newGame } from "../game"
import { calculateNextYearWithLaws } from "../Calculator"
import { BaseParams } from "../params"

type Preset = { name: string; laws: LawReference[] }

const presets: Preset[] = [
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
      /*  6   */ { lawId: "DaemmungAltbau4Percent", effectiveSince: 2022 },
      /*  7   */ { lawId: "ForschungEmissionsfreieZementproduktion", effectiveSince: 2023 },
      /*  8   */ { lawId: "NetzausbauFoerdern", effectiveSince: 2023 },
      /*  8.5 */ { lawId: "StromspeicherungFoerdern", effectiveSince: 2023 },
      /*  9   */ { lawId: "WasserstofftechnologieFoerdern", effectiveSince: 2023 },
      /* 10   */ { lawId: "SolarstromFoerdernx4", effectiveSince: 2024 },
      /* 11   */ { lawId: "SolarAufAllenDaechernVerpflichtend", effectiveSince: 2024 },
      /* 12   */ { lawId: "ForschungEmissionsfreieStahlproduktion", effectiveSince: 2024 },
      /* 13   */
      /* 14   */
      /* 15   */ { lawId: "FernverkehrModernisieren", effectiveSince: 2025 },
      /* 16   */ { lawId: "NahverkehrModernisieren", effectiveSince: 2026 },
      /* 17   */ { lawId: "FernverkehrVerbindungenAusbauen", effectiveSince: 2026 },
      /* 18   */ { lawId: "NahverkehrAusbauen", effectiveSince: 2026 },
      /* 18.5 */ { lawId: "LadeinfrastrukturAusbauen", effectiveSince: 2026 },
      /* 19   */ { lawId: "NahverkehrKostenlos", effectiveSince: 2027 },
      /* 20   */ { lawId: "DienstwagenPrivilegAbgeschaffen", effectiveSince: 2027 },
      /* 20.5 */ { lawId: "ElektromobilitaetFoerdern", effectiveSince: 2027 },
      /* 21   */ { lawId: "WasserstoffmobilitaetFoerdern", effectiveSince: 2027 },
    ],
  },
]

export function vueSimulationObjects(game: Ref<Game | undefined>) {
  const simulatedLaws = ref<LawReference[]>([])

  function simulateLaw(lawId: LawId, year: GameYear) {
    simulatedLaws.value = simulatedLaws.value.filter((l) => l.lawId != lawId).concat({ lawId, effectiveSince: year })
  }

  function loadPreset(preset: Preset) {
    simulatedLaws.value = preset.laws
  }

  const combinedLaws = computed<(LawReference & { cls: string })[]>(() => {
    const simLaws = simulatedLaws.value.map((l) => ({ ...l, cls: "simulated" }))
    const accLaws = (game.value?.acceptedLaws || [])
      .filter((al) => !simLaws.some((sl) => sl.lawId === al.lawId))
      .map((l) => ({ ...l, cls: "accepted" }))
    return accLaws.concat(simLaws)
  })

  const lawsToSimulate = computed<AcceptedLaw[]>(() => {
    return combinedLaws.value.map((l) => getAcceptedLaw(l))
  })

  const simulation = createSimulation(lawsToSimulate)

  return {
    simulateLaw,
    loadPreset,
    combinedLaws,
    simulation,
    presets,
  }
}

function createSimulation(laws: Ref<AcceptedLaw[]>) {
  return computed(() => {
    const g: Game = newGame()

    const res = gameYears.map((y) => {
      while (y > g.currentYear) {
        g.currentYear++
        const { values, effectsOfLaws } = calculateNextYearWithLaws(g, laws.value, g.currentYear)
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
