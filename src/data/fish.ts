// Rarities (arr + type)
export const rarities = [
  "common",
  "uncommon",
  "rare",
  "epic",
  "legendary",
  "mythical",
] as const;

export type Rarity = (typeof rarities)[number];

// Regions (arr + type)
export const regions = [
  "deep",
  "ocean",
  "sands",
  "roots",
  "cave",
  "wilds",
  "valley",
] as const;

export type Region = (typeof regions)[number];

// Fish (interface)
export interface Fish {
  id: string;
  name: string;
  pricePerKg: number;
  rarity: Rarity;
  regions: Region[];
}

export const fishData: Fish[] = [
  {
    // 1
    id: "blue-tang",
    name: "Blue Tang",
    pricePerKg: 14,
    rarity: "common",
    regions: ["deep", "ocean"],
  },
  {
    // 2
    id: "clownfish",
    name: "Clownfish",
    pricePerKg: 12,
    rarity: "common",
    regions: ["deep", "ocean"],
  },
  {
    // 3
    id: "tang",
    name: "Tang",
    pricePerKg: 12,
    rarity: "common",
    regions: ["deep"],
  },
  {
    // 4
    id: "pufferfish",
    name: "Pufferfish",
    pricePerKg: 13,
    rarity: "uncommon",
    regions: ["deep", "ocean"],
  },
  {
    // 5
    id: "inflated-pufferfish",
    name: "Inflated Pufferfish",
    pricePerKg: 26,
    rarity: "uncommon",
    regions: ["deep", "ocean"],
  },
  {
    // 6
    id: "salmon",
    name: "Salmon",
    pricePerKg: 9,
    rarity: "uncommon",
    regions: ["deep", "ocean"],
  },
  {
    // 7
    id: "lionfish",
    name: "Lionfish",
    pricePerKg: 20,
    rarity: "rare",
    regions: ["deep"],
  },
  {
    // 8
    id: "mahi-mahi",
    name: "Mahi Mahi",
    pricePerKg: 8,
    rarity: "rare",
    regions: ["deep"],
  },
  {
    // 9
    id: "barracuda",
    name: "Barracuda",
    pricePerKg: 20,
    rarity: "epic",
    regions: ["deep"],
  },
  {
    // 10
    id: "seahorse",
    name: "Seahorse",
    pricePerKg: 250,
    rarity: "rare",
    regions: ["ocean"],
  },
  {
    // 11
    id: "blobfish",
    name: "Blobfish",
    pricePerKg: 75,
    rarity: "rare",
    regions: ["ocean", "cave"],
  },
  {
    // 12
    id: "piranha",
    name: "Piranha",
    pricePerKg: 44,
    rarity: "rare",
    regions: ["ocean", "wilds", "cave"],
  },
  {
    // 13
    id: "shark",
    name: "Shark",
    pricePerKg: 40,
    rarity: "epic",
    regions: ["ocean", "sands"],
  },
  {
    // 14
    id: "sailfish",
    name: "Sailfish",
    pricePerKg: 40,
    rarity: "epic",
    regions: ["ocean", "roots"],
  },
  {
    // 15
    id: "bluefin-tuna",
    name: "Bluefin Tuna",
    pricePerKg: 36,
    rarity: "legendary",
    regions: ["ocean"],
  },
  {
    // 16
    id: "pompano",
    name: "Pompano",
    pricePerKg: 14,
    rarity: "common",
    regions: ["sands"],
  },
  {
    // 17
    id: "cod",
    name: "Cod",
    pricePerKg: 18,
    rarity: "uncommon",
    regions: ["sands"],
  },
  {
    // 18
    id: "blackfin-tuna",
    name: "Blackfin Tuna",
    pricePerKg: 16,
    rarity: "uncommon",
    regions: ["sands"],
  },
  {
    // 19
    id: "grouper",
    name: "Grouper",
    pricePerKg: 28,
    rarity: "rare",
    regions: ["sands"],
  },
  {
    // 20
    id: "scorpionfish",
    name: "Scorpionfish",
    pricePerKg: 60,
    rarity: "rare",
    regions: ["sands"],
  },
  {
    // 21
    id: "cavefish",
    name: "Cavefish",
    pricePerKg: 22,
    rarity: "epic",
    regions: ["sands"],
  },
  {
    // 22
    id: "bigmouthfish",
    name: "Bigmouthfish",
    pricePerKg: 76,
    rarity: "legendary",
    regions: ["sands"],
  },
  {
    // 23
    id: "ancient-shark",
    name: "Ancient Shark",
    pricePerKg: 50,
    rarity: "legendary",
    regions: ["sands"],
  },
  {
    // 24
    id: "pacific-fanfish",
    name: "Pacific Fanfish",
    pricePerKg: 20,
    rarity: "common",
    regions: ["roots"],
  },
  {
    // 25
    id: "jellyfish",
    name: "Jellyfish",
    pricePerKg: 35,
    rarity: "uncommon",
    regions: ["roots"],
  },
  {
    // 26
    id: "napoleon",
    name: "Napoleon",
    pricePerKg: 20,
    rarity: "uncommon",
    regions: ["roots"],
  },
  {
    // 27
    id: "sunfish",
    name: "Sunfish",
    pricePerKg: 17,
    rarity: "rare",
    regions: ["roots"],
  },
  {
    // 28
    id: "narwhal",
    name: "Narwhal",
    pricePerKg: 18,
    rarity: "rare",
    regions: ["roots"],
  },
  {
    // 29
    id: "hammer-shark",
    name: "Hammer Shark",
    pricePerKg: 48,
    rarity: "epic",
    regions: ["roots"],
  },
  {
    // 30
    id: "eyefish",
    name: "Eyefish",
    pricePerKg: 160,
    rarity: "legendary",
    regions: ["roots"],
  },
  {
    // 31
    id: "discus",
    name: "Discus",
    pricePerKg: 25,
    rarity: "common",
    regions: ["wilds"],
  },
  {
    // 32
    id: "trout",
    name: "Trout",
    pricePerKg: 24,
    rarity: "uncommon",
    regions: ["wilds"],
  },
  {
    // 33
    id: "tambaqui",
    name: "Tambaqui",
    pricePerKg: 18,
    rarity: "uncommon",
    regions: ["wilds"],
  },
  {
    // 34
    id: "sea-turtle",
    name: "Sea Turtle",
    pricePerKg: 20,
    rarity: "rare",
    regions: ["wilds"],
  },
  {
    // 35
    id: "toucan-fish",
    name: "Toucan Fish",
    pricePerKg: 90,
    rarity: "epic",
    regions: ["wilds"],
  },
  {
    // 36
    id: "jaguar-shark",
    name: "Jaguar Shark",
    pricePerKg: 50,
    rarity: "epic",
    regions: ["wilds"],
  },
  {
    // 37
    id: "sacabambaspis",
    name: "Sacabambaspis",
    pricePerKg: 150,
    rarity: "legendary",
    regions: ["wilds"],
  },
  {
    // 38
    id: "anglerfish",
    name: "Anglerfish",
    pricePerKg: 35,
    rarity: "rare",
    regions: ["cave"],
  },
  {
    // 39
    id: "stingray",
    name: "Stingray",
    pricePerKg: 35,
    rarity: "common",
    regions: ["valley"],
  },
  {
    // 40
    id: "boxfish",
    name: "Boxfish",
    pricePerKg: 32,
    rarity: "common",
    regions: ["valley"],
  },
  {
    // 41
    id: "catfish",
    name: "Catfish",
    pricePerKg: 32,
    rarity: "uncommon",
    regions: ["valley"],
  },
  {
    // 42
    id: "squid",
    name: "Squid",
    pricePerKg: 65,
    rarity: "uncommon",
    regions: ["valley"],
  },
  {
    // 43
    id: "atlantic-octopus",
    name: "Atlantic Octopus",
    pricePerKg: 60,
    rarity: "uncommon",
    regions: ["valley"],
  },
  {
    // 44
    id: "largemouth-bass",
    name: "Largemouth Bass",
    pricePerKg: 65,
    rarity: "rare",
    regions: ["valley"],
  },
  {
    // 45
    id: "sockeye-salmon",
    name: "Sockeye Salmon",
    pricePerKg: 100,
    rarity: "rare",
    regions: ["valley"],
  },
  {
    // 46
    id: "surubim",
    name: "Surubim",
    pricePerKg: 68,
    rarity: "rare",
    regions: ["valley"],
  },
  {
    // 47
    id: "thresher-shark",
    name: "Thresher Shark",
    pricePerKg: 82,
    rarity: "epic",
    regions: ["valley"],
  },
  {
    // 48
    id: "manta-ray",
    name: "Manta Ray",
    pricePerKg: 48,
    rarity: "epic",
    regions: ["valley"],
  },
  {
    // 49
    id: "basking-shark",
    name: "Basking Shark",
    pricePerKg: 85,
    rarity: "epic",
    regions: ["valley"],
  },
  {
    // 50
    id: "alien",
    name: "Alien",
    pricePerKg: 140,
    rarity: "epic",
    regions: ["valley"],
  },
  {
    // 51
    id: "phantom-jelly",
    name: "Phantom Jelly",
    pricePerKg: 145,
    rarity: "epic",
    regions: ["valley"],
  },
  {
    // 52
    id: "angel",
    name: "Angel",
    pricePerKg: 300,
    rarity: "mythical",
    regions: ["valley"],
  },
];
