---
layout: base.njk
title: 'Aivena'
excerpt: 'A personal AI assistant that lives in your terminal. Remembers everything, manages contacts, tracks your calendar, runs background jobs, and chats on Telegram — built with zero custom code, just Pi extensions.'
date: 2025-02-04
tech:
  - Pi
  - TypeScript
  - Pi Extensions
  - SQLite
  - Telegram
link: https://aivena.dev/
github: https://github.com/espennilsen/aivena
image: https://picsum.photos/id/180/600/400
status: live
featured: true
---

# Aivena — Personal AI Assistant

A personal AI assistant that lives in your terminal. Built entirely from Pi extensions with zero lines of custom code.

## What It Does

Aivena integrates memory, contacts, calendar, task management, and messaging into a single autonomous agent. You can:

- **Remember everything** - Long-term memory and daily journals that persist across sessions
- **Talk anywhere** - Terminal TUI, Telegram, or web UI
- **Manage contacts** - Personal CRM with contacts, companies, interactions, and follow-up reminders
- **Track your schedule** - Events, reminders, and recurring schedules
- **Run background jobs** - Cron jobs with configurable active hours
- **Stay alive** - Heartbeat system for periodic health checks and autonomous action

## Architecture

Aivena is not a codebase — it's a workspace directory with a config file and symlinked extensions. It started as 11,000 lines of custom code, was migrated to Pi extensions, and ended up at zero lines of code.

## Extensions

18 open-source extensions power Aivena, including pi-channels (Telegram bridge), pi-memory, pi-personal-crm, pi-calendar, pi-cron, pi-heartbeat, and more.

## Links

[Visit Aivena](https://aivena.dev/) · [GitHub](https://github.com/espennilsen/aivena)
