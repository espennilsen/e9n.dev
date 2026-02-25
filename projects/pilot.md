---
layout: base.njk
title: 'Pilot'
excerpt: 'An Integrated Agentic Environment for AI-powered coding. A native desktop app built on Electron and React, powered by the Pi Coding Agent — chat with an AI agent, review diffs before they touch disk, manage git, coordinate subagents, and track tasks from one keyboard-driven app.'
date: 2026-02-01
tech:
  - Electron
  - React
  - TypeScript
  - Tailwind CSS
  - Pi Coding Agent SDK
github: https://github.com/espennilsen/pilot
image: https://picsum.photos/id/1/600/400
status: live
featured: true
---

# Pilot — Integrated Agentic Environment

A native desktop environment for AI-powered coding. Chat with an agent, review every edit before it touches disk, manage git, run dev commands, coordinate subagents, and track tasks, all from one keyboard-driven app.

## What It Does

Pilot wraps the [Pi Coding Agent](https://www.npmjs.com/package/@mariozechner/pi-coding-agent) in a full desktop GUI. Instead of working in a terminal, you get:

- **Agent Chat** — streaming responses, tool call visibility, thinking blocks, image attachments, slash commands
- **Sandboxed File Operations** — all edits staged for review before touching disk, with accept/reject per change
- **Tabbed Sessions** — independent agent sessions with drag-and-drop, pinning, and project grouping
- **Git Integration** — status, staging, commits, branches, blame, stash, all inline
- **Subagents** — spawn parallel workers, orchestrate multi-step work, with live monitoring
- **Task Board** — kanban and table views with epics, dependencies, and priorities
- **Memory System** — two-tier persistent memory (global + project) with auto-extraction
- **Terminal** — embedded PTY terminal with tabs
- **Companion Access** — access Pilot from iOS, iPad, or any browser via HTTPS + WebSocket

## Why a Desktop App

Terminal agents are powerful, but they're limited to one session at a time and require context-switching between tools. Pilot puts the agent, file diffs, git, tasks, and terminal in the same window. You can run multiple agent sessions in tabs, review changes visually, and keep your hands on the keyboard the whole time.

## Tech Stack

Electron 40, React 19, TypeScript 5.7, Zustand 5, Tailwind CSS 4, Pi Coding Agent SDK, simple-git, node-pty, xterm.js, Vite + electron-vite.

## Status

Early development. Nightly builds available for macOS, Windows, and Linux.

## Links

[GitHub](https://github.com/espennilsen/pilot)
