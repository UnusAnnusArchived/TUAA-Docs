# Get Video Previews

!!! warning

    #### This endpoint is deprecated!
    We have removed video previews for the time being, so this endpoint just returns a `500 Internal Server Error`.

Returns the specified video's previews

```typescript title="TypeScript"
import TUAA from "tuaa"; // (1)

const tuaa = new TUAA();

const metadata = await tuaa.v1.getvidpreviews("s01.e001");
```

1. The latest version of the `tuaa` package only supports v3 of the API. Please use `tuaa@<3.0.0`.

!!! get

    ```
    https://unusann.us/api/v1/getvidpreviews/{video}
    ```

    ## Parameters
    | Name    | Type     | Required                                                   |
    | --------| ---------| ---------------------------------------------------------- |
    | `video` | `String` | <input class="mdcheck" type="checkbox" checked disabled /> |

## Response

This endpoint will return with a `vtt` file with the video thumbnail urls. (1) { .annotate }

1. Docs can be found [here](https://github.com/sampotts/plyr#preview-thumbnails)
