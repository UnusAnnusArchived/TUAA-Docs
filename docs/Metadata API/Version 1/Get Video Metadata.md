# Get Video Metadata

Returns the specified video's metadata

```typescript title="TypeScript"
import TUAA from "tuaa"; // (1)

const tuaa = new TUAA();

const metadata = await tuaa.v1.getvideodata("s01.e001");
```

1. The latest version of the `tuaa` package only supports v3 of the API. Please use `tuaa@<3.0.0`.

!!! get

    ```
    https://unusann.us/api/v1/getvideodata/{video}
    ```

    ## Parameters
    | Name    | Type     | Required                                                   |
    | --------| ---------| ---------------------------------------------------------- |
    | `video` | `String` | <input class="mdcheck" type="checkbox" checked disabled /> |

## Example response:

```json title="JSON"
{
  "_metadata_version": 1,
  "video": "/01/001/2160.mp4",
  "season": 1,
  "episode": 1,
  "title": "Unus Annus",
  "description": "What would you do if you only had a year left to live? Would you squander the time you were given? Or would you make every second count?<br><br>Welcome to Unus Annus. Today marks the beginning of our year-long journey where the only certainty is the end. In exactly 365 days this channel will be deleted along with all of the daily uploads accumulated since then. Nothing will be saved. Nothing will be reuploaded.<br><br>This is your one chance to join us at the onset of our adventure. To be there from the beginning. To make every second count. Subscribe now and relish what little time we have left or have the choice made for you as we disappear from existence forever. But remember... everything has an end. Even you. <br><br>Memento mori.<br><br>Unus annus.",
  "releasedate": 1573844400000,
  "thumbnail": "/thumbnails/01/001.webp"
} // (1)
```

1. [Reference](../../Reference/Metadata/index.md)
