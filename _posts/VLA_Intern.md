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

