---
title: "VLA Engineering Intern, K2 Dynamic Ltd"
summary: "One-sentence intro goes here."
cover: 
date: 2026-06-01
published: false   # switch: true = shown, false = hidden
---

# [VLA Engineering Intern, K2 Dynamic Ltd]

**Category:** Robotics

[One-sentence description: what it is and what it does. Write it the way you'd explain it to another engineer in an interview.]

---

## Overview

[What problem were you solving, and why did it matter? 3–5 sentences. Give context: was this a class project, competition, internship, or personal build? What constraints did you have — budget, time, hardware limitations?]

**My role:** [e.g. Lead firmware engineer, team of 4]

---

## System Architecture

[Brief description of how the system fits together — sensors → processing → actuation, or whatever your data flow looks like.]

> [Placeholder: block diagram / wiring schematic / architecture image goes here later]

---

## Build Gallery

> [Placeholder: list photo/video filenames or captions here for now, e.g.]
> - photo1.jpg — [what it shows]
> - demo.mp4 — [what it shows]

---

## Technical Highlights

### [Specific technical challenge you solved]
[What made it hard, and what you actually did — the approach, algorithm, or design decision. This is where real engineering judgment shows, so be specific rather than general.]

### [Another highlight]
[Same pattern — problem, decision, outcome. Aim for 2–4 of these total.]

### [Another highlight]
[Same pattern — problem, decision, outcome.]

---

## Results

- **[92%]** — [metric, e.g. detection accuracy]
- **[40ms]** — [metric, e.g. control loop latency]
- **[1st place]** — [metric, e.g. competition placement]

---



## What I'd Do Differently

[One honest paragraph. Name a real trade-off, bug, or design mistake and what you learned. Avoid generic "teamwork and time management" answers.]

---

## Links

- Source code: [ ]
- Demo video: [ ]
- Writeup / report: [ ]



Built an end-to-end VLA pipeline enabling a Unitree G1 humanoid to follow natural-language walk commands in simulation: 
teleoperated data collection → LeRobot dataset conversion → VLA fine-tuning (frozen Qwen3-VL + 3-DoF action head) → 
WebSocket policy server → 50 Hz real-time control client over DDS. Final model generalizes to 5 distinct commands; packaged 
as 7 one-command scripts with full runbook documentation. 
⚫ Implemented a simulated Livox Mid-360 LiDAR publishing to the identical DDS topic, type, and frame as the physical robot, 
ensuring downstream tools run unmodified against sim or hardware. Built a ground-truth verification harness that exposed 6 
correctness bugs in the RTX-sensor implementation and rewrote on a mesh ray-caster, raising obstacle coverage from 8/72 to 
72/72 azimuth bins. 
⚫ Brought up Isaac Sim 5.1 from source on an unsupported OS (CentOS Stream 10) using a containerized build toolchain; stood 
up isolated environments spanning Isaac Lab, LeRobot, GR00T N1.5, and LIBERO, and debugged multi-GPU, DDS multicast, 
and CUDA device-ordering failures blocking the full stack.


VLM
RL
fine-tuning
sim-to-real policy deployment
1. 在不兼容的centOs上面使用docker build了isaacsim作为仿真环境。


4. 在orange Pi上搭建中转，运行rxnn文件，再传送回服务器进行仿真测试
5. 复现论文，训练自己的机器人的基础policy，使用H6000
6. Deploy starVLA，使用frozen Qwen3-VL + 3-DoF action head



**K2 Dynamic Ltd.** | May 2026 – Aug. 2026  
*Robotics Software / VLA Engineering Intern*

- **Reinforcement Learning:** Adapted a PPO locomotion training pipeline from Unitree G1 to a smaller humanoid robot using Isaac Lab. Modified the robot model and reward function, trained velocity-commanded walking policies, and tested sim-to-real deployment on physical hardware.

- **Vision-Language-Action:** Built a VLA training and control pipeline using StarVLA and LeRobot. Trained on 630K demonstration frames across 2,161 episodes, integrated model inference with a WebSocket/DDS control system, and demonstrated language-conditioned humanoid motion in Isaac Sim.

- **Simulation & Integration:** Set up Isaac Sim and Isaac Lab on CentOS Stream 10 using Docker, built humanoid demonstration environments, and integrated simulated LiDAR with robot control interfaces for testing and development.




# Humanoid Robot Learning: PPO Locomotion and VLA Control

**K2 Dynamic Ltd. | Robotics Software Engineering Intern**

**Technologies:** Python, PyTorch, Isaac Sim, Isaac Lab, PPO, StarVLA, Qwen3-VL, LeRobot, DeepSpeed, Docker, DDS, WebSocket

## Project Overview

Worked on humanoid robot simulation, learning-based control, and hardware integration at a robotics startup. The company developed humanoid robot applications for exhibitions and commercial demonstrations.

My work focused on two areas: adapting and training locomotion policies using reinforcement learning, and building a Vision-Language-Action (VLA) pipeline to control humanoid robots through natural-language commands.

I also developed simulation environments, integrated robot sensors, and tested the deployment of trained policies on physical hardware.

## 1. PPO-Based Humanoid Locomotion

**Goal:** Train a locomotion policy that allows a humanoid robot to walk and turn in response to continuous velocity commands.

### Robot Model Adaptation

Started with an existing PPO locomotion training pipeline designed for the Unitree G1 humanoid robot.

The company's robot was smaller than the G1 but had a similar joint configuration. I adapted the training environment by replacing the robot model and adjusting the reward function to account for differences between the two platforms.

This allowed the existing training pipeline to be used with the company's robot instead of developing a new locomotion framework from scratch.

### Policy Training

Used Isaac Lab and PPO to train a velocity-commanded locomotion policy in simulation.

The policy learned to control the robot's walking behavior based on target velocity commands. It supported continuous adjustments to walking speed and direction rather than executing fixed motion sequences.

Tested the trained policy in simulation through teleoperation, including forward movement, turning, and changes in walking speed.

### Sim-to-Real Testing

Deployed the trained locomotion policy to the physical robot for initial testing.

The policy produced controllable walking behavior in simulation, but its performance on physical hardware was less stable. These tests helped identify differences between simulated and real robot behavior and the limitations of the initial policy transfer.

**Result:** Adapted an existing humanoid locomotion training framework to a different robot platform, trained a velocity-commanded walking policy, and completed initial hardware deployment tests.

## 2. Vision-Language-Action (VLA) Control

**Goal:** Build a language-conditioned control system that allows a humanoid robot to execute motion commands from natural-language instructions.

### Data Collection and Processing

Collected robot demonstrations through teleoperation in Isaac Sim.

Converted the recorded demonstrations into the LeRobot dataset format for model training. The data pipeline connected language instructions, robot observations, and corresponding actions.

The recorded training run used a dataset containing:

- **2,161 training episodes**
- **630,569 training frames**
- Robot state and action sequences
- Language-conditioned demonstration data

### Model Training

Built the training pipeline using StarVLA, with a Qwen3-VL-based model and an action prediction module.

Configured the model to learn robot actions from demonstration data and trained it using PyTorch and DeepSpeed.

The recorded training setup included:

- **100,000 optimization steps**
- **2 GPUs with BF16 mixed precision**
- **Batch size of 20**
- **Approximately 37 hours of training**

Monitored the action prediction loss throughout training and saved training configurations and model checkpoints for evaluation.

### Inference and Robot Control

Developed an inference pipeline connecting the trained VLA model to the robot simulation environment.

Implemented a WebSocket-based policy server to handle model inference and a DDS-based control client to send commands to the robot.

The control client operated at 50 Hz, allowing the robot to execute motion commands generated by the model.

### Simulation Testing

Tested the system in Isaac Sim using natural-language motion commands.

The prototype demonstrated the complete process from text input to robot motion, including basic walking and turning commands.

The system focused on language-conditioned control of predefined motion capabilities rather than learning new locomotion skills directly from language.

**Result:** Built a VLA training and inference pipeline connecting teleoperation data, model training, natural-language instructions, and robot control in simulation.

## 3. Simulation and System Integration

### Simulation Environment

Set up Isaac Sim 5.1 on CentOS Stream 10, an operating system not officially supported by the simulation software.

Used Docker and a containerized development environment to resolve dependency and compatibility issues. Configured tools including Isaac Lab and LeRobot for robotics simulation and model training.

Created simulation scenes representing exhibition environments to test humanoid robot demonstrations.

### Sensor Integration

Integrated a simulated Livox Mid-360 LiDAR into the robot simulation environment.

Configured the simulated sensor to publish data through DDS interfaces matching those used by the physical robot.

Built a ground-truth verification tool to evaluate simulated sensor coverage and identify ray-casting errors.

Improved obstacle coverage from **8/72 to 72/72 azimuth bins** after revising the sensor implementation.

### Hardware and Policy Integration

Worked with physical humanoid hardware and tested basic robot functions.

Investigated the integration of vendor-provided locomotion policies with the simulation environment, including the use of an Orange Pi as an intermediate device.

These tasks provided experience connecting simulation software, learned policies, robot communication interfaces, and physical hardware.

## Project Outcomes

- Adapted and trained a PPO-based locomotion policy for a smaller humanoid robot.
- Implemented continuous velocity-commanded walking and turning in simulation.
- Tested trained locomotion policies on physical hardware.
- Built a StarVLA-based language-conditioned humanoid control pipeline.
- Trained an action prediction model using over 630K demonstration frames.
- Connected model inference to robot control using WebSocket and DDS.
- Developed simulation environments and sensor interfaces for humanoid demonstrations.
