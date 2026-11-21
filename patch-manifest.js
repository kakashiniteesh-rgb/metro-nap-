// Adds the permissions the background alarm needs to the generated Android manifest.
const fs = require("fs");
const f = "android/app/src/main/AndroidManifest.xml";
let x = fs.readFileSync(f, "utf8");
const perms = [
  "ACCESS_FINE_LOCATION", "ACCESS_COARSE_LOCATION", "ACCESS_BACKGROUND_LOCATION",
  "FOREGROUND_SERVICE", "FOREGROUND_SERVICE_LOCATION", "POST_NOTIFICATIONS",
  "SCHEDULE_EXACT_ALARM", "USE_EXACT_ALARM", "VIBRATE", "WAKE_LOCK"
];
const add = perms
  .filter(p => !x.includes("android.permission." + p + "\""))
  .map(p => "    <uses-permission android:name=\"android.permission." + p + "\" />")
  .join("\n");
if (add) x = x.replace("<application", add + "\n\n    <application");
fs.writeFileSync(f, x);
console.log("Manifest patched");
