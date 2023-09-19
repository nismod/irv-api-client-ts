# irv-api-client-ts
An auto-generated TypeScript client for the infra-risk-vis backend API

## Installation

This package is published through the GitHub npm package repository, in the `@nismod` scope.

The package is publicly available, but requires a GitHub Personal Access Token to install from the registry.

In order to install the API client package as a dependency of another package:

1. Create a [GitHub Personal Access Token (classic)](https://github.com/settings/tokens/new) with the `read:packages` permission selected. It's recommended to set an expiration date for the token and repeat this process when the token expires.
2. Set up the dependent repository to look for packages from the `@nismod` scope in the GitHub npm registry. This can be done by creating an `.npmrc` file in the project directory and adding to it a line such as 
    ```
    @nismod:registry=https://npm.pkg.github.com
    ```
3. Copy the generated token and instruct npm to [use it when authenticating to the GitHub registry](https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-with-a-personal-access-token).

    **NOTE**: the token should not be committed to source control.

   1. One option is to create an `.npmrc` file in the user's home directory (`~/.npmrc`), and place the following line in the file (replacing TOKEN with the generated token)
        ```
        //npm.pkg.github.com/:_authToken=TOKEN
        ```
   3. Alternatively, npm supports environment variable interpolation in `.npmrc` so the repo-local `.npmrc` could contain a line
        ```
        //npm.pkg.github.com/:_authToken=${GH_NPM_AUTH}
        ```
        where the `GH_NPM_AUTH` variable needs to be set to the generated token when installing a package.

4. Finally, install the client package:
    ```bash
    npm install -S @nismod/irv-api-client
    ```

## Usage

Example usage:
```ts
import { ApiClient } from '@nismod/irv-api-client';

const apiClient = new ApiClient({
    // optionally set API base URL - can be relative or absolute
    BASE: '/api' 
});

apiClient.
    .colormaps
    .colormapGetColormap({
        colormap: 'reds',
        stretchRange: '[0,1]'
    })
    .then((colormap) => {
        // do something with the data
    });
```

## Developing

1. Obtain the `openapi.json` file describing the recent version of the API. For example, the live version of the API is available at https://global.infrastructureresilience.org/api/openapi.json
2. Run
    ```
    npm run generate-client
    ```
3. Commit the `openapi.json` and the updated source files
4. Run `npm version X.X.X` to update the version stored in `package.json` and `package-lock.json`. This creates a git commit and tag.
5. Push the changes to the repository - it is set up to automatically publish a package using GitHub Actions (see `.github/workflows/build_and_publish.yml`).
