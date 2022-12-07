---
title: "How to choose the right API Gateway 4"
description: "Nowadays an API Gateway is an essential component in designing a distributed systems architecture with multiple API services or microservices."
category: "vue"
cover: "/images/poster.jpg"
author: "Mahmoud Ibrahiam"
createdAt: "2022-11-26"
layout: article
---

## What is API Gateway?

An API gateway is a service that’s the entry point into the application from the outside world. It’s responsible for request routing, API composition, and other functions, such as authentication. Like a facade, an API gateway encapsulates the application’s internal architecture and provides an API to its clients. All API requests from external clients first go to the API gateway, which routes some requests to the appropriate service whether that be an upstream API server, a third-party application, a database, or even a serverless.

One of the main use cases of API gateways is that they introduce an API-as-a-service abstraction to allow API providers to abstract API implementations and evolve backend architecture without impacting API consumers.

### Why use API Gateway?

In today’s world, we usually create multiple microservices for a particular product and the client apps usually need to consume functionality from more than one microservice. And for each of these services, we will have different endpoints accessing these services from the external world it doesn't make sense to expose multiple URLs we should have a single-entry point to all our services, and based on the different paths we should be doing the routing.

As it is shown in the above picture, a client can retrieve the order details from the monolithic online sample shopping web application with a single request. But the client must make multiple requests to retrieve the same information in a microservice architecture. In this design, the mobile application is playing the role of API composer. It invokes multiple services and combines the results. Although this approach seems reasonable, it has several serious problems.

The first problem is poor user experience due to the client making multiple requests to retrieve the data it wants to display to the user. The second issue is that it requires the mobile developer to write potentially complex API composition code. This work is a distraction from their primary task of creating a great user experience. What is more challenging with a mobile application directly calling services is that some services could use protocols that aren’t easily consumed by a client. Yet another drawback of a mobile application directly accessing the services is the lack of encapsulation. As an application evolves, the developers of a service sometimes change an API in a way that breaks existing clients. You can also add API design issues for other kinds of clients to this list.

As you understand, there are numerous drawbacks with services accessing services directly. It’s often not practical for a client to perform API composition over the internet. Therefore, a much better approach is to use an API gateway.

#### Why not develop your own API Gateway

Developing an API gateway on your own is NOT extremely difficult if you have enough resources and unlimited time (it will take longer than you expect). It’s basically a web application that proxies requests to other services. You can build one using your favorite web framework with the most important features such as implementing a mechanism for defining routing rules in order to minimize the complex coding or correctly implementing the HTTP proxying behavior, including how HTTP headers are handled and so on. There are, however, many design, security and maintenance problems that you’ll need to solve.

You need to apply proper security concerns (unless you have a staff of security experts on hand), test each new feature, monitor the API Gateway performance, document each change, scale, maintain, and upgrade internal libraries continuously as a part of the development workload.

If you have no special custom needs, it might be easier to use what’s available on the market (especially if you need to use a gateway quickly). As a result, a better starting point for developing an API gateway is to use a ready solution designed for that purpose. Its built-in functionality significantly reduces the amount of code you need to write.

##### 10 Top API Gateways and Management Tools

As there are various types of gateways available, and numerous features are provided by each.

Below, I have shared the 10 top API gateways and API management solutions (both open-source and SaaS) and note that they are not in the specific order of popularity or use.
