// AASA file for iOS Universal Links — Apple fetches this when the app is installed
// to verify that onwavelength.space is allowed to open com.wavelenght.app.
//
// ⚠️ Currently one-sided and therefore INACTIVE: the app does not declare
// `associatedDomains` in app.json, so iOS never claims these paths. Referral
// tracking does not depend on it (cold installs go through the clipboard token
// plus App Store redirect); universal links would only serve users who already
// have the app. Wire both sides up before the first build, or drop this route.
//
// Paths that should open in-app instead of in-browser:
//   /i/*  -> influencer tracking links
// (/g/* group invites and /e/* event invites were removed with the calendar app.)

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
          components: [{ "/": "/i/*", comment: "Influencer tracking" }],
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
