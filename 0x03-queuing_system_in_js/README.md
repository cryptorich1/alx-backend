# 0x03. Queuing System in JS

[![BULL]([https://github.com/OptimalBits/bull])]
[![Coverage]([https://redis.io/docs/ui/cli/])](https://codecov.io/gh/redis/node-redis)

[![Twitter](https://img.shields.io/twitter/follow/redisinc?style=social)](https://twitter.com/redisinc)

node-redis is a modern, high performance [Redis](https://redis.io) client for Node.js.


## Packages

| Name                                         | Description                                                                                                                                                                                                                                                                                                                                                                                                                    |
|----------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [redis](./)                                  | [![Downloads](https://img.shields.io/npm/dm/redis.svg)](https://www.npmjs.com/package/redis) [![Version](https://img.shields.io/npm/v/redis.svg)](https://www.npmjs.com/package/redis)                                                                                                                                                                                                                                         |
| [@redis/client](./packages/client)           | [![Downloads](https://img.shields.io/npm/dm/@redis/client.svg)](https://www.npmjs.com/package/@redis/client) [![Version](https://img.shields.io/npm/v/@redis/client.svg)](https://www.npmjs.com/package/@redis/client) [![Docs](https://img.shields.io/badge/-documentation-dc382c)](https://redis.js.org/documentation/client/)                                                                                               |
| [@redis/bloom](./packages/bloom)             | [![Downloads](https://img.shields.io/npm/dm/@redis/bloom.svg)](https://www.npmjs.com/package/@redis/bloom) [![Version](https://img.shields.io/npm/v/@redis/bloom.svg)](https://www.npmjs.com/package/@redis/bloom) [![Docs](https://img.shields.io/badge/-documentation-dc382c)](https://redis.js.org/documentation/bloom/) [Redis Bloom](https://oss.redis.com/redisbloom/) commands                                          |
| [@redis/graph](./packages/graph)             | [![Downloads](https://img.shields.io/npm/dm/@redis/graph.svg)](https://www.npmjs.com/package/@redis/graph) [![Version](https://img.shields.io/npm/v/@redis/graph.svg)](https://www.npmjs.com/package/@redis/graph) [![Docs](https://img.shields.io/badge/-documentation-dc382c)](https://redis.js.org/documentation/graph/) [Redis Graph](https://oss.redis.com/redisgraph/) commands                                          |
| [@redis/json](./packages/json)               | [![Downloads](https://img.shields.io/npm/dm/@redis/json.svg)](https://www.npmjs.com/package/@redis/json) [![Version](https://img.shields.io/npm/v/@redis/json.svg)](https://www.npmjs.com/package/@redis/json) [![Docs](https://img.shields.io/badge/-documentation-dc382c)](https://redis.js.org/documentation/json/) [Redis JSON](https://oss.redis.com/redisjson/) commands                                                 |
| [@redis/search](./packages/search)           | [![Downloads](https://img.shields.io/npm/dm/@redis/search.svg)](https://www.npmjs.com/package/@redis/search) [![Version](https://img.shields.io/npm/v/@redis/search.svg)](https://www.npmjs.com/package/@redis/search) [![Docs](https://img.shields.io/badge/-documentation-dc382c)](https://redis.js.org/documentation/search/) [RediSearch](https://oss.redis.com/redisearch/) commands                                    |
| [@redis/time-series](./packages/time-series) | [![Downloads](https://img.shields.io/npm/dm/@redis/time-series.svg)](https://www.npmjs.com/package/@redis/time-series) [![Version](https://img.shields.io/npm/v/@redis/time-series.svg)](https://www.npmjs.com/package/@redis/time-series) [![Docs](https://img.shields.io/badge/-documentation-dc382c)](https://redis.js.org/documentation/time-series/) [Redis Time-Series](https://oss.redis.com/redistimeseries/) commands |


> :warning: The new interface is clean and cool, but if you have an existing codebase, you'll want to read the [migration guide](./docs/v3-to-v4.md).

### Basic Example

