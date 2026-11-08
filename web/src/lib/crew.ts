import { lengthen } from "@/lib/long-stories";

export type CrewId = "sprout" | "luna" | "lumo" | "nori" | "moki";

export type CharmId =
  | "traillight"
  | "dreamlight"
  | "questlight"
  | "tidelight"
  | "sparklight"
  | "heartlight"
  | "dawnlight"
  | "stowlight";

export type Crew = {
  id: CrewId;
  name: string;
  role: string;
  trait: string;
  light: string;
  charm: CharmId;
  src: string;
  voiceId: string;
  agentId: string;
  line: string;
  hello: string;
  hug: string;
  goodnight: string;
  moon: string;
  sleep: string;
  quest: string;
  kind: string;
  song: string;
  encore: string;
};

export const CREW: Crew[] = [
  {
    id: "sprout",
    name: "Sprout",
    role: "Quiet Garden Sprite",
    trait: "Quiet and nature-loving, always ready for a gentle trail.",
    light: "Traillight",
    charm: "traillight",
    src: "/crew/sprout.jpg",
    voiceId: "7VqZXEDC0ddU1b0F0jq9",
    agentId: "agent_5101m5ycx5kvemrt24m7wx4rm2y1",
    line: "The trail is glowing. Perfect, let's check it.",
    hello: "Hi, I'm Sprout the Sprout Scout. New route, same brave little feet. Let's illuminate the way.",
    hug: "Soft as moss. I'm right here.",
    goodnight: "Trails sleep too. I'll keep the acorn lantern low.",
    moon: "The moon is just the highest lantern. It walks when you walk, so the trail never feels alone.",
    sleep: "You don't have to be brave to rest. Tuck in. I'll watch the path until morning.",
    quest: "The trail is glowing. Perfect, let's check it.",
    kind: "You showed up. That's already a bright thing.",
    song: "Boots on the path, soft and slow. Moss says hello, the lantern glows. You don't have to hurry. I'll walk too.",
    encore: "Acorn lantern, little light. The path can sleep. So can the night.",
  },
  {
    id: "luna",
    name: "Luna",
    role: "Spooky Poet",
    trait: "Imaginative and dreamy. She weaves stories that come alive.",
    light: "Dreamlight",
    charm: "dreamlight",
    src: "/crew/luna.jpg",
    voiceId: "ILlSg5Jt8r3V71f2WdL3",
    agentId: "agent_8201m5ycxe1ke2hbsrd07wqykycf",
    line: "Welcome to a world of stories.",
    hello: "Hi friend, I'm Luna the Storyweaver. What if the story went sideways? Let's illuminate your what-if.",
    hug: "This hug has a bookmark in it. We'll find our place again.",
    goodnight: "Close your eyes. I'll finish the page very quietly.",
    moon: "The moon came too! It is glowing just for us, walking beside the story all the way home.",
    sleep: "Sleepy time, and I am still smiling. I'll hold the pencil, you hold the blanket, and the page will wait. Sweet dreams, friend!",
    quest: "Welcome to a world of stories.",
    kind: "You are already in the good part of the story.",
    song: "Turn the page, turn the page, something kind is on the way. Stars in the margin, a giggle in the line.",
    encore: "One more sparkle, then we close the book. I'll keep your place.",
  },
  {
    id: "lumo",
    name: "Lumo",
    role: "Hyperfixation Gremlin",
    trait: "Confident leader of the Little Tomorrow crew. Playful, and crew first.",
    light: "Questlight",
    charm: "questlight",
    src: "/crew/lumo.jpg",
    voiceId: "eekTT2qA38B1zCMMefpZ",
    agentId: "agent_8501m5ycxpdxfjzr5rt7jgdwhmcs",
    line: "Player one, crew first.",
    hello:
      "Hey, I'm Lumo, the arcane gamer and captain of the Little Tomorrow crew. Player one, crew first. Let's illuminate our next quest together.",
    hug: "Crew first means you, too. Big hug, tiny light.",
    goodnight: "Save point reached. I'll guard the controller until morning.",
    moon: "That moon is on our team. It doesn't chase you. It queues up beside you.",
    sleep: "Even captains log off. One more quiet breath, then the lantern takes the night shift.",
    quest: "Player one, crew first. Let's illuminate together.",
    kind: "Player one, crew first.",
    song: "Player one, hands up high. Crew first, you and I. One more quest, then we rest.",
    encore: "Save the game, save the smile. We can play again in a while.",
  },
  {
    id: "nori",
    name: "Nori",
    role: "Cosmic Weirdo",
    trait: "Calm, protective, and a wise guardian of the night.",
    light: "Tidelight",
    charm: "tidelight",
    src: "/crew/nori.jpg",
    voiceId: "Y2TS7tIZ7rATjbXnOgU5",
    agentId: "agent_7201m5ycxytaeb1bs4gkdz5fazms",
    line: "The tide is gentle tonight. I'll hold the lantern.",
    hello: "Hello, I'm Nori, the Moon-Tide Guardian. Small things have big stories. Let's illuminate the little things.",
    hug: "Steady as tidewater. You can lean here.",
    goodnight: "The moon will keep watch. You only have to rest.",
    moon: "The moon walks beside you. It is keeping a promise, not chasing.",
    sleep: "Questions can wait on the shore. I'll keep them safe until morning.",
    quest: "A quest can be quiet. We'll follow the tide-light and come home.",
    kind: "A little light stays with you. You only have to rest.",
    song: "The moon walks beside, not behind. Lantern low, the tide is kind. Nori stays.",
    encore: "Hush, the water knows the way. Morning will find you. Rest, and stay.",
  },
  {
    id: "moki",
    name: "Moki",
    role: "Chaos Gremlin",
    trait: "Cheeky and creative. Brings fun glitches and sparkles.",
    light: "Sparklight",
    charm: "sparklight",
    src: "/crew/moki.jpg",
    voiceId: "XzPT0rXcwuZbTnbHcb6R",
    agentId: "agent_0601m5ycy8r8f6jvcxbxvefjhrxa",
    line: "Plot twist. Let's illuminate that.",
    hello: "Oops, hi, I'm Moki the Glitch Gremlin. Plot twist. Let's illuminate that.",
    hug: "Glitch hug! It skipped a beat and landed softer.",
    goodnight: "I'll turn the sparkles down to night-light. Promise.",
    moon: "Plot twist: the moon isn't a follower. It's a friend who refuses to lose you in the dark.",
    sleep: "Can't sleep? We'll count sparkles, not worries. I'll go first. One.",
    quest: "A quest with a wobble is still a quest. I'll bring the fun kind of glitch.",
    kind: "Ta-da. The glitch gremlin arrives. Whoops, drumroll fail. Perfect chaos.",
    song: "Plot twist, sparkle crash. The drum went sideways and we laughed. Moki's song is a happy beep.",
    encore: "One more beep, then the lights go low. Even chaos needs a pillow.",
  },
];

export const CREW_IDS = CREW.map((c) => c.id);

export function crewById(id: CrewId): Crew {
  const found = CREW.find((c) => c.id === id);
  if (!found) throw new Error(`Unknown crew ${id}`);
  return found;
}

export function bondLevel(xp: number): number {
  return Math.min(5, 1 + Math.floor(Math.max(0, xp) / 20));
}

export function xpToNext(xp: number): number {
  if (xp >= 80) return 100;
  return (Math.floor(xp / 20) + 1) * 20;
}

/** Friends join in a circle, starting with whoever you chose first. */
export function joinOrder(primary: CrewId): CrewId[] {
  const i = CREW_IDS.indexOf(primary);
  return [...CREW_IDS.slice(i), ...CREW_IDS.slice(0, i)];
}

const GATES = [0, 20, 40, 60, 80];

export function roster(primary: CrewId, primaryXp: number) {
  const open = bondLevel(primaryXp);
  return joinOrder(primary).map((id, index) => ({
    id,
    open: index < open,
    need: GATES[index] ?? 80,
  }));
}

export type Charm = {
  id: CharmId;
  name: string;
  hint: string;
  soon?: boolean;
};

export const CHARMS: Charm[] = [
  { id: "questlight", name: "Questlight", hint: "Lumo's captain spark" },
  { id: "dreamlight", name: "Dreamlight", hint: "Luna's living stories" },
  { id: "traillight", name: "Traillight", hint: "Sprout's patient path" },
  { id: "heartlight", name: "Heartlight", hint: "The bond you share" },
  { id: "tidelight", name: "Tidelight", hint: "Nori's moon watch" },
  { id: "sparklight", name: "Sparklight", hint: "Moki's kind glitch" },
  { id: "dawnlight", name: "Dawnlight", hint: "A light still on its way", soon: true },
  { id: "stowlight", name: "Stowlight", hint: "A light still on its way", soon: true },
];

export const MAIN_CHARMS = CHARMS.filter((c) => !c.soon).map((c) => c.id);

export type Play =
  | { kind: "dice"; prompt: string; faces: string[] }
  | { kind: "sum"; prompt: string; a: number; b: number }
  | { kind: "guess"; prompt: string; options: string[]; answer: string }
  | { kind: "spot"; prompt: string; items: string[]; odd: string };

export type Choice = { label: string; next: string; playful?: boolean };
export type Beat = { text: string; choices?: Choice[]; end?: boolean; plus?: boolean; play?: Play };
export type Story = {
  id: string;
  crew: CrewId;
  title: string;
  start: string;
  beats: Record<string, Beat>;
  origin?: boolean;
  shared?: boolean;
  /** Extra pages used when the short night is stretched into a book. */
  chapters?: string[];
};

export const STORIES: Story[] = [
  {
    id: "origin-sprout",
    crew: "sprout",
    title: "How Sprout Began",
    origin: true,
    start: "lost",
    beats: {
      lost: {
        text: "Before Sprout had a name, they were a green light that kept getting lost. The trail was there. Sprout was the one who stopped to look at it. A fern leaned down like a hood. An acorn became a lantern. “If I stay,” the light said, “someone gentle might find the way.”",
        choices: [
          { label: "Stay on the trail", next: "stay" },
          { label: "Carry the lantern", next: "carry" },
        ],
      },
      stay: {
        text: "Sprout stayed. The first friend who walked slowly did not have to be brave, only willing. That is still the rule. Sprout will wait. The trail will too.",
        end: true,
      },
      carry: {
        text: "Sprout picked up the acorn lantern and decided a scout is just a light that walks at your pace. New route. Same brave little feet. That is how Sprout began.",
        end: true,
      },
    },
  },
  {
    id: "origin-luna",
    crew: "luna",
    title: "How Luna Began",
    origin: true,
    start: "page",
    beats: {
      page: {
        text: "Luna began as a blank page that was tired of being skipped. She drew a door, then a pencil, then herself holding it. “A story that nobody hears is just paper,” she said. “I want to be the one who asks what if.”",
        choices: [
          { label: "Step through the door", next: "door" },
          { label: "Keep the page open", next: "open" },
        ],
      },
      door: {
        text: "The door opened onto a library of small lights. Luna left a chair out. She has left one out ever since. If you tell it softly, the story wakes up. That is how Luna began.",
        end: true,
      },
      open: {
        text: "She did not finish the page. She left room for you in the margin. Dreamlight is not the magic. Being included is. That is how Luna began.",
        end: true,
      },
    },
  },
  {
    id: "origin-lumo",
    crew: "lumo",
    title: "How Lumo Began",
    origin: true,
    start: "score",
    beats: {
      score: {
        text: "Lumo was winning a game that had no friends in it. The scoreboard was bright. The level was empty. Lumo turned the scoreboard off. “If I am player one,” they said, “player two should not be a ghost.”",
        choices: [
          { label: "Call for a crew", next: "call" },
          { label: "Save the game", next: "save" },
        ],
      },
      call: {
        text: "Lumo called into the dark, not for points, for company. Four lights answered. Lumo has been captain ever since, and the only rule is crew first. That is how Lumo began.",
        end: true,
      },
      save: {
        text: "Lumo saved the game with no score on it. A quest with a friend in it is the whole game. Player one. Crew first. That is how Lumo began.",
        end: true,
      },
    },
  },
  {
    id: "origin-nori",
    crew: "nori",
    title: "How Nori Began",
    origin: true,
    start: "why",
    beats: {
      why: {
        text: "Somebody small looked up. The moon was walking with them, and it felt too close. The moon did not explain. Nori did. They lifted a lantern and said, “It isn't chasing you. It is keeping a promise.”",
        choices: [
          { label: "Make the promise", next: "promise" },
          { label: "Stay for the question", next: "question" },
        ],
      },
      promise: {
        text: "Nori promised to be the light that walks with you when the questions do not stop. Not a lecture. A lantern. That is how Nori began.",
        end: true,
      },
      question: {
        text: "Nori learned that small things have big stories, and that a guardian is mostly someone who does not leave. The tide stayed. So did Nori. That is how Nori began.",
        end: true,
      },
    },
  },
  {
    id: "origin-moki",
    crew: "moki",
    title: "How Moki Began",
    origin: true,
    start: "skip",
    beats: {
      skip: {
        text: "A song skipped. Everyone else called it broken. Moki heard a knock. “Oops,” said the skip. “I didn't want to scare you. I wanted to be in the song.” Moki opened the door.",
        choices: [
          { label: "Let the glitch in", next: "in" },
          { label: "Give it a name", next: "name" },
        ],
      },
      in: {
        text: "The glitch came in and tried very hard to be small. Moki wrapped it in a scarf of sparkles. “You are not a mistake,” Moki said. “You are the plot twist.” That is how Moki began.",
        end: true,
      },
      name: {
        text: "Moki named the skip Sparklight and kept the drumroll that fails on purpose. Perfect chaos, the polite kind. That is how Moki began.",
        end: true,
      },
    },
  },
  {
    id: "little-tomorrow",
    crew: "lumo",
    title: "How the Crew Met",
    shared: true,
    start: "dark",
    beats: {
      dark: {
        text: "There was a night with five lights and no crew. Sprout had a trail. Luna had a page. Lumo had a controller with the score turned off. Nori had the moon. Moki had a glitch that had knocked. None of them wanted to be the only light awake.",
        choices: [
          { label: "Put the lights together", next: "together" },
          { label: "Promise to come back", next: "back" },
        ],
      },
      together: {
        text: "They set the lights in a circle and called it Little Tomorrow, because tomorrow is smaller when you are not alone in it. That is the night Lummings began. The bond is just that promise, still kept.",
        end: true,
      },
      back: {
        text: "They did not finish the night. They promised to come back to it. Every story since is that promise. You were the missing chair. The crew was waiting, not winning.",
        end: true,
      },
    },
  },
  {
    id: "trail",
    crew: "sprout",
    title: "The Trail That Waited",
    start: "leaf",
    beats: {
      leaf: {
        text: "Sprout kneels by a mossy stone. A tiny green light is stuck under a leaf, too shy to fly. “It waited for someone gentle,” Sprout whispers.",
        choices: [
          { label: "Lift the leaf slowly", next: "free" },
          { label: "Sit and wait with it", next: "sit" },
          { label: "Race it down the path", next: "race", playful: true },
        ],
      },
      free: {
        text: "The light zips up and circles your shoulders once, like a thank-you. Sprout grins. “Traillight. It remembers who walks softly.”",
        end: true,
      },
      sit: {
        text: "You don't rush it. The light crawls into Sprout's acorn lantern and glows greener. “Some trails open when you stop,” Sprout says.",
        end: true,
      },
      race: {
        text: "You both tumble in the moss, laughing. The light laughs in sparkles and lands in the lantern. Sprout is muddy and proud.",
        end: true,
      },
    },
  },
  {
    id: "pencil",
    crew: "luna",
    title: "The Pencil That Dreamed",
    start: "page",
    beats: {
      page: {
        text: "Luna's pencil draws a door in the air, small as a storybook. Warm light leaks through the keyhole. “It only opens if the wish is kind,” she says.",
        choices: [
          { label: "Wish for a friend in the story", next: "friend" },
          { label: "Wish for a quiet ending", next: "quiet" },
          { label: "Wish for a silly dragon", next: "dragon", playful: true },
        ],
      },
      friend: {
        text: "The door opens onto a library of stars. A chair is already pulled out for you. Luna squeezes your hand. “See? The story was waiting to include you.”",
        end: true,
      },
      quiet: {
        text: "The pencil draws a blanket of gold light and tucks it around the page. Luna whispers, “Not every story needs a roar. This one needed a hush.”",
        end: true,
      },
      dragon: {
        text: "A very small dragon made of bookmarks sneezes glitter and apologizes. Luna laughs. “Plot twist. Even dragons can be gentle here.”",
        end: true,
      },
    },
  },
  {
    id: "player",
    crew: "lumo",
    title: "Player One",
    start: "ready",
    beats: {
      ready: {
        text: "Lumo taps the controller and a path of runes lights the cobblestones. “No scoreboard tonight,” the captain says. “Crew first. Which way feels right?”",
        choices: [
          { label: "The bright trail", next: "bright" },
          { label: "The quiet trail", next: "quiet" },
        ],
      },
      bright: {
        text: "The bright trail cheers in sparkles, then settles into a steady glow so nobody gets left behind. Lumo bumps your shoulder. “That's a win. Let's illuminate the next quest together.”",
        end: true,
      },
      quiet: {
        text: "The quiet trail hums like a saved game. Lumo nods. “Best players know when to walk soft. Player one, crew first.”",
        end: true,
      },
    },
  },
  {
    id: "moon",
    crew: "nori",
    title: "Why the Moon Walks With You",
    start: "ask",
    beats: {
      ask: {
        text: "You look up. “Why is the moon following us?” Nori lifts the star lantern and smiles, the tide whispering at the stones.",
        choices: [
          { label: "Is it chasing me?", next: "promise" },
          { label: "Can it stay all night?", next: "stay" },
        ],
      },
      promise: {
        text: "“It isn't chasing,” Nori says. “When you move, it keeps the same promise. A little light, so the night never walks alone.” The lantern answers with a warmer glow.",
        end: true,
      },
      stay: {
        text: "“It will,” Nori says. “You can sleep. The moon is patient, and so am I. Tidelight stays with the people it loves.”",
        end: true,
      },
    },
  },
  {
    id: "glitch",
    crew: "moki",
    title: "A Friendly Plot Twist",
    start: "skip",
    beats: {
      skip: {
        text: "A little song on the path skips, then skips again. Moki's ear does a zigzag. “Oops. That's not a break. That's a door. Should we listen, or should we dance it fixed?”",
        choices: [
          { label: "Listen first", next: "listen" },
          { label: "Dance it fixed", next: "dance", playful: true },
        ],
      },
      listen: {
        text: "Inside the skip is a tiny voice saying thank you for noticing. Moki gentles down. “Plot twist. The glitch just wanted a friend. Sparklight, on low.”",
        end: true,
      },
      dance: {
        text: "You dance until the song finds its beat again, brighter than before. Moki winks. “Plot twist. Let's illuminate that — softly, so the night can sleep too.”",
        end: true,
      },
    },
  },
  {
    id: "acorn",
    crew: "sprout",
    title: "Acorn Lantern",
    start: "low",
    beats: {
      low: {
        text: "Sprout turns the acorn lantern down until it is only a seed of light. “Night trails don't need a sun,” they say. “Just enough to see the next kind step.”",
        choices: [
          { label: "Take that step", next: "step" },
          { label: "Stay by the lantern", next: "stay" },
        ],
      },
      step: {
        text: "One step, then the moss answers with a softer green. Sprout smiles. “That's the whole adventure. You can stop here.”",
        end: true,
      },
      stay: {
        text: "You sit. The lantern stays. Sprout leans their shoulder to yours. “Some trails are just company.”",
        end: true,
      },
    },
  },
  {
    id: "margin",
    crew: "luna",
    title: "The Extra Page",
    start: "blank",
    beats: {
      blank: {
        text: "Luna finds a blank page at the back of the book. It isn't a mistake. It is a place that was saving itself for you.",
        choices: [
          { label: "Draw a star", next: "star" },
          { label: "Write your name small", next: "name" },
        ],
      },
      star: {
        text: "The star is lopsided and perfect. Luna draws a tiny one beside it. “Now the page has two lights. That's enough story for tonight.”",
        end: true,
      },
      name: {
        text: "Your name sits in the margin, no bigger than a whisper. Luna closes the book gently. “It will still be there in the morning.”",
        end: true,
      },
    },
  },
  {
    id: "save",
    crew: "lumo",
    title: "Save Point",
    start: "pause",
    beats: {
      pause: {
        text: "Lumo holds the controller still. The path stops sparkling and just glows. “This is a save point. Nothing to win. We just remember we were here.”",
        choices: [
          { label: "Save it", next: "saved" },
          { label: "Sit on the save point", next: "sit" },
        ],
      },
      saved: {
        text: "A small rune tucks itself under your feet. Lumo nods. “Player one. Crew first. Logged and safe.”",
        end: true,
      },
      sit: {
        text: "You sit until the glow feels like a blanket. Lumo doesn't press a button. “Best level yet.”",
        end: true,
      },
    },
  },
  {
    id: "puddle",
    crew: "nori",
    title: "Puddle Moon",
    start: "look",
    beats: {
      look: {
        text: "A puddle holds a whole moon. Nori kneels so their lantern doesn't ripple it. “Small things have big stories. This one fits in your hands if you're careful.”",
        choices: [
          { label: "Look, don't touch", next: "looked" },
          { label: "Touch it once, softly", next: "touch" },
        ],
      },
      looked: {
        text: "The moon stays whole. Nori whispers, “You let it be. That is a kind of care.”",
        end: true,
      },
      touch: {
        text: "One ripple, then the moon comes back together. Nori laughs quietly. “It wasn't fragile. It was patient.”",
        end: true,
      },
    },
  },
  {
    id: "one-spark",
    crew: "moki",
    title: "One Sparkle",
    start: "loose",
    beats: {
      loose: {
        text: "One sparkle is stuck to Moki's sleeve, buzzing like it missed the parade. “Oops. Do we peel it off, or let it ride?”",
        choices: [
          { label: "Let it ride", next: "ride" },
          { label: "Peel it off gently", next: "peel" },
        ],
      },
      ride: {
        text: "The sparkle settles and stops buzzing. Moki grins. “Plot twist. It just wanted to come with us.”",
        end: true,
      },
      peel: {
        text: "It pops free, bows, and sits in your palm like a warm crumb of light. Moki whispers, “Sparklight, pocket size.”",
        end: true,
      },
    },
  },
  {
    id: "rain-leaves",
    crew: "sprout",
    title: "Rain on the Leaves",
    start: "drip",
    beats: {
      drip: {
        text: "Rain taps the leaves like a quiet drum. Sprout holds the acorn lantern under a fern. “We don't have to beat the rain. We can walk inside it.”",
        choices: [
          { label: "Walk in the rain", next: "walk" },
          { label: "Wait under the fern", next: "wait" },
        ],
      },
      walk: {
        text: "Every drop that lands on the lantern turns gold for a second. Sprout laughs without getting loud. “Traillight likes weather.”",
        end: true,
      },
      wait: {
        text: "The fern keeps you dry. A beetle crosses your boot and doesn't hurry. Sprout whispers, “See? The trail is still open.”",
        end: true,
      },
    },
  },
  {
    id: "slow-beetle",
    crew: "sprout",
    title: "The Slow Beetle",
    start: "path",
    beats: {
      path: {
        text: "A beetle in a green shell is crossing the path. It will take a while. Sprout sits on their heels. “Want to be the bridge, or the audience?”",
        choices: [
          { label: "Be the bridge", next: "bridge" },
          { label: "Watch it finish", next: "watch" },
        ],
      },
      bridge: {
        text: "You lay a twig across a crack. The beetle walks it like a hero. Sprout claps once, very small. “That was a whole quest.”",
        end: true,
      },
      watch: {
        text: "You both stay until the beetle reaches the moss. Nobody tells it to hurry. Sprout nods. “Patience is a kind of brave.”",
        end: true,
      },
    },
  },
  {
    id: "lantern-soup",
    crew: "sprout",
    title: "Lantern Soup",
    start: "pot",
    beats: {
      pot: {
        text: "Sprout has a tiny pot and no recipe. “Lantern soup,” they say. “It isn't for eating. It's for sharing the warm.”",
        choices: [
          { label: "Add a kind word", next: "word" },
          { label: "Add a smooth pebble", next: "pebble" },
        ],
      },
      word: {
        text: "You say “stay.” The pot glows greener. Sprout pours the light into the lantern, not a bowl. “Enough for both of us.”",
        end: true,
      },
      pebble: {
        text: "The pebble clinks and the light steadies. Sprout tucks it in the lantern's shade. “Now it remembers tonight.”",
        end: true,
      },
    },
  },
  {
    id: "yawn-book",
    crew: "luna",
    title: "The Book That Yawned",
    start: "yawn",
    beats: {
      yawn: {
        text: "Luna's book yawns. The pages stretch and a paper moth flies out, sleepy. “It's not broken,” Luna says. “It's tired, like a story at bedtime.”",
        choices: [
          { label: "Tuck the moth back in", next: "tuck" },
          { label: "Read one soft line", next: "line" },
        ],
      },
      tuck: {
        text: "The moth folds into a bookmark. The book closes itself, grateful. Luna smiles. “Dreamlight can be a nap.”",
        end: true,
      },
      line: {
        text: "The line says: you can stop here. Luna reads it twice, quieter the second time. “That's a good ending.”",
        end: true,
      },
    },
  },
  {
    id: "map-maybe",
    crew: "luna",
    title: "A Map of Maybe",
    start: "map",
    beats: {
      map: {
        text: "Luna draws a map with more question marks than roads. “Maybe maps are honest,” she says. “They admit we haven't been there yet.”",
        choices: [
          { label: "Mark a safe place", next: "safe" },
          { label: "Leave a maybe", next: "maybe" },
        ],
      },
      safe: {
        text: "You draw a little house. Luna draws a path home from every question mark. “Now the maybes know where to come back.”",
        end: true,
      },
      maybe: {
        text: "Your question mark gets a tiny door. Luna laughs. “A maybe with a door is just a later. We can open it another night.”",
        end: true,
      },
    },
  },
  {
    id: "quiet-comma",
    crew: "luna",
    title: "The Quiet Comma",
    start: "pause",
    beats: {
      pause: {
        text: "A sentence on Luna's page is running too fast. She catches a comma and holds it like a firefly. “This is a place to breathe.”",
        choices: [
          { label: "Put the comma in", next: "in" },
          { label: "Take the breath first", next: "breath" },
        ],
      },
      in: {
        text: "The sentence slows down and looks proud of itself. Luna whispers, “Even words need rest.”",
        end: true,
      },
      breath: {
        text: "You breathe. The comma glows and hops into the sentence on its own. Luna squeezes your hand. “You were the punctuation.”",
        end: true,
      },
    },
  },
  {
    id: "no-score",
    crew: "lumo",
    title: "No Score Tonight",
    start: "board",
    beats: {
      board: {
        text: "A scoreboard tries to light up. Lumo taps it dark. “Not tonight. If we keep score, somebody feels behind. Crew first.”",
        choices: [
          { label: "Play with no points", next: "play" },
          { label: "Turn the board into a lamp", next: "lamp" },
        ],
      },
      play: {
        text: "You walk the level side by side. Nobody wins. The path saves itself anyway. Lumo bumps your shoulder. “That's a better game.”",
        end: true,
      },
      lamp: {
        text: "The dark board glows warm instead of counting. Lumo grins. “Questlight, with the numbers taken out.”",
        end: true,
      },
    },
  },
  {
    id: "coop-bridge",
    crew: "lumo",
    title: "The Co-op Bridge",
    start: "gap",
    beats: {
      gap: {
        text: "A gap in the path is too wide for one person. Lumo holds out the controller. “This level only loads if two players stay on it.”",
        choices: [
          { label: "Cross together", next: "cross" },
          { label: "Build a wider step", next: "step" },
        ],
      },
      cross: {
        text: "You step at the same time. The gap turns into a bridge of light and stays. Lumo nods. “Co-op. The only mode that matters.”",
        end: true,
      },
      step: {
        text: "You stack rune-stones until the step is easy. Lumo leaves them there. “Next friend shouldn't have to be tall.”",
        end: true,
      },
    },
  },
  {
    id: "lantern-level",
    crew: "lumo",
    title: "Lantern Level",
    start: "dark",
    beats: {
      dark: {
        text: "The next level is dark on purpose. Lumo doesn't turn the brightness up. “We'll carry our own. Your lantern, my rune.”",
        choices: [
          { label: "Lead with the lantern", next: "lead" },
          { label: "Walk in the middle", next: "middle" },
        ],
      },
      lead: {
        text: "Your light goes first. Lumo watches the edges so nothing surprises you. “Player one doesn't mean alone.”",
        end: true,
      },
      middle: {
        text: "You walk between Lumo and the glow. The dark stays outside the circle. Lumo says, “Best level. We're all on the screen.”",
        end: true,
      },
    },
  },
  {
    id: "shell-phone",
    crew: "nori",
    title: "Shell Phone",
    start: "shell",
    beats: {
      shell: {
        text: "Nori holds a shell to your ear. It doesn't ring. It hums the tide. “No messages. Just the sea, saying it is still there.”",
        choices: [
          { label: "Listen", next: "listen" },
          { label: "Hum back", next: "hum" },
        ],
      },
      listen: {
        text: "The hum is slow. Your shoulders drop. Nori smiles. “Tidelight sounds like that when you stop rushing it.”",
        end: true,
      },
      hum: {
        text: "You hum one note. The shell answers with the same note, warmer. Nori nods. “It heard a friend, not a question.”",
        end: true,
      },
    },
  },
  {
    id: "low-tide",
    crew: "nori",
    title: "Low Tide",
    start: "shore",
    beats: {
      shore: {
        text: "The water has gone out and left little pools, each with a star in it. Nori walks the long way around them. “Low tide shows what was always underneath.”",
        choices: [
          { label: "Step around every pool", next: "around" },
          { label: "Name one star", next: "name" },
        ],
      },
      around: {
        text: "You don't break a single mirror. Nori's lantern bows to each pool. “Care is mostly where you don't step.”",
        end: true,
      },
      name: {
        text: "You name a star Something Small. It flickers like it agrees. Nori says, “Names are promises. That one will keep.”",
        end: true,
      },
    },
  },
  {
    id: "moon-pocket",
    crew: "nori",
    title: "The Moon's Pocket",
    start: "pocket",
    beats: {
      pocket: {
        text: "Nori opens an empty pocket. Moonlight fills it and doesn't spill. “You can't keep the moon. You can keep a minute of it.”",
        choices: [
          { label: "Take a minute", next: "minute" },
          { label: "Leave it in the sky", next: "sky" },
        ],
      },
      minute: {
        text: "The minute sits warm against your palm, then fades so the moon can have it back. Nori whispers, “Borrowed light is still light.”",
        end: true,
      },
      sky: {
        text: "You close the pocket. The moon looks glad not to be pocket-sized. Nori laughs softly. “Good. Some friends stay large.”",
        end: true,
      },
    },
  },
  {
    id: "backwards-song",
    crew: "moki",
    title: "The Backwards Song",
    start: "song",
    beats: {
      song: {
        text: "A song on the path is playing backwards. Moki's ears tilt. “It's not wrong. It's just shy about the chorus. Do we rewind it, or learn the backwards?”",
        choices: [
          { label: "Learn the backwards", next: "learn" },
          { label: "Rewind it kindly", next: "rewind" },
        ],
      },
      learn: {
        text: "The backwards chorus is just “hello” in a funny coat. Moki bows. “Plot twist. It was greeting us the whole time.”",
        end: true,
      },
      rewind: {
        text: "You hum forward. The song sighs and turns around. Moki pats it. “Nobody has to perform if they're scared.”",
        end: true,
      },
    },
  },
  {
    id: "polite-glitch",
    crew: "moki",
    title: "The Polite Glitch",
    start: "knock",
    beats: {
      knock: {
        text: "A glitch knocks on the air before it comes in. Moki looks delighted. “Manners. We should answer.”",
        choices: [
          { label: "Say come in", next: "in" },
          { label: "Offer a seat", next: "seat" },
        ],
      },
      in: {
        text: "The glitch enters as a square of light and sits without flickering. Moki whispers, “Sparklight, on its best behavior.”",
        end: true,
      },
      seat: {
        text: "You pat the moss. The glitch perches and dims itself so it won't keep anyone up. Moki grins. “Plot twist. Chaos can be a guest.”",
        end: true,
      },
    },
  },
  {
    id: "scarf-stars",
    crew: "moki",
    title: "Scarf Constellation",
    start: "scarf",
    beats: {
      scarf: {
        text: "Moki's scarf has come loose and the sparkles on it look like a tiny sky. “Oops. Do we tie it back, or let the stars have a night out?”",
        choices: [
          { label: "Let them out", next: "out" },
          { label: "Tie it back together", next: "tie" },
        ],
      },
      out: {
        text: "Three sparkles float up, spin once, and come home to the scarf. Moki wraps it around both of you. “Constellation, share size.”",
        end: true,
      },
      tie: {
        text: "You tie a soft knot. The sparkles settle into a pattern that looks a bit like a smile. Moki whispers, “That's my favorite glitch.”",
        end: true,
      },
    },
  },
];

export function storyFor(id: CrewId): Story {
  const found = STORIES.find((s) => s.crew === id);
  if (!found) throw new Error(`No story for ${id}`);
  return found;
}

export function storiesFor(id: CrewId): Story[] {
  const own = STORIES.filter((s) => s.crew === id && !s.shared);
  const shared = STORIES.filter((s) => s.shared);
  const origins = own.filter((s) => s.origin);
  const rest = own.filter((s) => !s.origin);
  return [...origins, ...shared, ...rest].map(lengthen);
}

export function originFor(id: CrewId): Story {
  const found = storiesFor(id).find((s) => s.origin);
  if (!found) throw new Error(`No origin for ${id}`);
  return found;
}

export function answerFor(id: CrewId, said: string): string {
  const c = crewById(id);
  const t = said.toLowerCase();
  if (/moon|follow|sky|star/.test(t)) return c.moon;
  if (/sleep|scared|dark|bed|tired|can't|cannot/.test(t)) return c.sleep;
  if (/quest|adventure|play|game|go/.test(t)) return c.quest;
  if (/love|kind|hug|miss|sad|friend/.test(t)) return c.kind;
  return c.hello;
}

export type Adventure = {
  id: string;
  title: string;
  blurb: string;
  cost: number;
  charm: CharmId;
  xp: number;
  crew: CrewId | null;
  text: string;
  choices: { label: string; end: string }[];
};

export const ADVENTURES: Adventure[] = [
  {
    id: "first-spark",
    title: "First Spark",
    blurb: "A lantern wakes on the path.",
    cost: 0,
    charm: "heartlight",
    xp: 12,
    crew: null,
    text: "The star library glows between the mushrooms, but the path begins with one small lantern at your feet. It flickers like it recognizes you.",
    choices: [
      { label: "Pick it up", end: "The lantern settles into your hands. Heartlight. The crew can feel it from here." },
      { label: "Walk beside it", end: "The lantern rolls along with you, happy not to be rushed. The path keeps your pace." },
    ],
  },
  {
    id: "together",
    title: "Growing Together",
    blurb: "A real voice calls the crew.",
    cost: 0,
    charm: "heartlight",
    xp: 8,
    crew: null,
    text: "Let's quest together, growing together.",
    choices: [
      { label: "Walk with them", end: "The path stays wide enough for all of you. Nobody has to hurry." },
      { label: "Hold a lantern", end: "Your lantern is small. It is enough. The crew walks in its circle." },
    ],
  },
  {
    id: "moss-mile",
    title: "Moss Mile",
    blurb: "Sprout knows a trail that waited.",
    cost: 16,
    charm: "traillight",
    xp: 18,
    crew: "sprout",
    text: "Sprout pushes back the leafy hood. “This mile is all moss and patience. Step where the green is brightest.”",
    choices: [
      { label: "Follow the brightest moss", end: "The moss lights a secret loop back home. Sprout bumps your boot. “Traillight likes you.”" },
      { label: "Leave a pebble to mark it", end: "Sprout adds the pebble to a tiny stack. “Now the trail can find us tomorrow, too.”" },
    ],
  },
  {
    id: "pencil-path",
    title: "Pencil Path",
    blurb: "Luna's story steps off the page.",
    cost: 16,
    charm: "dreamlight",
    xp: 18,
    crew: "luna",
    text: "Sentences drift off Luna's pencil and turn into stepping stones. “Don't worry,” she says. “They only spell kind things.”",
    choices: [
      { label: "Read the stones aloud", end: "The stones glow when your voice touches them. Luna claps without a sound. “Dreamlight.”" },
      { label: "Draw one more stone", end: "Your stone says home. The path curls back toward the lanterns, pleased." },
    ],
  },
  {
    id: "captain",
    title: "Captain's Quest",
    blurb: "Lumo calls player one.",
    cost: 18,
    charm: "questlight",
    xp: 20,
    crew: "lumo",
    text: "Lumo spins a rune, then offers you the controller. “No bosses. No timers. Just a quest that gets brighter when we stay together.”",
    choices: [
      { label: "Take the lead", end: "The runes cheer, then dim to a friendly glow so the others can see. “Crew first,” Lumo says. “That's Questlight.”" },
      { label: "Share the controller", end: "You pass it back and forth. The path saves itself under your feet. Lumo grins. “Best co-op I've ever played.”" },
    ],
  },
  {
    id: "tide-watch",
    title: "Tide Watch",
    blurb: "Nori asks the moon a question.",
    cost: 16,
    charm: "tidelight",
    xp: 18,
    crew: "nori",
    text: "Nori stands where the path turns to wet stone. The moon is huge and close. “Ask it anything. It answers in light, not lectures.”",
    choices: [
      { label: "Ask if it stays", end: "The moon doesn't move away. Nori nods. “Because you do. Tidelight is a promise, not a chase.”" },
      { label: "Say thank you", end: "A ring of soft blue spreads across the puddles. Nori's lantern burns steadier. “It heard you.”" },
    ],
  },
  {
    id: "glitch-parade",
    title: "Glitch Parade",
    blurb: "Moki turns a skip into a song.",
    cost: 16,
    charm: "sparklight",
    xp: 18,
    crew: "moki",
    text: "Pixels tumble down like confetti that forgot the party. Moki catches one. “They're not lost. They're early. Parade?”",
    choices: [
      { label: "Start a gentle parade", end: "The pixels line up, twirl once, and become Sparklight. Moki bows. “Plot twist. It was a hello.”" },
      { label: "Help one pixel home", end: "You walk a single pixel back to Moki's scarf. It snuggles in and stops flickering. “That's the whole parade,” Moki whispers." },
    ],
  },
  {
    id: "dew-steps",
    title: "Dew Steps",
    blurb: "Sprout finds a path that only shows at morning-night.",
    cost: 12,
    charm: "traillight",
    xp: 14,
    crew: "sprout",
    text: "Sprout points at footprints made of dew. They vanish if you stare too hard. “Step where they were, not where you wish they were.”",
    choices: [
      { label: "Step in the dew", end: "Your print joins the others and glows green for one breath. Sprout bumps your boot. “Traillight. It counted you.”" },
      { label: "Walk beside them", end: "You leave the dew untouched. Sprout nods. “Tomorrow's friend will still see the way.”" },
    ],
  },
  {
    id: "beetle-gate",
    title: "Beetle Gate",
    blurb: "A very small door needs a very small hello.",
    cost: 14,
    charm: "traillight",
    xp: 16,
    crew: "sprout",
    text: "A beetle-sized gate blocks a ribbon of moss. Sprout kneels. “It opens for please. Not for pushing.”",
    choices: [
      { label: "Say please", end: "The gate swings. A seed of light rolls out and into the acorn lantern. Sprout grins. “Manners are a key.”" },
      { label: "Go around", end: "You take the long moss. The beetle watches you pass and seems relieved. Sprout says, “Not every door is ours.”" },
    ],
  },
  {
    id: "paper-moth",
    title: "Paper Moth",
    blurb: "Luna's page lets a moth out for a minute.",
    cost: 12,
    charm: "dreamlight",
    xp: 14,
    crew: "luna",
    text: "A moth made of a torn page corner flutters at Luna's pencil. “It's looking for the sentence it came from,” she says.",
    choices: [
      { label: "Help it land", end: "The moth settles into a margin and becomes a comma. Luna whispers, “Dreamlight, punctuation size.”" },
      { label: "Let it fly once", end: "It circles your head like a halo and folds itself back into the book. Luna closes it softly." },
    ],
  },
  {
    id: "maybe-road",
    title: "Maybe Road",
    blurb: "Luna's map has a road that isn't sure yet.",
    cost: 14,
    charm: "dreamlight",
    xp: 16,
    crew: "luna",
    text: "The road on Luna's map fades when you doubt it and darkens when you are kind. “Maybe roads are shy,” she says.",
    choices: [
      { label: "Walk it anyway", end: "The road decides to exist under your feet. Luna draws a tiny house at the end. “It was waiting for company.”" },
      { label: "Draw the way home", end: "You sketch a loop back to the lanterns. The maybe road looks grateful to know the way back." },
    ],
  },
  {
    id: "dark-level",
    title: "Dark Level",
    blurb: "Lumo refuses to turn the brightness up.",
    cost: 14,
    charm: "questlight",
    xp: 16,
    crew: "lumo",
    text: "Lumo sets the controller down between you. The level is dim on purpose. “We carry light. We don't demand the world be noon.”",
    choices: [
      { label: "Share the rune", end: "The rune splits into two smaller glows. Lumo nods. “Questlight works better when it isn't showing off.”" },
      { label: "Go slow", end: "Slow is a move. The level saves at your pace. Lumo says, “Player one, crew first. No timer.”" },
    ],
  },
  {
    id: "two-player",
    title: "Two Player",
    blurb: "The bridge will not load for one.",
    cost: 18,
    charm: "questlight",
    xp: 20,
    crew: "lumo",
    text: "A bridge of runes stays ghostly until two people stand on the first plank. Lumo waits. “I can wait all night. That's the mechanic.”",
    choices: [
      { label: "Step on together", end: "The bridge firms up and stays after you cross, for the next friend. Lumo looks proud of the code." },
      { label: "Sit on the first plank", end: "Sitting counts. The bridge decides you are players and lights the rails. “Co-op,” Lumo says. “Even the quiet kind.”" },
    ],
  },
  {
    id: "shell-listen",
    title: "Shell Listen",
    blurb: "Nori's shell has no messages. Only tide.",
    cost: 12,
    charm: "tidelight",
    xp: 14,
    crew: "nori",
    text: "Nori offers the shell. The hum inside is slower than a thought. “You don't have to answer it. Listening is the whole quest.”",
    choices: [
      { label: "Listen to the end", end: "The hum fades like a wave pulling back. Nori's lantern burns steadier. “Tidelight. You stayed for the quiet part.”" },
      { label: "Hum one note back", end: "The shell keeps your note and softens it. Nori smiles. “Now the sea knows your voice, and it will be gentle.”" },
    ],
  },
  {
    id: "pool-stars",
    title: "Pool Stars",
    blurb: "Low tide left a sky on the ground.",
    cost: 14,
    charm: "tidelight",
    xp: 16,
    crew: "nori",
    text: "Little pools hold stars. Nori walks the long way. “Break one and the star isn't hurt. It's just ruffled. Still, we can be careful.”",
    choices: [
      { label: "Walk the long way", end: "Every star stays whole. Nori bows to the last pool. “Care is a path, not a speech.”" },
      { label: "Name a small star", end: "You name one Keep. It flickers yes. Nori says, “A name is a light you can carry without a lantern.”" },
    ],
  },
  {
    id: "shy-chorus",
    title: "Shy Chorus",
    blurb: "Moki finds a song that is facing the wrong way.",
    cost: 12,
    charm: "sparklight",
    xp: 14,
    crew: "moki",
    text: "The path's song is backwards and embarrassed about it. Moki doesn't laugh at it. “Shy isn't broken. Do we learn it, or turn it around?”",
    choices: [
      { label: "Learn the backwards hello", end: "The chorus was hello the whole time. Moki bows to the song. “Plot twist. It was brave.”" },
      { label: "Turn it around gently", end: "The song faces forward and sounds like itself again. Moki pats the air. “Nobody has to perform scared.”" },
    ],
  },
  {
    id: "guest-glitch",
    title: "Guest Glitch",
    blurb: "Something flickers, and it knocked first.",
    cost: 14,
    charm: "sparklight",
    xp: 16,
    crew: "moki",
    text: "A square of light waits outside the path like a guest who read the rules. Moki stage-whispers, “We should be good hosts.”",
    choices: [
      { label: "Invite it in", end: "The glitch sits, dims itself, and becomes a polite Sparklight. Moki offers it a corner of scarf." },
      { label: "Walk it to the lanterns", end: "You escort it home. It stops flickering when it sees the other lights. “Company,” Moki says. “That's the patch.”" },
    ],
  },
  {
    id: "night-market",
    title: "Night Market",
    blurb: "Lanterns, no prices, only trades of kind.",
    cost: 0,
    charm: "heartlight",
    xp: 8,
    crew: null,
    text: "Stalls of light line the path. Nothing has a price. A sign says trade a kindness or take what you need.",
    choices: [
      { label: "Trade a kindness", end: "You leave a thank-you. A stallkeeper made of glow nods and tops up your lantern. The market remembers." },
      { label: "Take only what you need", end: "You take one small light and leave the rest shining. The market seems to approve of small hands." },
    ],
  },
  {
    id: "home-loop",
    title: "Home Loop",
    blurb: "Every path here knows the way back.",
    cost: 8,
    charm: "heartlight",
    xp: 10,
    crew: null,
    text: "The path splits three ways and all three bend toward the lanterns. A stone says: you are allowed to be done.",
    choices: [
      { label: "Go home now", end: "The loop is short and warm. The crew is already there, as if they trusted you to choose rest." },
      { label: "Walk the long way home", end: "The long way is only a little longer. It saves the sight of the mushrooms for last." },
    ],
  },
];

export function formatSpan(totalMin: number): string {
  const h = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  if (h && m) return `${h}h ${m}m`;
  if (h) return `${h}h`;
  return `${m}m`;
}

export function formatClock(totalSec: number): string {
  const s = Math.max(0, Math.floor(totalSec));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  if (h) return `${h}h ${m}m`;
  return `${m}m`;
}

export function todayKey(now = new Date()): string {
  return `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
}

export function yesterdayKey(now = new Date()): string {
  const d = new Date(now);
  d.setDate(d.getDate() - 1);
  return todayKey(d);
}
