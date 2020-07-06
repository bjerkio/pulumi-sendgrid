import * as pulumi from '@pulumi/pulumi';
import scopes from './scopes';
import { SendGridProvider, ProviderData, Response } from '../SendGridProvider';

export interface ApiKeyInput {
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

interface ApiKeyOutput extends ApiKeyInput {
  api_key: string;
  api_key_id: string;
}

type Args = ProviderData<ApiKeyOutput>;

class ApiKeyProvider extends SendGridProvider<ApiKeyOutput> {
  async create({ value }: Args) {
    if (!value.scopes) {
      value.scopes = scopes;
    }

    const [_, body] = await this.getClient().request({
      method: 'POST',
      url: '/v3/api_keys',
      body: JSON.stringify(value),
    });

    return {
      id: body.api_key_id,
      outs: {
        value: body,
      },
    };
  }

  async update(id: string, olds: Args, news: Args) {
    const { api_key, api_key_id, ...input } = {
      ...olds.value,
      ...news.value,
    };

    const [_, body] = (await this.getClient().request({
      method: 'PUT',
      url: `/v3/api_keys/${id}`,
      body: JSON.stringify(input),
    })) as Response<ApiKeyOutput>;

    const value = {
      ...body,
      api_key,
      api_key_id,
    };

    return {
      outs: {
        value,
      },
    };
  }

  async delete(id: string, _: Args) {
    await this.getClient().request({
      method: 'DELETE',
      url: `/v3/api_keys/${id}`,
    });
  }
}

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
  api_key: pulumi.Output<string>;
  constructor(name: string, value: ApiKeyInput, opts?: pulumi.CustomResourceOptions) {
    super(value
      new ApiKeyProvider(),
      name,
      {
        value,
      },
      opts
    );
  }
}
