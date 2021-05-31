### [Dynamic Certificate Generator](https://github.com/SonuKumar81800/React-Practice/tree/master/src/components/PDFGenerator)

<br>

#### This Project is for Generating Dynamic Certificate Whenever any event will organized by any organization.

`How To Use`

- Go to `/server/dovuments/index.js` and modify certificate template according to your preferance.

- Connect your event portal to the front end part of this project inside the
  /PDFGenerator/HandlePdf.js pass the value of participants as a props .

- Now all done, whenever new participants completed event, A new Certificate will be created inside /server/certificates/`<name><certificateid>.pdf`

- You can push these certificate to the cloud and can easily create a verification system for these certificate.

![Dynamic Certificate Generator](https://github.com/SonuKumar81800/React-Practice/blob/master/public/certificate.png?raw=true)
