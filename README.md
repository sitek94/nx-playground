# NX Playground

- apps:
  - remix (remix v2 + scss)
- libs:
  - ui (react + scss + storybook)

## Running tasks

To execute tasks with Nx use the following syntax:

```shell
nx <target> <project> <...options>
```

You can also run multiple targets:

```shell
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```shell
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).
