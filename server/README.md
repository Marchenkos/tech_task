# Server APP

# Task description

Create Express server.
Use env variables to get PORT value.

Instead of DB use JSON file - `server/db/posts.json`
It should handle 2 GET requsts:
  - get all posts - should return data depend on the "limit" params, e.g. limit=10 - return only 10 items.

  - get post by ID

Implement custom error handler middleware, which set error status and message to the response.
