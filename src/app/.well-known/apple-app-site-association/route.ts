// AASA file for iOS Universal Links — Apple fetches this when the app is installed
// to verify that onwavelength.space is allowed to open com.wavelenght.app.
//
// Paths that should open in-app instead of in-browser:
//   /i/*  -> influencer tracking links
//   /g/*  -> group invite links (QR codes)
//   /e/*  -> event invite links (future)

export const dynamic = "force-static";

const TEAM_ID = "SQ7SA4F47Q";
const BUNDLE_ID = "com.wavelenght.app"; // typo intentional (ASC stability)

export function GET() {
  const aasa = {
    applinks: {
      apps: [],
      details: [
        {
          appIDs: [`${TEAM_ID}.${BUNDLE_ID}`],
          components: [
            { "/": "/i/*", comment: "Influencer tracking" },
            { "/": "/g/*", comment: "Group invite" },
            { "/": "/e/*", comment: "Event invite" },
          ],
        },
      ],
    },
  };

  return new Response(JSON.stringify(aasa), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
