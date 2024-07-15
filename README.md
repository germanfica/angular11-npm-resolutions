# Angular 11 Project with NPM Resolutions Example

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.19. The main purpose of this repository is to fix version  conflicts between packages using `resolutions` in `package.json`. This approach ensures that the exact versions specified are used, particularly to solve issues with `package-lock.json`.

This example uses the `@azure/storage-blob@12.10.0` package with angular 11. Example of how to fixed packages errors. The key is to install a compatible package version.

## Node and NPM Versions
- Node.js: 16.19.0
- NPM: 8.19.3

## Angular CLI Version

```plaintext
Angular CLI: 11.2.19
Node: 16.19.0
OS: win32 x64

Angular: 11.2.14
... animations, common, compiler, compiler-cli, core, forms
... platform-browser, platform-browser-dynamic, router
Ivy Workspace: Yes

Package                         Version
---------------------------------------------------------
@angular-devkit/architect       0.1102.19
@angular-devkit/build-angular   0.1102.19
@angular-devkit/core            11.2.19
@angular-devkit/schematics      11.2.19
@angular/cli                    11.2.19
@schematics/angular             11.2.19
@schematics/update              0.1102.19
rxjs                            6.6.7
typescript                      4.1.6
```

## Usage

1. Run the setup script

```bash
npm run setup
```

2. Then run npm install

```bash
npm install
```

3. Then ng serve

```bash
npm run start
```

## Resolving Package Version Conflicts

Tis project encountered issues with specific versions of `@azure/core-util` and `@azure/logger`. The correct versions that work are:

- `@azure/core-util: 1.7.0`
- `@azure/logger: 1.0.4`

By using the resolutions field in `package.json`, you can specify these exact versions and ensure they are used during installation.

## Version Compatibility

Working Versions:

- @azure/core-util: 1.7.0
- @azure/logger: 1.0.4

Non-Working Versions:

- @azure/core-util: 1.8.0
- @azure/logger: 1.1.0

## Important Disclaimer

This guide is provided to address specific version conflicts but is not a recommended long-term solution. The best practice is always to keep your packages updated to their latest versions to benefit from security patches and new features. Using this guide is at your own risk, and you should consider updating your packages regularly to maintain a secure and efficient codebase.

While pinning package versions can quickly resolve conflicts and ensure compatibility, it should be seen as a temporary measure. Regular updates and maintenance of your dependencies are crucial to safeguard against vulnerabilities and to leverage improvements in performance and functionality.
