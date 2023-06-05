# macOS App

Our official app for macOS.

## Releases

> Latest release: <span id="release">Loading version...</span>

To see more releases, please see our <a href="https://release.unusann.us/_/app/tuaa-macos/releases" target="_blank">release server</a>.

## Compatibility

This app was built with Electron, so it follows <a href="https://github.com/electron/electron#platform-support" target="_blank">Electron's system requirements</a>. You need to have a 64-bit Intel or Apple Silicon Mac running at least OS X El Capitan (OS X 10.11)

## Downloads

Downloads are currently hosted on our <a href="https://github.com/UnusAnnusArchived/TUAA-App-OSX/releases" target="_blank">GitHub release page</a> and our <a href="https://release.unusann.us/_/app/tuaa-macos/releases" target="_blank">release server</a>.

<script>
  const releaseDiv = document.getElementById("release");
  
  (async() => {
    try {
      const { latestRelease } = await fetch("https://release.unusann.us/api/v1/app/tuaa-macos?fields=latestRelease").then((res) => res.json())
      releaseDiv.innerText = latestVersion
    } catch {
      releaseDiv.innerText = "Failed to fetch latest release!"
    }
  })()
</script>
