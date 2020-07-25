module.exports = ({ env }) => ({
  upload: {
    provider: 'aws-s3',
    providerOptions: {
      access_key_id: env('AWS_ACCESS_KEY_ID'),
      secret_access_key: env('AWS_SECRET_ACCESS_KEY'),
      region: env('AWS_REGION'),
      params: {
        Bucket: env('AWS_BUCKET'),
      },
    },
  },
});
