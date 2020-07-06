[pulumi-sendgrid](README.md)

# pulumi-sendgrid

## Index

### Classes

* [ApiKey](classes/apikey.md)

### Interfaces

* [ApiKeyInputs](interfaces/apikeyinputs.md)

### Variables

* [auth](README.md#let-auth)

### Functions

* [setAuth](README.md#setauth)

### Object literals

* [apiKeyProvider](README.md#const-apikeyprovider)

## Variables

### `Let` auth

• **auth**: *string* = "token invalid"

## Functions

###  setAuth

▸ **setAuth**(`token`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`token` | string |

**Returns:** *void*

## Object literals

### `Const` apiKeyProvider

### ▪ **apiKeyProvider**: *object*

###  create

▸ **create**(`inputs`: [ApiKeyInputs](interfaces/apikeyinputs.md)): *Promise‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`inputs` | [ApiKeyInputs](interfaces/apikeyinputs.md) |

**Returns:** *Promise‹object›*

###  delete

▸ **delete**(`id`: string, `props`: [ApiKeyInputs](interfaces/apikeyinputs.md)): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`props` | [ApiKeyInputs](interfaces/apikeyinputs.md) |

**Returns:** *Promise‹void›*

###  update

▸ **update**(`id`: string, `olds`: [ApiKeyInputs](interfaces/apikeyinputs.md), `news`: [ApiKeyInputs](interfaces/apikeyinputs.md)): *Promise‹object›*

**Parameters:**

Name | Type |
------ | ------ |
`id` | string |
`olds` | [ApiKeyInputs](interfaces/apikeyinputs.md) |
`news` | [ApiKeyInputs](interfaces/apikeyinputs.md) |

**Returns:** *Promise‹object›*
