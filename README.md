### Hexlet tests and linter status:
[![Actions Status](https://github.com/Valentina-Vasileva/frontend-project-lvl2/workflows/hexlet-check/badge.svg)](https://github.com/Valentina-Vasileva/frontend-project-lvl2/actions)
[![Node.js CI](https://github.com/Valentina-Vasileva/frontend-project-lvl2/workflows/Node.js%20CI/badge.svg)](https://github.com/Valentina-Vasileva/frontend-project-lvl2/actions)
[![Maintainability](https://api.codeclimate.com/v1/badges/515ee3565c72fd100f31/maintainability)](https://codeclimate.com/github/Valentina-Vasileva/frontend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/515ee3565c72fd100f31/test_coverage)](https://codeclimate.com/github/Valentina-Vasileva/frontend-project-lvl2/test_coverage)

GENDIFF
========

A JS package which shows difference between two files (json, yml/yaml) in different formats.

## Installation

$ git clone git@github.com:Valentina-Vasileva/frontend-project-lvl2.git
$ cd frontend-project-lvl2
$ npm ci
$ npm link


Usage
-----
```console
$ gendiff [--format <fmt>] <path_to_file1> <path_to_file2>
```

Formats:
- stylish
- plain
- json

CLI description:
```console
$ gendiff -h
$ gendiff --help
```

### Examples of using the package

#### plain *.json files to stylish:
[![asciicast](https://asciinema.org/a/r8nx7eTAL485LVxPPs9SeAO1N.svg)](https://asciinema.org/a/r8nx7eTAL485LVxPPs9SeAO1N)

#### plain *.yml/*.yaml files to stylish:
[![asciicast](https://asciinema.org/a/wcBUZkGl7jchpY3IhlmzawoeJ.svg)](https://asciinema.org/a/wcBUZkGl7jchpY3IhlmzawoeJ)

#### complex *.json files to stylish:
[![asciicast](https://asciinema.org/a/i6cpcy6YGHEC58KRIX1vg1wTw.svg)](https://asciinema.org/a/i6cpcy6YGHEC58KRIX1vg1wTw)

#### complex *.yml/*.yaml files to stylish:
[![asciicast](https://asciinema.org/a/2EgPSbVw3gr9pqmIXWHFSdD4c.svg)](https://asciinema.org/a/2EgPSbVw3gr9pqmIXWHFSdD4c)

#### complex *.json files to plain:
[![asciicast](https://asciinema.org/a/kTf4WNG1zHsMS5pEon9LWs8xg.svg)](https://asciinema.org/a/kTf4WNG1zHsMS5pEon9LWs8xg)

#### complex *.json files to json:
[![asciicast](https://asciinema.org/a/1vwDhmrS4U7Uvj6U6J2WxWQnu.svg)](https://asciinema.org/a/1vwDhmrS4U7Uvj6U6J2WxWQnu)