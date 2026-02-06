# Smash Soda Registry

This repository is the **official public registry** for **Smash Soda**.

It contains:

* App update metadata
* Community plugins
* Community themes

The Smash Soda app reads files from this repository directly using raw GitHub URLs.
There is no backend service and no dynamic discovery.

---

## What this repository is for

* Publishing **update information** for the Smash Soda app
* Hosting **plugins** (HTML, CSS, JS, JSON)
* Hosting **themes** (CSS and JSON)
* Providing a stable, public source of truth for the Smash Soda ecosystem

---

## What this repository is *not* for

* Compiled binaries
* Secrets or credentials
* User-specific data
* Private or proprietary plugins

All content here is public and permanently visible.

---

## Repository structure

```
.
├── app.json
├── overlay/
│   ├── plugins/
│   │   ├── index.json
│   │   └── <plugin-id>/
│   │       ├── plugin.json
│   │       └── files…
│   └── themes/
│       ├── index.json
│       └── <theme-id>/
│           ├── theme.json
│           └── files…
```

* `app.json` contains update metadata for the Smash Soda app
* `overlay/plugins/` contains individual plugin directories
* `overlay/themes/` contains individual theme directories
* `index.json` files are maintained by the project maintainers

---

## Submitting a plugin or theme

Contributions are welcome.

### Important rules

* **Do not edit any `index.json` files**
* **Do not modify existing plugins or themes**
* **Only add new directories**
* All files must be plain text: HTML, CSS, JS, or JSON

Pull requests that do not follow these rules will be closed.

---

## Submitting a plugin

1. Fork this repository

2. Create a new directory:

   ```
   overlay/plugins/<your-plugin-id>/
   ```

3. Add your files, including a `plugin.json` manifest

4. Open a pull request

Plugin IDs must be:

* Lowercase
* Kebab-case
* Stable (do not rename later)

Example:

```
overlay/plugins/chat-overlay/
```

---

## Submitting a theme

1. Fork this repository

2. Create a new directory:

   ```
   overlay/themes/<your-theme-id>/
   ```

3. Add your files, including a `theme.json` manifest

4. Open a pull request

Example:

```
overlay/themes/dark-plus/
```

---

## Review process

All submissions are reviewed before being added to the registry.

Review may include:

* Structure validation
* Schema correctness
* Compatibility with current Smash Soda versions
* Checking for anything dangerous or malicious

Acceptance is at the discretion of the maintainers.

---

## Versioning and updates

* Contributors are responsible for versioning their own plugins and themes
* Breaking changes should increment the major version
* Existing versions must not be overwritten

---

## Security notice

Plugins and themes may contain executable JavaScript.

By submitting content to this repository, you acknowledge that:

* Your code may be executed by end users
* Smash Soda does not guarantee sandboxing
* Users install plugins at their own discretion

---

## License

Unless otherwise specified in a plugin or theme directory, all contributions are assumed to be under the repository’s license.