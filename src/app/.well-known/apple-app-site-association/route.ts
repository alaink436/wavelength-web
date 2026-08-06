// AASA file for iOS Universal Links — Apple fetches this when the app is installed
// to verify that onwavelength.space is allowed to open com.wavelenght.app.
//
// Both sides are wired up as of 2026-08-05: the app declares
// `applinks:onwavelength.space` in app.json. (The note that used to stand here,
// saying this was one-sided and inactive, was already out of date.)
//
// Paths that should open in-app instead of in-browser:
//   /i/*  -> influencer tracking links
//   /s/*  -> routine invites; the code is the path segment
// (/g/* group invites and /e/* event invites were removed with the calendar app.)
//
// ⚠️ Order matters when changing this. iOS caches the AASA, and the app only
// claims a path once this file lists it — so this has to be deployed BEFORE the
// app starts handing out https invite links, or every invite opens the browser
// instead of the app. There is a page at /s/<code> for people without the app,
// so a link that lands in a browser is at least not a 404.

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
            { "/": "/s/*", comment: "Routine invite" },
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
