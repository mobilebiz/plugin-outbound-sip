# Outbound SIP Plugin

When using the Twilio Flex dial pad to make outgoing calls, if the phone number is not in E.164 format, this plugin will make outgoing calls to a SIP address.

ex.1 +819011112222  
-> +819011112222  
ex.2 2001  
-> sip:2001@your-sip-domain

## Setup

```bash
git clone https://github.com/mobilebiz/plugin-outbound-sip.git
cd plugin-outbound-sip
# If you use npm
npm install
# If you use yarn
yarn install
```

## Environment Variables

Copy `.env.sample` to `.env`
Edit `.env`

| Key                  | Value                                    |
| :------------------- | :--------------------------------------- |
| REACT_APP_SIP_DOMAIN | your sip domain(ex. xxxx.sip.twilio.com) |

## Local test

```bash
npm install
```

## Build && Deploy

```bash
npm run build && npm run deploy
```

## Release

Once deployed, you can manually release your plugin via the Flex UI or via

```bash
twilio flex:plugins:release --plugin plugin-name@version --name "name" --description "description"
```

Note: Common packages like `React`, `ReactDOM`, `Redux` and `ReactRedux` are not bundled with the build because they are treated as external dependencies so the plugin will depend on Flex to provide them globally.
