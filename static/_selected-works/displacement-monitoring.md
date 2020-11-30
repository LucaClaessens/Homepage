---
responsibilities: Front-end development, UX, UI design.
title: Displacement monitoring
subtitle: Real time insights into displacement of destabilized residences
featured_media: image
images:
    - uploads/displacement/renderframe_side_2@4x
    - uploads/displacement/renderframe_side@4x
    - uploads/displacement/renderframe@4x
featured_media_subtitle: Compilation of screens in the application
overview_image: uploads/displacement/mockup@2x
overview_style: cover
short_description: hehe
date: 2020-06-24T22:28:57.790Z
---

It's usual that when displacement measurements are made, they are done by bringing specialized equipment to a location, and measurements are made by an operator. During my time at Zzapps, we collaborated with a client who had a different approach to this issue: install sensors that can report in real time.

We were briefed with creating an application that could visualize and monitor the movement of wall segments of residences in an area destabilized by natural gas extraction. The displacement data had to be visible in real time, making the information accessible to residents and project managers, whenever and wherever they desired. This wish resulted in an installable web app where residents can monitor the movement of their house's walls, navigatable by geolocation. 

My role in the project was to take charge of the UX, UI and frontend development of the application. My involvement spanned from making initial mockups and flowcharts, all the way to developing an angular 8 based web app and creating custom components.

Besides the front end, a new data processing pipeline had to be created. An existing system that processed and aggregated measurements was in place, but the desire was to be able to run this application on a much larger scale. Thus, changes had to be made in the infrastructure of the system, moving from a FTP-based environment to a [time-series database](https://www.influxdata.com/).
