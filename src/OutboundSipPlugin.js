import React from 'react';
import { FlexPlugin } from '@twilio/flex-plugin';

import { replaceOutboundNumber } from './actions/OutboundSip/OutboundSip';

const PLUGIN_NAME = 'OutboundSipPlugin';

export default class OutboundSipPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   */
  async init(flex, manager) {
    replaceOutboundNumber(flex);
  }
}
