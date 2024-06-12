const loadVideo = iframe => {
    const channelID = "UCHtlqJXjBu2S6BTEFWwV0-A";
    const reqURL = `https://upgraded-space-cod-459r64pgw6wfqg95-4000.app.github.dev/youtube-rss?channel_id=${channelID}`; // Update with your actual Codespace URL

    fetch(reqURL)
    .then(response => response.json())
    .then(result => {
        console.log(result);
        const videoNumber = iframe.getAttribute("vnum");
        const link = result.items[videoNumber].link;
        const id = link.substring(link.indexOf("=") + 1);
        iframe.setAttribute("src", `https://youtube.com/embed/${id}?controls=0&autoplay=1`)
    })
    .catch(error => console.log("error", error));
}

const iframe = document.getElementsByClassName("latest-video-embed")[0];
loadVideo(iframe);
