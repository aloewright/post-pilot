// Hand-tuned Recraft vector prompts, one per author.
//
// Shared palette (verbatim across every cover so the row reads as a set):
//   bone white  — background (stripped at build, card surface shows through)
//   slate gray  — primary ink, carries the bulk of the drawing
//   warm amber  — RESTRAINED accent, used sparingly for warmth
//   editorial red — STRICTLY ONE small focal point per cover, nothing more
//
// Shared composition: every cover uses repetition (a row/series of similar
// forms) and dramatic size hierarchy (one dominant element among smaller
// repeated ones, or one tiny figure beside something towering). The
// dominant element sits centered on a golden-ratio portrait canvas with
// generous negative space around it.
//
// Author identity is carried by the SUBJECT, never by the palette or the
// composition rules. Keep both clauses verbatim when adding new authors.

export type CoverPrompt = {
  slug: string;
  prompt: string;
};

const PALETTE_CLAUSE =
  "strict limited palette: bone white background, slate gray as the dominant ink, warm amber used sparingly as a restrained accent, and exactly one small touch of editorial red as the single focal point of the composition — no other colors, no gradients, no shading";

const COMPOSITION_CLAUSE =
  "composition built on repetition and size hierarchy: a row or series of similar repeated forms with one dominant element clearly larger than the others, golden ratio portrait composition, the dominant element centered within the frame, surrounded by vast bone-white negative space, minimal flat shapes, editorial book-cover style";

const TEMPLATE = (subject: string) =>
  `A flat vector illustration of ${subject}, ${COMPOSITION_CLAUSE}, ${PALETTE_CLAUSE}`;

export const COVER_PROMPTS: CoverPrompt[] = [
  // -- already accepted by the user (5) ------------------------------------
  {
    slug: "huxley",
    prompt: TEMPLATE(
      "a row of five identical slender glass observation cylinders standing on a shelf, four of them empty, one taller central cylinder containing a single tiny orchid bloom"
    ),
  },
  {
    slug: "chekhov",
    prompt: TEMPLATE(
      "one large brass samovar standing on a plain wooden table behind a row of five identical small empty teacups arranged in a line, a single thin curl of steam rising"
    ),
  },
  {
    slug: "doyle",
    prompt: TEMPLATE(
      "a row of five identical small footprints on cobblestones receding into the distance, one large magnifying glass held over the nearest footprint and circling it"
    ),
  },
  {
    slug: "baudelaire",
    prompt: TEMPLATE(
      "a row of five identical tall gas lamp posts along a boulevard, a single small flâneur in a top hat standing beside the central lamp with one tiny flower in his lapel"
    ),
  },
  {
    slug: "dickens",
    prompt: TEMPLATE(
      "a row of five small well-dressed Victorian passers-by walking down a foggy cobblestone street in top hats and long coats, one large central ragged beggar figure huddled on the cobblestones in the foreground holding out a small tin cup, a single tiny red coin glinting on the cobblestones beside the cup"
    ),
  },

  // -- pre-1900 ------------------------------------------------------------
  {
    slug: "austen",
    prompt: TEMPLATE(
      "a row of five small empty porcelain teacups on saucers in a line, one large central teapot pouring a single thin stream into the middle cup, a single tiny red rose petal resting on the central saucer"
    ),
  },
  {
    slug: "wilde",
    prompt: TEMPLATE(
      "a row of five small white carnations standing in a line, one large central carnation in fuller bloom rising taller than the rest, a single tiny red petal falling from its bloom"
    ),
  },
  {
    slug: "poe",
    prompt: TEMPLATE(
      "a row of five small bare branches on a wall, one large central raven perched on the middle branch with its head turned, a single tiny red drop falling from the raven's beak"
    ),
  },
  {
    slug: "twain",
    prompt: TEMPLATE(
      "a row of five small wooden river-pier pilings receding across calm water, one large central paddlewheel steamboat with twin smokestacks rising tall, a single tiny red lantern hanging at its prow"
    ),
  },
  {
    slug: "melville",
    prompt: TEMPLATE(
      "a row of five small whaling harpoons mounted in a line, one large central white whale arching above the waves, a single tiny red drop trailing from the whale's tail"
    ),
  },
  {
    slug: "henry-james",
    prompt: TEMPLATE(
      "a row of five small ornate drawing-room doorways receding in perspective, one large central doorway with a half-glimpsed figure standing in shadow, a single tiny red velvet curtain tassel hanging in the foreground"
    ),
  },
  {
    slug: "hawthorne",
    prompt: TEMPLATE(
      "a row of five small bare puritan tombstones in a line, one large central wooden meeting-house door standing taller than the rest, a single tiny scarlet letter A pinned to the door"
    ),
  },
  {
    slug: "tolstoy",
    prompt: TEMPLATE(
      "a row of five small peasant figures bowing in a wheat field, one large central plough horse standing taller than the row, a single tiny red kerchief tied around the lead peasant's neck"
    ),
  },
  {
    slug: "flaubert",
    prompt: TEMPLATE(
      "a row of five small bourgeois parlor chairs lined against a wall, one large central armchair facing the viewer, a single tiny red novel resting on its cushion"
    ),
  },
  {
    slug: "hugo",
    prompt: TEMPLATE(
      "a row of five small revolutionary banners along a Parisian barricade, one large central cathedral spire rising above the rooftops, a single tiny red flag at the spire's tip"
    ),
  },
  {
    slug: "balzac",
    prompt: TEMPLATE(
      "a row of five small leather-bound ledger books standing on a shelf, one large central ledger lying open in the foreground, a single tiny red wax seal on its open page"
    ),
  },
  {
    slug: "zola",
    prompt: TEMPLATE(
      "a row of five small factory smokestacks against the sky, one large central coal pithead winding-tower rising taller than the rest, a single tiny red miner's lamp glowing at its base"
    ),
  },
  {
    slug: "shelley",
    prompt: TEMPLATE(
      "a row of five small jagged lightning bolts striking down from the sky, one large central gothic laboratory tower below them, a single tiny red ember glowing in the tower's window"
    ),
  },
  {
    slug: "charlotte-bronte",
    prompt: TEMPLATE(
      "a row of five small candle flames in candleholders along a mantelpiece, one large central tall candle burning brighter than the rest, a single tiny red ribbon tied around the central candleholder"
    ),
  },
  {
    slug: "emily-bronte",
    prompt: TEMPLATE(
      "a row of five small wind-bent moor grasses on a hillside, one large central gnarled hawthorn tree leaning against the wind, a single tiny red berry hanging from one of its branches"
    ),
  },
  {
    slug: "george-eliot",
    prompt: TEMPLATE(
      "a row of five small interconnected gears arranged in a line, one large central wagon wheel turning above them, a single tiny red ribbon caught in the wheel's spokes"
    ),
  },
  {
    slug: "hardy",
    prompt: TEMPLATE(
      "a row of five small standing stones on a moor, one large central megalithic dolmen looming above them, a single tiny red poppy growing at its base"
    ),
  },
  {
    slug: "stevenson",
    prompt: TEMPLATE(
      "a row of five small skeleton keys hanging on a wall, one large central wooden treasure chest standing in the foreground, a single tiny red wax seal on the chest's lid"
    ),
  },
  {
    slug: "carroll",
    prompt: TEMPLATE(
      "a row of five small chess pieces standing in line on a checkered floor, one large central teacup balanced atop the king, a single tiny red playing card folded inside the cup"
    ),
  },
  {
    slug: "nietzsche",
    prompt: TEMPLATE(
      "a row of five small jagged mountain peaks in a horizontal line, one large central mountain summit rising above them, a single tiny red banner planted at the summit"
    ),
  },
  {
    slug: "ibsen",
    prompt: TEMPLATE(
      "a row of five small framed family portraits hanging in a line on a wall, one large central pistol mounted above them, a single tiny red drop on the pistol's grip"
    ),
  },
  {
    slug: "emerson",
    prompt: TEMPLATE(
      "a row of five small bare sapling silhouettes rooted in a meadow, one large central bare oak tree silhouette towering above them with simple unbroken branches and no individual leaves drawn, a single tiny red leaf falling beside the trunk"
    ),
  },
  {
    slug: "thoreau",
    prompt: TEMPLATE(
      "a row of five small wild reeds growing at the edge of a pond, one large central wooden cabin sitting alone on the shore, a single tiny red lantern glowing in the cabin's window"
    ),
  },
  {
    slug: "douglass",
    prompt: TEMPLATE(
      "a row of five small chain links lying broken in a line, one large central wooden lectern standing tall above them, a single tiny red ribbon tied around the lectern's edge"
    ),
  },
  {
    slug: "swift",
    prompt: TEMPLATE(
      "a row of five small Lilliputian figures standing in a line on the ground, one large central giant's boot looming above them, a single tiny red ribbon tied around the giant's bootlace"
    ),
  },
  {
    slug: "defoe",
    prompt: TEMPLATE(
      "a row of five small palm fronds bending in a line, one large central wooden castaway's shelter rising in the foreground, a single tiny red distress flag flying from its roof"
    ),
  },
  {
    slug: "whitman",
    prompt: TEMPLATE(
      "a row of five small grass blades growing tall in a meadow, one large central open book lying among the grass, a single tiny red wildflower growing through the book's pages"
    ),
  },
  {
    slug: "dickinson",
    prompt: TEMPLATE(
      "a row of five small em-dashes floating in a vertical column, one large central window frame admitting a slanted shaft of light, a single tiny red bird perched on the windowsill"
    ),
  },

  // -- modernist -----------------------------------------------------------
  {
    slug: "hemingway",
    prompt: TEMPLATE(
      "a row of five small icebergs floating in a line on calm water, one large central iceberg towering above the others with most of its mass submerged, a single tiny red fishing buoy bobbing beside it"
    ),
  },
  {
    slug: "woolf",
    prompt: TEMPLATE(
      "a row of five small cresting waves rolling in line toward shore, one large central wave curling overhead, a single tiny red lighthouse beacon glowing on the distant horizon"
    ),
  },
  {
    slug: "joyce",
    prompt: TEMPLATE(
      "a row of five small Dublin doorways receding down a cobblestone street, one large central iron streetlamp rising above them, a single tiny red door painted on the central building"
    ),
  },
  {
    slug: "pound",
    prompt: TEMPLATE(
      "a row of five small classical Greek columns standing in line, one large central column twice as tall standing apart from the row, a single tiny red ideogram painted at its base"
    ),
  },
  {
    slug: "stein",
    prompt: TEMPLATE(
      "a row of five identical small geometric squares in a horizontal line, one large central square stacked above them rotated forty-five degrees, a single tiny red dot at its center"
    ),
  },
  {
    slug: "fitzgerald",
    prompt: TEMPLATE(
      "a row of five small wooden dock pilings receding across calm water, one large central waterfront mansion rising on the far shore, a single tiny red lantern glowing at the end of the dock"
    ),
  },
  {
    slug: "faulkner",
    prompt: TEMPLATE(
      "a row of five small southern wooden porch columns in a line, one large central spreading live oak tree draped with hanging moss, a single tiny red lantern hanging from one of its branches"
    ),
  },
  {
    slug: "anderson",
    prompt: TEMPLATE(
      "a row of five small identical wooden Midwestern houses on a street, one large central white clapboard house with a single lit window, a single tiny red curtain visible in the lit window"
    ),
  },
  {
    slug: "cather",
    prompt: TEMPLATE(
      "a row of five small wheat sheaves standing on a prairie, one large central wooden plough abandoned in the field, a single tiny red sun setting on the horizon line"
    ),
  },
  {
    slug: "wharton",
    prompt: TEMPLATE(
      "a row of five small ornate calling cards lined up on a silver tray, one large central crystal chandelier hanging above them, a single tiny red ribbon tied around one of the cards"
    ),
  },
  {
    slug: "kafka",
    prompt: TEMPLATE(
      "a row of five small filing cabinet drawers in a wall of files, one large central locked office door looming above the row, a single tiny red wax seal on the door's keyhole"
    ),
  },
  {
    slug: "mann",
    prompt: TEMPLATE(
      "a row of five small wooden chaise longues lined up on an alpine sanatorium veranda, one large central thermometer mounted on the wall behind them, a single tiny red mercury column visible in the thermometer"
    ),
  },
  {
    slug: "hesse",
    prompt: TEMPLATE(
      "a row of five small smooth river stones laid in a line on the bank, one large central lotus blossom floating above the water, a single tiny red carp visible beneath the lotus"
    ),
  },
  {
    slug: "proust",
    prompt: TEMPLATE(
      "a row of five small identical scallop-shell-shaped madeleine cakes arranged on a plate, one large central porcelain teacup with handle and saucer placed before them with steam rising from the cup, a single tiny red drop of jam beside the central madeleine"
    ),
  },
  {
    slug: "conrad",
    prompt: TEMPLATE(
      "a row of five small lifeboats hanging from a ship's davits, one large central ship's prow emerging from heavy fog, a single tiny red navigation lamp glowing on the prow"
    ),
  },
  {
    slug: "hammett",
    prompt: TEMPLATE(
      "a row of five small empty bullet casings standing on end in a line, one large central revolver lying horizontally in front of them, a single tiny red drop on the revolver's grip"
    ),
  },

  // -- mid-20th ------------------------------------------------------------
  {
    slug: "vonnegut",
    prompt: TEMPLATE(
      "a row of five identical small asterisks arranged in a vertical column, one large central asterisk drawn boldly twice the size of the others, a single tiny red dot at its center"
    ),
  },
  {
    slug: "asimov",
    prompt: TEMPLATE(
      "a row of five small electrons orbiting in a horizontal line, one large central atomic nucleus with three concentric orbital rings, a single tiny red electron glowing brighter than the others"
    ),
  },
  {
    slug: "bradbury",
    prompt: TEMPLATE(
      "a row of five small carnival tent-pennants strung along a midway, one large central old-fashioned carousel horse rearing on its pole, a single tiny red balloon tied to the saddle"
    ),
  },
  {
    slug: "philip-k-dick",
    prompt: TEMPLATE(
      "a row of five small identical mirrors leaning against a wall, one large central tall mirror reflecting an empty room, a single tiny red eye visible in the mirror's reflection"
    ),
  },
];
