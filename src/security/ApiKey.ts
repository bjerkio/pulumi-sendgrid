import * as pulumi from '@pulumi/pulumi';
import * as sendgrid from '@sendgrid/client';

import '../setApiKey'

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
    return { id: body.api_key_id, outs: body };
  },
  async update(id, olds: ApiKeyInputs, news: ApiKeyInputs) {
    const [response, body] = await sendgrid.request({
      method: 'PUT',
      url: '/v3/api_keys',
      body: news,
      qs: {
        api_key_id: id,
      }
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

export class ApiKey extends pulumi.dynamic.Resource {
  constructor(name: string, args: ApiKeyInputs, opts?: pulumi.CustomResourceOptions) {
    super(apiKeyProvider, name, args, opts);
  }
}
