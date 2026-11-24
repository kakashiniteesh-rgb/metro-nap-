# Metro Nap

Wake-up alarm for Delhi Metro rides. Location and stops stay on the phone: no account, no server.

## Build the app
1. Keep this repository **private** (Settings > General > Danger zone > Change visibility).
2. Actions > "Build Metro Nap (signed release APK)" > Run workflow.
3. Download `Metro-Nap-APK` from the finished run, unzip, install `Metro-Nap.apk`.

## Signing key
The first build creates a signing key and saves it. Download `KEEP-PRIVATE-signing-key` from the run
and store it somewhere safe: updates must always be signed with the same key.
Optional: add repository secrets `KEYSTORE_B64` (base64 of your .jks) and `KEY_PASS` to use your own key.

## First run on the phone
Allow location, then Settings > Apps > Metro Nap > Permissions > Location > "Allow all the time".
Allow notifications, set Battery to "No restrictions", and enable Autostart on Xiaomi phones.
In the app, open the gear icon and allow "Display over other apps".

Privacy policy: privacy.html
