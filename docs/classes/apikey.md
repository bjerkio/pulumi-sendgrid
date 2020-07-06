[pulumi-sendgrid](../README.md) › [ApiKey](apikey.md)

# Class: ApiKey

## Hierarchy

* Resource

  ↳ **ApiKey**

## Index

### Constructors

* [constructor](apikey.md#constructor)

### Properties

* [id](apikey.md#readonly-id)
* [urn](apikey.md#readonly-urn)

### Methods

* [getProvider](apikey.md#getprovider)
* [isInstance](apikey.md#static-isinstance)

## Constructors

###  constructor

\+ **new ApiKey**(`name`: string, `args`: [ApiKeyInputs](../interfaces/apikeyinputs.md), `opts?`: pulumi.CustomResourceOptions): *[ApiKey](apikey.md)*

*Overrides void*

**Parameters:**

Name | Type |
------ | ------ |
`name` | string |
`args` | [ApiKeyInputs](../interfaces/apikeyinputs.md) |
`opts?` | pulumi.CustomResourceOptions |

**Returns:** *[ApiKey](apikey.md)*

## Properties

### `Readonly` id

• **id**: *Output‹ID›*

*Inherited from [ApiKey](apikey.md).[id](apikey.md#readonly-id)*

id is the provider-assigned unique ID for this managed resource.  It is set during
deployments and may be missing (undefined) during planning phases.

___

### `Readonly` urn

• **urn**: *Output‹URN›*

*Inherited from [ApiKey](apikey.md).[urn](apikey.md#readonly-urn)*

urn is the stable logical URN used to distinctly address a resource, both before and after
deployments.

## Methods

###  getProvider

▸ **getProvider**(`moduleMember`: string): *ProviderResource | undefined*

*Inherited from [ApiKey](apikey.md).[getProvider](apikey.md#getprovider)*

**Parameters:**

Name | Type |
------ | ------ |
`moduleMember` | string |

**Returns:** *ProviderResource | undefined*

___

### `Static` isInstance

▸ **isInstance**(`obj`: any): *obj is CustomResource*

*Inherited from [ApiKey](apikey.md).[isInstance](apikey.md#static-isinstance)*

*Overrides void*

Returns true if the given object is an instance of CustomResource.  This is designed to work even when
multiple copies of the Pulumi SDK have been loaded into the same process.

**Parameters:**

Name | Type |
------ | ------ |
`obj` | any |

**Returns:** *obj is CustomResource*
