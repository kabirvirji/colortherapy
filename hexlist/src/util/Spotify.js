export default class Spotify {
  constructor(clientId, responseType, redirectUri, scope) {
    this.clientId = clientId;
    this.responseType = responseType;
    this.redirectUri = redirectUri;
    this.scope = scope;
    this.url = `https://accounts.spotify.com/authorize?client_id=${
      this.clientId
    }&redirect_uri=${this.redirectUri}&response_type=${
      this.responseType
    }&scope=${encodeURI(this.scope)}`;
    this.userInfo = [];
    this.accessToken = "";
  }
  getToken() {
    const href = window.location.href;
    if (href.includes("access_token")) {
      const userToken = href.match(/access_token=([^&]*)/)[1];
      this.accessToken = userToken;
    }
  }
  async getUserInfo() {
    const userToken = this.accessToken;
    if (userToken) {
      try {
        const response = await fetch("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: "Bearer " + userToken,
          },
        });
        if (response.ok) {
          const jsonResponse = await response.json();
          this.userInfo.me = jsonResponse;
        } else {
          return response.status;
        }
      } catch (e) {
        console.log(e);
      }
    }
  }
}
