# Chat History Reference: Reation Project

## Overview
This document summarizes the development and refinement of the **Reation** application, a relational alignment diagnostic tool.

## Objectives
1. **Repository Setup**: Clone `https://github.com/Fredangasiye/Reation.git` and set up the local environment.
2. **UI Refinement**: Implement flicker-free transitions and improve option selection feedback.
3. **Scoring Model Implementation**: Transition from a generic archetype model to a detailed **5 Friction Axes** comparison model.
4. **Content Update**: Implement 50 specific questions (Q6-Q50) with 5-choice (A-E) scoring.

## Implementation Details

### 1. UI Transitions & Highlighting
- **Fade Animation**: Replaced the `slide-up` animation with a `quick-fade` to reduce visual jarring.
- **Selection State**: Added a `.selected` CSS class that applies on click.
- **Delay Buffer**: Introduced a 100ms delay after an option is selected to allow the user to see their choice before the next question renders.
- **Hover Optimization**: Removed intrusive background changes on hover, keeping only a subtle scale effect.

### 2. Scoring Model (5 Friction Axes)
The logic focuses on the absolute difference between partners' answers (scored 1–5).

#### The Axes:
1. **Conflict Escalation Risk (CER)**: Mapping Q6–Q13
2. **Repair Velocity Gap (RVG)**: Mapping Q14–Q21
3. **Financial Governance Misalignment (FGM)**: Mapping Q22–Q29
4. **Authority Structure Tension (AST)**: Mapping Q30–Q37
5. **Attachment Trigger Instability (ATI)**: Mapping Q38–Q45
6. **Stress Endurance Simulation**: Mapping Q46–Q50

#### Formula:
- **Raw Difference**: `raw_diff = sum(abs(p1_answer - p2_answer))`
- **Normalization**: `(raw_diff / (questions_per_axis * 5)) * 100`
- **Output**: 0–100 Friction Probability Index.

#### Thresholds & Labels:
- **0–20**: Stable
- **21–40**: Watch Zone
- **41–60**: Moderate Risk
- **61–80**: High Tension
- **81–100**: Structural Instability

### 3. File Structure
- **index.html**: Contains all HTML, CSS, and Vanilla JS logic.
- **Data Structures**:
  - `QUESTIONS`: Array of 50 objects containing question text and A-E options.
  - `DOMAINS`: Mapping of axis IDs to human-readable names.
  - `SCORING_MAP`: Map A-E letters to 1-5 integer values.

## Final State
The application is fully updated with the new scoring model and questions. Changes are pushed to the `main` branch of the GitHub repository.

---
*Last Updated: 2026-02-26*
