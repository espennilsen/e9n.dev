---
layout: base.njk
title: 'Pi Extensions & Skills'
excerpt: 'A collection of open-source extensions and skills for the Pi coding agent — memory, messaging, CRM, calendar, task management, and more.'
date: 2025-02-02
tech:
  - TypeScript
  - Pi
  - Telegram
github: https://github.com/espennilsen/pi
image: https://picsum.photos/id/532/600/400
status: live
featured: true
---

# Pi Extensions & Skills

My [Pi coding agent](https://pi.dev/) home directory — a collection of 20 open-source extensions and 7 skills that power [Aivena](/projects/aivena/) and can be used by anyone running Pi.

## What's Inside

The repo contains extensions that add capabilities to a Pi agent: persistent memory, two-way Telegram messaging, a personal CRM, calendar management, cron scheduling, heartbeat monitoring, Obsidian vault integration, sub-agent delegation, web dashboards, telemetry, and more. Each extension is self-contained with its own docs and settings.

It also includes reusable skills — specialized prompt templates for tasks like changelog generation, project status reports, README reviews, and session handoffs.

## How It Works

The repo is symlinked to `~/.pi/agent` so Pi loads everything automatically. Extensions hook into Pi's event system and expose tools to the agent. Skills provide structured instructions that activate when the agent detects a matching task.

## Links

[GitHub](https://github.com/espennilsen/pi)
