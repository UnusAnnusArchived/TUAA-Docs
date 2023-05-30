# Get Season 1 Metadata

Returns a list of season 1's metadata.

```typescript title="TypeScript"
import TUAA from "tuaa"; // (1)

const tuaa = new TUAA();

const metadata = await tuaa.v1.gets01metadata();
```

1. The latest version of the `tuaa` package only supports v3 of the API. Please use `tuaa@<3.0.0`.

!!! get

    ```
    https://unusann.us/api/v1/gets01metadata
    ```

## Example response:

```json title="JSON"
[
  ...Metadata // (1)
]
```

1. [Reference](../../Reference/Metadata/index.md)
