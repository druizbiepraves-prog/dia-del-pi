# Overview

This is a minimal Astro web application starter project. Astro is a modern static site generator that focuses on shipping less JavaScript to the browser while supporting multiple UI frameworks. The project is currently in its initial state with basic scaffolding and no custom features implemented yet.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

**Framework**: Astro 5.14.1
- **Decision**: Uses Astro as the primary framework for static site generation
- **Rationale**: Astro provides excellent performance through its "islands architecture" that ships minimal JavaScript by default
- **File-based routing**: Pages are automatically routed based on files in `src/pages/` directory
- **Component flexibility**: Supports multiple component frameworks (React, Vue, Svelte, Preact) though none are currently installed

**TypeScript Configuration**
- **Decision**: Strict TypeScript configuration extending Astro's recommended settings
- **Rationale**: Provides type safety and better developer experience with IDE support

**Build System**
- **Development**: Dev server configured for Replit environment on `0.0.0.0:5000`
- **Production**: Static files built to `./dist/` directory
- **Preview**: Built-in preview server for testing production builds locally
- **Deployment**: Configured for autoscale deployment with build and preview commands

## Content Management

**Markdown Support**
- **Decision**: Includes `@astrojs/markdown-remark` for markdown processing
- **Features**: 
  - GitHub Flavored Markdown (GFM) support via `remark-gfm`
  - Syntax highlighting via Shiki and Prism
  - Smart typography via `remark-smartypants`
  - YAML frontmatter support via `js-yaml`

## Project Structure

**Organization**:
- `/public/` - Static assets (images, fonts, etc.) served directly
- `/src/pages/` - Page components that map to routes
- `/src/components/` - Reusable UI components (convention, not enforced)
- `/.astro/` - Generated types and cache files (auto-managed)

# External Dependencies

## Core Framework
- **Astro** (v5.14.1): Main framework for static site generation and build tooling

## Development Tools
- **VSCode Integration**: Recommended extension (`astro-build.astro-vscode`) for enhanced development experience with syntax highlighting and IntelliSense

## Content Processing
- **Markdown Processors**: remark and rehype ecosystem for parsing and transforming markdown content
- **Syntax Highlighting**: Shiki and Prism for code block highlighting
- **TOML Parser**: smol-toml for configuration file parsing

**Note**: This is a minimal starter with no database, authentication, or external API integrations currently configured. These can be added as the application requirements evolve.