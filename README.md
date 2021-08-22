# analog-b
A simple analog clock face for the Fitbit Sense smartwatch. It includes the day of the week, date, and heart rate.

![720P (HD)](https://user-images.githubusercontent.com/6111417/130339589-32f7cd21-2aaa-4527-b2ac-3ea9092328df.png)

## Building and running

1. Clone the repo.
2. Open the folder in Visual Studio Code.
3. Open a terminal.
4. Start up the Fitbit CLI tools by typing: `npx fitbit`
5. Start the Fitbit OS Simulator or connect a physical device (see below).
6. Build and run the app by typing: `bi`

To connect a physical device:
1. Connect your machine to a WiFi network.
2. Connect your phone to the same WiFi network.
3. In the Fitbit app on your phone:
   1. View your account and tap "Sense".
   2. Tap "Wi-Fi Settings".
   3. Connect your Sense to the same WiFi network.
   4. Go back to the previous screen and tap "Developer Menu".
   5. Turn on the "Developer Bridge" option.
4. On your Sense:
   1. Go to "Settings" > "Developer bridge".
   2. Turn on the "Enable" switch.

Note that you need to be a registered as a developer with Fitbit under the account that your device is linked to in order for the developer menus and options to be available.
