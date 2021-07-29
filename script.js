async function getToken() {
  try {
    const clientId = "42aaddf47bbd420fa7c6cc94734cb640";
    const clientSecret = "e90f86d053894e2eb357a254d2e844bb";
    const result = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(clientId + ":" + clientSecret),
      },
      body: "grant_type=client_credentials",
    });
    const data = await result.json();
    const accessToken = data.access_token;
    getTrack(accessToken);
  } catch (error) {
    console.log(error);
  }
}
async function getTrack(token) {
  try {
    const result = await fetch(
      `https://api.spotify.com/v1/albums/6akEvsycLGftJxYudPjmqK/tracks`,
      {
        method: "GET",
        headers: { Authorization: "Bearer " + 'BQCSjFs7yRTCTaYcXWsuk0-Zxmossa-bao5l9rnAsqOobhePCnMCms4FamDwvbPhpufLKSITPVKPISvKJ_1Gvk_Rz6fviOR8GqEPgDU4HM2PCkEK1KTB4Sz0r2MWIrV_rNZbXGKKz8vM2LYZ7djClXeVLs7SMQdQg9x7zPaWJCW_ovjwWwDFMfnoA2XeVaw' },
      }
    );
    const data = await result.json();
    console.log(data);
    var audio = document.getElementById("audio");
    data.items.forEach((songs) => {
      var src = document.createElement("source");
      src.setAttribute("src", songs.preview_url);
      audio.appendChild(src);
    });
  } catch (error) {
    console.log(error);
  }
}