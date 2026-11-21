# Delhi Metro Nap

Sleep through your metro ride and get woken before your stop.

## Put it on GitHub
1. Create a new repo on github.com and upload everything in this folder (keep the `.github` folder).
2. Repo **Settings → Pages → Source: GitHub Actions**. The site deploys at `https://<you>.github.io/<repo>/`.
3. Open that link in Chrome → ⋮ → **Add to Home screen**.

## Get an Android APK
Repo **Actions → Build Android APK → Run workflow**. When it finishes, download
`metro-wakeup-apk` from the run page, unzip it, and install `app-debug.apk`
(allow "install unknown apps" on your phone).

## Make it work with the screen off
The APK build includes native background GPS (a foreground service with a
persistent notification) and alarm notifications. After installing:
1. Open the app, allow **location**, then in phone Settings → Apps → Metro Nap →
   Permissions → Location choose **Allow all the time**.
2. Allow **notifications**, and in Settings → Battery set the app to **Unrestricted**
   (phone makers like Xiaomi/Samsung/Oppo kill background apps otherwise).
3. Add your destination, lock the phone, and do a short real-world test before relying on it.

The plain website (GitHub Pages) cannot do this: browsers pause pages when the screen is off.
