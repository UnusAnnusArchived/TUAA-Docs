# Metadata V2

Metadata V2 is the second version of metadata that we use for the archive. We currently only have the first 200 or so episodes converted to V2. We're not converting any more episodes because we are instead working on metadata V3 and are going to convert to that instead.

| Key                  | Type                  | Optional                                                   |
| -------------------- | --------------------- | ---------------------------------------------------------- |
| `__metadata_version` | `2`                   | <input class="mdcheck" type="checkbox" checked disabled /> |
| `sources`            | [`Source[]`](#source) | <input class="mdcheck" type="checkbox" disabled />         |
| `tracks`             | [`Track[]`](#track)   | <input class="mdcheck" type="checkbox" disabled />         |
| `posters`            | [`Poster[]`](#poster) | <input class="mdcheck" type="checkbox" disabled />         |
| `season`             | `Integer`             | <input class="mdcheck" type="checkbox" disabled />         |
| `episode`            | `Integer`             | <input class="mdcheck" type="checkbox" disabled />         |
| `title`              | `String`              | <input class="mdcheck" type="checkbox" disabled />         |
| `description`        | `String`              | <input class="mdcheck" type="checkbox" disabled />         |
| `date`               | `Integer (JS Epoch)`  | <input class="mdcheck" type="checkbox" disabled />         |
| `duration`           | `Integer (Seconds)`   | <input class="mdcheck" type="checkbox" checked disabled /> |

## Source

| Key    | Type      |
| ------ | --------- |
| `src`  | `String`  |
| `type` | `String`  |
| `size` | `Integer` |

## Track

| Key       | Type     |
| --------- | -------- |
| `kind`    | `String` |
| `label`   | `String` |
| `srclang` | `String` |
| `src`     | `String` |

## Poster

| Key    | Type                     |
| ------ | ------------------------ |
| `src`  | `String`                 |
| `type` | `String (HTTP Mimetype)` |

## Example for s01.e001

```json title="JSON"
{
  "__metadata_version": 2,
  "sources": [
    {
      "src": "/01/001/2160.mp4",
      "type": "video/mp4",
      "size": 2160
    },
    {
      "src": "/01/001/1440.mp4",
      "type": "video/mp4",
      "size": 1440
    },
    {
      "src": "/01/001/1080.mp4",
      "type": "video/mp4",
      "size": 1080
    },
    {
      "src": "/01/001/720.mp4",
      "type": "video/mp4",
      "size": 720
    },
    {
      "src": "/01/001/480.mp4",
      "type": "video/mp4",
      "size": 480
    },
    {
      "src": "/01/001/360.mp4",
      "type": "video/mp4",
      "size": 360
    },
    {
      "src": "/01/001/240.mp4",
      "type": "video/mp4",
      "size": 240
    }
  ],
  "tracks": [
    {
      "kind": "captions",
      "label": "English",
      "srclang": "en",
      "src": "/subs/01/001.en.vtt"
    },
    {
      "kind": "captions",
      "label": "Chinese (Auto Translated)",
      "srclang": "zh",
      "src": "/subs/01/001.zh.vtt"
    },
    {
      "kind": "captions",
      "label": "Spanish (Auto Translated)",
      "srclang": "es",
      "src": "/subs/01/001.es.vtt"
    },
    {
      "kind": "captions",
      "label": "German (Auto Translated)",
      "srclang": "de",
      "src": "/subs/01/001.de.vtt"
    },
    {
      "kind": "captions",
      "label": "Polskie",
      "srclang": "pl",
      "src": "/subs/01/001.pl.vtt"
    }
  ],
  "posters": [
    {
      "src": "/thumbnails/01/001.webp",
      "type": "image/webp"
    },
    {
      "src": "/thumbnails/01/001.jpg",
      "type": "image/jpeg"
    }
  ],
  "season": 1,
  "episode": 1,
  "title": "Unus Annus",
  "description": "What would you do if you only had a year left to live? Would you squander the time you were given? Or would you make every second count?<br><br>Welcome to Unus Annus. Today marks the beginning of our year-long journey where the only certainty is the end. In exactly 365 days this channel will be deleted along with all of the daily uploads accumulated since then. Nothing will be saved. Nothing will be reuploaded.<br><br>This is your one chance to join us at the onset of our adventure. To be there from the beginning. To make every second count. Subscribe now and relish what little time we have left or have the choice made for you as we disappear from existence forever. But remember... everything has an end. Even you. <br><br>Memento mori.<br><br>Unus annus.",
  "date": 1573844400000,
  "duration": 111
}
```
