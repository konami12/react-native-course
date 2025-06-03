enum PokemonType {
    Normal = "normal",
    Fire = "fire",
    Fighting = "fighting",
    Water = "water",
    Flying = "flying",
    Grass = "grass",
    Poison = "poison",
    Electric = "electric",
    Ground = "ground",
    Psychic = "psychic",
    Rock = "rock",
    Ice = "ice",
    Bug = "bug",
    Dragon = "dragon",
    Ghost = "ghost",
    Dark = "dark",
    Steel = "steel",
    Fairy = "fairy",
}

type TypeColors = {
    background: string;
    border: string;
};

const TypeColorMap: Record<PokemonType, TypeColors> = {
    [PokemonType.Normal]: { background: "#a8a878", border: "#6d6d4e" },
    [PokemonType.Fire]: { background: "#f08030", border: "#9c531f" },
    [PokemonType.Fighting]: { background: "#c03028", border: "#7d1f1a" },
    [PokemonType.Water]: { background: "#6890f0", border: "#445e9c" },
    [PokemonType.Flying]: { background: "#a890f0", border: "#6d5e9c" },
    [PokemonType.Grass]: { background: "#78c850", border: "#4e8234" },
    [PokemonType.Poison]: { background: "#a040a0", border: "#c183c1" },
    [PokemonType.Electric]: { background: "#f8d030", border: "#a1871f" },
    [PokemonType.Ground]: { background: "#e0c068", border: "#927d44" },
    [PokemonType.Psychic]: { background: "#f85888", border: "#a13959" },
    [PokemonType.Rock]: { background: "#b8a038", border: "#786824" },
    [PokemonType.Ice]: { background: "#98d8d8", border: "#638d8d" },
    [PokemonType.Bug]: { background: "#a8b820", border: "#6d7815" },
    [PokemonType.Dragon]: { background: "#7038f8", border: "#4924a1" },
    [PokemonType.Ghost]: { background: "#705898", border: "#493963" },
    [PokemonType.Dark]: { background: "#705848", border: "#49392f" },
    [PokemonType.Steel]: { background: "#b8b8d0", border: "#787887" },
    [PokemonType.Fairy]: { background: "#ee99ac", border: "#9b6470" },
};

const border = "#737373";
const background = "#b3b3b3";

const getTypeColors = (type: string): TypeColors => {
    const typeKey = type.toLowerCase() as PokemonType;
    let response: TypeColors = { background, border };
    if (typeKey in TypeColorMap) {
        response = TypeColorMap[typeKey];
    }
    return response;
};

export default getTypeColors;
