export function replaceOutboundNumber(flex) {
  const { REACT_APP_SIP_DOMAIN } = process.env;
  console.info(`🐸 Replace destination number to sip address >>>  ${REACT_APP_SIP_DOMAIN}`);
  flex.Actions.replaceAction('StartOutboundCall', (payload, original) => {
    // Get original destination from payload
    const { destination } = payload;
    const newPayload = payload;
    if (!destination.match(/^\+/)) {
      // sip number
      newPayload.destination= `sip:${destination}@${REACT_APP_SIP_DOMAIN}`,
      console.log(`🐞 new destination: ${newPayload.destination}`);
    }
    original(newPayload);
  });
}