import * as pulumi from '@pulumi/pulumi';
import * as sendgrid from '@sendgrid/client';
import { ClientResponse } from '@sendgrid/client/src/response';

export interface State<T> {
  value: T;
}

export interface ProviderData<T> extends State<T> {
  __provider: any;
}

export interface CreateResult<T> {
  /**
   * The ID of the created resource.
   */
  readonly id: string;
  /**
   * Any properties that were computed during creation.
   */
  readonly outs?: State<T>;
}

export interface ReadResult<T> {
  /**
   * The ID of the resource ready back (or blank if missing).
   */
  readonly id?: string;
  /**
   * The current property state read from the live environment.
   */
  readonly props?: State<T>;
}

export interface UpdateResult<T> {
  /**
   * Any properties that were computed during updating.
   */
  readonly outs?: State<T>;
}

export interface CheckResult<T> {
  /**
   * The inputs to use, if any.
   */
  readonly inputs?: State<T>;
  /**
   * Any validation failures that occurred.
   */
  readonly failures?: pulumi.dynamic.CheckFailure[];
}

export type Response<T> = [ClientResponse, T];

export interface SendGridProvider<T> {
  check?(olds: ProviderData<T>, news: ProviderData<T>): Promise<CheckResult<T>>;
  diff?(id: string, olds: ProviderData<T>, news: ProviderData<T>): Promise<pulumi.dynamic.DiffResult>;
  create(inputs: ProviderData<T>): Promise<CreateResult<T>>;
  read?(id: string, props?: ProviderData<T>): Promise<ReadResult<T>>;
  update?(id: string, olds: ProviderData<T>, news: ProviderData<T>): Promise<UpdateResult<T>>;
  delete?(id: string, props: ProviderData<T>): Promise<void>;
}

type SendGridClient = typeof sendgrid;

export abstract class SendGridProvider<T> {
  getClient(): SendGridClient {
    sendgrid.setApiKey(process.env.SENDGRID_API_KEY!);
    return sendgrid;
  }
}
