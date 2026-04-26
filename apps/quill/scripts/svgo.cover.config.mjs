// SVGO config used to optimize Recraft author covers in public/covers/.
// Keeps Recraft's <metadata><recraft-signature>...</recraft-signature></metadata>
// block intact (it is the model's provenance signature; we don't strip it
// even though svgo's default preset would). All other defaults — path
// merging, decimal rounding, comment removal, attribute cleanup — are on.
//
// Run from the repo root:  npx svgo --config scripts/svgo.cover.config.mjs --recursive public/covers/

export default {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          // Recraft puts a signed <metadata><recraft-signature/></metadata>
          // at the end of the file. Keep both the wrapper AND its
          // non-standard child element (otherwise svgo strips the
          // signature even with removeMetadata disabled).
          removeMetadata: false,
          removeUnknownsAndDefaults: {
            unknownContent: false,
            unknownAttrs: false,
          },
          // viewBox is what makes the SVG scalable in the card frame.
          removeViewBox: false,
        },
      },
    },
  ],
};
