import AWSClient from "aws-sdk";

AWSClient.config.update({
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY!,
    secretAccessKey: process.env.AWS_SECRET_KEY!,
  },
});

const secretManagerClient = new AWSClient.SecretsManager({
  region: process.env.AWS_SECRET_MANAGER_REGION,
});

async function injectAWSSecrets() {
  const secretName = process.env.AWS_SECRET_NAME!;
  return new Promise((resolve) => {
    secretManagerClient.getSecretValue(
      { SecretId: secretName },
      function (err, data) {
        if (err) {
          throw err;
        } else {
          let secret: Record<string, string>;

          if (data.SecretString) {
            secret = JSON.parse(data.SecretString);
            Object.entries(secret).forEach(([secretKey, secretValue]) => {
              process.env[secretKey] = secretValue;
            });
            console.log("Injected all the secrets");
            resolve(secret);
          } else {
            throw new Error("Secrets not found on aws");
          }
        }
      }
    );
  });
}

export const initAWS = async () => {
  // Inject aws secrets
  await injectAWSSecrets();
};

export const AWS = AWSClient;
