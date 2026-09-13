# material-bottom-tabs

> A Material Design bottom tab navigator for React Navigation

---

## Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Repository Structure](#repository-structure)
4. [Key Components](#key-components)
5. [Setup & Installation](#setup--installation)
6. [Running the Application](#running-the-application)
7. [Infrastructure & CI/CD](#infrastructure--cicd)
8. [Contributing](#contributing)

---

## Overview

**material-bottom-tabs** is part of the [Unacademy](https://github.com/unacademy) engineering ecosystem.

A Material Design bottom tab navigator for React Navigation

**Topics / Tags:** `approvers-1`

---

## Tech Stack

| Attribute | Value |
|-----------|-------|
| **Primary Language** | Unknown |
| **Framework / Platform** | React Native |
| **Package Manager** | — |

### Dependencies

**Dev Dependencies:**
- `@commitlint/config-conventional`
- `@expo/vector-icons`
- `@react-native-community/bob`
- `@release-it/conventional-changelog`
- `@types/hoist-non-react-statics`
- `@types/react`
- `@types/react-native`
- `babel-jest`
- `commitlint`
- `eslint`


---

## Repository Structure

```
material-bottom-tabs/
├── .circleci
├── .editorconfig
├── .eslintignore
├── .eslintrc
├── .github/
│   ├── ISSUE_TEMPLATE.md
│   ├── PULL_REQUEST_TEMPLATE.md
│   ├── workflows
├── .gitignore
├── .release-it.json
├── LICENSE.md
├── README.md
├── commitlint.config.js
├── example/
│   ├── .babelrc
│   ├── .buckconfig
│   ├── .eslintrc
│   ├── .watchmanconfig
│   ├── App.tsx
├── flow-typed/
│   ├── npm
├── package.json
├── src/
│   ├── index.tsx
│   ├── navigators
│   ├── types.tsx
│   ├── views
├── tsconfig.json
├── yarn.lock
```

---

## Key Components

Below is an analysis of the key files and modules:

| File / Directory | Purpose |
|-----------------|---------|
| `LICENSE.md` | Source file |
| `README.md` | Source file |
| `commitlint.config.js` | Source file |
| `example/.babelrc` | Source file |
| `example/.buckconfig` | Source file |
| `example/.eslintrc` | Source file |
| `example/.watchmanconfig` | Source file |
| `example/App.tsx` | Source file |
| `example/README.md` | Source file |
| `example/app.json` | Source file |
| `example/metro.config.js` | Source file |

> **Note:** Only the first 20 non-trivial files are listed. See the repository tree above for the complete structure.

---

## Setup & Installation

### Prerequisites

- Git (`git --version`)
- Unknown runtime installed



### Steps

```bash
git clone git@github.com:unacademy/material-bottom-tabs.git
cd material-bottom-tabs
# Follow language-specific setup
```

### Available Scripts

```bash
# typescript
npm run typescript   # tsc --noEmit

# lint
npm run lint   # eslint --ext .js,.ts,.tsx .

# bootstrap
npm run bootstrap   # yarn --cwd example && yarn

# example
npm run example   # yarn --cwd example

# release
npm run release   # yarn release-it

# prepare
npm run prepare   # bob build

```


---

## Running the Application

_Refer to the project's build system or CI configuration._

---

## Infrastructure & CI/CD

- CI/CD pipeline configured (`.github/workflows` or equivalent)
- Test suite present — run tests before submitting PRs

---

## Contributing

1. Create a feature branch: `git checkout -b feat/your-feature`
2. Commit your changes: `git commit -m "feat: describe your change"`
3. Push and open a PR targeting `master`
4. Ensure all CI checks pass before requesting review

---

## Original README (Excerpt)

> This package has been moved to https://github.com/react-navigation/react-navigation/tree/4.x/packages/material-bottom-tabs

---

# React Navigation Material Bottom Tabs

Bottom Navigation component following [Material design guidelines](https://material.io/design/components/bottom-navigation.html) to use with React Navigation. Uses the Bottom Navigation component from [React Native Paper](https://callstack.github.io/react-native-paper/bottom-navigation.html).

## Installation

Open a Terminal in your project's folder and run,

```sh
yarn add react-navigation-material-bottom-tabs react-native-p

---

*This README was auto-generated on 2026-09-14 by the Unacademy repo-summarizer tool.*
*For corrections or additions, edit this file directly or open an issue.*
