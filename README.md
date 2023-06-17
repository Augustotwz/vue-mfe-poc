# vue-mfe-poc

This proof-of-concept demonstrates the usage of micro frontends (MFEs) in Vue.js using module federation.

## Application Setup
The project consists of two micro frontends: the shell and app2.

Both MFEs render the same application and provide the same user experience, using a bidirectional host. They share a Vuex store and router, which are instantiated in the shell app. This allows the navigation and state management between micro frontends.

Additionally, each micro frontend has the flexibility to define its own Vuex store, separate from the store of the host. This means that while they can share a common store for global state management, they also have the option to maintain their own local store for specific module-level state management if needed.

The shell app also provides a global style that is applied across all micro frontends. However, each micro frontend has the flexibility to define its own styles and override the host's styles if necessary.

In this setup, the shell acts as the host application, while app2 is a remote application that is federated into the shell. The remote application can expose specific modules, components, or resources to be consumed by the host.

### To run the application, follow the steps below:
---
```
cd shell
npm install
npm start

cd app2
npm install
npm start
```
