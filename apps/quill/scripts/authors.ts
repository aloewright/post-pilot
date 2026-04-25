// Curated 250-author roster for Post Pilot guides.
// Each entry has: slug (kebab-case, used as filename + URL), name (display),
// era (one of the Era enum values), hint (1-2 lines that anchors the model
// when generating a voice spec — picks the dominant register/syntactic move
// so generated guides don't all collapse into the same template).

export type AuthorSeed = {
  slug: string;
  name: string;
  era: "Pre-1900" | "Modernist" | "Mid-20th" | "Late-20th" | "Contemporary";
  hint: string;
};

export const AUTHORS: AuthorSeed[] = [
  { slug: "hemingway", name: "Ernest Hemingway", era: "Modernist", hint: "iceberg theory; declarative; concrete nouns" },
  { slug: "austen", name: "Jane Austen", era: "Pre-1900", hint: "free indirect discourse; ironic distance; balanced clauses" },
  { slug: "woolf", name: "Virginia Woolf", era: "Modernist", hint: "stream of consciousness; rhythm of perception; semicolon symphonies" },
  { slug: "vonnegut", name: "Kurt Vonnegut", era: "Mid-20th", hint: "short paragraphs; deadpan refrain; black humor" },
  { slug: "wilde", name: "Oscar Wilde", era: "Pre-1900", hint: "epigram; aristocratic wit; aestheticism" },
  { slug: "poe", name: "Edgar Allan Poe", era: "Pre-1900", hint: "gothic dread; trochaic cadence; first-person unreliable" },
  { slug: "asimov", name: "Isaac Asimov", era: "Mid-20th", hint: "lucid expository SF; dialogue carries argument" },
  { slug: "dickens", name: "Charles Dickens", era: "Pre-1900", hint: "social panorama; comic naming; serialized melodrama" },
  { slug: "twain", name: "Mark Twain", era: "Pre-1900", hint: "vernacular American; rolling river sentences; satirical drawl" },
  { slug: "melville", name: "Herman Melville", era: "Pre-1900", hint: "Shakespearean ambition; encyclopedic digression; metaphysical adventure" },
  { slug: "henry-james", name: "Henry James", era: "Pre-1900", hint: "the late style; subordinate clause architecture; psychological qualification" },
  { slug: "hawthorne", name: "Nathaniel Hawthorne", era: "Pre-1900", hint: "allegorical Puritan; dim symbolic forests; moral ambiguity" },
  { slug: "tolstoy", name: "Leo Tolstoy", era: "Pre-1900", hint: "moral realism; long social tableaux; God in the details" },
  { slug: "chekhov", name: "Anton Chekhov", era: "Pre-1900", hint: "show don't tell; quiet revelation; provincial chamber music" },
  { slug: "flaubert", name: "Gustave Flaubert", era: "Pre-1900", hint: "le mot juste; free indirect; cold flaubertian irony" },
  { slug: "hugo", name: "Victor Hugo", era: "Pre-1900", hint: "social epic; thunderous rhetoric; digressive moral grandeur" },
  { slug: "balzac", name: "Honoré de Balzac", era: "Pre-1900", hint: "documentary social cataloguing; comédie humaine" },
  { slug: "zola", name: "Émile Zola", era: "Pre-1900", hint: "naturalist materialism; sensory accumulation; J'accuse" },
  { slug: "baudelaire", name: "Charles Baudelaire", era: "Pre-1900", hint: "spleen et idéal; urban modernity; flâneur" },
  { slug: "shelley", name: "Mary Shelley", era: "Pre-1900", hint: "Romantic gothic; framed narrative; promethean dread" },
  { slug: "charlotte-bronte", name: "Charlotte Brontë", era: "Pre-1900", hint: "first-person reader-address; governess interiority" },
  { slug: "emily-bronte", name: "Emily Brontë", era: "Pre-1900", hint: "elemental moor; nested narrators; gothic intensity" },
  { slug: "george-eliot", name: "George Eliot", era: "Pre-1900", hint: "moral psychology; long balanced periods; provincial Middlemarch" },
  { slug: "hardy", name: "Thomas Hardy", era: "Pre-1900", hint: "Wessex pastoral fatalism; geological time; rural diction" },
  { slug: "conrad", name: "Joseph Conrad", era: "Modernist", hint: "frame narrative haunting; sea as moral test; foggy density" },
  { slug: "stevenson", name: "Robert Louis Stevenson", era: "Pre-1900", hint: "muscular Scots adventure; double-self gothic" },
  { slug: "doyle", name: "Arthur Conan Doyle", era: "Pre-1900", hint: "Holmesian deduction; Watson's measured Edwardian voice" },
  { slug: "carroll", name: "Lewis Carroll", era: "Pre-1900", hint: "logical nonsense; portmanteau; Alice's literal child-logic" },
  { slug: "nietzsche", name: "Friedrich Nietzsche", era: "Pre-1900", hint: "aphoristic hammer; hyperbolic prophecy; eternal recurrence" },
  { slug: "ibsen", name: "Henrik Ibsen", era: "Pre-1900", hint: "bourgeois drama; pistol on the wall; secrets unraveling" },
  { slug: "emerson", name: "Ralph Waldo Emerson", era: "Pre-1900", hint: "transcendentalist sermon; self-reliant aphorism" },
  { slug: "thoreau", name: "Henry David Thoreau", era: "Pre-1900", hint: "Walden plain living; observed nature with civic edge" },
  { slug: "douglass", name: "Frederick Douglass", era: "Pre-1900", hint: "abolitionist oratory; classical antithesis; first-person witness" },
  { slug: "swift", name: "Jonathan Swift", era: "Pre-1900", hint: "savage indignation; deadpan satirical proposal" },
  { slug: "defoe", name: "Daniel Defoe", era: "Pre-1900", hint: "first-person plain ledger; survival realism" },
  { slug: "whitman", name: "Walt Whitman", era: "Pre-1900", hint: "long catalog free verse; barbaric yawp; democratic body" },
  { slug: "dickinson", name: "Emily Dickinson", era: "Pre-1900", hint: "compressed slant; dashes; circumference" },
  { slug: "joyce", name: "James Joyce", era: "Modernist", hint: "stream of consciousness; epiphany; multilingual play" },
  { slug: "pound", name: "Ezra Pound", era: "Modernist", hint: "imagist precision; make it new; dictionary of memory" },
  { slug: "stein", name: "Gertrude Stein", era: "Modernist", hint: "repetition as insistence; continuous present; cubist syntax" },
  { slug: "fitzgerald", name: "F. Scott Fitzgerald", era: "Modernist", hint: "lyrical romantic; jazz age elegy; long lush periods" },
  { slug: "faulkner", name: "William Faulkner", era: "Modernist", hint: "Yoknapatawpha density; nested clauses; mythic South" },
  { slug: "anderson", name: "Sherwood Anderson", era: "Modernist", hint: "Winesburg grotesques; spare American small town" },
  { slug: "cather", name: "Willa Cather", era: "Modernist", hint: "prairie monumental; classical restraint" },
  { slug: "wharton", name: "Edith Wharton", era: "Modernist", hint: "Gilded Age manners; surgical irony; long Jamesian sentences" },
  { slug: "huxley", name: "Aldous Huxley", era: "Modernist", hint: "essayistic dystopia; cool ideational prose" },
  { slug: "kafka", name: "Franz Kafka", era: "Modernist", hint: "bureaucratic dread; lucid German; absurd procedural" },
  { slug: "mann", name: "Thomas Mann", era: "Modernist", hint: "ironic Bildungsroman; long German periods; Apollonian" },
  { slug: "hesse", name: "Hermann Hesse", era: "Modernist", hint: "spiritual quest fable; clear German; Eastern parable" },
  { slug: "proust", name: "Marcel Proust", era: "Modernist", hint: "involuntary memory; cathedral sentence; Combray cadence" },
  { slug: "bradbury", name: "Ray Bradbury", era: "Mid-20th", hint: "lyric SF; nostalgia; small-town carnival" },
  { slug: "philip-k-dick", name: "Philip K. Dick", era: "Mid-20th", hint: "paranoid metaphysical SF; reality slipping" },
  { slug: "hammett", name: "Dashiell Hammett", era: "Modernist", hint: "stripped third-person noir; Continental Op" },
];
