# Metadata V1

Metadata V1 is the first version of metadata that the archive was built on. This is still in use with most of our videos, but we're trying to phase it out.

| Key                  | Type                 | Optional |
| -------------------- | -------------------- | -------- |
| `__metadata_version` | `1`                  | [x]      |
| `video`              | `String`             | [ ]      |
| `season`             | `Integer`            | [ ]      |
| `episode`            | `Integer`            | [ ]      |
| `title`              | `String`             | [ ]      |
| `description`        | `String`             | [ ]      |
| `releasedate`        | `Integer (JS Epoch)` | [ ]      |
| `thumbnail`          | `String`             | [ ]      |

## Example for s01.e001

```json title="JSON"
{
  "__metadata_version": 1,
  "video": "/01/001/2160.mp4",
  "season": 1,
  "episode": 1,
  "title": "Unus Annus",
  "description": "What would you do if you only had a year left to live? Would you squander the time you were given? Or would you make every second count?<br><br>Welcome to Unus Annus. Today marks the beginning of our year-long journey where the only certainty is the end. In exactly 365 days this channel will be deleted along with all of the daily uploads accumulated since then. Nothing will be saved. Nothing will be reuploaded.<br><br>This is your one chance to join us at the onset of our adventure. To be there from the beginning. To make every second count. Subscribe now and relish what little time we have left or have the choice made for you as we disappear from existence forever. But remember... everything has an end. Even you. <br><br>Memento mori.<br><br>Unus annus.",
  "releasedate": 1573844400000,
  "thumbnail": "/thumbnails/01/001.webp"
}
```
