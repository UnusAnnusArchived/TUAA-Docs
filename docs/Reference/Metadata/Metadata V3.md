# Metadata V3

!!! warning

    **Metadata V3 will have servere infrastructure changes that will cause all old metadata versions to get deprecated and no longer work to their full extent once metadata v3 is fully put into production.**

Metadata V3 will be the third version of metadata that we will use for the archive. It is currently only available through the API and not even used on the website yet. It will be used in production when we release the new video player.

## The Future of Metadata V3

When Metadata V3 gets released, videos will be reencoded with no audio so the video player can use the user's preferred audio language on the fly, so we have added a `download` property which will have a link to a pre-encoded file with the correct audio language.

## URL Variables

Instead of the client just slapping a cdn link to the beginning of url paths, Metadata V3 has variables that the client can replace with the correct domains. This allows the metadata file to link to external websites without having any issues. To properly replace the variable with the cdn's domain, use a replace function in your programming language and replace `{cdn}` with the sites domain; for example:

```typescript title="TypeScript"
const videoUrl = videoPath.replace("{cdn}", "https://stream.unusann.us");
```

## Types

| Key                  | Type                        |
| -------------------- | --------------------------- |
| `__metadata_version` | `3`                         |
| `sources`            | [`Source[]`](#source)       |
| `audio`              | [`Audio[]`](#audio)         |
| `captions`           | [`Caption[]`](#caption)     |
| `thumbnails`         | [`Thumbnails`](#thumbnails) |
| `season`             | `Integer`                   |
| `episode`            | `Integer`                   |
| `title`              | `String`                    |
| `description`        | `String`                    |
| `date`               | `Integer (JS Epoch)`        |
| `duration`           | `Integer (Seconds)`         |

### Source

Either [`TUAASource`](#tuaa-source), [`DirectSource`](#direct-source), or [`EmbedSource`](#embed-source).

### TUAA Source

| Key           | Type                          |
| ------------- | ----------------------------- |
| `type`        | `"tuaa"`                      |
| `id`          | `"tuaa"`                      |
| `resolutions` | [`Resolution[]`](#resolution) |
| `download`    | `String`                      |

### Direct Source

| Key           | Type                          |
| ------------- | ----------------------------- |
| `type`        | `"direct"`                    |
| `id`          | `String`                      |
| `name`        | `String`                      |
| `resolutions` | [`Resolution[]`](#resolution) |

### Embed Source

| Key    | Type      |
| ------ | --------- |
| `type` | `"embed"` |
| `id`   | `String`  |
| `name` | `String`  |
| `src`  | `String`  |

### Resolution

| Key    | Type      |
| ------ | --------- |
| `src`  | `String`  |
| `size` | `Integer` |

### Audio

| Key       | Type      | Optional                                                   |
| --------- | --------- | ---------------------------------------------------------- |
| `label`   | `String`  | <input class="mdcheck" type="checkbox" disabled />         |
| `lang`    | `String`  | <input class="mdcheck" type="checkbox" disabled />         |
| `src`     | `String`  | <input class="mdcheck" type="checkbox" disabled />         |
| `default` | `Boolean` | <input class="mdcheck" type="checkbox" checked disabled /> |

### Caption

| Key       | Type      | Optional                                                   |
| --------- | --------- | ---------------------------------------------------------- |
| `label`   | `String`  | <input class="mdcheck" type="checkbox" disabled />         |
| `srclang` | `String`  | <input class="mdcheck" type="checkbox" disabled />         |
| `src`     | `String`  | <input class="mdcheck" type="checkbox" disabled />         |
| `default` | `Boolean` | <input class="mdcheck" type="checkbox" checked disabled /> |

### Thumbnails

| Key    | Type                      |
| ------ | ------------------------- |
| `webp` | [`Thumbnail`](#thumbnail) |
| `jpg`  | [`Thumbnail`](#thumbnail) |
| `avif` | [`Thumbnail`](#thumbnail) |

### Thumbnail

| Key    | Type               |
| ------ | ------------------ |
| `src`  | `String`           |
| `size` | `Integer (Octets)` |

## Example for s01.e001

```json title="JSON"
{
  "___metadata_version": 3,
  "sources": [
    {
      "type": "tuaa",
      "id": "tuaa",
      "resolutions": [
        {
          "src": "{cdn}/01/001/2160.mp4",
          "size": 2160
        },
        {
          "src": "{cdn}/01/001/1440.mp4",
          "size": 1440
        },
        {
          "src": "{cdn}/01/001/1080.mp4",
          "size": 1080
        },
        {
          "src": "{cdn}/01/001/720.mp4",
          "size": 720
        },
        {
          "src": "{cdn}/01/001/480.mp4",
          "size": 480
        },
        {
          "src": "{cdn}/01/001/360.mp4",
          "size": 360
        },
        {
          "src": "{cdn}/01/001/240.mp4",
          "size": 240
        },
        {
          "src": "{cdn}/01/001/144.mp4",
          "size": 240
        }
      ],
      "download": "{cdn}/01/001/s01.e001.mp4"
    },
    {
      "type": "direct",
      "id": "hobune",
      "name": "hobune",
      "resolutions": [
        {
          "src": "https://cdn.hobune.stream/dl/files/channels-cdn/Unus%20Annus%20%28UCIcgBZ9hEJxHv6r_jDYOMqg%29/20191115%20-%20Unus%20Annus%20-%20wXnh0h8IT7E.mp4",
          "size": 1080
        }
      ]
    },
    {
      "type": "direct",
      "id": "archive.org-1",
      "name": "archive.org (unus-annus)",
      "resolutions": [
        {
          "src": "https://ia801900.us.archive.org/22/items/unus-annus/001%20-%20Unus%20Annus.mp4",
          "size": 1080
        }
      ]
    },
    {
      "type": "direct",
      "id": "archive.org-2",
      "name": "archive.org (unus-annus-archive_202011)",
      "resolutions": [
        {
          "src": "https://archive.org/download/unus-annus-archive_202011/001%20-%20Unus%20Annus.mp4",
          "size": 1080
        }
      ]
    },
    {
      "type": "direct",
      "id": "archive.org-3",
      "name": "archive.org (unus-annus_20201126)",
      "resolutions": [
        {
          "src": "https://archive.org/download/unus-annus_20201126/001.%20Unus%20Annus%2011-15-19.mp4",
          "size": 1080
        }
      ]
    },
    {
      "type": "direct",
      "id": "tuaa-local",
      "name": "local (no wifi testing)",
      "resolutions": [
        {
          "src": "/s01.e001.mp4",
          "size": 1080
        }
      ]
    }
  ],
  "audio": [
    {
      "label": "English",
      "lang": "en",
      "src": "{cdn}/01/001/audio.en.m4a",
      "default": true
    }
  ],
  "captions": [
    {
      "label": "English",
      "srclang": "en",
      "src": "{cdn}/subs/01/001.en.vtt",
      "default": true
    },
    {
      "label": "Polskie",
      "srclang": "pl",
      "src": "{cdn}/subs/01/001.pl.vtt"
    },
    {
      "label": "Chinese (AI)",
      "srclang": "zh",
      "src": "{cdn}/subs/01/001.zh.vtt"
    },
    {
      "label": "Spanish (AI)",
      "srclang": "es",
      "src": "{cdn}/subs/01/001.es.vtt"
    },
    {
      "label": "German (AI)",
      "srclang": "de",
      "src": "{cdn}/subs/01/001.de.vtt"
    }
  ],
  "thumbnails": {
    "webp": {
      "src": "{cdn}/thumbnails/01/001.webp",
      "size": 0
    },
    "jpg": {
      "src": "{cdn}/thumbnails/01/001.jpg",
      "size": 0
    },
    "avif": {
      "src": "{cdn}/thumbnails/01/001.avif",
      "size": 0
    }
  },
  "season": 1,
  "episode": 1,
  "title": "Unus Annus",
  "description": "What would you do if you only had a year left to live? Would you squander the time you were given? Or would you make every second count?<br><br>Welcome to Unus Annus. Today marks the beginning of our year-long journey where the only certainty is the end. In exactly 365 days this channel will be deleted along with all of the daily uploads accumulated since then. Nothing will be saved. Nothing will be reuploaded.<br><br>This is your one chance to join us at the onset of our adventure. To be there from the beginning. To make every second count. Subscribe now and relish what little time we have left or have the choice made for you as we disappear from existence forever. But remember... everything has an end. Even you. <br><br>Memento mori.<br><br>Unus annus.",
  "date": 1573844400000,
  "duration": 111
}
```

## Example for s00.e016

```json title="JSON"
{
  "__metadata_version": 3,
  "sources": [
    {
      "type": "tuaa",
      "id": "tuaa",
      "resolutions": [
        {
          "src": "{cdn}/00/016/4320.mp4",
          "size": 4320
        },
        {
          "src": "{cdn}/00/016/2160.mp4",
          "size": 2160
        },
        {
          "src": "{cdn}/00/016/1440.mp4",
          "size": 1440
        },
        {
          "src": "{cdn}/00/016/1080.mp4",
          "size": 1080
        },
        {
          "src": "{cdn}/00/016/720.mp4",
          "size": 720
        },
        {
          "src": "{cdn}/00/016/480.mp4",
          "size": 480
        },
        {
          "src": "{cdn}/00/016/360.mp4",
          "size": 360
        },
        {
          "src": "{cdn}/00/016/240.mp4",
          "size": 240
        },
        {
          "src": "{cdn}/00/016/144.mp4",
          "size": 144
        }
      ],
      "download": "{cdn}/00/016/s00.e016.mp4"
    },
    {
      "type": "embed",
      "id": "youtube",
      "name": "YouTube",
      "src": "https://www.youtube.com/embed/Lvicaufi5O0"
    }
  ],
  "audio": [
    {
      "lang": "en",
      "label": "English",
      "src": "{cdn}/00/016/audio.en.m4a",
      "default": true
    }
  ],
  "captions": [],
  "thumbnails": {
    "webp": {
      "src": "{cdn}/thumbnails/00/016.webp",
      "size": 24547
    },
    "jpg": {
      "src": "{cdn}/thumbnails/00/016.jpg",
      "size": 44998
    },
    "avif": {
      "src": "{cdn}/thumbnails/00/016.avif",
      "size": 48534
    }
  },
  "season": 0,
  "episode": 16,
  "title": "Mori",
  "description": "Memento ► <a href=\"https://unusann.us/watch/s00.e015\">https://youtu.be/yGxOsZOyyRg</a>",
  "date": 1668340800000,
  "duration": 1525
}
```
