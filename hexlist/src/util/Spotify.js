const clientId = "4b2644aba9af45e0bf4cef0fd58b7d6c";
const responseType = "token";
const redirectUri = "http://localhost:3000";
const scope =
  "user-read-private playlist-modify-private user-top-read user-read-recently-played";
export const Spotify = {
  url: `https://accounts.spotify.com/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${encodeURI(
    scope
  )}`,
  getToken: function () {
    const href = window.location.href;
    if (href.includes("access_token")) {
      const userToken = href.match(/access_token=([^&]*)/)[1];
      return userToken;
    }
  },
  getUserPlaylists: async function () {
    const userToken = this.getToken();
    if (userToken) {
      try {
        const response = await fetch(
          "https://api.spotify.com/v1/me/playlists",
          {
            headers: {
              Authorization: "Bearer " + userToken,
            },
          }
        );
        if (response.ok) {
          const jsonResponse = await response.json();
          console.log(jsonResponse.items);
        }
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("no access token");
    }
  },
};
