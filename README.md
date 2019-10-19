# Docker tutorial

### Prerequisite

* [Docker CE](https://docs.docker.com/engine/installation/)
* [Docker-compose](https://docs.docker.com/compose/install/)

**Note**: Docker compose might already be included within Docker CE. So after install Docker CE, you should run `docker-compose version` to check if it was installed or not.

To check if installation was success, run these command

```
docker version
docker-compose version
```

### Slide

https://www.dropbox.com/s/fh3feiht35l5xx6/docker.pptx?dl=0

### App Description

This is a simple api with express js and mongo db

Endpoints:

* `GET /`: should return "Hello world".
* `GET /list`: should return a list of item
* `GET /list/add/:name`: should add a new item to list

### Table of Content
- What is Docker?
- Basic concepts of Docker
- Running an application using Docker
- Containerize your application

### What is Docker?

#### Describe the situation

- Your Company start with a simple stack:
  - Apache + MySQL + PHP
- Several months later, your boss require to have a new stack:
  - Python tensor flow
- You need to upgrade your environment
  - From Python 2 to Python 3

After a while, your environment will look like this
![](resources/env_prob.png)

#### The Problem

- Time consumming when setup a new stack
- Environment conflict between stacks (not isolated)
- Missing dependencies
- Hard to upgrade (code + environment)
- Hard to replicate to another machine
- ...

#### Introduction to Docker

- Docker was introduced in 2013
- For easier to understand, Docker is similar to VM but dont consume as much computing resources
- Docker allow application run in an isolated environment
- Docker provide an easy way to install and share your application

#### Basic concept of Docker

- Docker image: a snapshot of current machine (As concept it is similar to a GHOST Image / Backup Image of computer)
- Docker container: a running Image
- Docker registry: a centralize repository of Docker Image

![](resources/basic_concept.png)

##### Practice

Running a Docker container

#### Fundamental of Docker environment

- Two entity:
  - Docker environment: environment of Docker application
  - Host OS environment: environment of the physical server running Docker
- Docker application run in a ISOLATED ENVIRONMENT with server host
  - Isolated network
  - Isolated file system
- Docker environment is **DESTROYED** whenever application stopped

![](resources/isolated_env.png)

- Docker provide 2 method for communicate between Docker environment and host OS
  - Port Mapping: For network commnication
  - Volume Mount: For file system communication

![](resources/env_communication.png)
