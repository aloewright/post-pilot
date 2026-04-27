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

// -- new authors batch (200) ---------------------------------------------
  {
    slug: "adam-smith",
    prompt: TEMPLATE(
      "a row of five small ledger pages stacked on a wooden desk, one large central pin-making workshop bench in the foreground, a single tiny red wax seal stamped on the central page"
    ),
  },
  {
    slug: "aeschylus",
    prompt: TEMPLATE(
      "a row of five small Greek tragic masks lined along a stone step, one large central laurel-crowned mask facing forward, a single tiny red drop of blood beneath the mouth of the central mask"
    ),
  },
  {
    slug: "aleksis-kivi",
    prompt: TEMPLATE(
      "a row of five small Finnish pine trees along the edge of a forest, one large central log cabin with a smoking chimney, a single tiny red lingonberry on the windowsill"
    ),
  },
  {
    slug: "alexander-pope",
    prompt: TEMPLATE(
      "a row of five small powdered wigs on stands along a shelf, one large central goose quill poised over an open couplet, a single tiny red ribbon tied around the quill"
    ),
  },
  {
    slug: "alexandre-dumas-pere",
    prompt: TEMPLATE(
      "a row of five small crossed rapiers along a wall, one large central plumed musketeer hat resting on a leather book, a single tiny red rose tucked into the hat's brim"
    ),
  },
  {
    slug: "alfred-tennyson",
    prompt: TEMPLATE(
      "a row of five small reeds along the bank of a still river, one large central drifting wooden boat with a trailing tapestry, a single tiny red poppy floating in the water"
    ),
  },
  {
    slug: "algernon-blackwood",
    prompt: TEMPLATE(
      "a row of five small whispering pines on a windswept ridge, one large central canoe drawn up on a moonlit shore, a single tiny red lantern glowing on its prow"
    ),
  },
  {
    slug: "ambrose-bierce",
    prompt: TEMPLATE(
      "a row of five small dictionary entries on torn paper slips, one large central Civil War officer's saber lying across an open ledger, a single tiny red ink blot on the saber's pommel"
    ),
  },
  {
    slug: "andersen",
    prompt: TEMPLATE(
      "a row of five small paper boats sailing on a gutter stream, one large central tin soldier standing at attention, a single tiny red paper heart held at the soldier's chest"
    ),
  },
  {
    slug: "andrei-bely",
    prompt: TEMPLATE(
      "a row of five small St. Petersburg domes along a foggy skyline, one large central ticking pocket watch dissolving into musical notation, a single tiny red bomb fuse curling from beside the watch"
    ),
  },
  {
    slug: "andrew-marvell",
    prompt: TEMPLATE(
      "a row of five small mowed grass blades arranged along a garden bed, one large central sundial casting a long shadow, a single tiny red rosebud opening at the dial's gnomon"
    ),
  },
  {
    slug: "andreyev",
    prompt: TEMPLATE(
      "a row of five small black silhouetted figures walking single file, one large central hooded figure facing the viewer in stark contrast, a single tiny red lamp held in the central figure's hand"
    ),
  },
  {
    slug: "ann-radcliffe",
    prompt: TEMPLATE(
      "a row of five small cypress trees along a moonlit cliff, one large central crumbling Italian abbey with an arched window, a single tiny red drop of candle wax on the windowsill"
    ),
  },
  {
    slug: "anthony-hope",
    prompt: TEMPLATE(
      "a row of five small dueling pistols laid in a velvet case, one large central Ruritanian crown resting on a scroll of state, a single tiny red sash ribbon trailing from the crown"
    ),
  },
  {
    slug: "anthony-trollope",
    prompt: TEMPLATE(
      "a row of five small parsonage chimneys along a Barsetshire skyline, one large central wooden post-office pillar box, a single tiny red letter slot opening on the pillar box"
    ),
  },
  {
    slug: "aphra-behn",
    prompt: TEMPLATE(
      "a row of five small Restoration theatre masks along a balustrade, one large central plumed quill standing in an inkpot, a single tiny red lip print on the inkpot's rim"
    ),
  },
  {
    slug: "apuleius",
    prompt: TEMPLATE(
      "a row of five small donkey hoofprints in dust, one large central golden ass standing beside a Roman urn, a single tiny red rose petal on the donkey's muzzle"
    ),
  },
  {
    slug: "aristophanes",
    prompt: TEMPLATE(
      "a row of five small comic theatre masks lined along an Athenian step, one large central chorus of clouds rendered as a single billowing form, a single tiny red wine cup held aloft beneath the clouds"
    ),
  },
  {
    slug: "augustine",
    prompt: TEMPLATE(
      "a row of five small open codices along a stone shelf, one large central pear hanging from a knotted branch, a single tiny red drop of ink falling onto an open confession"
    ),
  },
  {
    slug: "bacon",
    prompt: TEMPLATE(
      "a row of five small numbered aphorisms on parchment slips, one large central glass alembic on a scholar's desk, a single tiny red wax seal closing the central aphorism"
    ),
  },
  {
    slug: "bagehot",
    prompt: TEMPLATE(
      "a row of five small Victorian banknotes along a counting-house ledger, one large central wooden Westminster lectern, a single tiny red dispatch ribbon tied to the lectern"
    ),
  },
  {
    slug: "ben-jonson",
    prompt: TEMPLATE(
      "a row of five small ale tankards along a Mermaid Tavern bench, one large central laurel-wreathed bust of a poet, a single tiny red ribbon at the bust's collar"
    ),
  },
  {
    slug: "boccaccio",
    prompt: TEMPLATE(
      "a row of five small Florentine storytellers seated under a tree, one large central plague-time villa with terraced gardens, a single tiny red pomegranate on a stone bench"
    ),
  },
  {
    slug: "boethius",
    prompt: TEMPLATE(
      "a row of five small turning spokes of a great wheel, one large central seated allegorical figure of Philosophy with a book, a single tiny red drop of wax falling from a prison candle"
    ),
  },
  {
    slug: "booker-t-washington",
    prompt: TEMPLATE(
      "a row of five small bricks laid in mortar, one large central trowel resting atop an open primer, a single tiny red kerosene lantern at the corner of the primer"
    ),
  },
  {
    slug: "booth-tarkington",
    prompt: TEMPLATE(
      "a row of five small Midwestern porch columns along a clapboard front, one large central horse-drawn buggy in the street, a single tiny red apple on the buggy's bench"
    ),
  },
  {
    slug: "bret-harte",
    prompt: TEMPLATE(
      "a row of five small gold-rush mining pans along a wooden sluice, one large central pickaxe leaning against a rough cabin, a single tiny red bandana tied to the pickaxe's handle"
    ),
  },
  {
    slug: "bunin",
    prompt: TEMPLATE(
      "a row of five small fading apple trees in a Russian orchard, one large central abandoned manor house with shuttered windows, a single tiny red rowan berry on the manor's step"
    ),
  },
  {
    slug: "burke",
    prompt: TEMPLATE(
      "a row of five small leather-bound parliamentary speeches along a shelf, one large central oaken Westminster chair, a single tiny red dispatch seal hanging from the chair's arm"
    ),
  },
  {
    slug: "caesar",
    prompt: TEMPLATE(
      "a row of five small Roman legionary standards staked along a road, one large central campaign map unfurled across a field-table, a single tiny red wax seal stamped on the map"
    ),
  },
  {
    slug: "camoes",
    prompt: TEMPLATE(
      "a row of five small Portuguese caravels along a horizon line, one large central armillary sphere on a navigator's table, a single tiny red compass needle fixed at its center"
    ),
  },
  {
    slug: "carlyle",
    prompt: TEMPLATE(
      "a row of five small Victorian factory chimneys belching slate smoke, one large central thunderous lectern with an open prophetic tome, a single tiny red flame at the corner of the page"
    ),
  },
  {
    slug: "catullus",
    prompt: TEMPLATE(
      "a row of five small wax tablets along a Roman writing desk, one large central sparrow perched on an open scroll, a single tiny red kissed lip-print on the scroll's edge"
    ),
  },
  {
    slug: "cervantes",
    prompt: TEMPLATE(
      "a row of five small turning windmill blades along a La Mancha ridge, one large central lance-bearing knight on a thin horse, a single tiny red ribbon tied to the lance tip"
    ),
  },
  {
    slug: "charlotte-perkins-gilman",
    prompt: TEMPLATE(
      "a row of five small repeating yellow wallpaper motifs, one large central locked nursery window with iron bars, a single tiny red drop of pulled thread snagged in the wallpaper"
    ),
  },
  {
    slug: "chaucer",
    prompt: TEMPLATE(
      "a row of five small Canterbury pilgrims on horseback along a road, one large central Tabard Inn signboard hanging from an iron bracket, a single tiny red ribbon tied to the signboard"
    ),
  },
  {
    slug: "christopher-marlowe",
    prompt: TEMPLATE(
      "a row of five small Elizabethan candlesticks along a study table, one large central Faustian conjuring circle chalked on the floor, a single tiny red drop of blood at the circle's center"
    ),
  },
  {
    slug: "cicero",
    prompt: TEMPLATE(
      "a row of five small fluted Roman columns along a forum, one large central oratorical rostrum with a draped toga, a single tiny red wax seal pressed onto a scroll on the rostrum"
    ),
  },
  {
    slug: "dannunzio",
    prompt: TEMPLATE(
      "a row of five small Italian biplane silhouettes climbing a sky, one large central laurel-crowned bust on a marble pedestal, a single tiny red rose at the bust's throat"
    ),
  },
  {
    slug: "dante",
    prompt: TEMPLATE(
      "a row of five small concentric stone rings descending into shadow, one large central laurel-crowned poet in a long robe, a single tiny red flame held in the poet's hand"
    ),
  },
  {
    slug: "darwin",
    prompt: TEMPLATE(
      "a row of five small finch beaks of varying shapes mounted on a card, one large central HMS Beagle silhouette at anchor, a single tiny red specimen tag tied to the central beak"
    ),
  },
  {
    slug: "de-quincey",
    prompt: TEMPLATE(
      "a row of five small opium poppy capsules along a Regency mantelpiece, one large central laudanum bottle with a glass stopper, a single tiny red drop of tincture pooled at the bottle's base"
    ),
  },
  {
    slug: "dostoevsky",
    prompt: TEMPLATE(
      "a row of five small St. Petersburg tenement windows lit at night, one large central wooden confessional door slightly ajar, a single tiny red drop of blood on the doorframe"
    ),
  },
  {
    slug: "droste-hulshoff",
    prompt: TEMPLATE(
      "a row of five small Westphalian heath stones in a line, one large central weathered farmhouse with a low gable, a single tiny red rowan berry on the doorstone"
    ),
  },
  {
    slug: "du-bois",
    prompt: TEMPLATE(
      "a row of five small spirituals notated on staff lines, one large central scholarly lectern draped with academic regalia, a single tiny red veil edge curling over the lectern's lip"
    ),
  },
  {
    slug: "e-nesbit",
    prompt: TEMPLATE(
      "a row of five small Edwardian children's boots in a tidy line, one large central railway signal arm raised over a track, a single tiny red flannel petticoat waved beside the signal"
    ),
  },
  {
    slug: "edmund-spenser",
    prompt: TEMPLATE(
      "a row of five small allegorical knights on caparisoned horses, one large central Faerie Queene's tower wreathed in vines, a single tiny red rose at the tower's gate"
    ),
  },
  {
    slug: "edward-bulwer-lytton",
    prompt: TEMPLATE(
      "a row of five small flickering Pompeian oil lamps in a row, one large central toga-clad orator at a marble lectern, a single tiny red curtain tassel beside the lectern"
    ),
  },
  {
    slug: "elizabeth-barrett-browning",
    prompt: TEMPLATE(
      "a row of five small sonnet cards tied with ribbon along a writing desk, one large central open Italianate window framing a cypress, a single tiny red rose on the windowsill"
    ),
  },
  {
    slug: "elizabeth-gaskell",
    prompt: TEMPLATE(
      "a row of five small cotton spindles along a Manchester mill bench, one large central parsonage tea-table with a steaming pot, a single tiny red ribbon at the teapot's handle"
    ),
  },
  {
    slug: "engels",
    prompt: TEMPLATE(
      "a row of five small factory smokestacks along a Manchester skyline, one large central iron printing press in the foreground, a single tiny red flag clipped to the press"
    ),
  },
  {
    slug: "epictetus",
    prompt: TEMPLATE(
      "a row of five small earthen lamp dishes along a stone shelf, one large central wooden walking staff leaned against a column, a single tiny red wick flame on the central lamp"
    ),
  },
  {
    slug: "euripides",
    prompt: TEMPLATE(
      "a row of five small theatre masks of grieving women, one large central altar with a draped robe and dagger, a single tiny red drop of blood on the altar's edge"
    ),
  },
  {
    slug: "fontane",
    prompt: TEMPLATE(
      "a row of five small Berlin lindens along a polite avenue, one large central wrought-iron garden bench with a folded shawl, a single tiny red carnation laid on the bench"
    ),
  },
  {
    slug: "frances-burney",
    prompt: TEMPLATE(
      "a row of five small folded letters tied with thread along a writing slope, one large central feathered hand-fan opened over a calling card, a single tiny red wax seal on the central card"
    ),
  },
  {
    slug: "frances-hodgson-burnett",
    prompt: TEMPLATE(
      "a row of five small ivy-trailed garden keys hanging on hooks, one large central locked walled-garden door wreathed in roses, a single tiny red robin perched on the keyhole"
    ),
  },
  {
    slug: "francis-beaumont",
    prompt: TEMPLATE(
      "a row of five small Jacobean playbills tacked to a wooden post, one large central pestle in a player's mortar, a single tiny red ribbon tied around the pestle"
    ),
  },
  {
    slug: "frank-norris",
    prompt: TEMPLATE(
      "a row of five small wheat sheaves along a Californian field, one large central locomotive engine bearing down on the rails, a single tiny red signal lantern raised before it"
    ),
  },
  {
    slug: "freud",
    prompt: TEMPLATE(
      "a row of five small framed dream-images along a study wall, one large central upholstered analyst's couch, a single tiny red Persian rug tassel curling at its foot"
    ),
  },
  {
    slug: "gautier",
    prompt: TEMPLATE(
      "a row of five small jeweled cabochons set in a velvet tray, one large central enameled mirror in a gilded frame, a single tiny red ruby at the center of the mirror's bezel"
    ),
  },
  {
    slug: "george-etherege",
    prompt: TEMPLATE(
      "a row of five small powdered Restoration wigs on stands, one large central feathered tricorne resting on a laced glove, a single tiny red beauty patch beside the tricorne"
    ),
  },
  {
    slug: "george-herbert",
    prompt: TEMPLATE(
      "a row of five small parish-altar candles along a stone ledge, one large central open Bible on a wooden lectern, a single tiny red devotional ribbon marking a page"
    ),
  },
  {
    slug: "george-macdonald",
    prompt: TEMPLATE(
      "a row of five small winding stair-steps spiraling upward, one large central grandmother's spinning wheel in lamplight, a single tiny red rose lying beside the wheel"
    ),
  },
  {
    slug: "gerard-manley-hopkins",
    prompt: TEMPLATE(
      "a row of five small dappled feathers fanned along a shelf, one large central kestrel hovering with outstretched wings, a single tiny red rowan berry beneath the bird"
    ),
  },
  {
    slug: "gibbon",
    prompt: TEMPLATE(
      "a row of five small toppled Roman columns along a ruin, one large central marble bust of an emperor, a single tiny red wax seal pressed onto a folded edict at the base"
    ),
  },
  {
    slug: "goethe",
    prompt: TEMPLATE(
      "a row of five small alchemical flasks on a study shelf, one large central oak tree in full leaf above a writing desk, a single tiny red rose laid on the desk"
    ),
  },
  {
    slug: "gogol",
    prompt: TEMPLATE(
      "a row of five small empty greatcoats hanging on Petersburg pegs, one large central detached human nose set on a barber's plate, a single tiny red ribbon tied around the plate"
    ),
  },
  {
    slug: "hamsun",
    prompt: TEMPLATE(
      "a row of five small Norwegian fir trees on a cold hillside, one large central wooden hut with a smoking stove-pipe, a single tiny red lingonberry on the doorstep"
    ),
  },
  {
    slug: "harriet-beecher-stowe",
    prompt: TEMPLATE(
      "a row of five small wooden cabin shingles along a roofline, one large central kitchen hearth with a cast-iron kettle, a single tiny red Bible ribbon trailing from a shelf"
    ),
  },
  {
    slug: "hazlitt",
    prompt: TEMPLATE(
      "a row of five small bound Regency essay volumes along a shelf, one large central wing-back fireside chair with a folded newspaper, a single tiny red wafer seal on the newspaper"
    ),
  },
  {
    slug: "heine",
    prompt: TEMPLATE(
      "a row of five small Rhine lorelei combs along a riverbank, one large central exiled poet's open suitcase on a Paris balcony, a single tiny red carnation laid in the suitcase"
    ),
  },
  {
    slug: "henry-adams",
    prompt: TEMPLATE(
      "a row of five small Gothic cathedral arches along a nave, one large central electromagnetic dynamo in an exposition hall, a single tiny red gauge needle pinned at its top"
    ),
  },
  {
    slug: "herodotus",
    prompt: TEMPLATE(
      "a row of five small papyrus map fragments along a stone bench, one large central traveler's wide-brimmed hat resting on a scroll, a single tiny red wax seal at the scroll's edge"
    ),
  },
  {
    slug: "hesiod",
    prompt: TEMPLATE(
      "a row of five small wheat sheaves bound along a furrow, one large central wooden plough resting in fresh earth, a single tiny red poppy growing at the plough's blade"
    ),
  },
  {
    slug: "homer",
    prompt: TEMPLATE(
      "a row of five small Greek galley oars along a beached hull, one large central horned bronze helmet on a stone, a single tiny red plume crest atop the helmet"
    ),
  },
  {
    slug: "horace",
    prompt: TEMPLATE(
      "a row of five small terracotta wine amphorae along a Sabine shelf, one large central laurel-crowned lyre on a stone bench, a single tiny red rose petal on the lyre's strings"
    ),
  },
  {
    slug: "hume",
    prompt: TEMPLATE(
      "a row of five small Edinburgh leather treatises along a shelf, one large central billiard cue and ball on a green table, a single tiny red wax seal on a pamphlet beside the cue"
    ),
  },
  {
    slug: "huysmans",
    prompt: TEMPLATE(
      "a row of five small jewel-studded tortoise shells along a vitrine, one large central gilded decadent cabinet of curiosities, a single tiny red orchid blooming inside the cabinet"
    ),
  },
  {
    slug: "jack-london",
    prompt: TEMPLATE(
      "a row of five small Yukon sled-dog harnesses along a trail, one large central lone wolf silhouetted on a snowdrift, a single tiny red ember in a campfire below the wolf"
    ),
  },
  {
    slug: "jacobsen",
    prompt: TEMPLATE(
      "a row of five small botanical specimens pressed between glass plates, one large central hothouse orchid in a clay pot, a single tiny red dewdrop at the orchid's lip"
    ),
  },
  {
    slug: "james-fenimore-cooper",
    prompt: TEMPLATE(
      "a row of five small birch-bark canoes drawn up on a shore, one large central long-rifle leaned against a hickory tree, a single tiny red feather tied to the rifle's stock"
    ),
  },
  {
    slug: "jerome-k-jerome",
    prompt: TEMPLATE(
      "a row of five small Thames rowboats moored along a punt-pole, one large central wicker picnic hamper open on a deck, a single tiny red kettle sitting in the hamper"
    ),
  },
  {
    slug: "joel-chandler-harris",
    prompt: TEMPLATE(
      "a row of five small briar-patch silhouettes along a fence, one large central rocking chair on a Southern porch, a single tiny red lantern hanging from the porch beam"
    ),
  },
  {
    slug: "john-buchan",
    prompt: TEMPLATE(
      "a row of five small heather tufts along a Scottish moor, one large central tweed-clad satchel with a folded map, a single tiny red wax seal on a telegram in the satchel"
    ),
  },
  {
    slug: "john-donne",
    prompt: TEMPLATE(
      "a row of five small drafting compasses along a metaphysical desk, one large central tolling church bell suspended from a beam, a single tiny red rose lying beneath the bell"
    ),
  },
  {
    slug: "john-dryden",
    prompt: TEMPLATE(
      "a row of five small heroic-couplet scrolls along a bookshelf, one large central laurel-wreathed bust on a marble pedestal, a single tiny red ribbon trailing from the bust"
    ),
  },
  {
    slug: "john-fletcher",
    prompt: TEMPLATE(
      "a row of five small Jacobean theatre playbills along a wall, one large central tragicomic mask half-laughing half-weeping, a single tiny red ribbon tied to the mask"
    ),
  },
  {
    slug: "john-ford",
    prompt: TEMPLATE(
      "a row of five small Caroline-era daggers along a velvet board, one large central blackened candelabrum on a banquet table, a single tiny red drop of wax falling from the candle"
    ),
  },
  {
    slug: "john-keats",
    prompt: TEMPLATE(
      "a row of five small Grecian urns on a shelf, one large central nightingale perched on an autumn bough, a single tiny red rose lying beneath the bough"
    ),
  },
  {
    slug: "john-milton",
    prompt: TEMPLATE(
      "a row of five small fallen feathers along a marble step, one large central blind poet's lectern with a great open epic, a single tiny red apple set beside the page"
    ),
  },
  {
    slug: "john-vanbrugh",
    prompt: TEMPLATE(
      "a row of five small Restoration playbills tacked along a column, one large central baroque country-house facade with pediment, a single tiny red sash ribbon at the doorway"
    ),
  },
  {
    slug: "john-webster",
    prompt: TEMPLATE(
      "a row of five small skull-and-bone vanitas tokens along a ledge, one large central waxen funeral effigy on a bier, a single tiny red drop of blood on the effigy's lip"
    ),
  },
  {
    slug: "joseph-sheridan-le-fanu",
    prompt: TEMPLATE(
      "a row of five small Irish tower-house windows along a cliff, one large central canopied four-poster bed in dim light, a single tiny red drop of blood on the white pillow"
    ),
  },
  {
    slug: "jules-verne",
    prompt: TEMPLATE(
      "a row of five small brass diving-helmet portholes along a workshop bench, one large central Nautilus submarine silhouette under waves, a single tiny red signal flag rising from the conning tower"
    ),
  },
  {
    slug: "juvenal",
    prompt: TEMPLATE(
      "a row of five small Roman bread loaves stacked on a counter, one large central circus-sand arena gate with crossed swords, a single tiny red drop of blood on the sand"
    ),
  },
  {
    slug: "kate-chopin",
    prompt: TEMPLATE(
      "a row of five small Louisiana magnolia blossoms along a verandah, one large central wooden bathing pavilion at the Gulf shore, a single tiny red ribbon trailing from a discarded hat"
    ),
  },
  {
    slug: "keller",
    prompt: TEMPLATE(
      "a row of five small Swiss village rooftops along a lake, one large central green Heinrich's painter's easel by a window, a single tiny red geranium blooming on the sill"
    ),
  },
  {
    slug: "kierkegaard",
    prompt: TEMPLATE(
      "a row of five small Copenhagen church spires along a skyline, one large central solitary figure on a windswept cliff edge, a single tiny red rose dropped at the cliff's lip"
    ),
  },
  {
    slug: "kleist",
    prompt: TEMPLATE(
      "a row of five small Prussian cavalry sabers along a wall, one large central marionette suspended on crossed strings, a single tiny red drop of sealing wax beneath the marionette"
    ),
  },
  {
    slug: "kropotkin",
    prompt: TEMPLATE(
      "a row of five small honeybees along a hive's landing board, one large central beehive in a meadow, a single tiny red clover blossom at the hive's foot"
    ),
  },
  {
    slug: "l-m-montgomery",
    prompt: TEMPLATE(
      "a row of five small Prince Edward Island gables along a farmhouse, one large central rosebush trellis beside a green-shuttered window, a single tiny red apple on the windowsill"
    ),
  },
  {
    slug: "lamb",
    prompt: TEMPLATE(
      "a row of five small bound Elia essays along a shelf, one large central fireside armchair with a folded newspaper, a single tiny red wafer seal on the newspaper"
    ),
  },
  {
    slug: "leopardi",
    prompt: TEMPLATE(
      "a row of five small Recanati hedgerow leaves along a stone wall, one large central solitary hill rising over a moonlit horizon, a single tiny red wild poppy at the wall's base"
    ),
  },
  {
    slug: "leopoldo-alas",
    prompt: TEMPLATE(
      "a row of five small Vetustan cathedral spires along a provincial skyline, one large central confessional grille in dim cathedral light, a single tiny red drop of candle wax beneath the grille"
    ),
  },
  {
    slug: "lermontov",
    prompt: TEMPLATE(
      "a row of five small Caucasus peaks along a far horizon, one large central dueling pistol on a pine board, a single tiny red drop of blood on the pistol's grip"
    ),
  },
  {
    slug: "leskov",
    prompt: TEMPLATE(
      "a row of five small Russian onion-domes along a provincial skyline, one large central cobbler's bench with a leather boot, a single tiny red samovar lid set beside the boot"
    ),
  },
  {
    slug: "locke",
    prompt: TEMPLATE(
      "a row of five small blank-paper sheets along a writing slope, one large central wooden quill rack with a fresh-cut quill, a single tiny red wax seal stamping a folded letter"
    ),
  },
  {
    slug: "lord-byron",
    prompt: TEMPLATE(
      "a row of five small Venetian gondola prows along a canal, one large central caped Romantic traveler's silhouette on a cliff, a single tiny red rose tucked into the traveler's lapel"
    ),
  },
  {
    slug: "louisa-may-alcott",
    prompt: TEMPLATE(
      "a row of five small attic-eaved garret windows along a New England roof, one large central wooden writing desk strewn with manuscript pages, a single tiny red apple set beside the inkwell"
    ),
  },
  {
    slug: "lucian",
    prompt: TEMPLATE(
      "a row of five small Greek satirical scrolls along a stone shelf, one large central winged ship sailing across an absurd moon, a single tiny red flag fluttering from its mast"
    ),
  },
  {
    slug: "lucretius",
    prompt: TEMPLATE(
      "a row of five small atomic spheres falling along a diagonal, one large central Epicurean bronze tripod with smoking herbs, a single tiny red ember rising from the bowl"
    ),
  },
  {
    slug: "m-r-james",
    prompt: TEMPLATE(
      "a row of five small antiquarian manuscripts along a cathedral library shelf, one large central iron-bound chest in lamplight, a single tiny red drop of wax sealing the chest's hasp"
    ),
  },
  {
    slug: "macaulay",
    prompt: TEMPLATE(
      "a row of five small Whig parliamentary tomes along a shelf, one large central lectern with an open history of England, a single tiny red dispatch ribbon tied to the lectern"
    ),
  },
  {
    slug: "machiavelli",
    prompt: TEMPLATE(
      "a row of five small Florentine fortress crenellations along a wall, one large central wax-sealed letter on a council table, a single tiny red dagger laid across the letter"
    ),
  },
  {
    slug: "malory",
    prompt: TEMPLATE(
      "a row of five small Arthurian helmets along a banquet bench, one large central round table with an upright sword, a single tiny red rose laid before the sword"
    ),
  },
  {
    slug: "manzoni",
    prompt: TEMPLATE(
      "a row of five small Lombard church bells along a campanile, one large central wedding-day altar with a draped stole, a single tiny red ribbon tied to the altar's candlestick"
    ),
  },
  {
    slug: "marcus-aurelius",
    prompt: TEMPLATE(
      "a row of five small Roman wax tablets stacked on a folding desk, one large central Stoic emperor's bronze laurel wreath, a single tiny red drop of sealing wax on the central tablet"
    ),
  },
  {
    slug: "maria-edgeworth",
    prompt: TEMPLATE(
      "a row of five small Anglo-Irish manor windows along a gable, one large central wooden estate-ledger open on a table, a single tiny red wafer seal on the ledger's page"
    ),
  },
  {
    slug: "marx",
    prompt: TEMPLATE(
      "a row of five small factory cogs along a workshop shelf, one large central iron printing press with a pamphlet curling out, a single tiny red flag clipped to the press"
    ),
  },
  {
    slug: "mary-e-wilkins-freeman",
    prompt: TEMPLATE(
      "a row of five small New England clapboard cottages along a lane, one large central wooden spinning wheel beside a hearth, a single tiny red geranium on the windowsill"
    ),
  },
  {
    slug: "matthew-arnold",
    prompt: TEMPLATE(
      "a row of five small Victorian school primers stacked along a shelf, one large central lectern at Dover Beach with sea behind it, a single tiny red ribbon marking a page in the central primer"
    ),
  },
  {
    slug: "matthew-lewis",
    prompt: TEMPLATE(
      "a row of five small monk's tonsured candles along a cloister wall, one large central iron-bound abbey door slightly ajar, a single tiny red drop of blood on the door's threshold"
    ),
  },
  {
    slug: "maupassant",
    prompt: TEMPLATE(
      "a row of five small Norman seaside parasols along a promenade, one large central pearl necklace coiled on a vanity tray, a single tiny red ribbon laid beside the pearls"
    ),
  },
  {
    slug: "mickiewicz",
    prompt: TEMPLATE(
      "a row of five small Polish manor lindens along a tree-lined road, one large central exiled bard's open epic on a desk, a single tiny red poppy laid across the page"
    ),
  },
  {
    slug: "mill",
    prompt: TEMPLATE(
      "a row of five small bound Utilitarian treatises along a shelf, one large central wooden lectern with an open pamphlet on liberty, a single tiny red wax seal on the pamphlet"
    ),
  },
  {
    slug: "montaigne",
    prompt: TEMPLATE(
      "a row of five small numbered essai pages along a tower-study desk, one large central wooden tower-room window framed by ivy, a single tiny red wax seal at the corner of an essay"
    ),
  },
  {
    slug: "muir",
    prompt: TEMPLATE(
      "a row of five small Sierra Nevada pines along a granite ridge, one large central waterfall plunging beside a lone cedar, a single tiny red sequoia cone resting on a stone"
    ),
  },
  {
    slug: "murasaki",
    prompt: TEMPLATE(
      "a row of five small Heian fan-folds along a lacquered tray, one large central twelve-layer kimono spread on a tatami floor, a single tiny red plum blossom laid on the kimono"
    ),
  },
  {
    slug: "nerval",
    prompt: TEMPLATE(
      "a row of five small dream-keys hanging on a Parisian wall, one large central tarot Hanged Man card upright on a velvet cloth, a single tiny red rose laid beneath the card"
    ),
  },
  {
    slug: "newman",
    prompt: TEMPLATE(
      "a row of five small Oxford college spires along a skyline, one large central wooden lectern with an open Apologia, a single tiny red ribbon marking a page in the book"
    ),
  },
  {
    slug: "novalis",
    prompt: TEMPLATE(
      "a row of five small Romantic-era hymn pages along a shelf, one large central blue flower on a long stem in a glass vase, a single tiny red wafer seal on a folded letter beside the vase"
    ),
  },
  {
    slug: "o-henry",
    prompt: TEMPLATE(
      "a row of five small New York tenement windows along a fire escape, one large central pocket watch laid beside a tortoise-shell comb, a single tiny red ribbon tied around the watch"
    ),
  },
  {
    slug: "oliver-goldsmith",
    prompt: TEMPLATE(
      "a row of five small Auburn village cottages along a lane, one large central wooden vicar's pulpit beside a hawthorn, a single tiny red robin perched on the pulpit's rail"
    ),
  },
  {
    slug: "omar-khayyam",
    prompt: TEMPLATE(
      "a row of five small Persian wine cups along a tiled bench, one large central rose-vine wrapped around a calligraphic scroll, a single tiny red ruby drop of wine on the scroll"
    ),
  },
  {
    slug: "ovid",
    prompt: TEMPLATE(
      "a row of five small mythic transformation silhouettes along a frieze, one large central laurel tree growing from a draped figure, a single tiny red apple at the tree's foot"
    ),
  },
  {
    slug: "paine",
    prompt: TEMPLATE(
      "a row of five small Common Sense pamphlets stacked on a printer's bench, one large central iron printing press in mid-strike, a single tiny red wax seal on a folded broadside"
    ),
  },
  {
    slug: "pascal",
    prompt: TEMPLATE(
      "a row of five small geometric figures inked on parchment, one large central Pensées notebook open on a wooden desk, a single tiny red drop of sealing wax on the page"
    ),
  },
  {
    slug: "pater",
    prompt: TEMPLATE(
      "a row of five small Renaissance cameo portraits along a velvet shelf, one large central gilded Florentine mirror in a carved frame, a single tiny red rose laid before the mirror"
    ),
  },
  {
    slug: "percy-shelley",
    prompt: TEMPLATE(
      "a row of five small skylark feathers fanned along a windowsill, one large central west-wind-blown cloak on a cliff edge, a single tiny red rose petal carried on the wind"
    ),
  },
  {
    slug: "petrarch",
    prompt: TEMPLATE(
      "a row of five small Italian sonnet pages tied with thread, one large central laurel wreath laid on a wooden writing desk, a single tiny red rose lying beside the wreath"
    ),
  },
  {
    slug: "petronius",
    prompt: TEMPLATE(
      "a row of five small silver Roman banquet cups along a table, one large central reclining banquet couch with a draped robe, a single tiny red pomegranate spilled on the couch"
    ),
  },
  {
    slug: "philip-massinger",
    prompt: TEMPLATE(
      "a row of five small Caroline playbills tacked to a column, one large central usurer's strongbox on a wooden table, a single tiny red wax seal on a debt-bond beside the box"
    ),
  },
  {
    slug: "philip-sidney",
    prompt: TEMPLATE(
      "a row of five small Elizabethan sonnet leaves along a writing desk, one large central courtly lute resting on a velvet cushion, a single tiny red rose laid across the strings"
    ),
  },
  {
    slug: "plutarch",
    prompt: TEMPLATE(
      "a row of five small paired marble busts along a portico, one large central wooden lectern with parallel scrolls of lives, a single tiny red wax seal between the scrolls"
    ),
  },
  {
    slug: "pushkin",
    prompt: TEMPLATE(
      "a row of five small Petersburg lampposts along a wintry boulevard, one large central dueling pistol on a snowy field, a single tiny red drop of blood on the snow"
    ),
  },
  {
    slug: "richard-brinsley-sheridan",
    prompt: TEMPLATE(
      "a row of five small Drury Lane playbills along a wall, one large central feathered fan opened over a calling card, a single tiny red beauty patch beside the card"
    ),
  },
  {
    slug: "rider-haggard",
    prompt: TEMPLATE(
      "a row of five small African acacia trees along a savanna ridge, one large central pith-helmet resting on an unrolled map, a single tiny red ruby pinned to the map"
    ),
  },
  {
    slug: "rimbaud",
    prompt: TEMPLATE(
      "a row of five small drunken-boat silhouettes along a wave line, one large central young vagabond's worn satchel on a quay, a single tiny red poppy tucked into the satchel"
    ),
  },
  {
    slug: "robert-browning",
    prompt: TEMPLATE(
      "a row of five small Italian Renaissance portraits along a corridor, one large central duke's painted duchess behind a velvet curtain, a single tiny red rose laid before the painting"
    ),
  },
  {
    slug: "robert-burns",
    prompt: TEMPLATE(
      "a row of five small Scottish thistles along a stone dyke, one large central plough turning a field-mouse's nest, a single tiny red rose at the plough's blade"
    ),
  },
  {
    slug: "robert-herrick",
    prompt: TEMPLATE(
      "a row of five small Devonshire wildflower sprigs along a sill, one large central wicker basket of gathered rosebuds, a single tiny red rose at the basket's handle"
    ),
  },
  {
    slug: "ruskin",
    prompt: TEMPLATE(
      "a row of five small Venetian Gothic capitals along an arcade, one large central watercolor easel facing a stone facade, a single tiny red ribbon clipped to the painter's brush"
    ),
  },
  {
    slug: "russell",
    prompt: TEMPLATE(
      "a row of five small logical-notation symbols along a chalkboard, one large central wooden lectern with an open Principia, a single tiny red ribbon marking a page"
    ),
  },
  {
    slug: "saki",
    prompt: TEMPLATE(
      "a row of five small Edwardian teacups along a drawing-room rail, one large central wing-back chair with a sleeping cat, a single tiny red ribbon collar on the cat"
    ),
  },
  {
    slug: "samuel-taylor-coleridge",
    prompt: TEMPLATE(
      "a row of five small albatross feathers along a ship's rail, one large central tall-masted mariner's ship under a strange moon, a single tiny red drop of blood on the rail"
    ),
  },
  {
    slug: "sappho",
    prompt: TEMPLATE(
      "a row of five small Lesbian-isle laurel sprigs along a stone bench, one large central seven-stringed lyre on a draped cushion, a single tiny red rose laid across the strings"
    ),
  },
  {
    slug: "sarah-orne-jewett",
    prompt: TEMPLATE(
      "a row of five small Maine spruce trees along a pointed-fir coast, one large central white-clapboard parsonage by the sea, a single tiny red geranium on the windowsill"
    ),
  },
  {
    slug: "saxo-grammaticus",
    prompt: TEMPLATE(
      "a row of five small Danish chronicle pages stitched along a binding, one large central horned drinking horn on a wooden bench, a single tiny red wax seal beside the horn"
    ),
  },
  {
    slug: "schopenhauer",
    prompt: TEMPLATE(
      "a row of five small bound pessimist tomes along a study shelf, one large central wooden lectern with an open Welt als Wille, a single tiny red ribbon marking the central page"
    ),
  },
  {
    slug: "sei-shonagon",
    prompt: TEMPLATE(
      "a row of five small Heian folding fans along a lacquered tray, one large central twelve-layered court robe draped on a screen, a single tiny red plum blossom on the tray"
    ),
  },
  {
    slug: "sienkiewicz",
    prompt: TEMPLATE(
      "a row of five small Polish hussar lances along a tent line, one large central winged-cavalry saddle on a wooden trestle, a single tiny red pennant tied to the saddle"
    ),
  },
  {
    slug: "snorri-sturluson",
    prompt: TEMPLATE(
      "a row of five small carved runestones along an Icelandic farmstead, one large central horned drinking horn on a wooden bench, a single tiny red rowan berry beside the horn"
    ),
  },
  {
    slug: "sophocles",
    prompt: TEMPLATE(
      "a row of five small theatre masks along a Theban step, one large central blind king's wooden staff leaning on a column, a single tiny red drop of blood at the staff's tip"
    ),
  },
  {
    slug: "spencer",
    prompt: TEMPLATE(
      "a row of five small Victorian evolutionary diagrams along a desk, one large central wooden lectern with an open synthetic-philosophy tome, a single tiny red ribbon marking a page"
    ),
  },
  {
    slug: "spinoza",
    prompt: TEMPLATE(
      "a row of five small Euclidean propositions inked on a page, one large central lens-grinder's wheel on a workbench, a single tiny red drop of resin beside the wheel"
    ),
  },
  {
    slug: "stendhal",
    prompt: TEMPLATE(
      "a row of five small Italian opera-house balconies along a tier, one large central red-and-black military cloak on a chair, a single tiny red rose laid on the cloak"
    ),
  },
  {
    slug: "stephen-crane",
    prompt: TEMPLATE(
      "a row of five small Civil War kepis along a regimental shelf, one large central torn battlefield flag on a broken staff, a single tiny red badge of courage pinned to the flag"
    ),
  },
  {
    slug: "stifter",
    prompt: TEMPLATE(
      "a row of five small Bohemian forest pines along a quiet hillside, one large central stone farmhouse with a steep roof, a single tiny red rosehip on the doorstep"
    ),
  },
  {
    slug: "strindberg",
    prompt: TEMPLATE(
      "a row of five small Stockholm archipelago islets along a horizon, one large central solitary wooden chair beside a stove, a single tiny red flame visible through the stove's grate"
    ),
  },
  {
    slug: "suetonius",
    prompt: TEMPLATE(
      "a row of five small Roman emperor busts along a marble shelf, one large central scroll of biographies open on a desk, a single tiny red wax seal pressed onto the scroll"
    ),
  },
  {
    slug: "tacitus",
    prompt: TEMPLATE(
      "a row of five small Roman senatorial tablets along a stone bench, one large central laurel-bound annal scroll on a wooden table, a single tiny red drop of sealing wax on the scroll"
    ),
  },
  {
    slug: "theodor-storm",
    prompt: TEMPLATE(
      "a row of five small North-Frisian dyke posts along a coastline, one large central thatched-roof Schimmelreiter farmhouse, a single tiny red rosehip on the doorstep"
    ),
  },
  {
    slug: "theodore-dreiser",
    prompt: TEMPLATE(
      "a row of five small Chicago tenement windows along a brick wall, one large central department-store mannequin in a long coat, a single tiny red price tag pinned to the coat"
    ),
  },
  {
    slug: "thomas-henry-huxley",
    prompt: TEMPLATE(
      "a row of five small fossil ammonites along a study shelf, one large central articulated primate skeleton on a wooden mount, a single tiny red specimen tag tied to the skeleton's wrist"
    ),
  },
  {
    slug: "thomas-kyd",
    prompt: TEMPLATE(
      "a row of five small Elizabethan revenge daggers along a velvet board, one large central blackened arbor with a hanging noose, a single tiny red drop of blood on the dagger's tip"
    ),
  },
  {
    slug: "thomas-middleton",
    prompt: TEMPLATE(
      "a row of five small Jacobean theatre playbills along a wall, one large central goblet on a banquet table beside a skull, a single tiny red drop of poison rising from the goblet"
    ),
  },
  {
    slug: "thomas-otway",
    prompt: TEMPLATE(
      "a row of five small Restoration playbills along a column, one large central Venetian conspirator's cloak on a chair, a single tiny red rose laid on the cloak"
    ),
  },
  {
    slug: "thucydides",
    prompt: TEMPLATE(
      "a row of five small Greek hoplite shields along a stone wall, one large central wooden trireme oar leaning beside a chart, a single tiny red wax seal on the chart"
    ),
  },
  {
    slug: "tocqueville",
    prompt: TEMPLATE(
      "a row of five small American town-hall steeples along a horizon, one large central traveler's open notebook on a stagecoach bench, a single tiny red wax seal on a folded letter beside it"
    ),
  },
  {
    slug: "turgenev",
    prompt: TEMPLATE(
      "a row of five small birch trees along a Russian estate path, one large central hunter's open game-bag on a wooden bench, a single tiny red rowan berry resting in the bag"
    ),
  },
  {
    slug: "unamuno",
    prompt: TEMPLATE(
      "a row of five small Castilian church bells along a campanile, one large central wooden Salamancan lectern with an open tragic-sense tome, a single tiny red ribbon marking a page"
    ),
  },
  {
    slug: "veblen",
    prompt: TEMPLATE(
      "a row of five small Gilded-Age top hats along a cloakroom rail, one large central ornate cane resting on a marble pedestal, a single tiny red boutonnière beside the cane"
    ),
  },
  {
    slug: "verhaeren",
    prompt: TEMPLATE(
      "a row of five small Belgian factory smokestacks along an industrial skyline, one large central iron foundry-gate with a hanging lamp, a single tiny red ember falling from the lamp"
    ),
  },
  {
    slug: "verlaine",
    prompt: TEMPLATE(
      "a row of five small autumn leaves drifting along a Parisian gutter, one large central absinthe glass beside a worn violin, a single tiny red rose laid on the violin"
    ),
  },
  {
    slug: "virgil",
    prompt: TEMPLATE(
      "a row of five small Roman shepherd's pipes along a stone bench, one large central laurel-crowned bust on a marble pedestal, a single tiny red poppy at the bust's base"
    ),
  },
  {
    slug: "wallace",
    prompt: TEMPLATE(
      "a row of five small pinned tropical butterflies along a specimen drawer, one large central Malay archipelago map on a field-table, a single tiny red specimen tag pinned to the map"
    ),
  },
  {
    slug: "walter-scott",
    prompt: TEMPLATE(
      "a row of five small Highland tartans folded along a chest, one large central claymore broadsword leaned against a stone hearth, a single tiny red heather sprig tied to the hilt"
    ),
  },
  {
    slug: "washington-irving",
    prompt: TEMPLATE(
      "a row of five small Hudson Valley pumpkins along a rail fence, one large central headless-horseman's tricorne on a wooden bench, a single tiny red autumn leaf on the tricorne"
    ),
  },
  {
    slug: "wilkie-collins",
    prompt: TEMPLATE(
      "a row of five small folded Victorian letters tied with thread, one large central white-gowned figure standing at a moonlit gate, a single tiny red drop of sealing wax on the central letter"
    ),
  },
  {
    slug: "william-blake",
    prompt: TEMPLATE(
      "a row of five small engraver's plates along a workshop bench, one large central blazing tyger silhouette in a forest of night, a single tiny red rose at the tyger's foot"
    ),
  },
  {
    slug: "william-butler-yeats",
    prompt: TEMPLATE(
      "a row of five small Irish hazel rods along a cottage wall, one large central widening gyre spiral above a tower, a single tiny red rose laid at the tower's door"
    ),
  },
  {
    slug: "william-congreve",
    prompt: TEMPLATE(
      "a row of five small Restoration playbills tacked to a column, one large central feathered fan opened over a marriage contract, a single tiny red wax seal on the contract"
    ),
  },
  {
    slug: "william-cowper",
    prompt: TEMPLATE(
      "a row of five small Olney garden hedges along a country path, one large central wing-back fireside chair with a sleeping hare beside it, a single tiny red ribbon marking a hymnal on the chair"
    ),
  },
  {
    slug: "william-dean-howells",
    prompt: TEMPLATE(
      "a row of five small Boston brownstone stoops along a street, one large central editor's writing desk strewn with proofs, a single tiny red ink stamp on the central proof"
    ),
  },
  {
    slug: "william-james",
    prompt: TEMPLATE(
      "a row of five small lecture-room benches along a Harvard hall, one large central wooden lectern with an open pragmatist tome, a single tiny red ribbon marking a page"
    ),
  },
  {
    slug: "william-morris",
    prompt: TEMPLATE(
      "a row of five small repeating willow-bough wallpaper motifs, one large central handloom with a half-woven tapestry, a single tiny red poppy woven into the tapestry"
    ),
  },
  {
    slug: "william-shakespeare",
    prompt: TEMPLATE(
      "a row of five small Globe theatre flag-pennants along a thatched eave, one large central laurel-wreathed quill standing in an inkpot, a single tiny red rose laid beside the inkpot"
    ),
  },
  {
    slug: "william-wordsworth",
    prompt: TEMPLATE(
      "a row of five small Lake District daffodils along a stone wall, one large central wooden walking staff leaned against a fell-side cottage, a single tiny red rowan berry on the doorstep"
    ),
  },
  {
    slug: "william-wycherley",
    prompt: TEMPLATE(
      "a row of five small Restoration playbills tacked along a column, one large central country-wife's basket of plain-dealing apples, a single tiny red rose tucked among the apples"
    ),
  },
  {
    slug: "wollstonecraft",
    prompt: TEMPLATE(
      "a row of five small Vindication pamphlets stacked on a writing desk, one large central wooden lectern with an open treatise on the rights of woman, a single tiny red wax seal on the page"
    ),
  },
];
