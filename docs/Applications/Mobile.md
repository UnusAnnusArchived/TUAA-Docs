# Mobile App

Our official mobile app.

## Releases

> Latest release: <span id="release">Loading version...</span>

To see more releases, please see our <a href="https://release.unusann.us/_/app/tuaa-mobile/releases" target="_blank">release server</a>.

## Compatibility

This app was built with React-Native, so it follows <a href="https://github.com/facebook/react-native#-requirements" target="_blank">React-Native's system requirements</a>. You need to have an iPhone running iOS 12.4 and Android 5.0 or higher.

## Downloads

Downloads are currently hosted on our <a href="https://github.com/UnusAnnusArchived/TUAA-Mobile-App/releases" target="_blank">GitHub release page</a> and our <a href="https://release.unusann.us/_/app/tuaa-mobile/releases" target="_blank">release server</a>.

<script>
  const releaseDiv = document.getElementById("release");
  
  (async() => {
    try {
      const { latestRelease } = await fetch("https://release.unusann.us/api/v1/app/tuaa-mobile?fields=latestRelease").then((res) => res.json())
      releaseDiv.innerText = latestVersion
    } catch {
      releaseDiv.innerText = "Failed to fetch latest release!"
    }
  })()
</script>
