import fs from "fs";
import { convert2img } from "mdimg";

const docs = fs.readdirSync("docs");
for (let i = 0; i < docs.length; i++) {
  if (docs[i].endsWith(".md")) {
    const img = await convert2img({
      mdFile: `docs/${docs[i]}`,
      outputFilename: `discord/${docs[i]}`,
      width: 2048,
      cssTemplate: "github",
    });
  }
}
