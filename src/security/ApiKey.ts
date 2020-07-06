import * as pulumi from '@pulumi/pulumi';
import * as sendgrid from '@sendgrid/client';

import '../setApiKey';

export interface ApiKeyInputs {
  /**
   * The name you will use to describe this API Key.
   */
  name: string;
  /**
   * The individual permissions that you are giving to this API Key.
   */
  scopes?: string[];
  sample?: string;
}

const apiKeyProvider: pulumi.dynamic.ResourceProvider = {
  async create(inputs: ApiKeyInputs) {
    const [response, body] = await sendgrid.request({
      method: 'POST',
      url: '/v3/api_keys',
    });
    return {
      id: body.api_key_id,
      outs: {
        apiKey: body.api_key,
        name: body.name,
        scopes: body.scopes,
      },
    };
  },
  async update(id, olds: ApiKeyInputs, news: ApiKeyInputs) {
    const [response, body] = await sendgrid.request({
      method: 'PUT',
      url: '/v3/api_keys',
      body: news,
      qs: {
        api_key_id: id,
      },
    });
    return { outs: body };
  },
  async delete(id, props: ApiKeyInputs) {
    await sendgrid.request({
      method: 'DELETE',
      url: '/v3/api_keys',
      qs: {
        api_key_id: id,
      },
    });
  },
};

/**
 * To create your initial SendGrid API Key, you should [use the SendGrid App](https://app.sendgrid.com/settings/api_keys).
 * Once your first key exists, you can use this provider for future API requests.
 *
 * There is a limit of 100 API Keys on your account.
 *
 * The API Keys feature allows customers to generate an API Key credential which can be used
 * for authentication with the [SendGrid v3 API](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-authentication).
 * See the [API Key Permissions List](https://sendgrid.api-docs.io/v3.0/how-to-use-the-sendgrid-v3-api/api-authorization) for all available scopes.
 */
export class ApiKey extends pulumi.dynamic.Resource {
  // @ts-ignore
  public readonly apiKey: pulumi.Output<string>;

  constructor(name: string, args: ApiKeyInputs, opts?: pulumi.CustomResourceOptions) {
    super(apiKeyProvider, name, args, opts);
  }
}
