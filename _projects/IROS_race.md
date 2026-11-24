---
title: "Autonomous Racing Stack F1TENTH| IROS 2026 RoboRacer"
summary: "A ROS 2 autonomy stack for a 1/10-scale race car — 7th place at the IROS 2026 RoboRacer Grand Prix."
cover: /pics/IROS_race/race.mp4
date: 2026-09-01
published: true   # switch: true = shown, false = hidden
---


# Autonomous Racing Software Stack | IROS 2026 RoboRacer 

#### *Placing 7th at the IROS 2026 RoboRacer Grand Prix.*

*Sep. 2026*




---

{% include media.html src="/pics/IROS_race/race.mp4" alt="IROS_Race_Run" caption="Running in IROS track"  %}

## Overview

Built and deployed a full autonomous racing stack on a 1/10-scale car powered by NVIDIA Jetson Orin and ROS 2. The system integrates CUDA-accelerated particle-filter localization, LiDAR-based obstacle tracking, Frenet-frame trajectory planning, and adaptive Pure Pursuit control for real-time autonomous racing. It supports dynamic obstacle avoidance, overtaking, and race-aware decision-making, achieving 7th place at the IROS 2026 RoboRacer Grand Prix.


---

## Technical Highlights

- Developed a C++/ROS 2 autonomy stack for a 1/10-scale race car powered by NVIDIA Jetson Orin, integrating LiDAR perception, localization, motion planning, and vehicle control.
- Implemented map-aware LiDAR obstacle detection and tracking using spatial clustering, nearest-neighbor association, and Kalman filtering to identify static obstacles and moving opponents.


{% include media.html src="/pics/IROS_race/car.jpg" alt="car" caption="Hardware Setup" %}


- Built a Frenet-frame local planner sampling ~190 candidate trajectories, evaluating track boundaries, braking constraints, and predicted collisions to enable autonomous overtaking, obstacle avoidance, and race-rule compliance.
- Developed adaptive-lookahead Pure Pursuit control with curvature-aware speed limits and braking-constrained velocity profiles; tuned control parameters for racing stability and performance.
- Integrated SLAM Toolbox mapping and CUDA-based particle-filter localization; passed organizer-required obstacle-avoidance tests and finished **7th at the IROS 2026 RoboRacer Grand Prix**.

{% include media.html src="/pics/IROS_race/planner_web.mp4" alt="planner" caption="Local planner and Pure Pursuit control"  %}

---

## Racing Experience & Reflections

### 1. Simplicity vs. Optimality

Pure Pursuit is a simple but practical controller. With only one week of access to the physical car, we prioritized predictable behavior and ease of tuning over theoretical optimality.

Much of our performance improvement came from trial and error: manually adjusting cornering speeds, reducing waypoint density on straights, and tuning speed and adaptive lookahead limits together. While the resulting controller was not mathematically optimal, it provided a reasonable balance of speed, stability, and development effort.

**A well-tuned simple algorithm can be more valuable than a sophisticated one that cannot be fully tested.**

### 2. Real-World Reliability Beyond Algorithms

Before the competition, we relied on a mobile hotspot for communication between the car and our laptops. At the crowded venue, the connection became unreliable, disrupting testing and tuning despite the autonomy stack running onboard.

We reduced Foxglove traffic by disabling nonessential streams, including live LiDAR data, while retaining localization monitoring. This was particularly important because collisions could introduce large localization errors requiring manual pose initialization. We also experimented with DDS settings, with limited improvement.

Seeing other teams use dedicated routers and radio controllers made us realize how much we had underestimated communication infrastructure.

**Reliable deployment requires more than reliable algorithms.**

### 3. Hardware Matters, Too

We primarily developed software on a university-provided race car, but hardware limitations still affected our experience. A VESC failure even forced us to borrow a replacement from CMU.

Some competing teams had extensively redesigned their vehicles, highlighting how mechanical design, electronics, and software jointly determine robotic performance.

Next time, I hope to contribute to the vehicle's hardware design as well, pursuing a more complete full-stack robotics experience.

{% include media.html src="/pics/IROS_race/racing2_web.mp4" alt="Run2" caption="Tuning params before race" %}
