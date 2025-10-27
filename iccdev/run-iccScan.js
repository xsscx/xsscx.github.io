const fs = require("fs");
const path = require("path");
const createLiccModule = require("./IccScan/iccScan.js");

// Absolute path to an ICC profile
const iccPath = path.resolve("cve-2023-46602.icc");
const iccFile = path.basename(iccPath);

createLiccModule().then(Module => {
  console.log("iccScan WebAssembly module initialized (no mounts)");

  // Read ICC file from host filesystem
  const data = fs.readFileSync(iccPath);
  // Create it directly in Emscripten's in-memory FS
  Module.FS.writeFile(iccFile, data);

  console.log(`Running licc with embedded file: ${iccFile}\n`);
  Module.callMain(["-v", "1", iccFile]);
});
