# About Metadata

We currently have 2 different versions of metadata in production:

- [V1](./Metadata%20V1.md)
- [V2](./Metadata%20V2.md)

[Metadata V3](./Metadata%20V3.md) is currently being worked on and refined and is planned to release alongside with the new video player we're working on.

On V1 and V2 of our API, you will receive the stored JSON files with no changes, but with API V3 you can select which metadata version you would like to receive and the server will only respond with that version.

For API versions 1 and 2 with metadata versions 1 and 2, there is currently no direct way to tell between them in code other than checking if certain properties exist, but in API version 3 and metadata version 3, we have added a `__metadata_version` property which contains the version as an integer.

## External Media in Metadata

All links to external media (videos, subtitles, thumbnails, etc) have their domain removed. You will have to add in the domain inside your code:

```typescript title="TypeScript"
const cdn = "https://stream.unusann.us";

const videoUrl = `${cdn}${videoPath}`;
```
