import path from "path";
import fs from "fs";

import stream from "stream";
import { promisify } from "util";

const pipeline = promisify(stream.pipeline);

const cvPath = path
  .join(process.cwd(), "data\\files\\cv.pdf")
  .replace(/\\/g, "/");

const handler = async (req: any, res: any) => {
  const readStream = fs.createReadStream(cvPath);
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    "attachment; filename=rucinski-patryk-cv.pdf"
  );

  await pipeline(readStream, res);
};

export default handler;
