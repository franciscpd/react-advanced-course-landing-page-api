'use strict';

const axios = require('axios');
const netlifyWebhook = strapi.config.get('custom.netlifyWebhook');

module.exports = {
  lifecycles: {
    async afterCreate(_, __) {
      netlifyWebhook && axios.post(netlifyWebhook);
    },
    async afterUpdate(_, __, ___) {
      netlifyWebhook && axios.post(netlifyWebhook);
    }
  },
};
